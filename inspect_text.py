import json

pwa_dir = r'C:\Users\Abusadeh\.gemini\antigravity\scratch\HarrietLanePWA'
with open(pwa_dir + r'\drugs_index.json', encoding='utf-8') as f:
    drugs = json.load(f)

with open(pwa_dir + r'\pages_text.json', encoding='utf-8') as f:
    pages_text = json.load(f)

sample_names = ['CEFOTAXIME', 'AMIKACIN', 'ACETAMINOPHEN', 'AMPICILLIN', 'GENTAMICIN']
for d in drugs:
    for s in sample_names:
        if d['name'] == s:
            p_idx = str(d.get('page_index', 0))
            print(f"\n==================== {d['name']} (Book Page {d.get('book_page')}) ====================")
            txt = pages_text.get(p_idx, '')
            print(txt[:1400])
            break
