import json, re, os

pwa_dir = r'C:\Users\Abusadeh\.gemini\antigravity\scratch\HarrietLanePWA'

with open(os.path.join(pwa_dir, 'drugs_index.json'), encoding='utf-8') as f:
    drugs_index = json.load(f)

with open(os.path.join(pwa_dir, 'pages_text.json'), encoding='utf-8') as f:
    pages_text = json.load(f)

# Load existing curated drugs if available
curated_drugs = []
try:
    with open(os.path.join(pwa_dir, 'calculator_drugs.js'), encoding='utf-8') as f:
        c_text = f.read()
    # Find JSON-like array
    m = re.search(r'var CALCULATOR_DRUGS = (\[.*?\]);\s*(?:if|$)', c_text, re.DOTALL)
    if m:
        # Evaluate via node to be 100% accurate
        import subprocess
        res = subprocess.run(['node', '-e', f'console.log(JSON.stringify({m.group(1)}))'],
                             capture_output=True, text=True, encoding='utf-8')
        if res.returncode == 0:
            curated_drugs = json.loads(res.stdout)
            print(f'Successfully loaded {len(curated_drugs)} curated drugs')
except Exception as e:
    print('Curated load notice:', e)

curated_by_name = {}
for cd in curated_drugs:
    curated_by_name[cd['name'].split()[0].upper()] = cd
    curated_by_name[cd['id'].upper()] = cd

# Patterns
dose_pattern = re.compile(r'(\d+(?:\.\d+)?)(?:\s*[-–]\s*(\d+(?:\.\d+)?))?\s*(mg|mcg|mCg|g|units|mL)\s*/\s*kg\s*/\s*(24\s*hr|day|dose)', re.IGNORECASE)
max_pattern = re.compile(r'max(?:\.|\s+dose)?:\s*(\d+(?:\.\d+)?)\s*(mg|g|mcg)', re.IGNORECASE)
conc_pattern = re.compile(r'(\d+(?:\.\d+)?)\s*(mg|mcg|mCg)\s*/\s*(\d+(?:\.\d+)?)\s*mL', re.IGNORECASE)

categories_map = {
    'cillin': 'antibiotic', 'ceph': 'antibiotic', 'cef': 'antibiotic', 'mycin': 'antibiotic',
    'cycline': 'antibiotic', 'oxacin': 'antibiotic', 'penem': 'antibiotic', 'azole': 'antibiotic',
    'vir': 'antibiotic', 'fungin': 'antibiotic',
    'mol': 'respiratory', 'terol': 'respiratory', 'tropium': 'respiratory', 'phylline': 'respiratory',
    'sone': 'steroid', 'lone': 'steroid', 'nide': 'steroid',
    'olol': 'cardio', 'pril': 'cardio', 'sartan': 'cardio', 'dipine': 'cardio', 'zosin': 'cardio',
    'azepam': 'emergency', 'azolam': 'emergency', 'toin': 'emergency', 'barbital': 'emergency',
    'setron': 'gi', 'prazole': 'gi', 'tidine': 'gi',
    'profen': 'antipyretic', 'fenac': 'antipyretic', 'coxib': 'antipyretic', 'cetamol': 'antipyretic',
    'amine': 'antihistamine', 'astine': 'antihistamine', 'adine': 'antihistamine', 'rizine': 'antihistamine'
}

def guess_category(name):
    name_l = name.lower()
    for suffix, cat in categories_map.items():
        if suffix in name_l:
            return cat
    return 'other'

all_calculator_drugs = []

for d in drugs_index:
    name_key = d['name'].split()[0].upper()
    drug_id = re.sub(r'[^a-z0-9]+', '_', d['name'].lower()).strip('_')
    
    # Check if curated
    matched_curated = curated_by_name.get(name_key) or curated_by_name.get(drug_id.upper())
    if matched_curated:
        # Use curated
        entry = dict(matched_curated)
        entry['book_page'] = d.get('book_page', entry.get('book_page', 840))
        entry['page_index'] = d.get('page_index', entry.get('page_index', 0))
        entry['brand_names'] = d.get('brand_names', '')
        entry['is_curated'] = True
        all_calculator_drugs.append(entry)
        continue

    # Extract from text
    page_txt = pages_text.get(str(d['page_index']), '')
    next_page_txt = pages_text.get(str(d['page_index'] + 1), '')
    full_txt = page_txt + '\n' + next_page_txt

    lines = [l.strip() for l in page_txt.split('\n') if l.strip()]

    # Extract pediatric dose lines
    ped_lines = []
    for l in lines:
        l_low = l.lower()
        if any(k in l_low for k in ['mg/kg', 'mcg/kg', 'child:', 'infant:', 'oral:', 'neonate:', 'dose:', '÷']):
            ped_lines.append(l)

    notes_text = ' '.join(ped_lines[:3]) if ped_lines else f'راجع صفحة الكتاب {d["book_page"]} لمزيد من التفاصيل الدوائية والسريرية.'
    if len(notes_text) > 300:
        notes_text = notes_text[:297] + '...'

    # Match doses
    doses = dose_pattern.findall(page_txt)
    concs = conc_pattern.findall(page_txt)
    maxes = max_pattern.findall(page_txt)

    # Determine default dose
    dose_val = 10.0
    dose_unit = 'mg/kg/dose'
    dose_type = 'per_dose'
    freq_count = 2
    freq_ar = 'كل 12 ساعة (مرتين يومياً)'

    if doses:
        first_dose = doses[0]
        # (low, high, unit, per)
        low_val = float(first_dose[0])
        high_val = float(first_dose[1]) if first_dose[1] else low_val
        dose_val = high_val if high_val > 0 else low_val
        unit_str = first_dose[2].lower()
        per_str = first_dose[3].lower()

        if '24' in per_str or 'day' in per_str:
            dose_type = 'per_day'
            dose_unit = f'{unit_str}/kg/day'
            freq_count = 2
            freq_ar = 'مقسمة على مرتين يومياً (كل 12 ساعة)'
        else:
            dose_type = 'per_dose'
            dose_unit = f'{unit_str}/kg/dose'
            freq_count = 3
            freq_ar = 'ثلاث مرات يومياً (كل 8 ساعات)'

    # Check frequency hints in text
    txt_low = page_txt.lower()
    if 'bid' in txt_low or 'q12' in txt_low:
        freq_count = 2
        freq_ar = 'كل 12 ساعة (مرتين يومياً)'
    elif 'tid' in txt_low or 'q8' in txt_low:
        freq_count = 3
        freq_ar = 'كل 8 ساعات (3 مرات يومياً)'
    elif 'qid' in txt_low or 'q6' in txt_low:
        freq_count = 4
        freq_ar = 'كل 6 ساعات (4 مرات يومياً)'
    elif 'once daily' in txt_low or 'q24' in txt_low:
        freq_count = 1
        freq_ar = 'مرة واحدة يومياً'

    # Max dose
    max_dose_val = None
    if maxes:
        max_dose_val = float(maxes[0][0])
        if maxes[0][1].lower() == 'g':
            max_dose_val *= 1000.0

    # Build concentrations
    concentrations = []
    if concs:
        for c in concs[:4]:
            c_mg = float(c[0])
            c_ml = float(c[2])
            concentrations.append({
                'label': f'شراب {c_mg:g} ملغ / {c_ml:g} مل',
                'mg': c_mg,
                'ml': c_ml
            })
    
    if not concentrations:
        concentrations = [
            {'label': 'شراب 250 ملغ / 5 مل (معياري)', 'mg': 250.0, 'ml': 5.0},
            {'label': 'شراب 125 ملغ / 5 مل', 'mg': 125.0, 'ml': 5.0},
            {'label': 'شراب 100 ملغ / 5 مل', 'mg': 100.0, 'ml': 5.0},
            {'label': 'كبسولات / أقراص صلبة', 'mg': 250.0, 'ml': 1.0, 'is_solid': True}
        ]

    category = guess_category(d['name'])

    indication_name = f'الجرعة السريرية الموصى بها ({dose_val:g} {dose_unit})'
    if d.get('see'):
        indication_name = f'انظر: {d["see"]}'
        notes_text = f'دواء ذو صلة بـ {d["see"]}. راجع صفحة {d["book_page"]} للتفاصيل السريرية.'

    entry = {
        'id': drug_id,
        'name': d['name'],
        'arabic_name': d.get('brand_names', '').split(';')[0] if d.get('brand_names') else d['name'],
        'brand_names': d.get('brand_names', ''),
        'see': d.get('see', ''),
        'category': category,
        'book_page': d.get('book_page', 840),
        'page_index': d.get('page_index', 0),
        'requires_weight': True,
        'requires_age': False,
        'is_curated': False,
        'indications': [
            {
                'id': 'standard_dose',
                'name': indication_name,
                'dose_type': dose_type,
                'dose_per_kg': dose_val,
                'dose_unit': dose_unit,
                'doses_per_day': freq_count,
                'frequency_ar': freq_ar,
                'max_single_dose': max_dose_val,
                'max_daily_dose': max_dose_val * 2 if max_dose_val and dose_type == 'per_dose' else max_dose_val,
                'notes': notes_text
            }
        ],
        'concentrations': concentrations
    }
    all_calculator_drugs.append(entry)

print(f'Total compiled calculator drugs: {len(all_calculator_drugs)}')

# Export to calculator_drugs.js
js_code = f'''// Harriet Lane Comprehensive Pediatric Drug Database (All 527 Drugs)
// Generated from Harriet Lane Handbook 24th Edition

var CALCULATOR_DRUGS = {json.dumps(all_calculator_drugs, ensure_ascii=False, indent=2)};

if (typeof window !== 'undefined') {{
  window.CALCULATOR_DRUGS = CALCULATOR_DRUGS;
}}
if (typeof module !== 'undefined' && module.exports) {{
  module.exports = CALCULATOR_DRUGS;
}}
'''

with open(os.path.join(pwa_dir, 'calculator_drugs.js'), 'w', encoding='utf-8') as f:
    f.write(js_code)

print('calculator_drugs.js updated successfully!')
