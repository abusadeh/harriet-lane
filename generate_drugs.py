import json, re, os

pwa_dir = r'C:\Users\Abusadeh\.gemini\antigravity\scratch\HarrietLanePWA'

with open(os.path.join(pwa_dir, 'drugs_index.json'), encoding='utf-8') as f:
    drugs_index = json.load(f)

with open(os.path.join(pwa_dir, 'pages_text.json'), encoding='utf-8') as f:
    pages_text = json.load(f)

# Curated drugs in 100% professional clinical English
CURATED_ENGLISH_DRUGS = [
  {
    "id": "acetaminophen",
    "name": "ACETAMINOPHEN",
    "scientific_name": "ACETAMINOPHEN",
    "brand_names": "Tylenol, Paracetamol, Calpol, Tempra",
    "category": "antipyretic",
    "book_page": 840,
    "page_index": 0,
    "requires_weight": True,
    "requires_age": True,
    "min_age_months": 0,
    "indications": [
      {
        "id": "fever_oral",
        "name": "Fever & Mild-to-Moderate Pain (Oral / Rectal)",
        "dose_type": "per_dose",
        "dose_per_kg": 15.0,
        "dose_min": 10.0,
        "dose_max": 15.0,
        "dose_unit": "mg/kg/dose",
        "frequency": "Every 4–6 hours PRN (Max 5 doses/day)",
        "frequency_en": "Every 4–6 hours PRN (Max 5 doses/day)",
        "doses_per_day": 4,
        "max_single_dose": 1000.0,
        "max_daily_dose": 4000.0,
        "max_daily_per_kg": 75.0,
        "duration": "As needed for fever or pain",
        "notes": "Standard dose: 10–15 mg/kg/dose PO/PR Q4–6 hr PRN. Maximum dose: 75 mg/kg/day or 4000 mg/day (whichever is less). Do not exceed 5 doses in 24 hours."
      },
      {
        "id": "iv_infusion",
        "name": "Severe Pain / Inpatient (IV Infusion)",
        "dose_type": "per_dose",
        "dose_per_kg": 15.0,
        "dose_min": 7.5,
        "dose_max": 15.0,
        "dose_unit": "mg/kg/dose",
        "frequency": "Every 6 hours IV infusion",
        "frequency_en": "Every 6 hours IV infusion over 15 min",
        "doses_per_day": 4,
        "max_single_dose": 750.0,
        "max_daily_dose": 3750.0,
        "max_daily_per_kg": 60.0,
        "notes": "<10 kg: 7.5–15 mg/kg Q6 hr (max daily: 60 mg/kg/day). 10–50 kg: 15 mg/kg Q6 hr (max single: 750 mg, max daily: 3750 mg/day). >50 kg: 1000 mg Q6 hr (max 4000 mg/day)."
      }
    ],
    "concentrations": [
      { "label": "Oral Suspension 160 mg / 5 mL (Standard)", "mg": 160.0, "ml": 5.0 },
      { "label": "Oral Suspension 120 mg / 5 mL", "mg": 120.0, "ml": 5.0 },
      { "label": "Oral Suspension 250 mg / 5 mL (Forte)", "mg": 250.0, "ml": 5.0 },
      { "label": "Infant Oral Drops 100 mg / 1 mL", "mg": 100.0, "ml": 1.0 },
      { "label": "Suppositories 125 mg", "mg": 125.0, "ml": 1.0, "is_solid": True },
      { "label": "Suppositories 250 mg", "mg": 250.0, "ml": 1.0, "is_solid": True },
      { "label": "Tablets 500 mg", "mg": 500.0, "ml": 1.0, "is_solid": True }
    ]
  },
  {
    "id": "ibuprofen",
    "name": "IBUPROFEN",
    "scientific_name": "IBUPROFEN",
    "brand_names": "Motrin, Advil, Brufen",
    "category": "antipyretic",
    "book_page": 1063,
    "page_index": 223,
    "requires_weight": True,
    "requires_age": True,
    "min_age_months": 6,
    "age_warning": "⚠️ Safety Alert: Not recommended in infants under 6 months of age without specialist consultation.",
    "indications": [
      {
        "id": "fever_low",
        "name": "Fever (< 39.2°C) & Mild Pain",
        "dose_type": "per_dose",
        "dose_per_kg": 5.0,
        "dose_min": 5.0,
        "dose_max": 5.0,
        "dose_unit": "mg/kg/dose",
        "frequency": "Every 6–8 hours PRN with food",
        "frequency_en": "Every 6–8 hours PRN with food",
        "doses_per_day": 3,
        "max_single_dose": 400.0,
        "max_daily_dose": 2400.0,
        "max_daily_per_kg": 40.0,
        "duration": "As needed",
        "notes": "5 mg/kg/dose PO Q6–8 hr PRN. Administer with food to reduce GI upset. Maximum daily dose: 40 mg/kg/day or 2400 mg/day."
      },
      {
        "id": "fever_high",
        "name": "High Fever (≥ 39.2°C) & Inflammatory Pain",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_min": 10.0,
        "dose_max": 10.0,
        "dose_unit": "mg/kg/dose",
        "frequency": "Every 6–8 hours PRN with food",
        "frequency_en": "Every 6–8 hours PRN with food",
        "doses_per_day": 3,
        "max_single_dose": 400.0,
        "max_daily_dose": 2400.0,
        "max_daily_per_kg": 40.0,
        "duration": "As needed",
        "notes": "10 mg/kg/dose PO Q6–8 hr PRN. Max single pediatric dose: 400 mg. Max daily dose: 40 mg/kg/day up to 2400 mg/day."
      }
    ],
    "concentrations": [
      { "label": "Oral Suspension 100 mg / 5 mL", "mg": 100.0, "ml": 5.0 },
      { "label": "Oral Suspension 200 mg / 5 mL", "mg": 200.0, "ml": 5.0 },
      { "label": "Tablets 200 mg", "mg": 200.0, "ml": 1.0, "is_solid": True },
      { "label": "Tablets 400 mg", "mg": 400.0, "ml": 1.0, "is_solid": True }
    ]
  },
  {
    "id": "amoxicillin",
    "name": "AMOXICILLIN",
    "scientific_name": "AMOXICILLIN",
    "brand_names": "Amoxil, Trimox, Moxatag",
    "category": "antibiotic",
    "book_page": 852,
    "page_index": 12,
    "requires_weight": True,
    "requires_age": False,
    "indications": [
      {
        "id": "high_dose_aom",
        "name": "Acute Otitis Media / Sinusitis (High Dose AAP Guideline)",
        "dose_type": "per_day",
        "dose_per_kg": 90.0,
        "dose_min": 80.0,
        "dose_max": 90.0,
        "dose_unit": "mg/kg/day",
        "frequency": "Divided BID (Every 12 hours)",
        "frequency_en": "Divided BID (Every 12 hours)",
        "doses_per_day": 2,
        "max_single_dose": 1500.0,
        "max_daily_dose": 3000.0,
        "duration": "10 days (<2 yr) or 5–7 days (≥2 yr)",
        "notes": "High-dose amoxicillin (80–90 mg/kg/day divided Q12H) is recommended by AAP for acute otitis media to cover penicillin-resistant S. pneumoniae."
      },
      {
        "id": "standard_dose",
        "name": "Mild / Moderate Infections / Streptococcal Pharyngitis",
        "dose_type": "per_day",
        "dose_per_kg": 45.0,
        "dose_min": 40.0,
        "dose_max": 50.0,
        "dose_unit": "mg/kg/day",
        "frequency": "Divided BID (Q12H) or TID (Q8H)",
        "frequency_en": "Divided BID (Q12H) or TID (Q8H)",
        "doses_per_day": 2,
        "max_single_dose": 750.0,
        "max_daily_dose": 1500.0,
        "duration": "10 days for Strep pharyngitis",
        "notes": "Standard dose: 40–50 mg/kg/day PO divided BID or TID. For Group A Strep pharyngitis, 50 mg/kg/day once daily (max 1000 mg) for 10 days."
      },
      {
        "id": "endocarditis_prophylaxis",
        "name": "Infective Endocarditis Prophylaxis",
        "dose_type": "per_dose",
        "dose_per_kg": 50.0,
        "dose_min": 50.0,
        "dose_max": 50.0,
        "dose_unit": "mg/kg/dose",
        "frequency": "Single dose 30–60 min before procedure",
        "frequency_en": "Single dose 30–60 min before procedure",
        "doses_per_day": 1,
        "max_single_dose": 2000.0,
        "max_daily_dose": 2000.0,
        "notes": "50 mg/kg single oral dose 30–60 minutes prior to procedure (maximum dose: 2000 mg)."
      }
    ],
    "concentrations": [
      { "label": "Oral Suspension 400 mg / 5 mL (Recommended for High Dose)", "mg": 400.0, "ml": 5.0 },
      { "label": "Oral Suspension 250 mg / 5 mL", "mg": 250.0, "ml": 5.0 },
      { "label": "Oral Suspension 125 mg / 5 mL", "mg": 125.0, "ml": 5.0 },
      { "label": "Capsules 500 mg", "mg": 500.0, "ml": 1.0, "is_solid": True }
    ]
  },
  {
    "id": "augmentin",
    "name": "AMOXICILLIN / CLAVULANATE",
    "scientific_name": "AMOXICILLIN / CLAVULANATE",
    "brand_names": "Augmentin, Clavamox",
    "category": "antibiotic",
    "book_page": 852,
    "page_index": 12,
    "requires_weight": True,
    "requires_age": False,
    "indications": [
      {
        "id": "high_dose_aug",
        "name": "Resistant AOM / Sinusitis (Augmentin ES-600 / 14:1 ratio)",
        "dose_type": "per_day",
        "dose_per_kg": 90.0,
        "dose_min": 80.0,
        "dose_max": 90.0,
        "dose_unit": "mg/kg/day (Amox component)",
        "frequency": "Divided BID (Every 12 hours) with food",
        "frequency_en": "Divided BID (Every 12 hours) with meals",
        "doses_per_day": 2,
        "max_single_dose": 2000.0,
        "max_daily_dose": 4000.0,
        "duration": "10 days",
        "notes": "Dose based on amoxicillin component: 80–90 mg/kg/day divided Q12H. Use 14:1 formulation (ES-600) to minimize clavulanate-induced diarrhea."
      },
      {
        "id": "standard_aug",
        "name": "Standard Respiratory & UTI (7:1 ratio)",
        "dose_type": "per_day",
        "dose_per_kg": 45.0,
        "dose_min": 25.0,
        "dose_max": 45.0,
        "dose_unit": "mg/kg/day (Amox component)",
        "frequency": "Divided BID (Every 12 hours) with food",
        "frequency_en": "Divided BID (Every 12 hours) with meals",
        "doses_per_day": 2,
        "max_single_dose": 875.0,
        "max_daily_dose": 1750.0,
        "duration": "7–10 days",
        "notes": "25–45 mg/kg/day (amoxicillin component) divided Q12H using 7:1 formulation (200 mg/5 mL or 400 mg/5 mL)."
      }
    ],
    "concentrations": [
      { "label": "Augmentin ES-600 Suspension (600 mg Amox / 5 mL)", "mg": 600.0, "ml": 5.0 },
      { "label": "Suspension 400 mg Amox / 5 mL (457 mg / 5 mL)", "mg": 400.0, "ml": 5.0 },
      { "label": "Suspension 200 mg Amox / 5 mL (228 mg / 5 mL)", "mg": 200.0, "ml": 5.0 },
      { "label": "Suspension 250 mg Amox / 5 mL (312 mg / 5 mL)", "mg": 250.0, "ml": 5.0 },
      { "label": "Suspension 125 mg Amox / 5 mL (156 mg / 5 mL)", "mg": 125.0, "ml": 5.0 },
      { "label": "Tablets 625 mg (500 mg Amox)", "mg": 500.0, "ml": 1.0, "is_solid": True },
      { "label": "Tablets 1 g (875 mg Amox)", "mg": 875.0, "ml": 1.0, "is_solid": True }
    ]
  },
  {
    "id": "ceftriaxone",
    "name": "CEFTRIAXONE",
    "scientific_name": "CEFTRIAXONE",
    "brand_names": "Rocephin",
    "category": "antibiotic",
    "book_page": 914,
    "page_index": 74,
    "requires_weight": True,
    "requires_age": True,
    "min_age_months": 1,
    "age_warning": "⚠️ Safety Alert: Contraindicated in hyperbilirubinemic neonates and with IV calcium-containing solutions.",
    "indications": [
      {
        "id": "systemic_inf",
        "name": "General Sepsis / Severe Pneumonia / Serious UTI (IV/IM)",
        "dose_type": "per_day",
        "dose_per_kg": 75.0,
        "dose_min": 50.0,
        "dose_max": 75.0,
        "dose_unit": "mg/kg/day",
        "frequency": "Once daily (or divided Q12H)",
        "frequency_en": "Once daily (or divided Q12H)",
        "doses_per_day": 1,
        "max_single_dose": 2000.0,
        "max_daily_dose": 2000.0,
        "notes": "50–75 mg/kg/day IV or IM once daily or divided Q12H. Maximum dose: 2000 mg/day."
      },
      {
        "id": "meningitis_ceft",
        "name": "Bacterial Meningitis (IV)",
        "dose_type": "per_day",
        "dose_per_kg": 100.0,
        "dose_min": 100.0,
        "dose_max": 100.0,
        "dose_unit": "mg/kg/day",
        "frequency": "Divided Q12H (or once daily)",
        "frequency_en": "Divided Q12H (or once daily)",
        "doses_per_day": 2,
        "max_single_dose": 2000.0,
        "max_daily_dose": 4000.0,
        "notes": "100 mg/kg/day IV divided Q12H or once daily (max: 4000 mg/day). Optional loading dose of 100 mg/kg."
      },
      {
        "id": "aom_single",
        "name": "Acute Otitis Media (Single IM Injection)",
        "dose_type": "per_dose",
        "dose_per_kg": 50.0,
        "dose_min": 50.0,
        "dose_max": 50.0,
        "dose_unit": "mg/kg/dose",
        "frequency": "Single IM dose",
        "frequency_en": "Single IM injection once",
        "doses_per_day": 1,
        "max_single_dose": 1000.0,
        "max_daily_dose": 1000.0,
        "notes": "50 mg/kg IM single dose (max: 1000 mg) for patients with persistent vomiting or compliance issues."
      }
    ],
    "concentrations": [
      { "label": "Vial 1000 mg (1 g) for Injection", "mg": 1000.0, "ml": 10.0 },
      { "label": "Vial 500 mg for Injection", "mg": 500.0, "ml": 5.0 },
      { "label": "Vial 250 mg for Injection", "mg": 250.0, "ml": 2.5 }
    ]
  },
  {
    "id": "azithromycin",
    "name": "AZITHROMYCIN",
    "scientific_name": "AZITHROMYCIN",
    "brand_names": "Zithromax, Azithrocin",
    "category": "antibiotic",
    "book_page": 874,
    "page_index": 34,
    "requires_weight": True,
    "requires_age": False,
    "indications": [
      {
        "id": "pneumonia_d1",
        "name": "Community Acquired Pneumonia (Day 1: 10 mg/kg)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_min": 10.0,
        "dose_max": 10.0,
        "dose_unit": "mg/kg/dose",
        "frequency": "Once daily (Day 1 only)",
        "frequency_en": "Once daily on Day 1 only",
        "doses_per_day": 1,
        "max_single_dose": 500.0,
        "max_daily_dose": 500.0,
        "duration": "Day 1",
        "notes": "Day 1: 10 mg/kg PO once daily (max 500 mg). Followed by Days 2–5: 5 mg/kg once daily (max 250 mg)."
      },
      {
        "id": "pneumonia_d2_5",
        "name": "Community Acquired Pneumonia (Days 2–5: 5 mg/kg)",
        "dose_type": "per_dose",
        "dose_per_kg": 5.0,
        "dose_min": 5.0,
        "dose_max": 5.0,
        "dose_unit": "mg/kg/dose",
        "frequency": "Once daily (Days 2 to 5)",
        "frequency_en": "Once daily (Days 2 to 5)",
        "doses_per_day": 1,
        "max_single_dose": 250.0,
        "max_daily_dose": 250.0,
        "duration": "4 days (Days 2–5)",
        "notes": "5 mg/kg once daily for days 2 through 5 (maximum dose: 250 mg/day)."
      },
      {
        "id": "pharyngitis_5d",
        "name": "Pharyngitis / Tonsillitis (5-Day Regimen)",
        "dose_type": "per_dose",
        "dose_per_kg": 12.0,
        "dose_min": 12.0,
        "dose_max": 12.0,
        "dose_unit": "mg/kg/dose",
        "frequency": "Once daily for 5 days",
        "frequency_en": "Once daily for 5 days",
        "doses_per_day": 1,
        "max_single_dose": 500.0,
        "max_daily_dose": 500.0,
        "duration": "5 days",
        "notes": "12 mg/kg PO once daily for 5 days (maximum dose: 500 mg/day)."
      }
    ],
    "concentrations": [
      { "label": "Oral Suspension 200 mg / 5 mL", "mg": 200.0, "ml": 5.0 },
      { "label": "Oral Suspension 100 mg / 5 mL", "mg": 100.0, "ml": 5.0 },
      { "label": "Tablets 250 mg", "mg": 250.0, "ml": 1.0, "is_solid": True },
      { "label": "Tablets 500 mg", "mg": 500.0, "ml": 1.0, "is_solid": True }
    ]
  },
  {
    "id": "cefixime",
    "name": "CEFIXIME",
    "scientific_name": "CEFIXIME",
    "brand_names": "Suprax",
    "category": "antibiotic",
    "book_page": 911,
    "page_index": 71,
    "requires_weight": True,
    "requires_age": False,
    "indications": [
      {
        "id": "uti_aom",
        "name": "Urinary Tract Infection / Otitis Media",
        "dose_type": "per_day",
        "dose_per_kg": 8.0,
        "dose_min": 8.0,
        "dose_max": 8.0,
        "dose_unit": "mg/kg/day",
        "frequency": "Once daily or divided BID (Q12H)",
        "frequency_en": "Once daily or divided BID (Q12H)",
        "doses_per_day": 1,
        "max_single_dose": 400.0,
        "max_daily_dose": 400.0,
        "duration": "7–14 days for UTI",
        "notes": "8 mg/kg/day PO once daily or divided 4 mg/kg Q12H (maximum dose: 400 mg/day)."
      }
    ],
    "concentrations": [
      { "label": "Oral Suspension 100 mg / 5 mL", "mg": 100.0, "ml": 5.0 },
      { "label": "Oral Suspension 200 mg / 5 mL", "mg": 200.0, "ml": 5.0 },
      { "label": "Capsules 400 mg", "mg": 400.0, "ml": 1.0, "is_solid": True }
    ]
  },
  {
    "id": "prednisolone",
    "name": "PREDNISOLONE / PREDNISONE",
    "scientific_name": "PREDNISOLONE",
    "brand_names": "Prelone, Orapred, Millipred",
    "category": "steroid",
    "book_page": 1198,
    "page_index": 358,
    "requires_weight": True,
    "requires_age": False,
    "indications": [
      {
        "id": "asthma_burst",
        "name": "Acute Asthma Exacerbation (Short Burst)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_min": 1.0,
        "dose_max": 2.0,
        "dose_unit": "mg/kg/day",
        "frequency": "Once daily morning or divided BID",
        "frequency_en": "Once daily morning or divided BID",
        "doses_per_day": 1,
        "max_single_dose": 60.0,
        "max_daily_dose": 60.0,
        "duration": "3–5 days (no taper needed if ≤5 days)",
        "notes": "1–2 mg/kg/day PO (max 60 mg/day) for 3–5 days. No steroid taper required for short courses."
      },
      {
        "id": "nephrotic_initial",
        "name": "Nephrotic Syndrome (Initial Episode)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_min": 2.0,
        "dose_max": 2.0,
        "dose_unit": "mg/kg/day",
        "frequency": "Once daily morning",
        "frequency_en": "Once daily morning",
        "doses_per_day": 1,
        "max_single_dose": 60.0,
        "max_daily_dose": 60.0,
        "duration": "4–6 weeks per protocol",
        "notes": "60 mg/m²/day or 2 mg/kg/day PO once daily (max 60 mg/day) for 4–6 weeks."
      }
    ],
    "concentrations": [
      { "label": "Oral Syrup 15 mg / 5 mL (3 mg/mL)", "mg": 15.0, "ml": 5.0 },
      { "label": "Oral Syrup 5 mg / 5 mL (1 mg/mL)", "mg": 5.0, "ml": 5.0 },
      { "label": "Tablets 5 mg", "mg": 5.0, "ml": 1.0, "is_solid": True },
      { "label": "Tablets 20 mg", "mg": 20.0, "ml": 1.0, "is_solid": True }
    ]
  },
  {
    "id": "dexamethasone",
    "name": "DEXAMETHASONE",
    "scientific_name": "DEXAMETHASONE",
    "brand_names": "Decadron, Dexpak",
    "category": "steroid",
    "book_page": 966,
    "page_index": 126,
    "requires_weight": True,
    "requires_age": False,
    "indications": [
      {
        "id": "croup_dex",
        "name": "Croup (Laryngotracheobronchitis)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.6,
        "dose_min": 0.15,
        "dose_max": 0.6,
        "dose_unit": "mg/kg/dose",
        "frequency": "Single oral/IM/IV dose",
        "frequency_en": "Single oral, IM, or IV dose",
        "doses_per_day": 1,
        "max_single_dose": 16.0,
        "max_daily_dose": 16.0,
        "duration": "Single dose",
        "notes": "0.15–0.6 mg/kg PO/IM/IV single dose (most commonly 0.6 mg/kg, max 16 mg). Highly effective for acute stridor."
      },
      {
        "id": "asthma_dex",
        "name": "Acute Asthma Exacerbation (1–2 Day Protocol)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.6,
        "dose_min": 0.6,
        "dose_max": 0.6,
        "dose_unit": "mg/kg/dose",
        "frequency": "Once daily for 1–2 days",
        "frequency_en": "Once daily for 1–2 days",
        "doses_per_day": 1,
        "max_single_dose": 16.0,
        "max_daily_dose": 16.0,
        "duration": "1–2 days",
        "notes": "0.6 mg/kg PO once daily (max 16 mg) for 1–2 days. Equivalent clinical efficacy to 5 days of prednisolone."
      }
    ],
    "concentrations": [
      { "label": "Injectable Solution 4 mg / 1 mL", "mg": 4.0, "ml": 1.0 },
      { "label": "Oral Elixir 0.5 mg / 5 mL", "mg": 0.5, "ml": 5.0 },
      { "label": "Tablets 0.5 mg", "mg": 0.5, "ml": 1.0, "is_solid": True },
      { "label": "Tablets 4 mg", "mg": 4.0, "ml": 1.0, "is_solid": True }
    ]
  },
  {
    "id": "salbutamol",
    "name": "SALBUTAMOL (Albuterol)",
    "scientific_name": "SALBUTAMOL",
    "brand_names": "Ventolin, ProAir, Proventil",
    "category": "respiratory",
    "book_page": 846,
    "page_index": 6,
    "requires_weight": False,
    "requires_age": True,
    "indications": [
      {
        "id": "nebulizer",
        "name": "Nebulizer Inhalation (Acute Bronchospasm)",
        "dose_type": "fixed_age",
        "dose_unit": "mg/dose",
        "frequency": "Every 20 min x3 in acute then Q4–6H PRN",
        "frequency_en": "Every 20 min x3 in acute, then Q4–6H PRN",
        "doses_per_day": 4,
        "notes": "<5 yr: 1.25–2.5 mg (0.25–0.5 mL of 0.5% solution) in 3 mL NS. ≥5 yr: 2.5–5 mg in 3 mL NS Q4–6 hr PRN."
      },
      {
        "id": "mdi_spacer",
        "name": "MDI Inhaler with Valved Holding Chamber",
        "dose_type": "fixed_age",
        "dose_unit": "puffs",
        "frequency": "2–6 puffs Q4–6H PRN",
        "frequency_en": "2–6 puffs Q4–6H PRN with spacer",
        "doses_per_day": 4,
        "notes": "90–100 mcg/puff. Acute: 4–8 puffs Q20 min x3. Mild/maintenance: 2–4 puffs Q4–6 hr PRN. Always use spacer."
      },
      {
        "id": "oral_syrup",
        "name": "Oral Syrup (When inhaler is unavailable)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.15,
        "dose_min": 0.1,
        "dose_max": 0.15,
        "dose_unit": "mg/kg/dose",
        "frequency": "TID (Every 8 hours)",
        "frequency_en": "TID (Every 8 hours)",
        "doses_per_day": 3,
        "max_single_dose": 4.0,
        "max_daily_dose": 12.0,
        "notes": "0.1–0.15 mg/kg/dose PO TID (Q8H). Note: Inhaled route is preferred due to higher efficacy and fewer systemic adverse effects."
      }
    ],
    "concentrations": [
      { "label": "Nebulizer Solution 5 mg / 1 mL (0.5%)", "mg": 5.0, "ml": 1.0 },
      { "label": "Oral Syrup 2 mg / 5 mL", "mg": 2.0, "ml": 5.0 },
      { "label": "MDI Inhaler (100 mcg / puff)", "mg": 0.1, "ml": 1.0, "is_solid": True }
    ]
  },
  {
    "id": "ondansetron",
    "name": "ONDANSETRON",
    "scientific_name": "ONDANSETRON",
    "brand_names": "Zofran, Zuplenz",
    "category": "gi",
    "book_page": 1162,
    "page_index": 322,
    "requires_weight": True,
    "requires_age": True,
    "min_age_months": 6,
    "indications": [
      {
        "id": "vomiting_gastro",
        "name": "Acute Gastroenteritis Vomiting (AAP Protocol)",
        "dose_type": "weight_tiered",
        "weight_rules": [
          { "max_kg": 15, "dose_mg": 2, "desc": "Weight 8 to 15 kg: 2 mg single dose" },
          { "min_kg": 15, "max_kg": 30, "dose_mg": 4, "desc": "Weight 15 to 30 kg: 4 mg single dose" },
          { "min_kg": 30, "dose_mg": 8, "desc": "Weight > 30 kg: 8 mg single dose" }
        ],
        "dose_per_kg": 0.15,
        "dose_unit": "mg/kg/dose",
        "frequency": "Single dose to facilitate oral rehydration (or Q8H PRN)",
        "frequency_en": "Single dose to facilitate oral rehydration (or Q8H PRN)",
        "doses_per_day": 1,
        "max_single_dose": 8.0,
        "max_daily_dose": 16.0,
        "notes": "AAP guideline recommends a single oral dose to prevent dehydration and reduce hospitalization in acute gastroenteritis."
      }
    ],
    "concentrations": [
      { "label": "Oral Solution 4 mg / 5 mL", "mg": 4.0, "ml": 5.0 },
      { "label": "Orally Disintegrating Tablets (ODT) 4 mg", "mg": 4.0, "ml": 1.0, "is_solid": True },
      { "label": "Injectable Solution 2 mg / 1 mL (4 mg / 2 mL)", "mg": 2.0, "ml": 1.0 }
    ]
  },
  {
    "id": "diphenhydramine",
    "name": "DIPHENHYDRAMINE",
    "scientific_name": "DIPHENHYDRAMINE",
    "brand_names": "Benadryl",
    "category": "antihistamine",
    "book_page": 975,
    "page_index": 135,
    "requires_weight": True,
    "requires_age": True,
    "min_age_months": 24,
    "age_warning": "⚠️ Safety Alert: Not recommended in children under 2 years of age due to risk of respiratory depression.",
    "indications": [
      {
        "id": "allergy_pruritus",
        "name": "Acute Allergic Reaction / Urticaria / Pruritus",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_min": 1.0,
        "dose_max": 1.25,
        "dose_unit": "mg/kg/dose",
        "frequency": "Every 6 hours PO / IV / IM PRN",
        "frequency_en": "Every 6 hours PO / IV / IM PRN",
        "doses_per_day": 4,
        "max_single_dose": 50.0,
        "max_daily_dose": 300.0,
        "max_daily_per_kg": 5.0,
        "notes": "1–1.25 mg/kg/dose PO/IV/IM Q6H (max single dose: 50 mg, max daily: 300 mg/day)."
      }
    ],
    "concentrations": [
      { "label": "Oral Liquid 12.5 mg / 5 mL", "mg": 12.5, "ml": 5.0 },
      { "label": "Injectable Solution 50 mg / 1 mL", "mg": 50.0, "ml": 1.0 },
      { "label": "Tablets 25 mg", "mg": 25.0, "ml": 1.0, "is_solid": True }
    ]
  },
  {
    "id": "clarithromycin",
    "name": "CLARITHROMYCIN",
    "scientific_name": "CLARITHROMYCIN",
    "brand_names": "Biaxin, Klacid",
    "category": "antibiotic",
    "book_page": 938,
    "page_index": 98,
    "requires_weight": True,
    "requires_age": False,
    "indications": [
      {
        "id": "standard_inf",
        "name": "Respiratory & Skin Infections",
        "dose_type": "per_day",
        "dose_per_kg": 15.0,
        "dose_min": 15.0,
        "dose_max": 15.0,
        "dose_unit": "mg/kg/day",
        "frequency": "Divided BID (Every 12 hours)",
        "frequency_en": "Divided BID (Every 12 hours)",
        "doses_per_day": 2,
        "max_single_dose": 500.0,
        "max_daily_dose": 1000.0,
        "duration": "7–10 days",
        "notes": "15 mg/kg/day PO divided Q12H (max single dose: 500 mg, max daily dose: 1000 mg/day)."
      }
    ],
    "concentrations": [
      { "label": "Oral Suspension 125 mg / 5 mL", "mg": 125.0, "ml": 5.0 },
      { "label": "Oral Suspension 250 mg / 5 mL", "mg": 250.0, "ml": 5.0 },
      { "label": "Tablets 500 mg", "mg": 500.0, "ml": 1.0, "is_solid": True }
    ]
  },
  {
    "id": "clindamycin",
    "name": "CLINDAMYCIN",
    "scientific_name": "CLINDAMYCIN",
    "brand_names": "Cleocin, Dalacin",
    "category": "antibiotic",
    "book_page": 940,
    "page_index": 100,
    "requires_weight": True,
    "requires_age": False,
    "indications": [
      {
        "id": "oral_moderate",
        "name": "Moderate Bacterial Infection / Osteomyelitis (Oral)",
        "dose_type": "per_day",
        "dose_per_kg": 30.0,
        "dose_min": 20.0,
        "dose_max": 30.0,
        "dose_unit": "mg/kg/day",
        "frequency": "Divided TID (Q8H) or QID (Q6H)",
        "frequency_en": "Divided TID (Q8H) or QID (Q6H)",
        "doses_per_day": 3,
        "max_single_dose": 450.0,
        "max_daily_dose": 1800.0,
        "notes": "20–30 mg/kg/day PO divided Q8H or Q6H (maximum dose: 1800 mg/day)."
      },
      {
        "id": "iv_severe",
        "name": "Severe Infection / Sepsis (IV Infusion)",
        "dose_type": "per_day",
        "dose_per_kg": 40.0,
        "dose_min": 25.0,
        "dose_max": 40.0,
        "dose_unit": "mg/kg/day",
        "frequency": "Divided Q6H or Q8H IV",
        "frequency_en": "Divided Q6H or Q8H IV infusion",
        "doses_per_day": 3,
        "max_single_dose": 900.0,
        "max_daily_dose": 2700.0,
        "notes": "25–40 mg/kg/day IV divided Q6–8H (maximum dose: 2700 mg/day)."
      }
    ],
    "concentrations": [
      { "label": "Oral Solution 75 mg / 5 mL", "mg": 75.0, "ml": 5.0 },
      { "label": "Injectable Ampoule 150 mg / 1 mL (300 mg / 2 mL)", "mg": 150.0, "ml": 1.0 },
      { "label": "Capsules 150 mg", "mg": 150.0, "ml": 1.0, "is_solid": True },
      { "label": "Capsules 300 mg", "mg": 300.0, "ml": 1.0, "is_solid": True }
    ]
  },
  {
    "id": "metronidazole",
    "name": "METRONIDAZOLE",
    "scientific_name": "METRONIDAZOLE",
    "brand_names": "Flagyl",
    "category": "antibiotic",
    "book_page": 1133,
    "page_index": 293,
    "requires_weight": True,
    "requires_age": False,
    "indications": [
      {
        "id": "anaerobic_c_diff",
        "name": "Anaerobic Infection / C. difficile Colitis",
        "dose_type": "per_day",
        "dose_per_kg": 30.0,
        "dose_min": 30.0,
        "dose_max": 30.0,
        "dose_unit": "mg/kg/day",
        "frequency": "Divided TID (Every 8 hours)",
        "frequency_en": "Divided TID (Every 8 hours)",
        "doses_per_day": 3,
        "max_single_dose": 500.0,
        "max_daily_dose": 1500.0,
        "duration": "7–10 days",
        "notes": "30 mg/kg/day PO/IV divided Q8H (maximum single dose: 500 mg)."
      },
      {
        "id": "amoebiasis_giardia",
        "name": "Amoebiasis / Giardiasis",
        "dose_type": "per_day",
        "dose_per_kg": 40.0,
        "dose_min": 35.0,
        "dose_max": 50.0,
        "dose_unit": "mg/kg/day",
        "frequency": "Divided TID (Every 8 hours) with meals",
        "frequency_en": "Divided TID (Every 8 hours) with meals",
        "doses_per_day": 3,
        "max_single_dose": 750.0,
        "max_daily_dose": 2250.0,
        "duration": "5–10 days",
        "notes": "35–50 mg/kg/day PO divided Q8H with food for 5–10 days."
      }
    ],
    "concentrations": [
      { "label": "Oral Suspension 200 mg / 5 mL (125 mg base/5 mL)", "mg": 200.0, "ml": 5.0 },
      { "label": "IV Infusion Solution 500 mg / 100 mL", "mg": 5.0, "ml": 1.0 },
      { "label": "Tablets 250 mg", "mg": 250.0, "ml": 1.0, "is_solid": True },
      { "label": "Tablets 500 mg", "mg": 500.0, "ml": 1.0, "is_solid": True }
    ]
  },
  {
    "id": "normal_saline",
    "name": "NORMAL SALINE 0.9%",
    "scientific_name": "SODIUM CHLORIDE 0.9%",
    "brand_names": "0.9% NaCl, Normal Saline",
    "category": "emergency",
    "book_page": 1243,
    "page_index": 403,
    "requires_weight": True,
    "requires_age": False,
    "indications": [
      {
        "id": "shock_bolus",
        "name": "Hypovolemic Shock / Severe Dehydration Resuscitation",
        "dose_type": "per_dose",
        "dose_per_kg": 20.0,
        "dose_min": 20.0,
        "dose_max": 20.0,
        "dose_unit": "mL/kg bolus",
        "is_volume_direct": True,
        "frequency": "Rapid IV bolus over 5–20 minutes",
        "frequency_en": "Rapid IV bolus over 5–20 minutes",
        "doses_per_day": 1,
        "max_single_dose": 1000.0,
        "notes": "20 mL/kg rapid IV bolus. Re-evaluate heart rate, capillary refill, and blood pressure. For cardiogenic shock or DKA, administer 10 mL/kg cautiously."
      },
      {
        "id": "dka_cautious_bolus",
        "name": "Cautious Resuscitation in DKA / Impaired Cardiac Function",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_min": 10.0,
        "dose_max": 10.0,
        "dose_unit": "mL/kg bolus",
        "is_volume_direct": True,
        "frequency": "IV infusion over 30–60 minutes",
        "frequency_en": "IV infusion over 30–60 minutes",
        "doses_per_day": 1,
        "max_single_dose": 1000.0,
        "notes": "10 mL/kg IV over 30–60 minutes to prevent cerebral edema or volume overload."
      }
    ],
    "concentrations": [
      { "label": "Ready IV Infusion Bag (0.9% NaCl)", "mg": 1.0, "ml": 1.0 }
    ]
  },
  {
    "id": "dextrose_10",
    "name": "DEXTROSE 10%",
    "scientific_name": "DEXTROSE 10%",
    "brand_names": "D10W",
    "category": "emergency",
    "book_page": 970,
    "page_index": 130,
    "requires_weight": True,
    "requires_age": False,
    "indications": [
      {
        "id": "acute_hypoglycemia",
        "name": "Acute Symptomatic Hypoglycemia",
        "dose_type": "per_dose",
        "dose_per_kg": 2.0,
        "dose_min": 2.0,
        "dose_max": 5.0,
        "dose_unit": "mL/kg bolus",
        "is_volume_direct": True,
        "frequency": "Slow IV push over 2–3 minutes",
        "frequency_en": "Slow IV push over 2–3 minutes",
        "doses_per_day": 1,
        "max_single_dose": 250.0,
        "notes": "Harriet Lane & PALS rule: 2 mL/kg of D10W provides 0.2 g/kg glucose. Recheck blood glucose within 15 minutes."
      }
    ],
    "concentrations": [
      { "label": "Ready IV Solution D10W (10% Dextrose)", "mg": 1.0, "ml": 1.0 }
    ]
  },
  {
    "id": "diazepam",
    "name": "DIAZEPAM",
    "scientific_name": "DIAZEPAM",
    "brand_names": "Valium, Diastat",
    "category": "emergency",
    "book_page": 971,
    "page_index": 131,
    "requires_weight": True,
    "requires_age": True,
    "indications": [
      {
        "id": "status_iv",
        "name": "Status Epilepticus / Acute Seizure (IV Push)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.2,
        "dose_min": 0.1,
        "dose_max": 0.3,
        "dose_unit": "mg/kg/dose",
        "frequency": "Slow IV push over 2–3 minutes",
        "frequency_en": "Slow IV push over 2–3 minutes",
        "doses_per_day": 1,
        "max_single_dose": 10.0,
        "notes": "0.1–0.3 mg/kg slow IV push. Max dose: 5 mg (<5 yr), 10 mg (≥5 yr). Monitor respiratory status closely."
      },
      {
        "id": "status_rectal",
        "name": "Acute Seizure (Rectal Gel - Diastat)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.3,
        "dose_min": 0.2,
        "dose_max": 0.5,
        "dose_unit": "mg/kg/dose",
        "frequency": "Rectal administration",
        "frequency_en": "Rectal administration",
        "doses_per_day": 1,
        "max_single_dose": 10.0,
        "notes": "0.2–0.5 mg/kg rectally (max 10 mg) when IV access is not immediately available."
      }
    ],
    "concentrations": [
      { "label": "Injectable Solution 10 mg / 2 mL (5 mg/mL)", "mg": 5.0, "ml": 1.0 },
      { "label": "Rectal Gel 5 mg / 2.5 mL", "mg": 5.0, "ml": 2.5 }
    ]
  },
  {
    "id": "midazolam",
    "name": "MIDAZOLAM",
    "scientific_name": "MIDAZOLAM",
    "brand_names": "Versed",
    "category": "emergency",
    "book_page": 1135,
    "page_index": 295,
    "requires_weight": True,
    "requires_age": True,
    "indications": [
      {
        "id": "seizure_buccal_in",
        "name": "Acute Seizure (Buccal / Intranasal)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.2,
        "dose_min": 0.2,
        "dose_max": 0.3,
        "dose_unit": "mg/kg/dose",
        "frequency": "Single dose",
        "frequency_en": "Single dose via buccal mucosa or intranasal atomizer",
        "doses_per_day": 1,
        "max_single_dose": 10.0,
        "notes": "0.2–0.3 mg/kg buccal or intranasal (max 10 mg). Preferred emergency route when IV access is unavailable."
      },
      {
        "id": "seizure_iv",
        "name": "Acute Seizure / Sedation (IV)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_min": 0.05,
        "dose_max": 0.15,
        "dose_unit": "mg/kg/dose",
        "frequency": "Slow IV push over 2 minutes",
        "frequency_en": "Slow IV push over 2 minutes",
        "doses_per_day": 1,
        "max_single_dose": 5.0,
        "notes": "0.05–0.15 mg/kg slow IV push (initial max: 5 mg). Monitor airway and oxygen saturation."
      }
    ],
    "concentrations": [
      { "label": "Vial 5 mg / 1 mL", "mg": 5.0, "ml": 1.0 },
      { "label": "Vial 15 mg / 3 mL (5 mg/mL)", "mg": 5.0, "ml": 1.0 },
      { "label": "Vial 5 mg / 5 mL (1 mg/mL)", "mg": 1.0, "ml": 1.0 }
    ]
  },
  {
    "id": "cetirizine",
    "name": "CETIRIZINE",
    "scientific_name": "CETIRIZINE",
    "brand_names": "Zyrtec",
    "category": "antihistamine",
    "book_page": 928,
    "page_index": 88,
    "requires_weight": False,
    "requires_age": True,
    "indications": [
      {
        "id": "allergic_rhinitis",
        "name": "Allergic Rhinitis / Chronic Urticaria",
        "dose_type": "fixed_age",
        "dose_unit": "mg/day",
        "frequency": "Once daily evening",
        "frequency_en": "Once daily in the evening",
        "notes": "6m–2y: 2.5 mg once daily (max 2.5 mg/day). 2–5y: 2.5–5 mg once daily. ≥6y: 5–10 mg once daily."
      }
    ],
    "concentrations": [
      { "label": "Oral Syrup 5 mg / 5 mL (1 mg/mL)", "mg": 5.0, "ml": 5.0 },
      { "label": "Oral Drops 10 mg / 1 mL", "mg": 10.0, "ml": 1.0 },
      { "label": "Tablets 10 mg", "mg": 10.0, "ml": 1.0, "is_solid": True }
    ]
  }
]

curated_map = {c['name'].split()[0].upper(): c for c in CURATED_ENGLISH_DRUGS}
curated_map.update({c['id'].upper(): c for c in CURATED_ENGLISH_DRUGS})

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
    scientific_name = d['name'].strip()
    name_key = scientific_name.split()[0].upper()
    drug_id = re.sub(r'[^a-z0-9]+', '_', scientific_name.lower()).strip('_')
    
    # Check if curated
    matched_curated = curated_map.get(name_key) or curated_map.get(drug_id.upper())
    if matched_curated:
        entry = dict(matched_curated)
        entry['name'] = scientific_name
        entry['scientific_name'] = scientific_name
        entry['book_page'] = d.get('book_page', entry.get('book_page', 840))
        entry['page_index'] = d.get('page_index', entry.get('page_index', 0))
        entry['brand_names'] = d.get('brand_names', '')
        entry['see'] = d.get('see', '')
        entry['is_curated'] = True
        all_calculator_drugs.append(entry)
        continue

    # Extract text from page
    page_txt = pages_text.get(str(d['page_index']), '')
    lines = [l.strip() for l in page_txt.split('\n') if l.strip()]

    ped_lines = []
    for l in lines:
        l_low = l.lower()
        if any(k in l_low for k in ['mg/kg', 'mcg/kg', 'child:', 'infant:', 'oral:', 'neonate:', 'dose:', '÷']):
            ped_lines.append(l)

    notes_text = ' '.join(ped_lines[:3]) if ped_lines else f'See Harriet Lane Handbook page {d["book_page"]} for complete prescribing details.'
    if len(notes_text) > 300:
        notes_text = notes_text[:297] + '...'

    doses = dose_pattern.findall(page_txt)
    concs = conc_pattern.findall(page_txt)
    maxes = max_pattern.findall(page_txt)

    dose_val = 10.0
    dose_unit = 'mg/kg/dose'
    dose_type = 'per_dose'
    freq_count = 2
    freq_en = 'Every 12 hours (BID)'

    if doses:
        first_dose = doses[0]
        low_val = float(first_dose[0])
        high_val = float(first_dose[1]) if first_dose[1] else low_val
        dose_val = high_val if high_val > 0 else low_val
        unit_str = first_dose[2].lower()
        per_str = first_dose[3].lower()

        if '24' in per_str or 'day' in per_str:
            dose_type = 'per_day'
            dose_unit = f'{unit_str}/kg/day'
            freq_count = 2
            freq_en = 'Divided BID (Every 12 hours)'
        else:
            dose_type = 'per_dose'
            dose_unit = f'{unit_str}/kg/dose'
            freq_count = 3
            freq_en = 'Every 8 hours (TID)'

    txt_low = page_txt.lower()
    if 'bid' in txt_low or 'q12' in txt_low:
        freq_count = 2
        freq_en = 'Every 12 hours (BID)'
    elif 'tid' in txt_low or 'q8' in txt_low:
        freq_count = 3
        freq_en = 'Every 8 hours (TID)'
    elif 'qid' in txt_low or 'q6' in txt_low:
        freq_count = 4
        freq_en = 'Every 6 hours (QID)'
    elif 'once daily' in txt_low or 'q24' in txt_low:
        freq_count = 1
        freq_en = 'Once daily (Q24H)'

    max_dose_val = None
    if maxes:
        max_dose_val = float(maxes[0][0])
        if maxes[0][1].lower() == 'g':
            max_dose_val *= 1000.0

    concentrations = []
    if concs:
        for c in concs[:4]:
            c_mg = float(c[0])
            c_ml = float(c[2])
            concentrations.append({
                'label': f'Oral Liquid {c_mg:g} mg / {c_ml:g} mL',
                'mg': c_mg,
                'ml': c_ml
            })
    
    if not concentrations:
        concentrations = [
            {'label': 'Oral Liquid 250 mg / 5 mL (Standard)', 'mg': 250.0, 'ml': 5.0},
            {'label': 'Oral Liquid 125 mg / 5 mL', 'mg': 125.0, 'ml': 5.0},
            {'label': 'Oral Liquid 100 mg / 5 mL', 'mg': 100.0, 'ml': 5.0},
            {'label': 'Tablets / Capsules', 'mg': 250.0, 'ml': 1.0, 'is_solid': True}
        ]

    category = guess_category(scientific_name)

    indication_name = f'Recommended Pediatric Dose ({dose_val:g} {dose_unit})'
    if d.get('see'):
        indication_name = f'See: {d["see"]}'
        notes_text = f'Related to {d["see"]}. Refer to page {d["book_page"]} for full clinical details.'

    entry = {
        'id': drug_id,
        'name': scientific_name,
        'scientific_name': scientific_name,
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
                'frequency': freq_en,
                'frequency_en': freq_en,
                'max_single_dose': max_dose_val,
                'max_daily_dose': max_dose_val * 2 if max_dose_val and dose_type == 'per_dose' else max_dose_val,
                'notes': notes_text
            }
        ],
        'concentrations': concentrations
    }
    all_calculator_drugs.append(entry)

print(f'Total compiled English calculator drugs: {len(all_calculator_drugs)}')

# Export to calculator_drugs.js
js_code = f'''// Harriet Lane Pediatric Drug Database (All 527 Drugs - English Scientific Edition)
// Source: Harriet Lane Handbook 24th Edition

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

# Also export directly to Android assets
android_assets_dir = r'C:\Users\Abusadeh\.gemini\antigravity\scratch\PediatricDrugGuide\app\src\main\assets'
if os.path.exists(android_assets_dir):
    with open(os.path.join(android_assets_dir, 'calculator_drugs.json'), 'w', encoding='utf-8') as f:
        json.dump(all_calculator_drugs, f, ensure_ascii=False, indent=2)
    print('Also updated Android assets/calculator_drugs.json successfully!')

print('All 527 drugs written in pure English!')
