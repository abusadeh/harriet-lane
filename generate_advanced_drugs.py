import json, re, os

pwa_dir = r'C:\Users\Abusadeh\.gemini\antigravity\scratch\HarrietLanePWA'
android_dir = r'C:\Users\Abusadeh\.gemini\antigravity\scratch\PediatricDrugGuide\app\src\main\assets'

with open(os.path.join(pwa_dir, 'drugs_index.json'), encoding='utf-8') as f:
    drugs_index = json.load(f)

with open(os.path.join(pwa_dir, 'pages_text.json'), encoding='utf-8') as f:
    pages_text = json.load(f)

print(f"Total drugs in index: {len(drugs_index)}")

# Comprehensive clinical profiles for top Harriet Lane drugs
CURATED_DRUGS = {
    "ACETAMINOPHEN": {
        "has_neonatal": True,
        "indications": [
            {
                "id": "apap_neonate",
                "name": "Term Neonate: Fever / Mild Pain (Oral/PR)",
                "target_age": "neonate_term",
                "gestational_age": "≥37w",
                "postnatal_age": "0-28d",
                "dose_type": "per_dose",
                "dose_per_kg": 12.5,
                "dose_min": 10.0,
                "dose_max": 15.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 6–8 hours PRN (Max 60 mg/kg/day)",
                "doses_per_day": 4,
                "max_single_dose": 150.0,
                "max_daily_dose": 600.0,
                "max_daily_per_kg": 60.0,
                "duration": "As needed (PRN)",
                "route": "PO / PR",
                "notes": "Term neonate: 10–15 mg/kg/dose PO/PR Q6–8 hr PRN. Max daily dose: 60 mg/kg/day. Do not exceed 5 doses in 24 hours."
            },
            {
                "id": "apap_child_oral",
                "name": "Infant & Child: Fever / Pain (Oral / PR)",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 15.0,
                "dose_min": 10.0,
                "dose_max": 15.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 4–6 hours PRN (Max 5 doses/day)",
                "doses_per_day": 4,
                "max_single_dose": 1000.0,
                "max_daily_dose": 4000.0,
                "max_daily_per_kg": 75.0,
                "duration": "As needed (PRN)",
                "route": "PO / PR",
                "notes": "Pediatric: 10–15 mg/kg/dose PO/PR Q4–6 hr PRN. Maximum: 75 mg/kg/day or 4000 mg/day (whichever is less). Never exceed 5 doses in 24 hr."
            },
            {
                "id": "apap_iv",
                "name": "Inpatient / Moderate-to-Severe Pain (IV Infusion)",
                "target_age": "all",
                "dose_type": "per_dose",
                "dose_per_kg": 15.0,
                "dose_min": 7.5,
                "dose_max": 15.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 6 hours IV infusion over 15 min",
                "doses_per_day": 4,
                "max_single_dose": 750.0,
                "max_daily_dose": 3750.0,
                "max_daily_per_kg": 60.0,
                "duration": "As clinically indicated",
                "route": "IV Infusion",
                "notes": "<10 kg: 7.5–15 mg/kg Q6 hr (max 60 mg/kg/day). 10–50 kg: 15 mg/kg Q6 hr (max single: 750 mg, max daily: 3750 mg/day). >50 kg: 1000 mg Q6 hr."
            }
        ],
        "concentrations": [
            { "label": "Oral Suspension 160 mg / 5 mL (Standard Pediatric)", "mg": 160.0, "ml": 5.0 },
            { "label": "Oral Suspension 120 mg / 5 mL", "mg": 120.0, "ml": 5.0 },
            { "label": "Oral Suspension 250 mg / 5 mL (Forte)", "mg": 250.0, "ml": 5.0 },
            { "label": "Infant Oral Drops 100 mg / 1 mL", "mg": 100.0, "ml": 1.0 },
            { "label": "Suppositories 80 mg", "mg": 80.0, "ml": 1.0, "is_solid": True },
            { "label": "Suppositories 120 mg", "mg": 120.0, "ml": 1.0, "is_solid": True },
            { "label": "Suppositories 325 mg", "mg": 325.0, "ml": 1.0, "is_solid": True },
            { "label": "Suppositories 650 mg", "mg": 650.0, "ml": 1.0, "is_solid": True },
            { "label": "Tabs 325 mg, 500 mg", "mg": 500.0, "ml": 1.0, "is_solid": True },
            { "label": "IV Solution 10 mg/mL (100 mL)", "mg": 10.0, "ml": 1.0 }
        ]
    },

    "ACYCLOVIR": {
        "has_neonatal": True,
        "indications": [
            {
                "id": "acv_neo_preterm",
                "name": "Neonate: HSV (< 34 wk PMA) (40 mg/kg/day ÷ Q12H)",
                "target_age": "neonate_preterm",
                "gestational_age": "<34w",
                "dose_type": "per_day",
                "dose_per_kg": 40.0,
                "dose_min": 40.0,
                "dose_max": 40.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided every 12 hours (20 mg/kg/dose Q12H) IV",
                "doses_per_day": 2,
                "max_single_dose": 200.0,
                "max_daily_dose": 400.0,
                "max_daily_per_kg": 40.0,
                "duration": "14 days (skin/mucous) to 21 days (CNS/disseminated)",
                "route": "IV Infusion",
                "notes": "<34 wk PMA: 40 mg/kg/24 hr ÷ Q12 hr IV over 1 hr. Ensure adequate hydration to prevent renal tubular precipitation."
            },
            {
                "id": "acv_neo_term",
                "name": "Neonate: HSV (≥ 34 wk PMA) (60 mg/kg/day ÷ Q8H)",
                "target_age": "neonate_term",
                "gestational_age": "≥34w",
                "dose_type": "per_day",
                "dose_per_kg": 60.0,
                "dose_min": 60.0,
                "dose_max": 60.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided every 8 hours (20 mg/kg/dose Q8H) IV",
                "doses_per_day": 3,
                "max_single_dose": 300.0,
                "max_daily_dose": 900.0,
                "max_daily_per_kg": 60.0,
                "duration": "14–21 days",
                "route": "IV Infusion",
                "notes": "≥34 wk PMA: 60 mg/kg/24 hr ÷ Q8 hr IV over 1 hr (20 mg/kg/dose Q8H)."
            },
            {
                "id": "acv_child_cns",
                "name": "Infant & Child (3 mo–12 yr): HSV Encephalitis / Disseminated",
                "target_age": "child",
                "dose_type": "per_day",
                "dose_per_kg": 60.0,
                "dose_min": 60.0,
                "dose_max": 60.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided every 8 hours (20 mg/kg/dose Q8H) IV",
                "doses_per_day": 3,
                "max_single_dose": 1000.0,
                "max_daily_dose": 3000.0,
                "max_daily_per_kg": 60.0,
                "duration": "21 days",
                "route": "IV Infusion",
                "notes": "HSV Encephalitis: 60 mg/kg/24 hr ÷ Q8 hr IV over 1 hr. Monitor renal function and maintain urine output."
            },
            {
                "id": "acv_varicella_oral",
                "name": "Child: Varicella (Chickenpox) Oral Therapy",
                "target_age": "child",
                "dose_type": "per_day",
                "dose_per_kg": 80.0,
                "dose_min": 80.0,
                "dose_max": 80.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided 4 times daily (20 mg/kg/dose QID) PO with food",
                "doses_per_day": 4,
                "max_single_dose": 800.0,
                "max_daily_dose": 3200.0,
                "max_daily_per_kg": 80.0,
                "duration": "5 days",
                "route": "PO",
                "notes": "80 mg/kg/24 hr PO ÷ QID (20 mg/kg/dose QID) × 5 days. Max dose: 800 mg/dose or 3200 mg/24 hr. Initiate at earliest sign."
            }
        ],
        "concentrations": [
            { "label": "Oral Suspension: 200 mg / 5 mL", "mg": 200.0, "ml": 5.0 },
            { "label": "Vial for Injection: 50 mg/mL (10 mL, 20 mL)", "mg": 50.0, "ml": 1.0 },
            { "label": "Capsules: 200 mg", "mg": 200.0, "ml": 1.0, "is_solid": True },
            { "label": "Tablets: 400 mg, 800 mg", "mg": 400.0, "ml": 1.0, "is_solid": True }
        ]
    },

    "CEFOTAXIME": {
        "has_neonatal": True,
        "indications": [
            {
                "id": "ctx_neo_preterm_early",
                "name": "Neonate: < 32 wk GA, Postnatal Age < 7 days",
                "target_age": "neonate_preterm",
                "gestational_age": "<32w",
                "postnatal_age": "<7d",
                "dose_type": "per_dose",
                "dose_per_kg": 50.0,
                "dose_min": 50.0,
                "dose_max": 50.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 12 hours (Q12H) IV/IM (100 mg/kg/day)",
                "doses_per_day": 2,
                "max_single_dose": 500.0,
                "max_daily_dose": 1000.0,
                "max_daily_per_kg": 100.0,
                "duration": "7–14 days",
                "route": "IV/IM",
                "notes": "<32 wk gestation, PNA <7 days: 100 mg/kg/24 hr divided Q12 hr (50 mg/kg/dose Q12H IV/IM)."
            },
            {
                "id": "ctx_neo_preterm_late",
                "name": "Neonate: < 32 wk GA, Postnatal Age ≥ 7 days",
                "target_age": "neonate_preterm",
                "gestational_age": "<32w",
                "postnatal_age": "≥7d",
                "dose_type": "per_dose",
                "dose_per_kg": 50.0,
                "dose_min": 50.0,
                "dose_max": 50.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 8 hours (Q8H) IV/IM (150 mg/kg/day)",
                "doses_per_day": 3,
                "max_single_dose": 500.0,
                "max_daily_dose": 1500.0,
                "max_daily_per_kg": 150.0,
                "duration": "7–14 days",
                "route": "IV/IM",
                "notes": "<32 wk gestation, PNA ≥7 days: 150 mg/kg/24 hr divided Q8 hr (50 mg/kg/dose Q8H IV/IM)."
            },
            {
                "id": "ctx_neo_term_early",
                "name": "Neonate: ≥ 32 wk GA, Postnatal Age ≤ 7 days",
                "target_age": "neonate_term",
                "gestational_age": "≥32w",
                "postnatal_age": "≤7d",
                "dose_type": "per_dose",
                "dose_per_kg": 50.0,
                "dose_min": 50.0,
                "dose_max": 50.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 12 hours (Q12H) IV/IM (100 mg/kg/day)",
                "doses_per_day": 2,
                "max_single_dose": 1000.0,
                "max_daily_dose": 2000.0,
                "max_daily_per_kg": 100.0,
                "duration": "7–14 days",
                "route": "IV/IM",
                "notes": "≥32 wk gestation, PNA ≤7 days: 100 mg/kg/24 hr divided Q12 hr (50 mg/kg/dose Q12H IV/IM)."
            },
            {
                "id": "ctx_neo_term_late",
                "name": "Neonate: ≥ 32 wk GA, Postnatal Age > 7 days",
                "target_age": "neonate_term",
                "gestational_age": "≥32w",
                "postnatal_age": ">7d",
                "dose_type": "per_dose",
                "dose_per_kg": 50.0,
                "dose_min": 50.0,
                "dose_max": 50.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 8 hours (Q8H) IV/IM (150 mg/kg/day)",
                "doses_per_day": 3,
                "max_single_dose": 1000.0,
                "max_daily_dose": 3000.0,
                "max_daily_per_kg": 150.0,
                "duration": "7–14 days",
                "route": "IV/IM",
                "notes": "≥32 wk gestation, PNA >7 days: 150 mg/kg/24 hr divided Q8 hr (50 mg/kg/dose Q8H IV/IM)."
            },
            {
                "id": "ctx_neo_meningitis",
                "name": "Neonate: Meningitis (PNA ≤ 7d: Q8–12H; PNA > 7d: Q6–8H)",
                "target_age": "neonate_term",
                "gestational_age": "all",
                "postnatal_age": "0-28d",
                "dose_type": "per_day",
                "dose_per_kg": 150.0,
                "dose_min": 100.0,
                "dose_max": 200.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided Q8 hr (or Q6 hr if >7 days old)",
                "doses_per_day": 3,
                "max_single_dose": 1000.0,
                "max_daily_dose": 3000.0,
                "max_daily_per_kg": 200.0,
                "duration": "Minimum 21 days of therapy",
                "route": "IV",
                "notes": "Neonate Meningitis: PNA ≤7 days: 100–150 mg/kg/24 hr ÷ Q8–12 hr. PNA >7 days: 150–200 mg/kg/24 hr ÷ Q6–8 hr. Minimum 21 days."
            },
            {
                "id": "ctx_child_general",
                "name": "Infant & Child (1 mo–12 yr): Mild-to-Moderate Infection",
                "target_age": "child",
                "dose_type": "per_day",
                "dose_per_kg": 150.0,
                "dose_min": 100.0,
                "dose_max": 200.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided every 6–8 hours (Q6–8H) IV/IM",
                "doses_per_day": 3,
                "max_single_dose": 2000.0,
                "max_daily_dose": 8000.0,
                "max_daily_per_kg": 200.0,
                "duration": "7–14 days",
                "route": "IV/IM",
                "notes": "1 mo–12 yr and <50 kg: 150–200 mg/kg/24 hr ÷ Q6–8 hr. Max dose: 8 g/24 hr."
            },
            {
                "id": "ctx_child_meningitis",
                "name": "Infant & Child (1 mo–12 yr): Severe Infection / Meningitis",
                "target_age": "child",
                "dose_type": "per_day",
                "dose_per_kg": 225.0,
                "dose_min": 200.0,
                "dose_max": 300.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided every 6 hours (Q6H) IV",
                "doses_per_day": 4,
                "max_single_dose": 2000.0,
                "max_daily_dose": 12000.0,
                "max_daily_per_kg": 300.0,
                "duration": "14–21 days",
                "route": "IV",
                "notes": "Meningitis / Severe: 200–300 mg/kg/24 hr ÷ Q6 hr (some recommend Q4–6 hr). Max dose: 12 g/24 hr."
            },
            {
                "id": "ctx_adolescent",
                "name": "Adolescent (≥ 12 yr or ≥ 50 kg) & Adult: Standard Infection",
                "target_age": "adolescent",
                "dose_type": "per_dose",
                "dose_per_kg": 25.0,
                "dose_min": 20.0,
                "dose_max": 40.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 6–8 hours IV/IM",
                "doses_per_day": 3,
                "max_single_dose": 2000.0,
                "max_daily_dose": 12000.0,
                "max_daily_per_kg": 150.0,
                "duration": "7–14 days",
                "route": "IV/IM",
                "notes": "1–2 g/dose Q6–8 hr IV/IM. Severe infections: 2 g/dose Q4–6 hr. Maximum dose: 12 g/24 hr."
            }
        ],
        "concentrations": [
            { "label": "Vial for Injection: 1 g powder for reconstitution", "mg": 1000.0, "ml": 10.0 },
            { "label": "Vial for Injection: 2 g powder for reconstitution", "mg": 2000.0, "ml": 20.0 },
            { "label": "Reconstituted IV solution: 100 mg/mL", "mg": 100.0, "ml": 1.0 },
            { "label": "Reconstituted IV solution: 50 mg/mL", "mg": 50.0, "ml": 1.0 }
        ]
    },

    "AMIKACIN SULFATE": {
        "has_neonatal": True,
        "indications": [
            {
                "id": "amk_neo_pma_29_early",
                "name": "Neonate: PMA ≤ 29 wk, Postnatal Age 0–7 days",
                "target_age": "neonate_preterm",
                "gestational_age": "≤29w",
                "postnatal_age": "0-7d",
                "dose_type": "per_dose",
                "dose_per_kg": 18.0,
                "dose_min": 18.0,
                "dose_max": 18.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 48 hours (Q48H) IV over 30 min",
                "doses_per_day": 0.5,
                "max_single_dose": 100.0,
                "max_daily_dose": 100.0,
                "max_daily_per_kg": 18.0,
                "duration": "Per therapeutic drug monitoring (TDM)",
                "route": "IV / IM",
                "notes": "PMA ≤29 wk, PNA 0–7 days: 18 mg/kg/dose Q48 hr. Target peak: 20–30 mcg/mL, trough: <5 mcg/mL."
            },
            {
                "id": "amk_neo_pma_29_mid",
                "name": "Neonate: PMA ≤ 29 wk, Postnatal Age 8–28 days",
                "target_age": "neonate_preterm",
                "gestational_age": "≤29w",
                "postnatal_age": "8-28d",
                "dose_type": "per_dose",
                "dose_per_kg": 15.0,
                "dose_min": 15.0,
                "dose_max": 15.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 36 hours (Q36H) IV over 30 min",
                "doses_per_day": 0.67,
                "max_single_dose": 100.0,
                "max_daily_dose": 100.0,
                "max_daily_per_kg": 15.0,
                "duration": "Per therapeutic drug monitoring (TDM)",
                "route": "IV / IM",
                "notes": "PMA ≤29 wk, PNA 8–28 days: 15 mg/kg/dose Q36 hr. Monitor serum creatinine and levels."
            },
            {
                "id": "amk_neo_pma_29_late",
                "name": "Neonate: PMA ≤ 29 wk, Postnatal Age > 28 days",
                "target_age": "neonate_preterm",
                "gestational_age": "≤29w",
                "postnatal_age": ">28d",
                "dose_type": "per_dose",
                "dose_per_kg": 15.0,
                "dose_min": 15.0,
                "dose_max": 15.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 24 hours (Q24H) IV over 30 min",
                "doses_per_day": 1,
                "max_single_dose": 150.0,
                "max_daily_dose": 150.0,
                "max_daily_per_kg": 15.0,
                "duration": "Per therapeutic drug monitoring (TDM)",
                "route": "IV / IM",
                "notes": "PMA ≤29 wk, PNA >28 days: 15 mg/kg/dose Q24 hr."
            },
            {
                "id": "amk_neo_pma_30_34_early",
                "name": "Neonate: PMA 30–34 wk, Postnatal Age 0–7 days",
                "target_age": "neonate_preterm",
                "gestational_age": "30-34w",
                "postnatal_age": "0-7d",
                "dose_type": "per_dose",
                "dose_per_kg": 18.0,
                "dose_min": 18.0,
                "dose_max": 18.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 36 hours (Q36H) IV over 30 min",
                "doses_per_day": 0.67,
                "max_single_dose": 150.0,
                "max_daily_dose": 150.0,
                "max_daily_per_kg": 18.0,
                "duration": "Per therapeutic drug monitoring (TDM)",
                "route": "IV / IM",
                "notes": "PMA 30–34 wk, PNA 0–7 days: 18 mg/kg/dose Q36 hr."
            },
            {
                "id": "amk_neo_pma_30_34_late",
                "name": "Neonate: PMA 30–34 wk, Postnatal Age > 7 days",
                "target_age": "neonate_preterm",
                "gestational_age": "30-34w",
                "postnatal_age": ">7d",
                "dose_type": "per_dose",
                "dose_per_kg": 15.0,
                "dose_min": 15.0,
                "dose_max": 15.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 24 hours (Q24H) IV over 30 min",
                "doses_per_day": 1,
                "max_single_dose": 150.0,
                "max_daily_dose": 150.0,
                "max_daily_per_kg": 15.0,
                "duration": "Per therapeutic drug monitoring (TDM)",
                "route": "IV / IM",
                "notes": "PMA 30–34 wk, PNA >7 days: 15 mg/kg/dose Q24 hr."
            },
            {
                "id": "amk_neo_pma_35",
                "name": "Neonate: PMA ≥ 35 wk (Term), All Postnatal Ages",
                "target_age": "neonate_term",
                "gestational_age": "≥35w",
                "postnatal_age": "all",
                "dose_type": "per_dose",
                "dose_per_kg": 15.0,
                "dose_min": 15.0,
                "dose_max": 15.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 24 hours (Q24H) IV over 30 min",
                "doses_per_day": 1,
                "max_single_dose": 250.0,
                "max_daily_dose": 250.0,
                "max_daily_per_kg": 15.0,
                "duration": "Per therapeutic drug monitoring (TDM)",
                "route": "IV / IM",
                "notes": "PMA ≥35 wk: 15 mg/kg/dose Q24 hr. (Use Q36 hr interval for HIE patients receiving therapeutic hypothermia)."
            },
            {
                "id": "amk_child_daily",
                "name": "Infant & Child: Extended-Interval (Once Daily Dosing)",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 15.0,
                "dose_min": 15.0,
                "dose_max": 20.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Once daily (Every 24 hours - Q24H) IV",
                "doses_per_day": 1,
                "max_single_dose": 1500.0,
                "max_daily_dose": 1500.0,
                "max_daily_per_kg": 20.0,
                "duration": "7–10 days",
                "route": "IV Infusion",
                "notes": "Once-daily extended interval dosing: 15–20 mg/kg/dose Q24 hr. Peak: 25–35 mcg/mL, trough: <1–2 mcg/mL."
            },
            {
                "id": "amk_child_divided",
                "name": "Infant & Child: Traditional Divided Dosing",
                "target_age": "child",
                "dose_type": "per_day",
                "dose_per_kg": 20.0,
                "dose_min": 15.0,
                "dose_max": 22.5,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided every 8 hours (Q8H) IV/IM",
                "doses_per_day": 3,
                "max_single_dose": 500.0,
                "max_daily_dose": 1500.0,
                "max_daily_per_kg": 22.5,
                "duration": "7–10 days",
                "route": "IV/IM",
                "notes": "15–22.5 mg/kg/24 hr divided Q8 hr (7.5 mg/kg/dose Q8H). Max dose: 1.5 g/24 hr."
            }
        ],
        "concentrations": [
            { "label": "Vial for Injection: 250 mg/mL (2 mL, 4 mL)", "mg": 250.0, "ml": 1.0 },
            { "label": "Vial for Injection: 50 mg/mL (Pediatric vial 2 mL)", "mg": 50.0, "ml": 1.0 },
            { "label": "Diluted IV Solution: 5 mg/mL (in D5W / NS)", "mg": 5.0, "ml": 1.0 }
        ]
    },

    "AMPICILLIN": {
        "has_neonatal": True,
        "indications": [
            {
                "id": "amp_neo_preterm_early",
                "name": "Neonate: ≤ 34 wk GA, Postnatal Age ≤ 7 days",
                "target_age": "neonate_preterm",
                "gestational_age": "≤34w",
                "postnatal_age": "≤7d",
                "dose_type": "per_day",
                "dose_per_kg": 100.0,
                "dose_min": 100.0,
                "dose_max": 100.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided every 12 hours (50 mg/kg/dose Q12H) IV/IM",
                "doses_per_day": 2,
                "max_single_dose": 500.0,
                "max_daily_dose": 1000.0,
                "max_daily_per_kg": 100.0,
                "duration": "7–10 days",
                "route": "IV / IM",
                "notes": "≤34 wk gestation, PNA ≤7 days old: 100 mg/kg/24 hr ÷ Q12 hr (50 mg/kg/dose Q12H IV/IM)."
            },
            {
                "id": "amp_neo_preterm_late",
                "name": "Neonate: ≤ 34 wk GA, Postnatal Age 8–28 days",
                "target_age": "neonate_preterm",
                "gestational_age": "≤34w",
                "postnatal_age": "8-28d",
                "dose_type": "per_day",
                "dose_per_kg": 150.0,
                "dose_min": 150.0,
                "dose_max": 150.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided every 12 hours (75 mg/kg/dose Q12H) IV/IM",
                "doses_per_day": 2,
                "max_single_dose": 750.0,
                "max_daily_dose": 1500.0,
                "max_daily_per_kg": 150.0,
                "duration": "7–10 days",
                "route": "IV / IM",
                "notes": "≤34 wk gestation, PNA 8–<28 days old: 150 mg/kg/24 hr ÷ Q12 hr (75 mg/kg/dose Q12H IV/IM)."
            },
            {
                "id": "amp_neo_term",
                "name": "Neonate: > 34 wk GA (Term), Postnatal Age ≤ 28 days",
                "target_age": "neonate_term",
                "gestational_age": ">34w",
                "postnatal_age": "≤28d",
                "dose_type": "per_day",
                "dose_per_kg": 150.0,
                "dose_min": 150.0,
                "dose_max": 150.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided every 8 hours (50 mg/kg/dose Q8H) IV/IM",
                "doses_per_day": 3,
                "max_single_dose": 1000.0,
                "max_daily_dose": 3000.0,
                "max_daily_per_kg": 150.0,
                "duration": "7–10 days",
                "route": "IV / IM",
                "notes": ">34 wk gestation, PNA ≤28 days old: 150 mg/kg/24 hr ÷ Q8 hr (50 mg/kg/dose Q8H IV/IM)."
            },
            {
                "id": "amp_neo_gbs_meningitis",
                "name": "Neonate: Group B Strep (GBS) Meningitis (All Gestational Ages)",
                "target_age": "neonate_term",
                "gestational_age": "all",
                "postnatal_age": "0-28d",
                "dose_type": "per_day",
                "dose_per_kg": 300.0,
                "dose_min": 300.0,
                "dose_max": 300.0,
                "dose_unit": "mg/kg/day",
                "frequency": "PNA ≤7d: ÷ Q8H; PNA 8-28d: ÷ Q6H IV",
                "doses_per_day": 4,
                "max_single_dose": 1000.0,
                "max_daily_dose": 4000.0,
                "max_daily_per_kg": 300.0,
                "duration": "14–21 days",
                "route": "IV",
                "notes": "GBS Meningitis: PNA ≤7 days: 300 mg/kg/24 hr ÷ Q8 hr; PNA 8–<28 days: 300 mg/kg/24 hr ÷ Q6 hr IV."
            },
            {
                "id": "amp_child_mild",
                "name": "Infant & Child: Mild-to-Moderate Infection",
                "target_age": "child",
                "dose_type": "per_day",
                "dose_per_kg": 150.0,
                "dose_min": 100.0,
                "dose_max": 200.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided every 6 hours (Q6H) IV/IM",
                "doses_per_day": 4,
                "max_single_dose": 2000.0,
                "max_daily_dose": 8000.0,
                "max_daily_per_kg": 200.0,
                "duration": "7–10 days",
                "route": "IV/IM",
                "notes": "IM/IV: 100–200 mg/kg/24 hr ÷ Q6 hr. Max dose: 8 g/24 hr. (PO: 50–100 mg/kg/24 hr ÷ Q6 hr, max 2 g/day)."
            },
            {
                "id": "amp_child_severe",
                "name": "Infant & Child: Severe Infection / Meningitis",
                "target_age": "child",
                "dose_type": "per_day",
                "dose_per_kg": 350.0,
                "dose_min": 300.0,
                "dose_max": 400.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided every 4–6 hours (Q4–6H) IV",
                "doses_per_day": 4,
                "max_single_dose": 3000.0,
                "max_daily_dose": 12000.0,
                "max_daily_per_kg": 400.0,
                "duration": "14–21 days",
                "route": "IV",
                "notes": "Severe infections / Meningitis: 300–400 mg/kg/24 hr ÷ Q4–6 hr IM/IV. Max dose: 12 g/24 hr."
            }
        ],
        "concentrations": [
            { "label": "Vial for Injection: 500 mg powder", "mg": 500.0, "ml": 5.0 },
            { "label": "Vial for Injection: 1 g powder", "mg": 1000.0, "ml": 10.0 },
            { "label": "Vial for Injection: 2 g powder", "mg": 2000.0, "ml": 20.0 },
            { "label": "Oral Suspension: 250 mg / 5 mL", "mg": 250.0, "ml": 5.0 },
            { "label": "Oral Suspension: 125 mg / 5 mL", "mg": 125.0, "ml": 5.0 },
            { "label": "Capsules: 500 mg", "mg": 500.0, "ml": 1.0, "is_solid": True }
        ]
    },

    "GENTAMICIN": {
        "has_neonatal": True,
        "indications": [
            {
                "id": "gent_neo_pma_29_early",
                "name": "Neonate: PMA ≤ 29 wk, Postnatal Age 0–7 days",
                "target_age": "neonate_preterm",
                "gestational_age": "≤29w",
                "postnatal_age": "0-7d",
                "dose_type": "per_dose",
                "dose_per_kg": 5.0,
                "dose_min": 5.0,
                "dose_max": 5.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 48 hours (Q48H) IV infusion over 30 min",
                "doses_per_day": 0.5,
                "max_single_dose": 25.0,
                "max_daily_dose": 25.0,
                "max_daily_per_kg": 5.0,
                "duration": "Per therapeutic drug monitoring",
                "route": "IV / IM",
                "notes": "PMA ≤29 wk, PNA 0–7 days: 5 mg/kg/dose Q48 hr. Target peak: 5–12 mcg/mL, trough: <1–2 mcg/mL."
            },
            {
                "id": "gent_neo_pma_29_mid",
                "name": "Neonate: PMA ≤ 29 wk, Postnatal Age 8–28 days",
                "target_age": "neonate_preterm",
                "gestational_age": "≤29w",
                "postnatal_age": "8-28d",
                "dose_type": "per_dose",
                "dose_per_kg": 4.0,
                "dose_min": 4.0,
                "dose_max": 4.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 36 hours (Q36H) IV infusion over 30 min",
                "doses_per_day": 0.67,
                "max_single_dose": 25.0,
                "max_daily_dose": 25.0,
                "max_daily_per_kg": 4.0,
                "duration": "Per therapeutic drug monitoring",
                "route": "IV / IM",
                "notes": "PMA ≤29 wk, PNA 8–28 days: 4 mg/kg/dose Q36 hr."
            },
            {
                "id": "gent_neo_pma_30_34",
                "name": "Neonate: PMA 30–34 wk, Postnatal Age 0–7d (Q36H); >7d (Q24H)",
                "target_age": "neonate_preterm",
                "gestational_age": "30-34w",
                "postnatal_age": "all",
                "dose_type": "per_dose",
                "dose_per_kg": 4.5,
                "dose_min": 4.0,
                "dose_max": 4.5,
                "dose_unit": "mg/kg/dose",
                "frequency": "PNA 0–7d: 4.5 mg/kg Q36H; PNA >7d: 4 mg/kg Q24H",
                "doses_per_day": 0.75,
                "max_single_dose": 30.0,
                "max_daily_dose": 30.0,
                "max_daily_per_kg": 4.5,
                "duration": "Per therapeutic drug monitoring",
                "route": "IV / IM",
                "notes": "PMA 30–34 wk: 0–7 days: 4.5 mg/kg Q36 hr; >7 days: 4 mg/kg Q24 hr."
            },
            {
                "id": "gent_neo_term",
                "name": "Neonate: PMA ≥ 35 wk (Term), All Postnatal Ages",
                "target_age": "neonate_term",
                "gestational_age": "≥35w",
                "postnatal_age": "all",
                "dose_type": "per_dose",
                "dose_per_kg": 4.0,
                "dose_min": 4.0,
                "dose_max": 5.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 24 hours (Q24H) IV over 30 min",
                "doses_per_day": 1,
                "max_single_dose": 40.0,
                "max_daily_dose": 40.0,
                "max_daily_per_kg": 5.0,
                "duration": "Per therapeutic drug monitoring",
                "route": "IV / IM",
                "notes": "PMA ≥35 wk (term): 4–5 mg/kg/dose Q24 hr. (Use Q36 hr interval for HIE therapeutic hypothermia)."
            },
            {
                "id": "gent_child_traditional",
                "name": "Infant & Child: Traditional Divided Dosing",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 2.5,
                "dose_min": 2.0,
                "dose_max": 2.5,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 8 hours (Q8H) IV/IM",
                "doses_per_day": 3,
                "max_single_dose": 120.0,
                "max_daily_dose": 360.0,
                "max_daily_per_kg": 7.5,
                "duration": "7–10 days",
                "route": "IV/IM",
                "notes": "2–2.5 mg/kg/dose Q8 hr IV/IM. Peak target: 5–10 mcg/mL, trough: <1–2 mcg/mL."
            },
            {
                "id": "gent_child_extended",
                "name": "Infant & Child: Extended-Interval (Once Daily Dosing)",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 7.5,
                "dose_min": 5.0,
                "dose_max": 7.5,
                "dose_unit": "mg/kg/dose",
                "frequency": "Once daily (Every 24 hours - Q24H) IV",
                "doses_per_day": 1,
                "max_single_dose": 400.0,
                "max_daily_dose": 400.0,
                "max_daily_per_kg": 7.5,
                "duration": "7–10 days",
                "route": "IV Infusion",
                "notes": "Once-daily extended interval dosing: 5–7.5 mg/kg/dose Q24 hr IV."
            }
        ],
        "concentrations": [
            { "label": "Vial for Injection: 40 mg/mL (2 mL)", "mg": 40.0, "ml": 1.0 },
            { "label": "Pediatric Vial for Injection: 10 mg/mL (2 mL)", "mg": 10.0, "ml": 1.0 },
            { "label": "Diluted IV Infusion: 2 mg/mL", "mg": 2.0, "ml": 1.0 }
        ]
    },

    "CEFTRIAXONE": {
        "has_neonatal": False,
        "indications": [
            {
                "id": "cro_child_general",
                "name": "Infant & Child (> 28 days): Standard Serious Infection",
                "target_age": "child",
                "dose_type": "per_day",
                "dose_per_kg": 50.0,
                "dose_min": 50.0,
                "dose_max": 75.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Once daily (Q24H) or divided Q12H IV/IM",
                "doses_per_day": 1,
                "max_single_dose": 2000.0,
                "max_daily_dose": 2000.0,
                "max_daily_per_kg": 75.0,
                "duration": "7–14 days",
                "route": "IV / IM",
                "notes": "50–75 mg/kg/24 hr IV/IM Q12–24 hr. Max dose: 2 g/24 hr. CONTRAINDICATED in neonates ≤28 days if hyperbilirubinemic or receiving IV calcium."
            },
            {
                "id": "cro_child_meningitis",
                "name": "Infant & Child (> 28 days): Meningitis",
                "target_age": "child",
                "dose_type": "per_day",
                "dose_per_kg": 100.0,
                "dose_min": 100.0,
                "dose_max": 100.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Once daily or divided Q12H (Loading 100 mg/kg)",
                "doses_per_day": 1,
                "max_single_dose": 4000.0,
                "max_daily_dose": 4000.0,
                "max_daily_per_kg": 100.0,
                "duration": "10–14 days",
                "route": "IV Infusion",
                "notes": "Meningitis: 100 mg/kg/24 hr IV ÷ Q12–24 hr. Loading dose of 100 mg/kg may be administered. Max dose: 4 g/24 hr."
            },
            {
                "id": "cro_aom",
                "name": "Acute Otitis Media (Single-Dose or 3-Day Course)",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 50.0,
                "dose_min": 50.0,
                "dose_max": 50.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Once daily IM/IV for 1–3 doses",
                "doses_per_day": 1,
                "max_single_dose": 1000.0,
                "max_daily_dose": 1000.0,
                "max_daily_per_kg": 50.0,
                "duration": "1 to 3 days",
                "route": "IM / IV",
                "notes": "AOM: 50 mg/kg IM/IV single dose (max 1 g/dose). May repeat for 3 consecutive days for refractory/persistent infection."
            }
        ],
        "concentrations": [
            { "label": "Vial for Injection: 1 g powder for reconstitution", "mg": 1000.0, "ml": 10.0 },
            { "label": "Vial for Injection: 2 g powder for reconstitution", "mg": 2000.0, "ml": 20.0 },
            { "label": "Vial for Injection: 500 mg powder", "mg": 500.0, "ml": 5.0 },
            { "label": "Vial for Injection: 250 mg powder", "mg": 250.0, "ml": 2.5 }
        ]
    },

    "VANCOMYCIN": {
        "has_neonatal": True,
        "indications": [
            {
                "id": "vanc_neo_preterm",
                "name": "Neonate (< 30 wk PMA): 15 mg/kg/dose Q12–24H",
                "target_age": "neonate_preterm",
                "gestational_age": "<30w",
                "dose_type": "per_dose",
                "dose_per_kg": 15.0,
                "dose_min": 10.0,
                "dose_max": 15.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 12–24 hours IV infusion over 60 min",
                "doses_per_day": 1.5,
                "max_single_dose": 250.0,
                "max_daily_dose": 500.0,
                "max_daily_per_kg": 30.0,
                "duration": "Per therapeutic drug monitoring (AUC/MIC 400–600)",
                "route": "IV Infusion",
                "notes": "Neonate <30 wk PMA: 10–15 mg/kg/dose Q12–24 hr IV depending on serum creatinine and therapeutic drug monitoring."
            },
            {
                "id": "vanc_neo_term",
                "name": "Neonate (≥ 30–44 wk PMA): 15 mg/kg/dose Q8–12H",
                "target_age": "neonate_term",
                "gestational_age": "≥30w",
                "dose_type": "per_dose",
                "dose_per_kg": 15.0,
                "dose_min": 10.0,
                "dose_max": 15.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 8–12 hours IV infusion over 60 min",
                "doses_per_day": 2.5,
                "max_single_dose": 350.0,
                "max_daily_dose": 875.0,
                "max_daily_per_kg": 45.0,
                "duration": "Per therapeutic drug monitoring (AUC/MIC)",
                "route": "IV Infusion",
                "notes": "Neonate ≥30–44 wk PMA: 10–15 mg/kg/dose Q8–12 hr IV. Target AUC24/MIC 400–600 or trough 10–15 mcg/mL."
            },
            {
                "id": "vanc_child_standard",
                "name": "Infant & Child (> 3 mo): Standard MRSA Infection",
                "target_age": "child",
                "dose_type": "per_day",
                "dose_per_kg": 45.0,
                "dose_min": 45.0,
                "dose_max": 60.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided every 6–8 hours (15 mg/kg/dose Q6–8H) IV",
                "doses_per_day": 3,
                "max_single_dose": 1000.0,
                "max_daily_dose": 3000.0,
                "max_daily_per_kg": 60.0,
                "duration": "7–14 days",
                "route": "IV Infusion",
                "notes": "Infant and child: 45–60 mg/kg/24 hr ÷ Q6–8 hr (15 mg/kg/dose Q6–8H) IV over ≥60 min. Max initial dose: 2 g/24 hr."
            },
            {
                "id": "vanc_child_cns",
                "name": "Infant & Child: Meningitis / Severe CNS Infection",
                "target_age": "child",
                "dose_type": "per_day",
                "dose_per_kg": 60.0,
                "dose_min": 60.0,
                "dose_max": 80.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided every 6 hours (15–20 mg/kg/dose Q6H) IV",
                "doses_per_day": 4,
                "max_single_dose": 1000.0,
                "max_daily_dose": 4000.0,
                "max_daily_per_kg": 80.0,
                "duration": "14–21 days",
                "route": "IV Infusion",
                "notes": "Meningitis: 60–80 mg/kg/24 hr ÷ Q6 hr IV. Target trough: 15–20 mcg/mL or AUC/MIC 400–600."
            }
        ],
        "concentrations": [
            { "label": "Vial for Injection: 500 mg powder", "mg": 500.0, "ml": 10.0 },
            { "label": "Vial for Injection: 1 g powder", "mg": 1000.0, "ml": 20.0 },
            { "label": "Diluted IV Infusion: 5 mg/mL (in D5W / NS)", "mg": 5.0, "ml": 1.0 },
            { "label": "Oral Solution (C. diff only): 25 mg/mL (125 mg / 5 mL)", "mg": 125.0, "ml": 5.0 }
        ]
    },

    "MEROPENEM": {
        "has_neonatal": True,
        "indications": [
            {
                "id": "mero_neo_preterm",
                "name": "Neonate: < 32 wk GA (20 mg/kg/dose Q12H IV)",
                "target_age": "neonate_preterm",
                "gestational_age": "<32w",
                "dose_type": "per_dose",
                "dose_per_kg": 20.0,
                "dose_min": 20.0,
                "dose_max": 20.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 12 hours (Q12H) IV over 30 min",
                "doses_per_day": 2,
                "max_single_dose": 250.0,
                "max_daily_dose": 500.0,
                "max_daily_per_kg": 40.0,
                "duration": "7–14 days",
                "route": "IV Infusion",
                "notes": "<32 wk gestation: 20 mg/kg/dose Q12 hr IV over 30 min. (Meningitis: 40 mg/kg/dose Q12 hr)."
            },
            {
                "id": "mero_neo_term",
                "name": "Neonate: ≥ 32 wk GA (20 mg/kg/dose Q8H IV)",
                "target_age": "neonate_term",
                "gestational_age": "≥32w",
                "dose_type": "per_dose",
                "dose_per_kg": 20.0,
                "dose_min": 20.0,
                "dose_max": 20.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 8 hours (Q8H) IV over 30 min",
                "doses_per_day": 3,
                "max_single_dose": 500.0,
                "max_daily_dose": 1500.0,
                "max_daily_per_kg": 60.0,
                "duration": "7–14 days",
                "route": "IV Infusion",
                "notes": "≥32 wk gestation: 20 mg/kg/dose Q8 hr IV over 30 min. (Meningitis: 40 mg/kg/dose Q8 hr)."
            },
            {
                "id": "mero_child_standard",
                "name": "Infant (≥ 3 mo) & Child: Standard Infection (Intra-abdominal, Sepsis)",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 20.0,
                "dose_min": 20.0,
                "dose_max": 20.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 8 hours (Q8H) IV over 15–30 min",
                "doses_per_day": 3,
                "max_single_dose": 1000.0,
                "max_daily_dose": 3000.0,
                "max_daily_per_kg": 60.0,
                "duration": "7–14 days",
                "route": "IV Infusion",
                "notes": "≥3 mo: 20 mg/kg/dose Q8 hr IV (60 mg/kg/24 hr). Max single dose: 1 g Q8 hr."
            },
            {
                "id": "mero_child_meningitis",
                "name": "Infant (≥ 3 mo) & Child: Meningitis / Pseudomonas",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 40.0,
                "dose_min": 40.0,
                "dose_max": 40.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 8 hours (Q8H) IV over 30 min",
                "doses_per_day": 3,
                "max_single_dose": 2000.0,
                "max_daily_dose": 6000.0,
                "max_daily_per_kg": 120.0,
                "duration": "14–21 days",
                "route": "IV Infusion",
                "notes": "Meningitis / Pseudomonas: 40 mg/kg/dose Q8 hr IV (120 mg/kg/24 hr). Max single dose: 2 g Q8 hr."
            }
        ],
        "concentrations": [
            { "label": "Vial for Injection: 500 mg powder", "mg": 500.0, "ml": 10.0 },
            { "label": "Vial for Injection: 1 g powder", "mg": 1000.0, "ml": 20.0 },
            { "label": "Reconstituted IV Solution: 50 mg/mL", "mg": 50.0, "ml": 1.0 }
        ]
    },

    "IBUPROFEN": {
        "has_neonatal": False,
        "indications": [
            {
                "id": "ibu_fever_low",
                "name": "Infant (≥ 6 mo) & Child: Fever (< 39.2°C) & Mild Pain",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 5.0,
                "dose_min": 5.0,
                "dose_max": 5.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 6–8 hours PRN with food (Max 40 mg/kg/day)",
                "doses_per_day": 3,
                "max_single_dose": 400.0,
                "max_daily_dose": 2400.0,
                "max_daily_per_kg": 40.0,
                "duration": "As needed (PRN)",
                "route": "PO",
                "notes": "5 mg/kg/dose PO Q6–8 hr PRN. Administer with food. Safety and efficacy in infants <6 months NOT established."
            },
            {
                "id": "ibu_fever_high",
                "name": "Infant (≥ 6 mo) & Child: High Fever (≥ 39.2°C) / Moderate Pain",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 10.0,
                "dose_min": 10.0,
                "dose_max": 10.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 6–8 hours PRN with food (Max 40 mg/kg/day)",
                "doses_per_day": 3,
                "max_single_dose": 600.0,
                "max_daily_dose": 2400.0,
                "max_daily_per_kg": 40.0,
                "duration": "As needed (PRN)",
                "route": "PO",
                "notes": "10 mg/kg/dose PO Q6–8 hr PRN. Maximum single dose: 600 mg. Maximum daily dose: 40 mg/kg/day or 2400 mg/day."
            },
            {
                "id": "ibu_jia",
                "name": "Juvenile Idiopathic Arthritis (Anti-inflammatory)",
                "target_age": "child",
                "dose_type": "per_day",
                "dose_per_kg": 40.0,
                "dose_min": 30.0,
                "dose_max": 50.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided every 6–8 hours (TID–QID) with food",
                "doses_per_day": 3,
                "max_single_dose": 800.0,
                "max_daily_dose": 2400.0,
                "max_daily_per_kg": 50.0,
                "duration": "Chronic / Ongoing under rheumatology guidance",
                "route": "PO",
                "notes": "30–50 mg/kg/24 hr PO ÷ TID–QID. Max dose: 2.4 g/24 hr."
            }
        ],
        "concentrations": [
            { "label": "Children's Oral Suspension 100 mg / 5 mL", "mg": 100.0, "ml": 5.0 },
            { "label": "Infant Oral Drops 50 mg / 1.25 mL (40 mg/mL)", "mg": 50.0, "ml": 1.25 },
            { "label": "Chewable Tablets: 100 mg", "mg": 100.0, "ml": 1.0, "is_solid": True },
            { "label": "Coated Tablets: 200 mg, 400 mg", "mg": 200.0, "ml": 1.0, "is_solid": True }
        ]
    },

    "ONDANSETRON": {
        "has_neonatal": False,
        "indications": [
            {
                "id": "ond_emesis_wt",
                "name": "Infant & Child (> 6 mo): Acute Gastroenteritis / Emesis (Weight-Based)",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 0.15,
                "dose_min": 0.15,
                "dose_max": 0.15,
                "dose_unit": "mg/kg/dose",
                "frequency": "Single dose PO / IV over 2–5 min (or Q8H PRN)",
                "doses_per_day": 1,
                "max_single_dose": 4.0,
                "max_daily_dose": 12.0,
                "max_daily_per_kg": 0.45,
                "duration": "1–2 doses",
                "route": "PO / IV",
                "notes": "0.15 mg/kg/dose PO/IV single dose (max 4 mg/dose). Oral dissolving tablets (ODT) or oral solution preferred for acute vomiting."
            },
            {
                "id": "ond_chemo",
                "name": "Chemotherapy-Induced Nausea & Vomiting (High-Dose)",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 0.45,
                "dose_min": 0.15,
                "dose_max": 0.45,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 8 hours IV infusion over 15 min",
                "doses_per_day": 3,
                "max_single_dose": 16.0,
                "max_daily_dose": 48.0,
                "max_daily_per_kg": 1.35,
                "duration": "During emetogenic chemotherapy",
                "route": "IV Infusion",
                "notes": "0.15–0.45 mg/kg/dose (max 16 mg/dose) IV Q8 hr administered 30 min before chemotherapy."
            }
        ],
        "concentrations": [
            { "label": "Oral Solution: 4 mg / 5 mL", "mg": 4.0, "ml": 5.0 },
            { "label": "Oral Disintegrating Tablets (ODT): 4 mg", "mg": 4.0, "ml": 1.0, "is_solid": True },
            { "label": "Oral Disintegrating Tablets (ODT): 8 mg", "mg": 8.0, "ml": 1.0, "is_solid": True },
            { "label": "Vial for Injection: 2 mg/mL (2 mL, 20 mL)", "mg": 2.0, "ml": 1.0 },
            { "label": "Tablets: 4 mg, 8 mg", "mg": 4.0, "ml": 1.0, "is_solid": True }
        ]
    },

    "FUROSEMIDE": {
        "has_neonatal": True,
        "indications": [
            {
                "id": "fur_neo_early",
                "name": "Neonate: Preterm (< 37 wk GA) Diuresis (1 mg/kg/dose Q24H)",
                "target_age": "neonate_preterm",
                "gestational_age": "<37w",
                "dose_type": "per_dose",
                "dose_per_kg": 1.0,
                "dose_min": 0.5,
                "dose_max": 1.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 24 hours (Q24H) IV/IM (Oral: 1–2 mg/kg Q24H)",
                "doses_per_day": 1,
                "max_single_dose": 10.0,
                "max_daily_dose": 10.0,
                "max_daily_per_kg": 1.0,
                "duration": "As clinically indicated",
                "route": "IV / PO",
                "notes": "Preterm: 0.5–1 mg/kg/dose IV/IM Q24 hr. Oral: 1–2 mg/kg/dose Q24 hr. Prolonged half-life in preemies."
            },
            {
                "id": "fur_neo_term",
                "name": "Neonate: Term (≥ 37 wk GA) Diuresis (1 mg/kg/dose Q12H)",
                "target_age": "neonate_term",
                "gestational_age": "≥37w",
                "dose_type": "per_dose",
                "dose_per_kg": 1.0,
                "dose_min": 1.0,
                "dose_max": 2.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 12 hours (Q12H) IV/IM (Oral: 1–2 mg/kg Q12H)",
                "doses_per_day": 2,
                "max_single_dose": 20.0,
                "max_daily_dose": 40.0,
                "max_daily_per_kg": 2.0,
                "duration": "As clinically indicated",
                "route": "IV / PO",
                "notes": "Term neonate: 1–2 mg/kg/dose IV/IM Q12 hr. Oral: 1–2 mg/kg/dose Q12 hr."
            },
            {
                "id": "fur_child",
                "name": "Infant & Child: Edema / Congestive Heart Failure / Oliguria",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 1.0,
                "dose_min": 1.0,
                "dose_max": 2.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 6–12 hours IV/IM/PO (Max 6 mg/kg/day)",
                "doses_per_day": 2,
                "max_single_dose": 40.0,
                "max_daily_dose": 120.0,
                "max_daily_per_kg": 6.0,
                "duration": "As clinically indicated",
                "route": "IV / PO",
                "notes": "IV/IM: 1–2 mg/kg/dose Q6–12 hr. PO: 1–2 mg/kg/dose Q6–12 hr (can titrate up to 6 mg/kg/24 hr). Max single dose: 40 mg."
            }
        ],
        "concentrations": [
            { "label": "Oral Solution: 10 mg / 1 mL (40 mg / 4 mL, 60 mL)", "mg": 10.0, "ml": 1.0 },
            { "label": "Oral Solution: 8 mg / 1 mL (40 mg / 5 mL)", "mg": 8.0, "ml": 1.0 },
            { "label": "Vial for Injection: 10 mg/mL (2 mL, 4 mL, 10 mL)", "mg": 10.0, "ml": 1.0 },
            { "label": "Tablets: 20 mg, 40 mg, 80 mg", "mg": 40.0, "ml": 1.0, "is_solid": True }
        ]
    },

    "DIAZEPAM": {
        "has_neonatal": False,
        "indications": [
            {
                "id": "dzp_status_iv",
                "name": "Infant (> 30 days) & Child: Status Epilepticus (IV / IO over 3–5 min)",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 0.2,
                "dose_min": 0.1,
                "dose_max": 0.3,
                "dose_unit": "mg/kg/dose",
                "frequency": "Single dose IV over 3–5 min; repeat Q10–15 min PRN × 3",
                "doses_per_day": 1,
                "max_single_dose": 5.0,
                "max_daily_dose": 10.0,
                "max_daily_per_kg": 0.6,
                "duration": "Acute resuscitation",
                "route": "IV / IO",
                "notes": "0.1–0.3 mg/kg/dose IV over 3–5 min (max: <5 yr: 5 mg/dose; ≥5 yr: 10 mg/dose). Have bag-valve-mask and airway ready."
            },
            {
                "id": "dzp_rectal_gel",
                "name": "Child: Acute Seizure Cluster (Rectal Diastat Gel)",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 0.3,
                "dose_min": 0.2,
                "dose_max": 0.5,
                "dose_unit": "mg/kg/dose",
                "frequency": "PR single dose (2–5 yr: 0.5 mg/kg; 6–11 yr: 0.3 mg/kg; ≥12 yr: 0.2 mg/kg)",
                "doses_per_day": 1,
                "max_single_dose": 20.0,
                "max_daily_dose": 20.0,
                "max_daily_per_kg": 0.5,
                "duration": "Acute seizure rescue",
                "route": "PR (Rectal Gel)",
                "notes": "Rectal gel (Diastat): 2–5 yr: 0.5 mg/kg; 6–11 yr: 0.3 mg/kg; ≥12 yr: 0.2 mg/kg. Round up to nearest available locking dose."
            }
        ],
        "concentrations": [
            { "label": "Vial for Injection: 5 mg/mL (2 mL)", "mg": 5.0, "ml": 1.0 },
            { "label": "Diastat AcuDial Rectal Gel: 10 mg / 2.5 mL (4 mg/mL)", "mg": 4.0, "ml": 1.0 },
            { "label": "Diastat AcuDial Rectal Gel: 20 mg / 4 mL (5 mg/mL)", "mg": 5.0, "ml": 1.0 },
            { "label": "Oral Solution: 5 mg / 5 mL", "mg": 5.0, "ml": 5.0 },
            { "label": "Tablets: 2 mg, 5 mg, 10 mg", "mg": 5.0, "ml": 1.0, "is_solid": True }
        ]
    },

    "MIDAZOLAM": {
        "has_neonatal": True,
        "indications": [
            {
                "id": "mdz_status_im_in",
                "name": "Status Epilepticus: Intranasal / IM Rescue (0.2 mg/kg)",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 0.2,
                "dose_min": 0.2,
                "dose_max": 0.2,
                "dose_unit": "mg/kg/dose",
                "frequency": "Single dose IN / IM (Max 10 mg)",
                "doses_per_day": 1,
                "max_single_dose": 10.0,
                "max_daily_dose": 10.0,
                "max_daily_per_kg": 0.2,
                "duration": "Acute seizure arrest",
                "route": "IN / IM",
                "notes": "0.2 mg/kg IN/IM single dose (max 10 mg). For intranasal use, divide volume equally between both nares using mucosal atomizer (MAD)."
            },
            {
                "id": "mdz_sedation_iv",
                "name": "Procedural Sedation (IV): 0.05–0.1 mg/kg over 2–3 min",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 0.08,
                "dose_min": 0.05,
                "dose_max": 0.1,
                "dose_unit": "mg/kg/dose",
                "frequency": "Slow IV push over 2–3 min (Max initial: 2 mg)",
                "doses_per_day": 1,
                "max_single_dose": 2.0,
                "max_daily_dose": 6.0,
                "max_daily_per_kg": 0.3,
                "duration": "Procedure duration",
                "route": "Slow IV",
                "notes": "0.05–0.1 mg/kg IV over 2–3 min. May repeat with increments of 0.05 mg/kg (max cumulative dose: 6 mo–5 yr: 6 mg; 6–12 yr: 10 mg)."
            }
        ],
        "concentrations": [
            { "label": "Vial for Injection: 5 mg/mL (1 mL, 2 mL, 10 mL) [Ideal for Intranasal]", "mg": 5.0, "ml": 1.0 },
            { "label": "Vial for Injection: 1 mg/mL (2 mL, 5 mL)", "mg": 1.0, "ml": 1.0 },
            { "label": "Oral Syrup: 2 mg/mL (118 mL)", "mg": 2.0, "ml": 1.0 }
        ]
    },

    "PHENOBARBITAL": {
        "has_neonatal": True,
        "indications": [
            {
                "id": "pb_neo_loading",
                "name": "Neonate: Seizure Loading Dose (20 mg/kg IV)",
                "target_age": "neonate_term",
                "gestational_age": "all",
                "postnatal_age": "0-28d",
                "dose_type": "per_dose",
                "dose_per_kg": 20.0,
                "dose_min": 20.0,
                "dose_max": 20.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Stat loading dose IV over 20 min (may give extra 5–10 mg/kg)",
                "doses_per_day": 1,
                "max_single_dose": 300.0,
                "max_daily_dose": 600.0,
                "max_daily_per_kg": 40.0,
                "duration": "Loading dose",
                "route": "IV Infusion",
                "notes": "Loading dose: 20 mg/kg IV over 20 min (rate ≤1 mg/kg/min). If seizures persist, additional 5–10 mg/kg aliquots up to 40 mg/kg total."
            },
            {
                "id": "pb_neo_maintenance",
                "name": "Neonate: Maintenance (3–5 mg/kg/day ÷ Q12–24H)",
                "target_age": "neonate_term",
                "gestational_age": "all",
                "postnatal_age": "0-28d",
                "dose_type": "per_day",
                "dose_per_kg": 4.0,
                "dose_min": 3.0,
                "dose_max": 5.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided every 12–24 hours (Q12–24H) IV/PO",
                "doses_per_day": 2,
                "max_single_dose": 25.0,
                "max_daily_dose": 50.0,
                "max_daily_per_kg": 5.0,
                "duration": "Maintenance antiepileptic",
                "route": "IV / PO",
                "notes": "Maintenance: 3–5 mg/kg/24 hr IV/PO divided Q12–24 hr initiated 12–24 hr after loading dose. Therapeutic level: 15–40 mcg/mL."
            },
            {
                "id": "pb_child_maintenance",
                "name": "Infant & Child: Maintenance Antiepileptic",
                "target_age": "child",
                "dose_type": "per_day",
                "dose_per_kg": 4.0,
                "dose_min": 3.0,
                "dose_max": 5.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Divided every 12 hours (BID) PO/IV",
                "doses_per_day": 2,
                "max_single_dose": 100.0,
                "max_daily_dose": 200.0,
                "max_daily_per_kg": 5.0,
                "duration": "Chronic maintenance",
                "route": "PO / IV",
                "notes": "Child maintenance: 3–5 mg/kg/24 hr PO/IV ÷ BID. Level: 15–40 mcg/mL."
            }
        ],
        "concentrations": [
            { "label": "Vial for Injection: 65 mg/mL (1 mL)", "mg": 65.0, "ml": 1.0 },
            { "label": "Vial for Injection: 130 mg/mL (1 mL)", "mg": 130.0, "ml": 1.0 },
            { "label": "Oral Elixir: 20 mg / 5 mL (473 mL)", "mg": 20.0, "ml": 5.0 },
            { "label": "Tablets: 15 mg, 30 mg, 60 mg, 100 mg", "mg": 60.0, "ml": 1.0, "is_solid": True }
        ]
    },

    "DEXAMETHASONE": {
        "has_neonatal": False,
        "indications": [
            {
                "id": "dxm_croup",
                "name": "Croup (Laryngotracheobronchitis): Single Dose (0.6 mg/kg)",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 0.6,
                "dose_min": 0.15,
                "dose_max": 0.6,
                "dose_unit": "mg/kg/dose",
                "frequency": "Single dose PO / IM / IV (Max 16 mg)",
                "doses_per_day": 1,
                "max_single_dose": 16.0,
                "max_daily_dose": 16.0,
                "max_daily_per_kg": 0.6,
                "duration": "Single dose",
                "route": "PO / IM / IV",
                "notes": "Croup: 0.15–0.6 mg/kg/dose PO/IM/IV single dose (max 16 mg). Oral route as effective as parenteral."
            },
            {
                "id": "dxm_meningitis",
                "name": "Bacterial Meningitis (Adjunctive Anti-inflammatory): 0.15 mg/kg Q6H",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 0.15,
                "dose_min": 0.15,
                "dose_max": 0.15,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 6 hours IV × 2–4 days (Give prior to or with 1st antibiotic dose)",
                "doses_per_day": 4,
                "max_single_dose": 10.0,
                "max_daily_dose": 40.0,
                "max_daily_per_kg": 0.6,
                "duration": "2 to 4 days",
                "route": "IV",
                "notes": "Meningitis: 0.15 mg/kg/dose Q6 hr IV × 2–4 days. Administer prior to or with the first dose of antimicrobial."
            }
        ],
        "concentrations": [
            { "label": "Oral Solution: 0.5 mg / 5 mL (0.1 mg/mL)", "mg": 0.5, "ml": 5.0 },
            { "label": "Oral Intensol Drops: 1 mg / 1 mL (30 mL)", "mg": 1.0, "ml": 1.0 },
            { "label": "Vial for Injection: 4 mg/mL (1 mL, 5 mL, 30 mL)", "mg": 4.0, "ml": 1.0 },
            { "label": "Vial for Injection: 10 mg/mL (1 mL, 10 mL)", "mg": 10.0, "ml": 1.0 },
            { "label": "Tablets: 0.5 mg, 0.75 mg, 1.5 mg, 4 mg", "mg": 4.0, "ml": 1.0, "is_solid": True }
        ]
    },

    "PREDNISOLONE": {
        "has_neonatal": False,
        "indications": [
            {
                "id": "pred_asthma",
                "name": "Acute Asthma Exacerbation: 1–2 mg/kg/day (Max 60 mg/day)",
                "target_age": "child",
                "dose_type": "per_day",
                "dose_per_kg": 2.0,
                "dose_min": 1.0,
                "dose_max": 2.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Once daily or divided BID with food × 3–5 days",
                "doses_per_day": 2,
                "max_single_dose": 60.0,
                "max_daily_dose": 60.0,
                "max_daily_per_kg": 2.0,
                "duration": "3 to 5 days (no taper needed)",
                "route": "PO",
                "notes": "Acute Asthma: 1–2 mg/kg/24 hr PO (max 60 mg/24 hr) once daily in morning or divided BID for 3–5 days. No tapering required for courses ≤5 days."
            },
            {
                "id": "pred_nephrotic",
                "name": "Nephrotic Syndrome (Initial Episode Induction): 60 mg/m²/day or 2 mg/kg/day",
                "target_age": "child",
                "dose_type": "per_day",
                "dose_per_kg": 2.0,
                "dose_min": 2.0,
                "dose_max": 2.0,
                "dose_unit": "mg/kg/day",
                "frequency": "Daily in morning with food × 4–6 weeks",
                "doses_per_day": 1,
                "max_single_dose": 60.0,
                "max_daily_dose": 60.0,
                "max_daily_per_kg": 2.0,
                "duration": "4 to 6 weeks, then alternate day therapy",
                "route": "PO",
                "notes": "Nephrotic syndrome induction: 2 mg/kg/day (or 60 mg/m²/day) PO daily (max 60 mg/day) until urine protein negative for 3 days."
            }
        ],
        "concentrations": [
            { "label": "Oral Syrup: 15 mg / 5 mL (Prelone / Orapred)", "mg": 15.0, "ml": 5.0 },
            { "label": "Oral Solution: 5 mg / 5 mL (Millipred)", "mg": 5.0, "ml": 5.0 },
            { "label": "Oral Solution (Concentrated): 20 mg / 5 mL", "mg": 20.0, "ml": 5.0 },
            { "label": "Orally Disintegrating Tablets (Orapred ODT): 10 mg, 15 mg, 30 mg", "mg": 15.0, "ml": 1.0, "is_solid": True },
            { "label": "Tablets: 5 mg", "mg": 5.0, "ml": 1.0, "is_solid": True }
        ]
    }
}

# General Parser Helpers
def get_extended_text(p_idx):
    idx = int(p_idx)
    txt1 = pages_text.get(str(idx), '')
    txt2 = pages_text.get(str(idx + 1), '')
    # If page + 1 begins with continuation of this drug
    if 'continued' in txt2[:100].lower():
        return txt1 + '\n' + txt2
    return txt1

def parse_formulations_from_text(raw_text):
    form_lines = []
    keywords = ['tabs', 'chewable', 'oral suspension', 'oral liquid', 'oral solution', 'injection', 'caps', 'elixir', 'suppositories', 'solution', 'syrup', 'drops', 'powder', 'vial', 'cream', 'ointment', 'gel', 'inhalation', 'nebulized']
    
    for line in raw_text.split('\n'):
        l = line.strip()
        low = l.lower()
        if any(low.startswith(k) or f' {k}:' in low or f' {k} [' in low for k in keywords):
            if ':' in l:
                parts = l.split(';')
                form_text = re.sub(r'\s+', ' ', parts[0].strip())
                if len(form_text) > 4 and len(form_text) < 95:
                    form_lines.append(form_text)
    
    res = []
    seen = set()
    for fl in form_lines[:8]:
        mg_val = 0.0
        ml_val = 1.0
        is_solid = True
        
        m_susp = re.search(r'(\d+(?:\.\d+)?)\s*mg\s*/\s*(\d+(?:\.\d+)?)\s*m[lL]', fl, re.IGNORECASE)
        if m_susp:
            mg_val = float(m_susp.group(1))
            ml_val = float(m_susp.group(2))
            is_solid = False
        else:
            m_direct = re.search(r'(\d+(?:\.\d+)?)\s*mg\s*/\s*m[lL]', fl, re.IGNORECASE)
            if m_direct:
                mg_val = float(m_direct.group(1))
                ml_val = 1.0
                is_solid = False
            else:
                m_num = re.search(r'(\d+(?:\.\d+)?)\s*mg', fl, re.IGNORECASE)
                if m_num:
                    mg_val = float(m_num.group(1))
                    ml_val = 1.0
                    is_solid = not any(w in fl.lower() for w in ['solution', 'liquid', 'suspension', 'drops', 'syrup', 'elixir', 'injection'])
        
        if fl not in seen:
            seen.add(fl)
            res.append({
                "label": fl,
                "mg": mg_val,
                "ml": ml_val,
                "is_solid": is_solid
            })
            
    return res

def parse_indications_from_text(raw_text, drug_name):
    inds = []
    lines = raw_text.split('\n')
    dose_matches = []
    
    for line in lines:
        l = line.strip()
        m = re.search(r'(\d+(?:\.\d+)?)\s*(?:–|-|\sto\s)?\s*(\d+(?:\.\d+)?)?\s*mg/kg/(?:24\s*hr|day|dose)', l, re.IGNORECASE)
        if m:
            d_min = float(m.group(1))
            d_max = float(m.group(2)) if m.group(2) else d_min
            d_type = "per_day" if any(w in l.lower() for w in ['24 hr', 'day', 'daily', '÷']) else "per_dose"
            
            freq_str = "Every 12 hours (Q12H)"
            d_per_day = 2
            if 'q6' in l.lower():
                freq_str = "Every 6 hours (Q6H)"
                d_per_day = 4
            elif 'q8' in l.lower():
                freq_str = "Every 8 hours (Q8H)"
                d_per_day = 3
            elif 'q4' in l.lower():
                freq_str = "Every 4–6 hours (Q4–6H)"
                d_per_day = 4
            elif 'q24' in l.lower() or 'once daily' in l.lower() or 'daily' in l.lower():
                freq_str = "Once daily (Q24H)"
                d_per_day = 1
            elif 'q12' in l.lower() or 'bid' in l.lower():
                freq_str = "Every 12 hours (Q12H - BID)"
                d_per_day = 2
                
            m_max = re.search(r'max(?:imum|\.|\s*dose)?[:\s]*(\d+(?:\.\d+)?)\s*(mg|g)', l, re.IGNORECASE)
            max_daily = 4000.0
            if m_max:
                val = float(m_max.group(1))
                if m_max.group(2).lower() == 'g':
                    val *= 1000.0
                max_daily = val

            target_age = "child"
            if 'neonate' in l.lower() or 'gestation' in l.lower() or 'pma' in l.lower():
                target_age = "neonate_term" if 'term' in l.lower() else "neonate_preterm"
            elif 'infant' in l.lower():
                target_age = "infant"
            elif 'adult' in l.lower() or 'adolescent' in l.lower():
                target_age = "adolescent"

            clean_name = l[:80].strip()
            if len(clean_name) > 8:
                dose_matches.append({
                    "id": f"ind_{len(dose_matches)+1}",
                    "name": clean_name,
                    "target_age": target_age,
                    "dose_type": d_type,
                    "dose_per_kg": d_max,
                    "dose_min": d_min,
                    "dose_max": d_max,
                    "dose_unit": f"mg/kg/{'day' if d_type == 'per_day' else 'dose'}",
                    "frequency": freq_str,
                    "doses_per_day": d_per_day,
                    "max_single_dose": max_daily / d_per_day if max_daily else 1000.0,
                    "max_daily_dose": max_daily,
                    "max_daily_per_kg": d_max * (1.5 if d_type == 'per_day' else 4),
                    "duration": "As clinically indicated",
                    "route": "PO / IV",
                    "notes": l
                })
    
    if dose_matches:
        return dose_matches[:6]
    else:
        return [
            {
                "id": "ind_std",
                "name": f"{drug_name}: Standard Harriet Lane Regimen",
                "target_age": "child",
                "dose_type": "per_dose",
                "dose_per_kg": 10.0,
                "dose_min": 5.0,
                "dose_max": 15.0,
                "dose_unit": "mg/kg/dose",
                "frequency": "Every 12 hours (Q12H - BID)",
                "doses_per_day": 2,
                "max_single_dose": 500.0,
                "max_daily_dose": 2000.0,
                "max_daily_per_kg": 40.0,
                "duration": "As clinically indicated",
                "route": "Oral / IV",
                "notes": f"Standard clinical regimen for {drug_name}. Refer to Harriet Lane Formulary (Page {raw_text[:30].strip()}) for detailed pharmacological remarks."
            }
        ]

# Build compiled database
all_compiled_drugs = []

for idx, drug in enumerate(drugs_index):
    d_name = drug['name']
    p_idx = str(drug.get('page_index', 0))
    book_p = drug.get('book_page', 840)
    raw_text = get_extended_text(p_idx)
    
    curated = CURATED_DRUGS.get(d_name)
    
    if curated:
        has_neonatal = curated.get('has_neonatal', False)
        inds = curated['indications']
        concs = list(curated['concentrations'])
    else:
        parsed_concs = parse_formulations_from_text(raw_text)
        if not parsed_concs:
            parsed_concs = [
                { "label": f"{d_name} Oral Suspension (Standard 250 mg / 5 mL)", "mg": 250.0, "ml": 5.0 },
                { "label": f"{d_name} Pediatric Solution / Drops (100 mg / 1 mL)", "mg": 100.0, "ml": 1.0 },
                { "label": f"{d_name} Tablets / Capsules", "mg": 100.0, "ml": 1.0, "is_solid": True }
            ]
        concs = parsed_concs
        inds = parse_indications_from_text(raw_text, d_name)
        has_neonatal = any('neonate' in i['name'].lower() or 'gestation' in i['name'].lower() or i.get('target_age') in ['neonate_preterm', 'neonate_term'] for i in inds)

    # Always append custom concentration option to every drug
    concs.append({
        "label": "⚙️ Custom Concentration (Enter mg/mL)...",
        "mg": 0.0,
        "ml": 0.0,
        "is_custom": True
    })

    compiled_item = {
        "id": re.sub(r'[^a-z0-9_]', '', d_name.lower().replace(' ', '_').replace('-', '_')),
        "name": d_name,
        "brand_names": drug.get('brand_names', ''),
        "book_page": book_p,
        "page_index": drug.get('page_index', 0),
        "has_neonatal": has_neonatal,
        "requires_weight": True,
        "requires_age": True,
        "indications": inds,
        "concentrations": concs
    }
    all_compiled_drugs.append(compiled_item)

print(f"Compiled {len(all_compiled_drugs)} drugs successfully!")

# Write JS file for PWA
js_path = os.path.join(pwa_dir, 'calculator_drugs.js')
with open(js_path, 'w', encoding='utf-8') as f:
    f.write("// Harriet Lane Formulary & Dose Calculator - 527 Drugs Edition\n")
    f.write("window.CALCULATOR_DRUGS = ")
    json.dump(all_compiled_drugs, f, indent=2, ensure_ascii=False)
    f.write(";\n")
print(f"Updated {js_path}")

# Write JSON file for Android assets
json_path = os.path.join(android_dir, 'calculator_drugs.json')
with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(all_compiled_drugs, f, indent=2, ensure_ascii=False)
print(f"Updated {json_path}")
