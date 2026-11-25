// Harriet Lane Pediatric Drug Database (All 527 Drugs - English Scientific Edition)
// Source: Harriet Lane Handbook 24th Edition

var CALCULATOR_DRUGS = [
  {
    "id": "acetaminophen",
    "name": "ACETAMINOPHEN",
    "scientific_name": "ACETAMINOPHEN",
    "brand_names": "Tylenol, Tempra, Panadol, FeverAll, Anacin Asprin Free,, Mapap, Paracetamol, and many others including",
    "category": "antipyretic",
    "book_page": 840,
    "page_index": 0,
    "requires_weight": true,
    "requires_age": true,
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
      {
        "label": "Oral Suspension 160 mg / 5 mL (Standard)",
        "mg": 160.0,
        "ml": 5.0
      },
      {
        "label": "Oral Suspension 120 mg / 5 mL",
        "mg": 120.0,
        "ml": 5.0
      },
      {
        "label": "Oral Suspension 250 mg / 5 mL (Forte)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Infant Oral Drops 100 mg / 1 mL",
        "mg": 100.0,
        "ml": 1.0
      },
      {
        "label": "Suppositories 125 mg",
        "mg": 125.0,
        "ml": 1.0,
        "is_solid": true
      },
      {
        "label": "Suppositories 250 mg",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      },
      {
        "label": "Tablets 500 mg",
        "mg": 500.0,
        "ml": 1.0,
        "is_solid": true
      }
    ],
    "see": "",
    "is_curated": true
  },
  {
    "id": "acetazolamide",
    "name": "ACETAZOLAMIDE",
    "scientific_name": "ACETAZOLAMIDE",
    "brand_names": "Various generics; previously available as Diamox, Carbonic anhydrase inhibitor, diuretic",
    "see": "",
    "category": "emergency",
    "book_page": 841,
    "page_index": 1,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (15 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 15.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child (≥2–12 yr): 15 mg/kg/dose Q6 hr, OR 12.5 mg/kg/dose Q4 hr IV up to the following <50 kg: 75 mg/kg/24 hr up to 3750 mg/24 hr with a maximum single dose of 15 mg/kg/dose up to ≥50 kg: 75 mg/kg/24 hr up to 4000 mg/24 hr with a maximum single dose of 15 mg/kg/dose up to"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "acetylcysteine",
    "name": "ACETYLCYSTEINE",
    "scientific_name": "ACETYLCYSTEINE",
    "brand_names": "Various generics, Acetadote; previously available as, Mucomyst",
    "see": "",
    "category": "other",
    "book_page": 842,
    "page_index": 2,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (30 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 30.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: PO: 8–30 mg/kg/24 hr ÷ Q6–8 hr; max. dose: 1000 mg/24 hr IM/IV: 20–40 mg/kg/24 hr ÷ Q6 hr; max. dose: 1000 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "acth",
    "name": "ACTH",
    "scientific_name": "ACTH",
    "brand_names": "",
    "see": "See Corticotropin",
    "category": "other",
    "book_page": 843,
    "page_index": 3,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Corticotropin",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Corticotropin. Refer to page 843 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "acyclovir",
    "name": "ACYCLOVIR",
    "scientific_name": "ACYCLOVIR",
    "brand_names": "Zovirax and generics, Antiviral",
    "see": "",
    "category": "antibiotic",
    "book_page": 843,
    "page_index": 3,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "IV (see remarks for 2-bag method): 150 mg/kg (max. 15 g/dose) × 1 diluted in D 5 W or D 5 W½NS administered over 60 min, followed by 50 mg/kg (max. 5 g/dose) diluted in D 5 W administered over 4 hr, then 100 mg/kg (max. 10 g/dose) diluted in D 5 W administered"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "adapalene_benzoyl_peroxide",
    "name": "ADAPALENE ± BENZOYL PEROXIDE",
    "scientific_name": "ADAPALENE ± BENZOYL PEROXIDE",
    "brand_names": "Differin and generics, In combination with benzoyl peroxide: Epiduo, Epiduo",
    "see": "",
    "category": "other",
    "book_page": 845,
    "page_index": 5,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (80 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 80.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Max. dose of oral acyclovir in children = 80 mg/kg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "adderall",
    "name": "ADDERALL",
    "scientific_name": "ADDERALL",
    "brand_names": "",
    "see": "See Dextroamphetamine ± Amphetamine",
    "category": "other",
    "book_page": 846,
    "page_index": 6,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Dextroamphetamine ± Amphetamine",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Dextroamphetamine ± Amphetamine. Refer to page 846 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "adenosine",
    "name": "ADENOSINE",
    "scientific_name": "ADENOSINE",
    "brand_names": "Generics; previously available as Adenocard",
    "see": "",
    "category": "other",
    "book_page": 846,
    "page_index": 6,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: 0.05–0.1 mg/kg by rapid IV push over 1–2 sec; may increase dose by 0.05–0.1 mg/kg increments every 2 min up to a max. single dose of 0.3 mg/kg or until termination of SVT Child: 0.1 mg/kg (initial max. dose: 6 mg) by rapid IV/IO push over 1–2 sec; may repeat in"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "albumin_human",
    "name": "ALBUMIN, HUMAN",
    "scientific_name": "ALBUMIN, HUMAN",
    "brand_names": "Albuked, Albumin-ZLB, Albuminex, AlbuRx, Albutein,, Kedbumin, and many others",
    "see": "",
    "category": "other",
    "book_page": 847,
    "page_index": 7,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 g/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_unit": "g/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 0.5–1 g/kg/dose (max. dose: 25 g/dose) IV over 30–120 min; repeat Q1–2 days PRN Max. dose: 2 g/kg/24 hr Child: 0.5–1 g/kg/dose IV rapid infusion; after 15–30 min, may repeat PRN"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 2 mg / 5 mL",
        "mg": 2.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "albuterol",
    "name": "ALBUTEROL",
    "scientific_name": "ALBUTEROL",
    "brand_names": "Ventolin HFA (aerosol inhaler), ProAir RespiClick, (breath-activated inhaler), and many generics",
    "see": "",
    "category": "respiratory",
    "book_page": 847,
    "page_index": 7,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 g/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_unit": "g/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 0.5–1 g/kg/dose (max. dose: 25 g/dose) IV over 30–120 min; repeat Q1–2 days PRN Max. dose: 2 g/kg/24 hr Child: 0.5–1 g/kg/dose IV rapid infusion; after 15–30 min, may repeat PRN"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 2 mg / 5 mL",
        "mg": 2.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "allopurinol",
    "name": "ALLOPURINOL",
    "scientific_name": "ALLOPURINOL",
    "brand_names": "Aloprim and generics; previously available as Zyloprim, Uric acid lowering agent, xanthine oxidase inhibitor",
    "see": "",
    "category": "other",
    "book_page": 848,
    "page_index": 8,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 848 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "almotriptan_malate",
    "name": "ALMOTRIPTAN MALATE",
    "scientific_name": "ALMOTRIPTAN MALATE",
    "brand_names": "Generics; previously available as Axert",
    "see": "",
    "category": "other",
    "book_page": 849,
    "page_index": 9,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: Oral: 10 mg/kg/24 hr PO ÷ BID–QID; max. dose: 800 mg/24 hr Injectable: 200 mg/m 2 /24 hr IV ÷ Q6–12 hr; max. dose: 600 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "alprostadil",
    "name": "ALPROSTADIL",
    "scientific_name": "ALPROSTADIL",
    "brand_names": "Prostin VR Pediatric, prostaglandin E 1 , PGE 1, Prostaglandin E 1 , vasodilator",
    "see": "",
    "category": "other",
    "book_page": 850,
    "page_index": 10,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: Initial: 0.05–0.1 mCg/kg/min. Advance to 0.2 mCg/kg/min if necessary. dose. Usual dosage range: 0.01–0.4 mCg/kg/min; doses >0.4 mCg/kg/min not likely to"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 1 mg / 1 mL",
        "mg": 1.0,
        "ml": 1.0
      }
    ]
  },
  {
    "id": "alteplase",
    "name": "ALTEPLASE",
    "scientific_name": "ALTEPLASE",
    "brand_names": "Activase, Cathflo Activase, tPA, Thrombolytic agent, tissue plasminogen activator",
    "see": "",
    "category": "other",
    "book_page": 850,
    "page_index": 10,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: Initial: 0.05–0.1 mCg/kg/min. Advance to 0.2 mCg/kg/min if necessary. dose. Usual dosage range: 0.01–0.4 mCg/kg/min; doses >0.4 mCg/kg/min not likely to"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 1 mg / 1 mL",
        "mg": 1.0,
        "ml": 1.0
      }
    ]
  },
  {
    "id": "aluminum_hydroxide",
    "name": "ALUMINUM HYDROXIDE",
    "scientific_name": "ALUMINUM HYDROXIDE",
    "brand_names": "Various generics; previously available as Amphojel, Antacid, phosphate binder",
    "see": "",
    "category": "other",
    "book_page": 851,
    "page_index": 11,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (150 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 150.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<90 days old: 0.06 mg/kg/hr; max. dose: 2 mg/hr ≥90 days old–21 yr: 0.03 mg/kg/hr; max. dose: 2 mg/hr High-dose initial infusion: 0.1–0.5 mg/kg/hr; max. dose: 25 mg/hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 320 mg / 5 mL",
        "mg": 320.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "aluminum_hydroxide_with_magnesium_hydroxide_simethicone",
    "name": "ALUMINUM HYDROXIDE WITH MAGNESIUM HYDROXIDE ± SIMETHICONE",
    "scientific_name": "ALUMINUM HYDROXIDE WITH MAGNESIUM HYDROXIDE ± SIMETHICONE",
    "brand_names": "Mag-Al; previously available as Maalox",
    "see": "",
    "category": "other",
    "book_page": 852,
    "page_index": 12,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 ml/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_unit": "ml/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child ≤12 yr: 0.5–1 mL/kg/dose (max. dose: 20 mL/dose) PO 1–3 hr PC and HS PRN >12 yr and adult: 10–20 mL PO 1–3 hr PC and HS PRN; max. dose: 80 mL/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "alyftrek",
    "name": "ALYFTREK",
    "scientific_name": "ALYFTREK",
    "brand_names": "",
    "see": "See Vanzacaftor/Tezacaftor/Deutivacaftor",
    "category": "other",
    "book_page": 852,
    "page_index": 12,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Vanzacaftor/Tezacaftor/Deutivacaftor",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_unit": "ml/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Vanzacaftor/Tezacaftor/Deutivacaftor. Refer to page 852 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "amantadine_hydrochloride",
    "name": "AMANTADINE HYDROCHLORIDE",
    "scientific_name": "AMANTADINE HYDROCHLORIDE",
    "brand_names": "Immediate release dosage forms: generics; previously, available as Symmetrel",
    "see": "",
    "category": "antihistamine",
    "book_page": 852,
    "page_index": 12,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 ml/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_unit": "ml/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child ≤12 yr: 0.5–1 mL/kg/dose (max. dose: 20 mL/dose) PO 1–3 hr PC and HS PRN >12 yr and adult: 10–20 mL PO 1–3 hr PC and HS PRN; max. dose: 80 mL/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "amikacin_sulfate",
    "name": "AMIKACIN SULFATE",
    "scientific_name": "AMIKACIN SULFATE",
    "brand_names": "Various generics; previously available as Amikin, Antibiotic, aminoglycoside",
    "see": "",
    "category": "other",
    "book_page": 853,
    "page_index": 13,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (6 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 6.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≥6 yr to <16 yr: 4–6 mg/kg/24 hr PO ÷ BID with the suggested maximum dosage: Neonate: See the following table Postconceptional Age (wk) Postnatal Age (days) Dose (mg/kg/dose) Interval (hr)"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 50 mg / 5 mL",
        "mg": 50.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "aminocaproic_acid",
    "name": "AMINOCAPROIC ACID",
    "scientific_name": "AMINOCAPROIC ACID",
    "brand_names": "Generics; previously available as Amicar",
    "see": "",
    "category": "other",
    "book_page": 854,
    "page_index": 14,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (22.5 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 22.5,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: 15–22.5 mg/kg/24 hr ÷ Q8 hr IV/IM; infants and patients requiring higher doses (e.g., cystic fibrosis) may receive initial doses of 30 mg/kg/24 hr ÷ Q8 hr IV/IM Cystic fibrosis (if available, use patient’s previous therapeutic mg/kg dosage):"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "aminophylline",
    "name": "AMINOPHYLLINE",
    "scientific_name": "AMINOPHYLLINE",
    "brand_names": "Various generics, Bronchodilator, methylxanthine",
    "see": "",
    "category": "respiratory",
    "book_page": 855,
    "page_index": 15,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (100 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 100.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Loading dose: 100–200 mg/kg Maintenance: 50–100 mg/kg/dose Q4–6 hr; max. dose: 24–30 g/24 hr controlled. Max. dose: 30 g/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "amiodarone_hcl",
    "name": "AMIODARONE HCL",
    "scientific_name": "AMIODARONE HCL",
    "brand_names": "Pacerone, Nexterone, and generics, Antiarrhythmic, Class III",
    "see": "",
    "category": "other",
    "book_page": 856,
    "page_index": 16,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (15 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 15.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<1 yr: 600–800 mg/1.73 m 2 /24 hr ÷ Q12–24 hr × 4–14 days and/or until adequate ≥1 yr: 10–15 mg/kg/24 hr ÷ Q12–24 hr × 4–14 days and/or until adequate control achieved, then reduce to 5 mg/kg/24 hr ÷ Q12–24 hr if effective"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "amitriptyline",
    "name": "AMITRIPTYLINE",
    "scientific_name": "AMITRIPTYLINE",
    "brand_names": "Generics; previously available as Elavil",
    "see": "",
    "category": "other",
    "book_page": 857,
    "page_index": 17,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 1.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Long elimination half-life (IV single dose: 9–36 days, chronic oral dosing: 40–55 days). Major metabolite N-desethylamiodarone is active with a long half-life (IV single dose: 9– Child (9–12 yr): Start with 1 mg/kg/24 hr ÷ TID PO for 3 days; then increase to"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cyp2d6",
    "name": "CYP2D6",
    "scientific_name": "CYP2D6",
    "brand_names": "Intermediate",
    "see": "",
    "category": "other",
    "book_page": 858,
    "page_index": 18,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Adult: 40–100 mg/24 hr ÷ QHS–BID PO; dose may be gradually increased up to 300 mg/24 hr if Child: Initial: 0.1 mg/kg/dose QHS PO; increase as needed and tolerated over 2–3 wk to 0.5–2 mg/kg/dose QHS."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cyp2c19",
    "name": "CYP2C19",
    "scientific_name": "CYP2C19",
    "brand_names": "Consider alternative",
    "see": "",
    "category": "other",
    "book_page": 858,
    "page_index": 18,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Adult: 40–100 mg/24 hr ÷ QHS–BID PO; dose may be gradually increased up to 300 mg/24 hr if Child: Initial: 0.1 mg/kg/dose QHS PO; increase as needed and tolerated over 2–3 wk to 0.5–2 mg/kg/dose QHS."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "amlodipine",
    "name": "AMLODIPINE",
    "scientific_name": "AMLODIPINE",
    "brand_names": "Norvasc, Norliqva, Katerzia, and generics, Calcium channel blocker, antihypertensive",
    "see": "",
    "category": "cardio",
    "book_page": 859,
    "page_index": 19,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<6 yr (limited data): Start with 0.1 mg/kg/dose (max. dose: 5 mg) PO once daily–BID; dosage may be gradually increased to a max. dose of 0.6 mg/kg/24 hr up to 5 mg/24 hr. may require higher mg/kg doses than older children and adults. A BID dosing regimen may"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ammonul",
    "name": "AMMONUL",
    "scientific_name": "AMMONUL",
    "brand_names": "",
    "see": "See Sodium Phenylacetate + Sodium Benzoate",
    "category": "other",
    "book_page": 859,
    "page_index": 19,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Sodium Phenylacetate + Sodium Benzoate",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Sodium Phenylacetate + Sodium Benzoate. Refer to page 859 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "amoxicillin",
    "name": "AMOXICILLIN",
    "scientific_name": "AMOXICILLIN",
    "brand_names": "Various generics; previously available as Amoxil and, Trimox",
    "category": "antibiotic",
    "book_page": 860,
    "page_index": 20,
    "requires_weight": true,
    "requires_age": false,
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
      {
        "label": "Oral Suspension 400 mg / 5 mL (Recommended for High Dose)",
        "mg": 400.0,
        "ml": 5.0
      },
      {
        "label": "Oral Suspension 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Suspension 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Capsules 500 mg",
        "mg": 500.0,
        "ml": 1.0,
        "is_solid": true
      }
    ],
    "see": "",
    "is_curated": true
  },
  {
    "id": "amoxicillin_clavulanic_acid",
    "name": "AMOXICILLIN-CLAVULANIC ACID",
    "scientific_name": "AMOXICILLIN-CLAVULANIC ACID",
    "brand_names": "Augmentin, Augmentin ES-600, and generics; previously, available as Augmentin XR",
    "see": "",
    "category": "antibiotic",
    "book_page": 860,
    "page_index": 20,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (30 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 30.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Standard dose: 20–30 mg/kg/24 hr ÷ Q12 hr PO Standard dose: 25–50 mg/kg/24 hr ÷ Q8–12 hr PO pneumoniae; see remarks): 80–90 mg/kg/24 hr ÷ Q8–12 hr PO; the Q8 hr dosage"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 400 mg / 5 mL",
        "mg": 400.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "amphetamine",
    "name": "AMPHETAMINE",
    "scientific_name": "AMPHETAMINE",
    "brand_names": "Evekeo, Adzenys XR-ODT, Dyanavel XR, and generics, CNS stimulant",
    "see": "",
    "category": "antihistamine",
    "book_page": 862,
    "page_index": 22,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (90 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 90.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Higher doses of 80–90 mg/kg/24 hr (amoxicillin component) have been recommended for response. Max. dose: 6–12 yr: 18.8 mg/24 hr; 13–18 yr: 12.5 mg/24 hr."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "amphotericin_b_deoxycholate_conventional",
    "name": "AMPHOTERICIN B DEOXYCHOLATE (CONVENTIONAL)",
    "scientific_name": "AMPHOTERICIN B DEOXYCHOLATE (CONVENTIONAL)",
    "brand_names": "Various generics; previously available as Fungizone, Antifungal, polyene",
    "see": "",
    "category": "other",
    "book_page": 863,
    "page_index": 23,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Optional test dose: 0.1 mg/kg/dose IV up to max. dose of 1 mg (followed by remaining initial Initial dose: 0.5–1 mg/kg/24 hr; if test dose NOT used, infuse first dose over 6 hr and monitor Increment: Increase as tolerated by 0.25–0.5 mg/kg/24 hr once daily or every other day. Use"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "amphotericin_b_lipid_complex",
    "name": "AMPHOTERICIN B LIPID COMPLEX",
    "scientific_name": "AMPHOTERICIN B LIPID COMPLEX",
    "brand_names": "Abelcet, ABLC, Antifungal, polyene",
    "see": "",
    "category": "other",
    "book_page": 864,
    "page_index": 24,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (5 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 5.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": 25.0,
        "max_daily_dose": 25.0,
        "notes": "IV: 5 mg/kg/24 hr once daily IV: 3–5 mg/kg/24 hr once daily IV: 5 mg/kg/24 hr once daily; use in combination with flucytosine or fluconazole for HIV"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "amphotericin_b_liposomal",
    "name": "AMPHOTERICIN B, LIPOSOMAL",
    "scientific_name": "AMPHOTERICIN B, LIPOSOMAL",
    "brand_names": "AmBisome and generics, Antifungal, polyene",
    "see": "",
    "category": "other",
    "book_page": 865,
    "page_index": 25,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (5 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 5.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Systemic fungal infections: 3–5 mg/kg/24 hr IV once daily; an upper dosage limit of 10 mg/kg/24 hr has been suggested based on pharmacokinetic endpoints and risk for hypokalemia. However, dosages as high as 15 mg/kg/24 hr have been used. Dosages as"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ampicillin",
    "name": "AMPICILLIN",
    "scientific_name": "AMPICILLIN",
    "brand_names": "Many generics, Antibiotic, aminopenicillin",
    "see": "",
    "category": "antibiotic",
    "book_page": 866,
    "page_index": 26,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (100 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 100.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": 8000.0,
        "max_daily_dose": 8000.0,
        "notes": "Postnatal age ≤7 days old: 100 mg/kg/24 hr ÷ Q12 hr Postnatal age 8–<28 days old: 150 mg/kg/24 hr ÷ Q12 hr Postnatal age ≤28 days old: 150 mg/kg/24 hr ÷ Q8 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ampicillin_sulbactam",
    "name": "AMPICILLIN/SULBACTAM",
    "scientific_name": "AMPICILLIN/SULBACTAM",
    "brand_names": "Unasyn and generics, Antibiotic, aminopenicillin with β-lactamase inhibitor",
    "see": "",
    "category": "antibiotic",
    "book_page": 867,
    "page_index": 27,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (100 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 100.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: Premature (based on pharmacokinetic data): 100 mg/kg/24 hr ÷ Q12 hr IM/IV Full term: 100 mg/kg/24 hr ÷ Q8 hr IM/IV"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 0.67 mL",
        "mg": 100.0,
        "ml": 0.67
      }
    ]
  },
  {
    "id": "anakinra",
    "name": "ANAKINRA",
    "scientific_name": "ANAKINRA",
    "brand_names": "Kineret",
    "see": "",
    "category": "other",
    "book_page": 867,
    "page_index": 27,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (100 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 100.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: Premature (based on pharmacokinetic data): 100 mg/kg/24 hr ÷ Q12 hr IM/IV Full term: 100 mg/kg/24 hr ÷ Q8 hr IM/IV"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 0.67 mL",
        "mg": 100.0,
        "ml": 0.67
      }
    ]
  },
  {
    "id": "arginine_hydrochloride_injectable",
    "name": "ARGININE HYDROCHLORIDE―INJECTABLE",
    "scientific_name": "ARGININE HYDROCHLORIDE―INJECTABLE",
    "brand_names": "",
    "see": "",
    "category": "other",
    "book_page": 869,
    "page_index": 29,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "children due to SARS-CoV-2 has reported doses of 5–10 mg/kg/24 hr IV or SQ ÷ once"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "preparation",
    "name": "PREPARATION",
    "scientific_name": "PREPARATION",
    "brand_names": "R-Gene 10",
    "see": "",
    "category": "other",
    "book_page": 869,
    "page_index": 29,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "children due to SARS-CoV-2 has reported doses of 5–10 mg/kg/24 hr IV or SQ ÷ once"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "aripiprazole",
    "name": "ARIPIPRAZOLE",
    "scientific_name": "ARIPIPRAZOLE",
    "brand_names": "Abilify, Abilify Asimtufil, Abilify Maintena, Abilify, MyCite Starter Kit, Abilify MyCite Maintenance Kit, and",
    "see": "",
    "category": "antibiotic",
    "book_page": 869,
    "page_index": 29,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "children due to SARS-CoV-2 has reported doses of 5–10 mg/kg/24 hr IV or SQ ÷ once"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "arnuity_ellipta",
    "name": "ARNUITY ELLIPTA",
    "scientific_name": "ARNUITY ELLIPTA",
    "brand_names": "",
    "see": "See Fluticasone Preparations",
    "category": "other",
    "book_page": 871,
    "page_index": 31,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Fluticasone Preparations",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Fluticasone Preparations. Refer to page 871 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 500 mg / 5 mL",
        "mg": 500.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "ascorbic_acid",
    "name": "ASCORBIC ACID",
    "scientific_name": "ASCORBIC ACID",
    "brand_names": "Vitamin C; many brands and generics, Water-soluble vitamin",
    "see": "",
    "category": "other",
    "book_page": 871,
    "page_index": 31,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 100–300 mg/24 hr ÷ once daily–BID for at least 2 wk"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 500 mg / 5 mL",
        "mg": 500.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "aspirin",
    "name": "ASPIRIN",
    "scientific_name": "ASPIRIN",
    "brand_names": "ASA, various trade names and generics",
    "see": "",
    "category": "other",
    "book_page": 872,
    "page_index": 32,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (15 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 15.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Analgesic/antipyretic: 10–15 mg/kg/dose PO/PR Q4–6 hr up to total of 60–80 mg/kg/24 hr Max. dose: 4 g/24 hr Antiinflammatory: 60–100 mg/kg/24 hr PO ÷ Q6–8 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "atenolol",
    "name": "ATENOLOL",
    "scientific_name": "ATENOLOL",
    "brand_names": "Tenormin and generics, β 1 -selective adrenergic blocker",
    "see": "",
    "category": "cardio",
    "book_page": 873,
    "page_index": 33,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child and adolescent: 0.5–1 mg/kg/dose PO once daily–BID; max. dose: 2 mg/kg/24 hr up Adult: 25–100 mg/dose PO once daily–BID; max. dose: 100 mg/24 hr Infant: Start at 0.5 mg/kg/dose PO once daily for 1 week, then increase to 1 mg/kg/dose PO"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "atomoxetine",
    "name": "ATOMOXETINE",
    "scientific_name": "ATOMOXETINE",
    "brand_names": "Strattera and generics",
    "see": "",
    "category": "other",
    "book_page": 873,
    "page_index": 33,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child and adolescent: 0.5–1 mg/kg/dose PO once daily–BID; max. dose: 2 mg/kg/24 hr up Adult: 25–100 mg/dose PO once daily–BID; max. dose: 100 mg/24 hr Infant: Start at 0.5 mg/kg/dose PO once daily for 1 week, then increase to 1 mg/kg/dose PO"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "atovaquone",
    "name": "ATOVAQUONE",
    "scientific_name": "ATOVAQUONE",
    "brand_names": "Mepron and generics, Antiprotozoal",
    "see": "",
    "category": "other",
    "book_page": 874,
    "page_index": 34,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1.2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 1.2,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Doses >1.2 mg/kg/24 hr in patients ≤70 kg have not been shown to be of additional benefit. Child: 30–40 mg/kg/24 hr PO ÷ BID with fatty foods; max. dose: 1500 mg/24 hr. Infants 4–24 mo may require higher doses of 45 mg/kg/24 hr."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 750 mg / 5 mL",
        "mg": 750.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "atropine_sulfate",
    "name": "ATROPINE SULFATE",
    "scientific_name": "ATROPINE SULFATE",
    "brand_names": "Many generics; previously available as AtroPen and, Isopto Atropine",
    "see": "",
    "category": "other",
    "book_page": 875,
    "page_index": 35,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.02 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.02,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: 0.01–0.02 mg/kg/dose IV (over 1 min)/IM prior to other premedications Child: 0.02 mg/kg/dose IV/IO/IM; max. dose: 0.5 mg/dose Child: 0.02 mg/kg/dose IV/IO/IM (use 1 mg/mL for IM) Q5 min × 2–3 doses PRN;"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 0.25 mg / 5 mL",
        "mg": 0.25,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 0.5 mg / 5 mL",
        "mg": 0.5,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 1 mg / 10 mL",
        "mg": 1.0,
        "ml": 10.0
      }
    ]
  },
  {
    "id": "azathioprine",
    "name": "AZATHIOPRINE",
    "scientific_name": "AZATHIOPRINE",
    "brand_names": "Imuran, Azasan, and generics, Immunosuppressant",
    "see": "",
    "category": "other",
    "book_page": 876,
    "page_index": 36,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (5 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 5.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "40 minutes prior to the intended maximal dilation time with the following max. dose: Initial: 3–5 mg/kg/24 hr IV/PO once daily Maintenance: 1–3 mg/kg/24 hr IV/PO once daily"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "azelastine",
    "name": "AZELASTINE",
    "scientific_name": "AZELASTINE",
    "brand_names": "Astepro, Children's Astepro, and generics; previously, available as Opitvar",
    "see": "",
    "category": "antihistamine",
    "book_page": 877,
    "page_index": 37,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 877 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "azelastine_and_fluticasone",
    "name": "AZELASTINE AND FLUTICASONE",
    "scientific_name": "AZELASTINE AND FLUTICASONE",
    "brand_names": "Dymista and generics, Intranasal antihistamine and corticosteroid",
    "see": "",
    "category": "steroid",
    "book_page": 878,
    "page_index": 38,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (5 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 5.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Tablet or oral suspension (mild infection or step-down therapy): 10 mg/kg (max. dose: 500 mg) PO on day 1, followed by 5 mg/kg/24 hr (max. dose: 250 mg/24 hr) PO once daily on IV and PO regimen (severe infection): 10 mg/kg/dose (max. dose: 500 mg/dose) IV once daily for"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 200 mg / 5 mL",
        "mg": 200.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "azithromycin",
    "name": "AZITHROMYCIN",
    "scientific_name": "AZITHROMYCIN",
    "brand_names": "Zithromax, Zithromax TRI-PAK, Zithromax Z-PAK,, AzaSite, and generics",
    "category": "antibiotic",
    "book_page": 878,
    "page_index": 38,
    "requires_weight": true,
    "requires_age": false,
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
      {
        "label": "Oral Suspension 200 mg / 5 mL",
        "mg": 200.0,
        "ml": 5.0
      },
      {
        "label": "Oral Suspension 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets 250 mg",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      },
      {
        "label": "Tablets 500 mg",
        "mg": 500.0,
        "ml": 1.0,
        "is_solid": true
      }
    ],
    "see": "",
    "is_curated": true
  },
  {
    "id": "aztreonam",
    "name": "AZTREONAM",
    "scientific_name": "AZTREONAM",
    "brand_names": "Azactam, Cayston, and generic intravenous products, Antibiotic, monobactam",
    "see": "",
    "category": "other",
    "book_page": 880,
    "page_index": 40,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (30 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 30.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: 30 mg/kg/dose IV/IM (higher doses may be necessary for meningitis): Child: 90–120 mg/kg/24 hr ÷ Q6–8 hr IV/IM; max. dose: 2 g/dose and 8 g/24 hr."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 200 mg / 5 mL",
        "mg": 200.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "bacitracin_polymyxin_b",
    "name": "BACITRACIN ± POLYMYXIN B",
    "scientific_name": "BACITRACIN ± POLYMYXIN B",
    "brand_names": "Various ophthalmic and topical generic products",
    "see": "",
    "category": "other",
    "book_page": 881,
    "page_index": 41,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 881 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "bacitracin_in_combination_with_polymyxin_b",
    "name": "BACITRACIN IN COMBINATION WITH POLYMYXIN B:",
    "scientific_name": "BACITRACIN IN COMBINATION WITH POLYMYXIN B:",
    "brand_names": "Ophthalmic ointment (Polycin and generics): 500 units bacitracin +10,000 units, polymyxin B/g (3.5 g)",
    "see": "",
    "category": "other",
    "book_page": 881,
    "page_index": 41,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 881 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "bacitracin_polymyxin_b",
    "name": "BACITRACIN + POLYMYXIN B:",
    "scientific_name": "BACITRACIN + POLYMYXIN B:",
    "brand_names": "",
    "see": "",
    "category": "other",
    "book_page": 881,
    "page_index": 41,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 881 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "baclofen",
    "name": "BACLOFEN",
    "scientific_name": "BACLOFEN",
    "brand_names": "Lioresal, Gablofen, Lyvispah, Ozobax DS, Fleqsuvy, and, generics",
    "see": "",
    "category": "other",
    "book_page": 881,
    "page_index": 41,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 881 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "beclomethasone_dipropionate",
    "name": "BECLOMETHASONE DIPROPIONATE",
    "scientific_name": "BECLOMETHASONE DIPROPIONATE",
    "brand_names": "QVAR Redihaler, Qnasl Children’s, Qnasl, Corticosteroid",
    "see": "",
    "category": "steroid",
    "book_page": 883,
    "page_index": 43,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Breath-activated inhalation aerosol, oral: Corticosteroid naïve: Start at 40–80 mCg BID; max. dose: 320 mCg BID Previous corticosteroid use: Start at 40–160 mCg BID; max. dose: 320 mCg BID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "benzoyl_peroxide",
    "name": "BENZOYL PEROXIDE",
    "scientific_name": "BENZOYL PEROXIDE",
    "brand_names": "Acne Medication, Benzac, PanOxyl, and many other, products including generics",
    "see": "",
    "category": "other",
    "book_page": 884,
    "page_index": 44,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 884 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "benztropine_mesylate",
    "name": "BENZTROPINE MESYLATE",
    "scientific_name": "BENZTROPINE MESYLATE",
    "brand_names": "Generics; previously available as Cogentin",
    "see": "",
    "category": "other",
    "book_page": 885,
    "page_index": 45,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.05 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.05,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": ">3 yr: 0.02–0.05 mg/kg/dose once daily–BID Child: 0.02 mg/kg/dose (max. dose: 1 mg) × 1"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "beractant",
    "name": "BERACTANT",
    "scientific_name": "BERACTANT",
    "brand_names": "",
    "see": "See Surfactant, pulmonary",
    "category": "other",
    "book_page": 886,
    "page_index": 46,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Surfactant, pulmonary",
        "dose_type": "per_day",
        "dose_per_kg": 0.125,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Surfactant, pulmonary. Refer to page 886 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "betamethasone",
    "name": "BETAMETHASONE",
    "scientific_name": "BETAMETHASONE",
    "brand_names": "Injection: Celestone Soluspan and generics, Topical: Diprolene, Sernivo, and generics",
    "see": "",
    "category": "steroid",
    "book_page": 886,
    "page_index": 46,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.125 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.125,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child IM: 0.0175–0.125 mg/kg/24 hr or 0.5–7.5 mg/m 2 /24 hr ÷ Q6–12 hr Adolescent and adult IM: 0.6–9 mg/24 hr ÷ Q12–24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "bicitra",
    "name": "BICITRA",
    "scientific_name": "BICITRA",
    "brand_names": "",
    "see": "See Citrate Mixtures",
    "category": "other",
    "book_page": 887,
    "page_index": 47,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Citrate Mixtures",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Citrate Mixtures. Refer to page 887 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 10 mg / 30 mL",
        "mg": 10.0,
        "ml": 30.0
      }
    ]
  },
  {
    "id": "bisacodyl",
    "name": "BISACODYL",
    "scientific_name": "BISACODYL",
    "brand_names": "Dulcolax, Bisacodyl EC, Fleet Bisacodyl, and various, other names including generics",
    "see": "",
    "category": "other",
    "book_page": 887,
    "page_index": 47,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Max. dose: 14 days and the following specific dosages for maximum amount:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 10 mg / 30 mL",
        "mg": 10.0,
        "ml": 30.0
      }
    ]
  },
  {
    "id": "bismuth_subsalicylate",
    "name": "BISMUTH SUBSALICYLATE",
    "scientific_name": "BISMUTH SUBSALICYLATE",
    "brand_names": "Pepto-Bismol, Pink Bismuth, Stomach Relief, Stomach, Relief Extra Strength, and many others including",
    "see": "",
    "category": "other",
    "book_page": 888,
    "page_index": 48,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (8 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 8.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 8 mg/kg/24 hr PO ÷ BID × 10–14 days, or 262 mg PO QID × 7–14 days has been"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 262 mg / 15 mL",
        "mg": 262.0,
        "ml": 15.0
      },
      {
        "label": "Oral Liquid 525 mg / 15 mL",
        "mg": 525.0,
        "ml": 15.0
      },
      {
        "label": "Oral Liquid 262 mg / 15 mL",
        "mg": 262.0,
        "ml": 15.0
      },
      {
        "label": "Oral Liquid 262 mg / 15 mL",
        "mg": 262.0,
        "ml": 15.0
      }
    ]
  },
  {
    "id": "bosentan",
    "name": "BOSENTAN",
    "scientific_name": "BOSENTAN",
    "brand_names": "Tracleer and generics, Endothelin receptor antagonist",
    "see": "",
    "category": "other",
    "book_page": 889,
    "page_index": 49,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<10 kg: Start at 1 mg/kg/dose PO BID, then increase to 2 mg/kg/dose PO BID."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "breo_ellipta",
    "name": "BREO ELLIPTA",
    "scientific_name": "BREO ELLIPTA",
    "brand_names": "",
    "see": "See Fluticasone Furoate + Vilanterol",
    "category": "other",
    "book_page": 890,
    "page_index": 50,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Fluticasone Furoate + Vilanterol",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Fluticasone Furoate + Vilanterol. Refer to page 890 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 0.25 mg / 2 mL",
        "mg": 0.25,
        "ml": 2.0
      },
      {
        "label": "Oral Liquid 0.5 mg / 2 mL",
        "mg": 0.5,
        "ml": 2.0
      },
      {
        "label": "Oral Liquid 1 mg / 2 mL",
        "mg": 1.0,
        "ml": 2.0
      },
      {
        "label": "Oral Liquid 0.2 mg / 1 mL",
        "mg": 0.2,
        "ml": 1.0
      }
    ]
  },
  {
    "id": "budesonide",
    "name": "BUDESONIDE",
    "scientific_name": "BUDESONIDE",
    "brand_names": "Pulmicort Respules, Pulmicort Flexhaler, Eohilia,, Tarpeyo, Uceris, and generics; previously available as",
    "see": "",
    "category": "steroid",
    "book_page": 890,
    "page_index": 50,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "No prior steroid use: 0.5 mg/24 hr ÷ once daily–BID; max. dose: 0.5 mg/24 hr Prior inhaled steroid use: 0.5 mg/24 hr ÷ once daily–BID; max. dose: 1 mg/24 hr Prior oral steroid use: 1 mg/24 hr ÷ once daily–BID; max. dose: 1 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 0.25 mg / 2 mL",
        "mg": 0.25,
        "ml": 2.0
      },
      {
        "label": "Oral Liquid 0.5 mg / 2 mL",
        "mg": 0.5,
        "ml": 2.0
      },
      {
        "label": "Oral Liquid 1 mg / 2 mL",
        "mg": 1.0,
        "ml": 2.0
      },
      {
        "label": "Oral Liquid 0.2 mg / 1 mL",
        "mg": 0.2,
        "ml": 1.0
      }
    ]
  },
  {
    "id": "budesonide_and_formoterol",
    "name": "BUDESONIDE AND FORMOTEROL",
    "scientific_name": "BUDESONIDE AND FORMOTEROL",
    "brand_names": "Symbicort, Breyna, and generics, Corticosteroid and long-acting β 2 -adrenergic agonist",
    "see": "",
    "category": "respiratory",
    "book_page": 892,
    "page_index": 52,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 892 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "bumetanide",
    "name": "BUMETANIDE",
    "scientific_name": "BUMETANIDE",
    "brand_names": "Bumex and generics, Loop diuretic",
    "see": "",
    "category": "steroid",
    "book_page": 893,
    "page_index": 53,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "dose: 4 inhalations/24 hr Max. dose: 2 inhalations of 160 mCg budesonide + 4.5 mCg formoterol BID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "butorphanol",
    "name": "BUTORPHANOL",
    "scientific_name": "BUTORPHANOL",
    "brand_names": "Generics; previously available as Stadol",
    "see": "",
    "category": "other",
    "book_page": 894,
    "page_index": 54,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.05 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.05,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≤6 mo: 0.01–0.05 mg/kg/dose once daily or every other day Infant and child: PO/IM/IV >6 mo: 0.015–0.1 mg/kg/dose once daily–QID; max. dose: 10 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "caffeine_citrate",
    "name": "CAFFEINE CITRATE",
    "scientific_name": "CAFFEINE CITRATE",
    "brand_names": "Cafcit and generics, Methylxanthine, respiratory stimulant",
    "see": "",
    "category": "other",
    "book_page": 895,
    "page_index": 55,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Loading dose: 20–25 mg/kg IV/PO × 1 Maintenance dose: 5–10 mg/kg/dose PO/IV Q24 hr, to begin 24 hr after loading dose dose vs. mCg/kg/dose per respective age group below):"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "calcitriol",
    "name": "CALCITRIOL",
    "scientific_name": "CALCITRIOL",
    "brand_names": "1,25-dihydroxycholecalciferol, Rocaltrol, and generics, Active form vitamin D, fat soluble",
    "see": "",
    "category": "other",
    "book_page": 895,
    "page_index": 55,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Loading dose: 20–25 mg/kg IV/PO × 1 Maintenance dose: 5–10 mg/kg/dose PO/IV Q24 hr, to begin 24 hr after loading dose dose vs. mCg/kg/dose per respective age group below):"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "calcium_acetate",
    "name": "CALCIUM ACETATE",
    "scientific_name": "CALCIUM ACETATE",
    "brand_names": "Calphron, and generics; previously available as PhosLo;",
    "see": "",
    "category": "other",
    "book_page": 896,
    "page_index": 56,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 896 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 1250 mg / 5 mL",
        "mg": 1250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 400 mg / 5 mL",
        "mg": 400.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "calcium_carbonate",
    "name": "CALCIUM CARBONATE",
    "scientific_name": "CALCIUM CARBONATE",
    "brand_names": "Tums, Children’s Pepto, Children's Mylicon, and many, others including generics; 40% elemental Ca",
    "see": "",
    "category": "other",
    "book_page": 896,
    "page_index": 56,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 896 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 1250 mg / 5 mL",
        "mg": 1250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 400 mg / 5 mL",
        "mg": 400.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "calcium_chloride",
    "name": "CALCIUM CHLORIDE",
    "scientific_name": "CALCIUM CHLORIDE",
    "brand_names": "Various generics; 27% elemental Ca, Calcium supplement",
    "see": "",
    "category": "other",
    "book_page": 897,
    "page_index": 57,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (150 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 150.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: 50–150 mg/kg/24 hr ÷ Q4–6 hr PO; max. dose: 1 g/24 hr Child: 45–65 mg/kg/24 hr PO ÷ QID Adult: 1–2 g/24 hr PO ÷ TID–QID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "calcium_citrate",
    "name": "CALCIUM CITRATE",
    "scientific_name": "CALCIUM CITRATE",
    "brand_names": "Caltrate 600+D3, Citracal Petites, Citracal Maximum, Plus, Citracal Slow Release, Citracal Gummies, Viactiv",
    "see": "",
    "category": "other",
    "book_page": 898,
    "page_index": 58,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (150 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 150.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: 50–150 mg/kg/24 hr PO ÷ Q4–6 hr; max. dose: 1 g/24 hr Child: 45–65 mg/kg/24 hr PO ÷ QID Adult: 1–2 g/24 hr PO ÷ BID–TID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "calcium_gluconate",
    "name": "CALCIUM GLUCONATE",
    "scientific_name": "CALCIUM GLUCONATE",
    "brand_names": "Various generics, 9.3% elemental Ca, Calcium supplement",
    "see": "",
    "category": "other",
    "book_page": 898,
    "page_index": 58,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (150 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 150.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: 50–150 mg/kg/24 hr PO ÷ Q4–6 hr; max. dose: 1 g/24 hr Child: 45–65 mg/kg/24 hr PO ÷ QID Adult: 1–2 g/24 hr PO ÷ BID–TID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "calfactant",
    "name": "CALFACTANT",
    "scientific_name": "CALFACTANT",
    "brand_names": "",
    "see": "See Surfactant, pulmonary",
    "category": "other",
    "book_page": 899,
    "page_index": 59,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Surfactant, pulmonary",
        "dose_type": "per_day",
        "dose_per_kg": 800.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Surfactant, pulmonary. Refer to page 899 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cannabidiol",
    "name": "CANNABIDIOL",
    "scientific_name": "CANNABIDIOL",
    "brand_names": "Epidiolex",
    "see": "",
    "category": "other",
    "book_page": 900,
    "page_index": 60,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2.5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 2.5,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child ≥2 yr and adult: Start at 2.5 mg/kg/dose PO BID × 1 wk; dosage may be increased to a maintenance dose of 5 mg/kg/dose PO BID. Dose may be further increased after 1 wk if needed and tolerated at weekly increments of 2.5 mg/kg/dose BID (5 mg/kg/24 hr) up to"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "captopril",
    "name": "CAPTOPRIL",
    "scientific_name": "CAPTOPRIL",
    "brand_names": "Various generics; previously available as Capoten, Angiotensin-converting enzyme inhibitor,",
    "see": "",
    "category": "cardio",
    "book_page": 901,
    "page_index": 61,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.05 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.05,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: Initially 0.01–0.05 mg/kg/dose PO Q8–12 hr; titrate upward if needed; max. dose: 0.5 mg/kg/dose Q6 hr Infant: Initially 0.05–0.3 mg/kg/dose PO BID–TID; titrate upward if needed; max. dose:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "bid",
    "name": "BID",
    "scientific_name": "BID",
    "brand_names": "Onset within 15–30 min of administration. Peak effect within 1–2 hr. Adjust dose with renal",
    "see": "",
    "category": "other",
    "book_page": 901,
    "page_index": 61,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.05 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.05,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: Initially 0.01–0.05 mg/kg/dose PO Q8–12 hr; titrate upward if needed; max. dose: 0.5 mg/kg/dose Q6 hr Infant: Initially 0.05–0.3 mg/kg/dose PO BID–TID; titrate upward if needed; max. dose:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "carbamazepine",
    "name": "CARBAMAZEPINE",
    "scientific_name": "CARBAMAZEPINE",
    "brand_names": "Epitol, Tegretol, Tegretol-XR, Carbatrol, Equetro, and, various generics",
    "see": "",
    "category": "other",
    "book_page": 901,
    "page_index": 61,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.05 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.05,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: Initially 0.01–0.05 mg/kg/dose PO Q8–12 hr; titrate upward if needed; max. dose: 0.5 mg/kg/dose Q6 hr Infant: Initially 0.05–0.3 mg/kg/dose PO BID–TID; titrate upward if needed; max. dose:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "carbamide_peroxide",
    "name": "CARBAMIDE PEROXIDE",
    "scientific_name": "CARBAMIDE PEROXIDE",
    "brand_names": "Otic solution: Debrox, Clearcanal Earwax Softener,, GoodSense Ear Wax Removal, and many generic",
    "see": "",
    "category": "other",
    "book_page": 903,
    "page_index": 63,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.4 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.4,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Immediate-release dosage forms: 0.2–0.4 mg/kg/24 hr PO ÷ TID–QID; alternative dosing by age (do not exceed 0.4 mg/kg/24 hr):"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 4 mg / 5 mL",
        "mg": 4.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 4 mg / 5 mL",
        "mg": 4.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "carbinoxamine",
    "name": "CARBINOXAMINE",
    "scientific_name": "CARBINOXAMINE",
    "brand_names": "Karbinal ER, RyVent, and many generics, Antihistamine",
    "see": "",
    "category": "antihistamine",
    "book_page": 903,
    "page_index": 63,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.4 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.4,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Immediate-release dosage forms: 0.2–0.4 mg/kg/24 hr PO ÷ TID–QID; alternative dosing by age (do not exceed 0.4 mg/kg/24 hr):"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 4 mg / 5 mL",
        "mg": 4.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 4 mg / 5 mL",
        "mg": 4.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "carnitine",
    "name": "CARNITINE",
    "scientific_name": "CARNITINE",
    "brand_names": "Levocarnitine, Carnitor, Carnitor SF, L-Carnitine, and, generics",
    "see": "",
    "category": "other",
    "book_page": 904,
    "page_index": 64,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (100 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 100.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Oral: Child: 50–100 mg/kg/24 hr PO ÷ Q8–12 hr; increase slowly as needed and tolerated to max. dose Adult: 330 mg to 1 g/dose PO BID–TID; max. dose: 3 g/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "carvedilol",
    "name": "CARVEDILOL",
    "scientific_name": "CARVEDILOL",
    "brand_names": "Coreg, Coreg CR, and generics, Adrenergic antagonist (α and β), antihypertensive",
    "see": "",
    "category": "other",
    "book_page": 905,
    "page_index": 65,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.1,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<62.5 kg: Start at 0.1 mg/kg/24 hr PO ÷ Q12 hr. Dose may be doubled every 2 wk if needed and tolerated up to 0.8–1 mg/kg/24 hr ÷ Q12 hr. Due to altered pharmacokinetics, divide daily"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "caspofungin",
    "name": "CASPOFUNGIN",
    "scientific_name": "CASPOFUNGIN",
    "brand_names": "Cancidas and generics, Antifungal, echinocandin",
    "see": "",
    "category": "antibiotic",
    "book_page": 906,
    "page_index": 66,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Preterm neonate to <3-mo infant: and case series data): 2 mg/kg/dose IV once daily for at least 2 wk after first negative Maximum loading and maintenance dose: 70 mg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cefadroxil",
    "name": "CEFADROXIL",
    "scientific_name": "CEFADROXIL",
    "brand_names": "Generics; previously available as Duricef",
    "see": "",
    "category": "antibiotic",
    "book_page": 907,
    "page_index": 67,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (30 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 30.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: Skin and soft tissue infection, and cystitis: 30 mg/kg/24 hr PO ÷ Q12 hr; max. dose: Group A β-hemolytic streptococci pharyngitis/tonsillitis: 30 mg/kg/24 hr PO ÷ Q12–24 hr;"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 500 mg / 5 mL",
        "mg": 500.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "cefazolin",
    "name": "CEFAZOLIN",
    "scientific_name": "CEFAZOLIN",
    "brand_names": "Generics; previously available as Ancef",
    "see": "",
    "category": "antibiotic",
    "book_page": 907,
    "page_index": 67,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (30 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 30.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: Skin and soft tissue infection, and cystitis: 30 mg/kg/24 hr PO ÷ Q12 hr; max. dose: Group A β-hemolytic streptococci pharyngitis/tonsillitis: 30 mg/kg/24 hr PO ÷ Q12–24 hr;"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 500 mg / 5 mL",
        "mg": 500.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "cefdinir",
    "name": "CEFDINIR",
    "scientific_name": "CEFDINIR",
    "brand_names": "Generics; previously available as Omnicef",
    "see": "",
    "category": "antibiotic",
    "book_page": 908,
    "page_index": 68,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (14 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 14.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "resistant streptococci): 14 mg/kg/24 hr PO ÷ Q12–24 hr; max. dose: 600 mg/24 hr may be more appropriate): 14 mg/kg/24 hr PO ÷ Q12 hr; max. dose: 600 mg/24 hr Second-line therapy for bronchitis, sinusitis, pharyngitis/tonsillitis: 600 mg/24 hr PO ÷ Q12–24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "cefepime",
    "name": "CEFEPIME",
    "scientific_name": "CEFEPIME",
    "brand_names": "Generics; previously available as Maxipime",
    "see": "",
    "category": "antibiotic",
    "book_page": 908,
    "page_index": 68,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (14 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 14.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "resistant streptococci): 14 mg/kg/24 hr PO ÷ Q12–24 hr; max. dose: 600 mg/24 hr may be more appropriate): 14 mg/kg/24 hr PO ÷ Q12 hr; max. dose: 600 mg/24 hr Second-line therapy for bronchitis, sinusitis, pharyngitis/tonsillitis: 600 mg/24 hr PO ÷ Q12–24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "cefiderocol",
    "name": "CEFIDEROCOL",
    "scientific_name": "CEFIDEROCOL",
    "brand_names": "Fetroja",
    "see": "",
    "category": "antibiotic",
    "book_page": 909,
    "page_index": 69,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (60 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 60.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<36 wk gestation: 60 mg/kg/24 hr ÷ Q12 hr ≥36 wk gestation: 100 mg/kg/24 hr ÷ Q12 hr <1 kg and 0–14 days old, or 1–2 kg and <0–7 days old: 100 mg/kg/24 hr ÷ Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cefixime",
    "name": "CEFIXIME",
    "scientific_name": "CEFIXIME",
    "brand_names": "Generics; previously available as Suprax",
    "category": "antibiotic",
    "book_page": 910,
    "page_index": 70,
    "requires_weight": true,
    "requires_age": false,
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
      {
        "label": "Oral Suspension 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Oral Suspension 200 mg / 5 mL",
        "mg": 200.0,
        "ml": 5.0
      },
      {
        "label": "Capsules 400 mg",
        "mg": 400.0,
        "ml": 1.0,
        "is_solid": true
      }
    ],
    "see": "",
    "is_curated": true
  },
  {
    "id": "cefotaxime",
    "name": "CEFOTAXIME",
    "scientific_name": "CEFOTAXIME",
    "brand_names": "Generics; previously available as Claforan",
    "see": "",
    "category": "antibiotic",
    "book_page": 911,
    "page_index": 71,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (100 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 100.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<7 days old: 100 mg/kg/24 hr ÷ Q12 hr ≥7 days old: 150 mg/kg/24 hr ÷ Q8 hr ≤7 days old: 100 mg/kg/24 hr ÷ Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cefotetan",
    "name": "CEFOTETAN",
    "scientific_name": "CEFOTETAN",
    "brand_names": "Generics; previously available as Cefotan",
    "see": "",
    "category": "antibiotic",
    "book_page": 911,
    "page_index": 71,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (100 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 100.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<7 days old: 100 mg/kg/24 hr ÷ Q12 hr ≥7 days old: 150 mg/kg/24 hr ÷ Q8 hr ≤7 days old: 100 mg/kg/24 hr ÷ Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cefoxitin",
    "name": "CEFOXITIN",
    "scientific_name": "CEFOXITIN",
    "brand_names": "Generics; previously available as Mefoxin",
    "see": "",
    "category": "antibiotic",
    "book_page": 912,
    "page_index": 72,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (40 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 40.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Adolescent and adult: 2–4 g/24 hr ÷ Q12 hr IV/IM; max. dose: 6 g/24 hr Child: 40 mg/kg/dose (max. dose: 2 g/dose) IV ≤7 days old: 70 mg/kg/24 hr ÷ Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cefpodoxime_proxetil",
    "name": "CEFPODOXIME PROXETIL",
    "scientific_name": "CEFPODOXIME PROXETIL",
    "brand_names": "Generics; previously available as Vantin",
    "see": "",
    "category": "antibiotic",
    "book_page": 913,
    "page_index": 73,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Otitis media: 10 mg/kg/24 hr PO ÷ Q12 hr × 5–10 days; max. dose: 400 mg/24 hr Pharyngitis/tonsillitis: 10 mg/kg/24 hr PO ÷ Q12 hr × 5–10 days; max. dose: 200 mg/24 hr Acute maxillary sinusitis: 10 mg/kg/24 hr PO ÷ Q12 hr × 10 days; max. dose: 400 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "cefprozil",
    "name": "CEFPROZIL",
    "scientific_name": "CEFPROZIL",
    "brand_names": "Generics; previously available as Cefzil",
    "see": "",
    "category": "antibiotic",
    "book_page": 913,
    "page_index": 73,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Otitis media: 10 mg/kg/24 hr PO ÷ Q12 hr × 5–10 days; max. dose: 400 mg/24 hr Pharyngitis/tonsillitis: 10 mg/kg/24 hr PO ÷ Q12 hr × 5–10 days; max. dose: 200 mg/24 hr Acute maxillary sinusitis: 10 mg/kg/24 hr PO ÷ Q12 hr × 10 days; max. dose: 400 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "ceftaroline_fosamil",
    "name": "CEFTAROLINE FOSAMIL",
    "scientific_name": "CEFTAROLINE FOSAMIL",
    "brand_names": "Teflaro",
    "see": "",
    "category": "antibiotic",
    "book_page": 914,
    "page_index": 74,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (30 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 30.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "6 mo–12 yr: 15–30 mg/kg/24 hr PO ÷ Q12 hr; max. dose: 1 g/24 hr 2–12 yr: 20 mg/kg/24 hr PO Q24 hr; max. dose: 500 mg/dose 2–24 mo: 30 mg/kg/24 hr PO ÷ Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ceftazidime",
    "name": "CEFTAZIDIME",
    "scientific_name": "CEFTAZIDIME",
    "brand_names": "Tazicef and generics; previously available as Fortaz, Antibiotic, cephalosporin (third generation)",
    "see": "",
    "category": "antibiotic",
    "book_page": 915,
    "page_index": 75,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (100 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 100.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<7 days old: 100 mg/kg/24 hr ÷ Q12 hr ≥7 days old: 150 mg/kg/24 hr ÷ Q8 hr ≤7 days old: 100 mg/kg/24 hr ÷ Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ceftazidime_with_avibactam",
    "name": "CEFTAZIDIME WITH AVIBACTAM",
    "scientific_name": "CEFTAZIDIME WITH AVIBACTAM",
    "brand_names": "Avycaz",
    "see": "",
    "category": "antibiotic",
    "book_page": 915,
    "page_index": 75,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (100 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 100.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<7 days old: 100 mg/kg/24 hr ÷ Q12 hr ≥7 days old: 150 mg/kg/24 hr ÷ Q8 hr ≤7 days old: 100 mg/kg/24 hr ÷ Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ceftolozane_with_tazobactam",
    "name": "CEFTOLOZANE WITH TAZOBACTAM",
    "scientific_name": "CEFTOLOZANE WITH TAZOBACTAM",
    "brand_names": "Zerbaxa",
    "see": "",
    "category": "antibiotic",
    "book_page": 916,
    "page_index": 76,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (30 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 30.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": ">28 days old: 30 mg/kg/dose IV Q8 hr Infant <3 mo: 30 mg/kg/dose IV Q8 hr ≥3 mo–<6 mo: 40 mg/kg/dose IV Q8 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ceftriaxone",
    "name": "CEFTRIAXONE",
    "scientific_name": "CEFTRIAXONE",
    "brand_names": "Generics; previously available as Rocephin",
    "category": "antibiotic",
    "book_page": 917,
    "page_index": 77,
    "requires_weight": true,
    "requires_age": true,
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
      {
        "label": "Vial 1000 mg (1 g) for Injection",
        "mg": 1000.0,
        "ml": 10.0
      },
      {
        "label": "Vial 500 mg for Injection",
        "mg": 500.0,
        "ml": 5.0
      },
      {
        "label": "Vial 250 mg for Injection",
        "mg": 250.0,
        "ml": 2.5
      }
    ],
    "see": "",
    "is_curated": true
  },
  {
    "id": "cefuroxime_iv_im_cefuroxime_axetil_po",
    "name": "CEFUROXIME (IV, IM)/CEFUROXIME AXETIL (PO)",
    "scientific_name": "CEFUROXIME (IV, IM)/CEFUROXIME AXETIL (PO)",
    "brand_names": "IV: Generics; previously available as Zinacef",
    "see": "",
    "category": "antibiotic",
    "book_page": 918,
    "page_index": 78,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (100 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 100.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: Postnatal age ≤7 days: 100 mg/kg/24 hr ÷ Q12 hr 8 to ≤14 days old: 100 mg/kg/24 hr ÷ Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "celecoxib",
    "name": "CELECOXIB",
    "scientific_name": "CELECOXIB",
    "brand_names": "Celebrex, Elyxyb, and generics",
    "see": "",
    "category": "antipyretic",
    "book_page": 919,
    "page_index": 79,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (30 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 30.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Impetigo (oral liquid): 30 mg/kg/24 hr ÷ Q12 hr; max. dose: 1 g/24 hr Oral liquid: 30 mg/kg/24 hr ÷ Q12 hr; max. dose: 1 g/24 hr UTI (oral liquid): 20-30 mg/kg/24hr ÷ Q12 hr; max. dose: 1 g/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 120 mg / 4.8 mL",
        "mg": 120.0,
        "ml": 4.8
      }
    ]
  },
  {
    "id": "cephalexin",
    "name": "CEPHALEXIN",
    "scientific_name": "CEPHALEXIN",
    "brand_names": "Generics; previously available as Keflex",
    "see": "",
    "category": "antibiotic",
    "book_page": 920,
    "page_index": 80,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (50 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 50.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: Mild/moderate infection: 25–50 mg/kg/24 hr PO ÷ Q6 hr; max. dose: 2 g/24 hr. Less Severe infection: 75–100 mg/kg/24 hr PO ÷ Q6 hr; max. dose: 4 g/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "cetirizine",
    "name": "CETIRIZINE ± PSEUDOEPHEDRINE",
    "scientific_name": "CETIRIZINE ± PSEUDOEPHEDRINE",
    "brand_names": "Zyrtec, Zyrtec Allergy, Zyrtec Children’s Allergy, Quzyttir,, Zerviate, and many generics",
    "category": "antihistamine",
    "book_page": 921,
    "page_index": 81,
    "requires_weight": false,
    "requires_age": true,
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
      {
        "label": "Oral Syrup 5 mg / 5 mL (1 mg/mL)",
        "mg": 5.0,
        "ml": 5.0
      },
      {
        "label": "Oral Drops 10 mg / 1 mL",
        "mg": 10.0,
        "ml": 1.0
      },
      {
        "label": "Tablets 10 mg",
        "mg": 10.0,
        "ml": 1.0,
        "is_solid": true
      }
    ],
    "see": "",
    "is_curated": true
  },
  {
    "id": "charcoal_activated",
    "name": "CHARCOAL, ACTIVATED",
    "scientific_name": "CHARCOAL, ACTIVATED",
    "brand_names": "",
    "see": "See Chapter 3.",
    "category": "other",
    "book_page": 922,
    "page_index": 82,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Chapter 3.",
        "dose_type": "per_day",
        "dose_per_kg": 25.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Chapter 3.. Refer to page 922 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "chloramphenicol",
    "name": "CHLORAMPHENICOL",
    "scientific_name": "CHLORAMPHENICOL",
    "brand_names": "Generics",
    "see": "",
    "category": "other",
    "book_page": 922,
    "page_index": 82,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (25 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 25.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Loading dose: 20 mg/kg ≤7 days: 25 mg/kg/24 hr Q24 hr ≤2 kg: 25 mg/kg/24 hr Q24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "chloroquine_phosphate",
    "name": "CHLOROQUINE PHOSPHATE",
    "scientific_name": "CHLOROQUINE PHOSPHATE",
    "brand_names": "Generics; previously available as Aralen",
    "see": "",
    "category": "other",
    "book_page": 923,
    "page_index": 83,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 5.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: 5 mg/kg/dose PO every week on the same day of the week; max. dose: Infant and child: 10 mg/kg/dose (max. dose: 600 mg/dose) PO × 1; followed by 5 mg/kg/dose (max. dose: 300 mg/dose) 6, 24, and 48 hr after the initial dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "chlorothiazide",
    "name": "CHLOROTHIAZIDE",
    "scientific_name": "CHLOROTHIAZIDE",
    "brand_names": "Diuril and generics, Thiazide diuretic",
    "see": "",
    "category": "other",
    "book_page": 923,
    "page_index": 83,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 5.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: 5 mg/kg/dose PO every week on the same day of the week; max. dose: Infant and child: 10 mg/kg/dose (max. dose: 600 mg/dose) PO × 1; followed by 5 mg/kg/dose (max. dose: 300 mg/dose) 6, 24, and 48 hr after the initial dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "chlorpheniramine_maleate",
    "name": "CHLORPHENIRAMINE MALEATE",
    "scientific_name": "CHLORPHENIRAMINE MALEATE",
    "brand_names": "Generics; previously available as Chlor-Trimeton",
    "see": "",
    "category": "antihistamine",
    "book_page": 924,
    "page_index": 84,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (40 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 40.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "PO: 20–40 mg/kg/24 hr ÷ Q12 hr IV: Start at 5–10 mg/kg/24 hr ÷ Q12 hr; may increase to 20–40 mg/kg/24 hr ÷ Q12 hr if PO: 10–40 mg/kg/24 hr ÷ Q12 hr; maximum PO dose by age:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 2 mg / 5 mL",
        "mg": 2.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "chlorpromazine",
    "name": "CHLORPROMAZINE",
    "scientific_name": "CHLORPROMAZINE",
    "brand_names": "Generics; previously available as Thorazine",
    "see": "",
    "category": "other",
    "book_page": 925,
    "page_index": 85,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (6 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 6.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "PO: 2.5–6 mg/kg/24 hr ÷ Q4–6 hr; max. PO dose: 500 mg/24 hr IM/IV: 2.5–4 mg/kg/24 hr ÷ Q6–8 hr Max. IM/IV dose:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cholecalciferol",
    "name": "CHOLECALCIFEROL",
    "scientific_name": "CHOLECALCIFEROL",
    "brand_names": "D–3, D3–5, D3–50, Decara, D Drops, Enfamil, D-Vi-Sol, Replesta, and many others including generics",
    "see": "",
    "category": "other",
    "book_page": 925,
    "page_index": 85,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (6 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 6.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "PO: 2.5–6 mg/kg/24 hr ÷ Q4–6 hr; max. PO dose: 500 mg/24 hr IM/IV: 2.5–4 mg/kg/24 hr ÷ Q6–8 hr Max. IM/IV dose:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "d3_5_5000_iu",
    "name": "D3–5: 5000 IU",
    "scientific_name": "D3–5: 5000 IU",
    "brand_names": "Decara: 5,000, 25,000 IU",
    "see": "",
    "category": "other",
    "book_page": 925,
    "page_index": 85,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (6 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 6.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "PO: 2.5–6 mg/kg/24 hr ÷ Q4–6 hr; max. PO dose: 500 mg/24 hr IM/IV: 2.5–4 mg/kg/24 hr ÷ Q6–8 hr Max. IM/IV dose:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "d3_50_50_000_iu",
    "name": "D3–50: 50,000 IU",
    "scientific_name": "D3–50: 50,000 IU",
    "brand_names": "Chewable tab (OTC): 400, 1000, 2000 IU, Continued",
    "see": "",
    "category": "other",
    "book_page": 925,
    "page_index": 85,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (6 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 6.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "PO: 2.5–6 mg/kg/24 hr ÷ Q4–6 hr; max. PO dose: 500 mg/24 hr IM/IV: 2.5–4 mg/kg/24 hr ÷ Q6–8 hr Max. IM/IV dose:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cholestyramine",
    "name": "CHOLESTYRAMINE",
    "scientific_name": "CHOLESTYRAMINE",
    "brand_names": "Questran, Questran Light, Cholestyramine Light,, Prevalite, and generics",
    "see": "",
    "category": "antihistamine",
    "book_page": 927,
    "page_index": 87,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (240 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 240.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Monitor serum Ca 2+ , PO 4 , 25-OH vitamin D (goal level for infant and child: ≥20 ng/mL) and Child and adolescent: 240 mg/kg/24 hr PO ÷ TID; doses normally do not exceed 8 g/24 hr Adult: 4 g PO once daily–BID; max. dose: 24 g/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ciclesonide",
    "name": "CICLESONIDE",
    "scientific_name": "CICLESONIDE",
    "brand_names": "Alvesco, Omnaris, Corticosteroid",
    "see": "",
    "category": "steroid",
    "book_page": 928,
    "page_index": 88,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Adult: 4 g PO once daily–BID; may gradually increase dose to 16 g/24 hr ÷ BID; max. dose: 2–11 yr (limited data): 1 or 2 sprays (50 or 100 mCg) per nostril once daily. Max. dose: daily; max. dose: 200 mCg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "edta",
    "name": "EDTA",
    "scientific_name": "EDTA",
    "brand_names": "Intranasal (allergic rhinitis):",
    "see": "",
    "category": "other",
    "book_page": 928,
    "page_index": 88,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Adult: 4 g PO once daily–BID; may gradually increase dose to 16 g/24 hr ÷ BID; max. dose: 2–11 yr (limited data): 1 or 2 sprays (50 or 100 mCg) per nostril once daily. Max. dose: daily; max. dose: 200 mCg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cidofovir",
    "name": "CIDOFOVIR",
    "scientific_name": "CIDOFOVIR",
    "brand_names": "Generics; previously available as Vistide",
    "see": "",
    "category": "antibiotic",
    "book_page": 929,
    "page_index": 89,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 5.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Prior use with oral corticosteroid: 320 mCg/dose BID; max. dose: 640 mCg/24 hr Induction: 5 mg/kg IV once weekly × 2 with probenecid and hydration Maintenance: 5 mg/kg IV Q2 wk with probenecid and hydration"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ciprofloxacin",
    "name": "CIPROFLOXACIN",
    "scientific_name": "CIPROFLOXACIN",
    "brand_names": "Cipro, Ciloxan ophthalmic, Cetraxal, and generics, In combination with corticosteroid: Cipro HC Otic, Otovel",
    "see": "",
    "category": "antibiotic",
    "book_page": 930,
    "page_index": 90,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<34 wk postmenstrual age: 7.5–10 mg/kg/dose IV Q12 hr ≥34 wk postmenstrual age: 10–15 mg/kg/dose IV Q12 hr Mild/moderate infection: 20 mg/kg/24 hr ÷ Q12 hr; max. dose: 1 g/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 500 mg / 5 mL",
        "mg": 500.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 200 mg / 100 mL",
        "mg": 200.0,
        "ml": 100.0
      },
      {
        "label": "Oral Liquid 400 mg / 200 mL",
        "mg": 400.0,
        "ml": 200.0
      }
    ]
  },
  {
    "id": "citrate_mixtures",
    "name": "CITRATE MIXTURES",
    "scientific_name": "CITRATE MIXTURES",
    "brand_names": "Alkalinizing agent, electrolyte supplement, ?",
    "see": "",
    "category": "other",
    "book_page": 932,
    "page_index": 92,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (15 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 15.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child (PO): 2–3 mEq/kg/24 hr ÷ Q6–8 hr or 5–15 mL/dose ÷ Q6–8 hr (after Adult (PO): 100–200 mEq/24 hr ÷ Q6–8 hr or 15–30 mL/dose ÷ Q6–8 hr (after meals Infant and child:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "clarithromycin",
    "name": "CLARITHROMYCIN",
    "scientific_name": "CLARITHROMYCIN",
    "brand_names": "Generics; previously available as Biaxin and Biaxin XL",
    "category": "antibiotic",
    "book_page": 932,
    "page_index": 92,
    "requires_weight": true,
    "requires_age": false,
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
      {
        "label": "Oral Suspension 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Suspension 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Tablets 500 mg",
        "mg": 500.0,
        "ml": 1.0,
        "is_solid": true
      }
    ],
    "see": "",
    "is_curated": true
  },
  {
    "id": "clindamycin",
    "name": "CLINDAMYCIN",
    "scientific_name": "CLINDAMYCIN",
    "brand_names": "Cleocin, Cleocin-T, Clindagel, Clindesse, Clindacin,, Xaciato, and generics",
    "category": "antibiotic",
    "book_page": 933,
    "page_index": 93,
    "requires_weight": true,
    "requires_age": false,
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
      {
        "label": "Oral Solution 75 mg / 5 mL",
        "mg": 75.0,
        "ml": 5.0
      },
      {
        "label": "Injectable Ampoule 150 mg / 1 mL (300 mg / 2 mL)",
        "mg": 150.0,
        "ml": 1.0
      },
      {
        "label": "Capsules 150 mg",
        "mg": 150.0,
        "ml": 1.0,
        "is_solid": true
      },
      {
        "label": "Capsules 300 mg",
        "mg": 300.0,
        "ml": 1.0,
        "is_solid": true
      }
    ],
    "see": "",
    "is_curated": true
  },
  {
    "id": "clobazam",
    "name": "CLOBAZAM",
    "scientific_name": "CLOBAZAM",
    "brand_names": "Onfi, Sympazan, and generics, Benzodiazepine, anticonvulsant",
    "see": "",
    "category": "other",
    "book_page": 935,
    "page_index": 95,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 1.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child (<2 yr): Start at 0.5–1 mg/kg/24 hr (max. dose: 5 mg/24 hr) PO ÷ BID; if"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "clonazepam",
    "name": "CLONAZEPAM",
    "scientific_name": "CLONAZEPAM",
    "brand_names": "Klonopin and generics, Benzodiazepine, anticonvulsant",
    "see": "",
    "category": "emergency",
    "book_page": 936,
    "page_index": 96,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 1.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "10–20 mg/24 hr or 0.3–1 mg/kg/24 hr ÷ BID Initial: 0.01–0.03 mg/kg/24 hr PO ÷ BID–TID; maximum initial dose: 0.05 mg/kg/24 hr Maintenance: 0.01–0.02 mg/kg/24 hr increments PO Q3 days PRN (not to exceed 0.25–0.5 mg/24 hr)"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "clonidine",
    "name": "CLONIDINE",
    "scientific_name": "CLONIDINE",
    "brand_names": "Onyda XR, Catapres TTS, Duraclon, and generics;, previously available as Catapres and Kapvay",
    "see": "",
    "category": "other",
    "book_page": 937,
    "page_index": 97,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mcg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_unit": "mcg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "limited data): Start at 0.5–1 mCg/kg/dose PO Q3–6 hr; use Q6 hr interval for preterm maximum dose of 24 mCg/kg/24 hr. increments with BID, TID, and then QID dosing up to the following max. dose:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "clotrimazole",
    "name": "CLOTRIMAZOLE",
    "scientific_name": "CLOTRIMAZOLE",
    "brand_names": "Alevazol, Lotrimin AF, and generics; previously available, as Gyne-Lotrimin 3 and Gyne-Lotrimin 7",
    "see": "",
    "category": "antibiotic",
    "book_page": 938,
    "page_index": 98,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (5 mcg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 5.0,
        "dose_unit": "mcg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child (PO): 2–5 mCg/kg/dose Q6–8 hr initially; if needed, increase at 5- to 7-day intervals up to 10 mCg/kg/dose Q6–8 hr; max. dose: 0.8 mg/24 hr ÷ BID; adult: 0.1–0.8 mg/24 hr ÷ BID); max. dose: 2.4 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "corticotropin",
    "name": "CORTICOTROPIN",
    "scientific_name": "CORTICOTROPIN",
    "brand_names": "Acthar Gel, Cortrophin Gel; ACTH, Adrenocorticotropic hormone",
    "see": "",
    "category": "other",
    "book_page": 939,
    "page_index": 99,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "20–40 U/24 hr IM once daily × 6 wk or 150 U/m 2 /24 hr ÷ BID for 2 wk, followed by a ≥2 yr and adolescent: 0.8 U/kg/24 hr IM ÷ Q12–24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cortisone_acetate",
    "name": "CORTISONE ACETATE",
    "scientific_name": "CORTISONE ACETATE",
    "brand_names": "Various generics, Corticosteroid",
    "see": "",
    "category": "steroid",
    "book_page": 940,
    "page_index": 100,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 2.5–10 mg/kg/24 hr PO ÷ Q6–8 hr Adult: 25–300 mg/24 hr PO ÷ Q12–24 hr Child ≥2 yr and adult: 1 spray each nostril TID–QID; max. dose: 1 spray 6 times/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "co_trimoxazole",
    "name": "CO-TRIMOXAZOLE",
    "scientific_name": "CO-TRIMOXAZOLE",
    "brand_names": "",
    "see": "See Sulfamethoxazole and Trimethoprim",
    "category": "antibiotic",
    "book_page": 940,
    "page_index": 100,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Sulfamethoxazole and Trimethoprim",
        "dose_type": "per_day",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Sulfamethoxazole and Trimethoprim. Refer to page 940 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "cromolyn",
    "name": "CROMOLYN",
    "scientific_name": "CROMOLYN",
    "brand_names": "Nasalcrom, Gastrocrom, and generics; previously, available as Intal",
    "see": "",
    "category": "respiratory",
    "book_page": 940,
    "page_index": 100,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 2.5–10 mg/kg/24 hr PO ÷ Q6–8 hr Adult: 25–300 mg/24 hr PO ÷ Q12–24 hr Child ≥2 yr and adult: 1 spray each nostril TID–QID; max. dose: 1 spray 6 times/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "cyanocobalamin_vitamin_b_12",
    "name": "CYANOCOBALAMIN/VITAMIN B 12",
    "scientific_name": "CYANOCOBALAMIN/VITAMIN B 12",
    "brand_names": "Dodex, Physicians EZ Use B-12, Vitamin Deficiency, System B12, Nascobal, vitamin B 12 , and generics",
    "see": "",
    "category": "other",
    "book_page": 941,
    "page_index": 101,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 941 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cyclopentolate",
    "name": "CYCLOPENTOLATE",
    "scientific_name": "CYCLOPENTOLATE",
    "brand_names": "Cyclogyl and generics, Anticholinergic, mydriatic agent",
    "see": "",
    "category": "other",
    "book_page": 942,
    "page_index": 102,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant: Use cyclopentolate/phenylephrine (Cyclomydril) due to lower cyclopentolate remarks): 1 drop OU Q5–10 min; max. dose: 3 drops per eye"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cyclopentolate_with_phenylephrine",
    "name": "CYCLOPENTOLATE WITH PHENYLEPHRINE",
    "scientific_name": "CYCLOPENTOLATE WITH PHENYLEPHRINE",
    "brand_names": "Cyclomydril",
    "see": "",
    "category": "other",
    "book_page": 942,
    "page_index": 102,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant: Use cyclopentolate/phenylephrine (Cyclomydril) due to lower cyclopentolate remarks): 1 drop OU Q5–10 min; max. dose: 3 drops per eye"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cyclosporine_cyclosporine_microemulsion_cyclosporine_modified",
    "name": "CYCLOSPORINE, CYCLOSPORINE MICROEMULSION, CYCLOSPORINE MODIFIED",
    "scientific_name": "CYCLOSPORINE, CYCLOSPORINE MICROEMULSION, CYCLOSPORINE MODIFIED",
    "brand_names": "Sandimmune, Gengraf, Neoral, Restasis, Restasis, MultiDose, Verkazia, Vevye, Cequa, and generics",
    "see": "",
    "category": "other",
    "book_page": 942,
    "page_index": 102,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant: Use cyclopentolate/phenylephrine (Cyclomydril) due to lower cyclopentolate remarks): 1 drop OU Q5–10 min; max. dose: 3 drops per eye"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cyclosporine_cyclosporine_microemulsion_cyclosporine",
    "name": "CYCLOSPORINE, CYCLOSPORINE MICROEMULSION, CYCLOSPORINE",
    "scientific_name": "CYCLOSPORINE, CYCLOSPORINE MICROEMULSION, CYCLOSPORINE",
    "brand_names": "MODIFIED continued",
    "see": "",
    "category": "other",
    "book_page": 943,
    "page_index": 103,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (15 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 15.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Restasis MultiDose: 0.05% (5.5 mL); contains polysorbate 80 Oral: 15 mg/kg/24 hr as a single dose given 4–12 hr pre-transplantation; give same daily dose ÷ Q12–24 hr for 1–2 wk post-transplantation, then reduce by 5% per week to 3–"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cyclosporine_cyclosporine_microemulsion_cyclosporine",
    "name": "CYCLOSPORINE, CYCLOSPORINE MICROEMULSION, CYCLOSPORINE",
    "scientific_name": "CYCLOSPORINE, CYCLOSPORINE MICROEMULSION, CYCLOSPORINE",
    "brand_names": "MODIFIED continued",
    "see": "",
    "category": "other",
    "book_page": 944,
    "page_index": 104,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.25 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.25,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 0.25 mg/kg/24 hr or 8 mg/m 2 /24 hr PO ÷ Q8–12 hr, or by age: 2–6 yr: 2 mg PO Q8–12 hr; max. dose: 12 mg/24 hr 7–14 yr: 4 mg PO Q8–12 hr; max. dose: 16 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 2 mg / 5 mL",
        "mg": 2.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "cyproheptadine",
    "name": "CYPROHEPTADINE",
    "scientific_name": "CYPROHEPTADINE",
    "brand_names": "Various generics; previously available as Periactin, Antihistamine",
    "see": "",
    "category": "antihistamine",
    "book_page": 944,
    "page_index": 104,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.25 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.25,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 0.25 mg/kg/24 hr or 8 mg/m 2 /24 hr PO ÷ Q8–12 hr, or by age: 2–6 yr: 2 mg PO Q8–12 hr; max. dose: 12 mg/24 hr 7–14 yr: 4 mg PO Q8–12 hr; max. dose: 16 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 2 mg / 5 mL",
        "mg": 2.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "dabigatran_etexilate_mesylate",
    "name": "DABIGATRAN ETEXILATE MESYLATE",
    "scientific_name": "DABIGATRAN ETEXILATE MESYLATE",
    "brand_names": "Pradaxa and generics, Anticoagulant, direct thrombin inhibitor",
    "see": "",
    "category": "other",
    "book_page": 945,
    "page_index": 105,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 945 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "dantrolene",
    "name": "DANTROLENE",
    "scientific_name": "DANTROLENE",
    "brand_names": "Dantrium, Revonto, Ryanodex, and generics, Skeletal muscle relaxant",
    "see": "",
    "category": "other",
    "book_page": 946,
    "page_index": 106,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 946 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "dapsone",
    "name": "DAPSONE",
    "scientific_name": "DAPSONE",
    "brand_names": "Aczone, Diaminodiphenyl sulfone, DDS, and generics, Antibiotic, sulfone derivative",
    "see": "",
    "category": "steroid",
    "book_page": 947,
    "page_index": 107,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.5,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Initial: 0.5 mg/kg/dose (max. dose: 25 mg/dose) PO BID 0.5 mg/kg/dose Max. dose: 3 mg/kg/dose PO QID, up to 400 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "darbepoetin_alfa",
    "name": "DARBEPOETIN ALFA",
    "scientific_name": "DARBEPOETIN ALFA",
    "brand_names": "Aranesp",
    "see": "",
    "category": "other",
    "book_page": 948,
    "page_index": 108,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child and adult: 2 mg/kg/24 hr PO once daily (max. dose: 100 mg/24 hr) with trimethoprim 15 mg/kg/24 hr PO ÷ TID × 21 days Child ≥1 mo: 2 mg/kg/24 hr PO once daily; max. dose: 100 mg/24 hr. Alternative weekly"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 200 mg / 1 mL",
        "mg": 200.0,
        "ml": 1.0
      },
      {
        "label": "Oral Liquid 10 mg / 0.4 mL",
        "mg": 10.0,
        "ml": 0.4
      },
      {
        "label": "Oral Liquid 25 mg / 0.42 mL",
        "mg": 25.0,
        "ml": 0.42
      },
      {
        "label": "Oral Liquid 40 mg / 0.4 mL",
        "mg": 40.0,
        "ml": 0.4
      }
    ]
  },
  {
    "id": "sc_iv",
    "name": "SC/IV.",
    "scientific_name": "SC/IV.",
    "brand_names": ">1 g/dL increase in hemoglobin in any 2-wk",
    "see": "",
    "category": "other",
    "book_page": 949,
    "page_index": 109,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.45 mcg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.45,
        "dose_unit": "mcg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant, child, and adolescent: Start with 0.45 mCg/kg/dose IV/SC once weekly. Adult: Start with 0.45 mCg/kg/dose IV/SC once weekly, OR 0.75 mCg/kg/dose IV/SC once every Infant, child, and adolescent: Start with 0.45 mCg/kg/dose IV/SC once weekly, OR 0.75 mCg/kg/"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "deferoxamine_mesylate",
    "name": "DEFEROXAMINE MESYLATE",
    "scientific_name": "DEFEROXAMINE MESYLATE",
    "brand_names": "Desferal and generics, Chelating agent",
    "see": "",
    "category": "antihistamine",
    "book_page": 951,
    "page_index": 111,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (50 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 50.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: IV: 15 mg/kg/hr IM: 50 mg/kg/dose Q6 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "crrt",
    "name": "(CRRT).",
    "scientific_name": "(CRRT).",
    "brand_names": "High doses and concomitant low ferritin levels have also been associated with growth",
    "see": "",
    "category": "other",
    "book_page": 951,
    "page_index": 111,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (50 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 50.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: IV: 15 mg/kg/hr IM: 50 mg/kg/dose Q6 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "desmopressin_acetate",
    "name": "DESMOPRESSIN ACETATE",
    "scientific_name": "DESMOPRESSIN ACETATE",
    "brand_names": "DDAVP, Nocdurna, and generics; previously available as, Stimate",
    "see": "",
    "category": "other",
    "book_page": 952,
    "page_index": 112,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.3 mcg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.3,
        "dose_unit": "mcg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Oral: 1.2 mg/24 hr ÷ BID–TID. ≥4–18 yr: Start at 10 mCg once daily, may titrate up to 30 mCg/24 hr ÷ once daily or BID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "dexamethasone",
    "name": "DEXAMETHASONE",
    "scientific_name": "DEXAMETHASONE",
    "brand_names": "Dexabliss, Dexamethasone Intensol, HiDex, TaperDex,, Maxidex, and various generics; previously available as",
    "category": "steroid",
    "book_page": 953,
    "page_index": 113,
    "requires_weight": true,
    "requires_age": false,
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
      {
        "label": "Injectable Solution 4 mg / 1 mL",
        "mg": 4.0,
        "ml": 1.0
      },
      {
        "label": "Oral Elixir 0.5 mg / 5 mL",
        "mg": 0.5,
        "ml": 5.0
      },
      {
        "label": "Tablets 0.5 mg",
        "mg": 0.5,
        "ml": 1.0,
        "is_solid": true
      },
      {
        "label": "Tablets 4 mg",
        "mg": 4.0,
        "ml": 1.0,
        "is_solid": true
      }
    ],
    "see": "",
    "is_curated": true
  },
  {
    "id": "dexmedetomidine",
    "name": "DEXMEDETOMIDINE",
    "scientific_name": "DEXMEDETOMIDINE",
    "brand_names": "Precedex, Igalmi and generics, α-Adrenergic agonist, sedative",
    "see": "",
    "category": "other",
    "book_page": 954,
    "page_index": 114,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.3 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.3,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "0.15-0.3 mg/kg/dose (max. dose: 6 mg/dose) IV/PO once daily for up to 10 days. NOTE: Maintenance infusion rate dosing metric is mCg/kg/hr. Child (limited data): 0.5–1 mCg/kg/dose IV × 1 over 10 min followed by 0.2–1 mCg/kg/hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 200 mg / 2 mL",
        "mg": 200.0,
        "ml": 2.0
      },
      {
        "label": "Oral Liquid 400 mg / 4 mL",
        "mg": 400.0,
        "ml": 4.0
      },
      {
        "label": "Oral Liquid 1000 mg / 10 mL",
        "mg": 1000.0,
        "ml": 10.0
      },
      {
        "label": "Oral Liquid 80 mg / 20 mL",
        "mg": 80.0,
        "ml": 20.0
      }
    ]
  },
  {
    "id": "dexmethylphenidate",
    "name": "DEXMETHYLPHENIDATE",
    "scientific_name": "DEXMETHYLPHENIDATE",
    "brand_names": "Focalin, Focalin XR, and generics, CNS stimulant",
    "see": "",
    "category": "other",
    "book_page": 955,
    "page_index": 115,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mcg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 2.0,
        "dose_unit": "mcg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "IV: 2 mCg/kg/dose × 1 followed by 1.5 mCg/kg/hr was administered to children with autism/ IM: 1–4.5 mCg/kg/dose × 1 was administered to children for sedation for EEG. Extremely anxious, inconsolable, aggressive, and noncompliant children received doses >2.5 mCg/kg, and calm and"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 1 mL",
        "mg": 100.0,
        "ml": 1.0
      }
    ]
  },
  {
    "id": "6_yr_and_adolescent",
    "name": "≥6 YR AND ADOLESCENT",
    "scientific_name": "≥6 YR AND ADOLESCENT",
    "brand_names": "Immediate-",
    "see": "",
    "category": "other",
    "book_page": 956,
    "page_index": 116,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 956 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "converting_from_methylphenidate",
    "name": "CONVERTING FROM METHYLPHENIDATE:",
    "scientific_name": "CONVERTING FROM METHYLPHENIDATE:",
    "brand_names": "≥6 yr and adult: Start at 50% of the total daily dose of racemic methylphenidate with the",
    "see": "",
    "category": "other",
    "book_page": 956,
    "page_index": 116,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 956 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "converting_from_immediate_release_tabs_bid_to_extended_release_caps_once_daily",
    "name": "CONVERTING FROM IMMEDIATE-RELEASE TABS (BID) TO EXTENDED-RELEASE CAPS (ONCE DAILY)",
    "scientific_name": "CONVERTING FROM IMMEDIATE-RELEASE TABS (BID) TO EXTENDED-RELEASE CAPS (ONCE DAILY)",
    "brand_names": "",
    "see": "",
    "category": "other",
    "book_page": 956,
    "page_index": 116,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 956 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "dextroamphetamine_amphetamine",
    "name": "DEXTROAMPHETAMINE ± AMPHETAMINE",
    "scientific_name": "DEXTROAMPHETAMINE ± AMPHETAMINE",
    "brand_names": "Dexedrine, ProCentra, Zenzedi, Xelstrym, and many, generics",
    "see": "",
    "category": "antihistamine",
    "book_page": 957,
    "page_index": 117,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "to a max. dose of 40 mg/24 hr ÷ of 40 mg/24 hr ÷ QAM–TID max. dose of 40 mg/24 hr ÷"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "diazepam",
    "name": "DIAZEPAM",
    "scientific_name": "DIAZEPAM",
    "brand_names": "Valium, Libervant, Valtoco, and generics; previously, available as Diastat",
    "category": "emergency",
    "book_page": 959,
    "page_index": 119,
    "requires_weight": true,
    "requires_age": true,
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
      {
        "label": "Injectable Solution 10 mg / 2 mL (5 mg/mL)",
        "mg": 5.0,
        "ml": 1.0
      },
      {
        "label": "Rectal Gel 5 mg / 2.5 mL",
        "mg": 5.0,
        "ml": 2.5
      }
    ],
    "see": "",
    "is_curated": true
  },
  {
    "id": "diazoxide",
    "name": "DIAZOXIDE",
    "scientific_name": "DIAZOXIDE",
    "brand_names": "Proglycem and generics, Antihypoglycemic agent",
    "see": "",
    "category": "other",
    "book_page": 961,
    "page_index": 121,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (5 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 5.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Newborn and infant: Start at 5 mg/kg/24 hr PO ÷ Q8–12 hr and gradually titrate (2.5–5 mg/kg/24 hr every 5 days) if needed; usual range of 5–15 mg/kg/24 hr with reported range of 5–20 mg/kg/24 hr ÷ Q8–12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "digoxin",
    "name": "DIGOXIN",
    "scientific_name": "DIGOXIN",
    "brand_names": "Lanoxin, Lanoxin Pediatric, and generics, Antiarrhythmic agent, inotrope",
    "see": "",
    "category": "other",
    "book_page": 962,
    "page_index": 122,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Digitalizing: Total digitalizing dose (TDD) and maintenance doses in mCg/kg/24 hr (see the <10 yr: Give maintenance dose ÷ BID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "digoxin_immune_fab_ovine",
    "name": "DIGOXIN IMMUNE FAB (OVINE)",
    "scientific_name": "DIGOXIN IMMUNE FAB (OVINE)",
    "brand_names": "DigiFab",
    "see": "",
    "category": "other",
    "book_page": 963,
    "page_index": 123,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Then calculate digoxin immune Fab dose: Dose in number of digoxin immune Fab vials (DigiFab): # of vials = TBL ÷ 0.5"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "diltiazem",
    "name": "DILTIAZEM",
    "scientific_name": "DILTIAZEM",
    "brand_names": "Cardizem, Cardizem CD, Cardizem LA, Cartia XT, Dilt-, XR, Matzim LA, Tiadylt ER, Tiazac, and many others",
    "see": "",
    "category": "other",
    "book_page": 964,
    "page_index": 124,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: Immediate release: 1.5―2 mg/kg/24 hr PO ÷ TID―QID; max. dose: 3.5 mg/kg/24 hr; alternative max. dose of 6 mg/kg/24 hr up to 360 mg/24 hr has been recommended"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "dimenhydrinate",
    "name": "DIMENHYDRINATE",
    "scientific_name": "DIMENHYDRINATE",
    "brand_names": "Dramamine, Driminate, and generics, Antiemetic, antihistamine",
    "see": "",
    "category": "other",
    "book_page": 965,
    "page_index": 125,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1.5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.5,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child (<12 yr): 1–1.5 mg/kg/dose PO/IM/IV Q6 hr; max. dose: 25 mg/dose; alternative oral MAX. PO DOSE: MAX. IM DOSE:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 12.5 mg / 5 mL",
        "mg": 12.5,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 12.5 mg / 5 mL",
        "mg": 12.5,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "diphenhydramine",
    "name": "DIPHENHYDRAMINE",
    "scientific_name": "DIPHENHYDRAMINE",
    "brand_names": "Benadryl, many other brand names, and generics, Antihistamine",
    "category": "antihistamine",
    "book_page": 965,
    "page_index": 125,
    "requires_weight": true,
    "requires_age": true,
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
      {
        "label": "Oral Liquid 12.5 mg / 5 mL",
        "mg": 12.5,
        "ml": 5.0
      },
      {
        "label": "Injectable Solution 50 mg / 1 mL",
        "mg": 50.0,
        "ml": 1.0
      },
      {
        "label": "Tablets 25 mg",
        "mg": 25.0,
        "ml": 1.0,
        "is_solid": true
      }
    ],
    "see": "",
    "is_curated": true
  },
  {
    "id": "divalproex_sodium",
    "name": "DIVALPROEX SODIUM",
    "scientific_name": "DIVALPROEX SODIUM",
    "brand_names": "Depakote, Depakote Sprinkles, Depakote ER, and, generics",
    "see": "",
    "category": "other",
    "book_page": 966,
    "page_index": 126,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Dose: See Valproic Acid Continuous IV infusion (all ages): Start at 0.5–1 mCg/kg/min and gradually increase as needed; usual range: 2–20 mCg/kg/min"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "dobutamine",
    "name": "DOBUTAMINE",
    "scientific_name": "DOBUTAMINE",
    "brand_names": "Various generics; previously available as Dobutrex, Sympathomimetic agent",
    "see": "",
    "category": "antihistamine",
    "book_page": 966,
    "page_index": 126,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Dose: See Valproic Acid Continuous IV infusion (all ages): Start at 0.5–1 mCg/kg/min and gradually increase as needed; usual range: 2–20 mCg/kg/min"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "docusate",
    "name": "DOCUSATE",
    "scientific_name": "DOCUSATE",
    "brand_names": "Colace, DocuSol Kids, Enemeez Mini, and many other, brands and generics",
    "see": "",
    "category": "other",
    "book_page": 967,
    "page_index": 127,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<3 yr: 10–40 mg/24 hr ÷ once daily–QID 3–6 yr: 20–60 mg/24 hr ÷ once daily–QID 6–12 yr: 40–150 mg/24 hr ÷ once daily–QID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 20 mg / 5 mL",
        "mg": 20.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 283 mg / 5 mL",
        "mg": 283.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "dolasetron",
    "name": "DOLASETRON",
    "scientific_name": "DOLASETRON",
    "brand_names": "Anzemet",
    "see": "",
    "category": "gi",
    "book_page": 967,
    "page_index": 127,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<3 yr: 10–40 mg/24 hr ÷ once daily–QID 3–6 yr: 20–60 mg/24 hr ÷ once daily–QID 6–12 yr: 40–150 mg/24 hr ÷ once daily–QID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 20 mg / 5 mL",
        "mg": 20.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 283 mg / 5 mL",
        "mg": 283.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "dopamine",
    "name": "DOPAMINE",
    "scientific_name": "DOPAMINE",
    "brand_names": "Various generics; previously available as Intropin, Sympathomimetic agent",
    "see": "",
    "category": "antihistamine",
    "book_page": 968,
    "page_index": 128,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1.8 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.8,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "2 yr–adult: 1.8 mg/kg/dose PO up to a max. dose of 100 mg. Administer PO dose 60 min Low dose: 2–5 mCg/kg/min IV; increases renal blood flow; minimal effect on heart rate and Intermediate dose: 5–15 mCg/kg/min IV; increases heart rate, cardiac contractility,"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "dornase_alfa_dnase",
    "name": "DORNASE ALFA/DNASE",
    "scientific_name": "DORNASE ALFA/DNASE",
    "brand_names": "Pulmozyme",
    "see": "",
    "category": "other",
    "book_page": 969,
    "page_index": 129,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2.2 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 2.2,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≤45 kg: 2.2 mg/kg/dose PO/IV BID; max. dose: 200 mg/24 hr Max. dose: 200 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 25 mg / 5 mL",
        "mg": 25.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "doxycycline",
    "name": "DOXYCYCLINE",
    "scientific_name": "DOXYCYCLINE",
    "brand_names": "Doxy, Doryx, Monodox, Oracea, many others, and, generics; previously available as Vibramycin",
    "see": "",
    "category": "antibiotic",
    "book_page": 969,
    "page_index": 129,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2.2 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 2.2,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≤45 kg: 2.2 mg/kg/dose PO/IV BID; max. dose: 200 mg/24 hr Max. dose: 200 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 25 mg / 5 mL",
        "mg": 25.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "dronabinol",
    "name": "DRONABINOL",
    "scientific_name": "DRONABINOL",
    "brand_names": "Marinol, Syndros, tetrahydrocannabinol, THC, and, generics",
    "see": "",
    "category": "other",
    "book_page": 970,
    "page_index": 130,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2.2 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 2.2,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≤8 yr or ≤45 kg: 2.2 mg/kg/dose IV/PO BID; max. dose: 200 mg/24 hr ≥8 yr: 2.2 mg/kg/24 hr PO once daily; max. dose: 100 mg/24 hr and max. duration of 4 mo mg/kg/dose PO TID) for penicillin-susceptible strains. See https://www.cdc.gov/anthrax/"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "droperidol",
    "name": "DROPERIDOL",
    "scientific_name": "DROPERIDOL",
    "brand_names": "Generics; previously available as Inapsine",
    "see": "",
    "category": "other",
    "book_page": 971,
    "page_index": 131,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.015 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.015,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": 20.0,
        "max_daily_dose": 40.0,
        "notes": "to 2.5 mg once daily 1 hr before dinner or QHS. Max dose: 20 mg/24 hr (use caution Max. dose: 16.8 mg/24 hr Child (2–12 yr): 0.01–0.015 mg/kg/dose (max. dose: 1.25 mg/dose; some recommend an"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "dymista",
    "name": "DYMISTA",
    "scientific_name": "DYMISTA",
    "brand_names": "",
    "see": "See Azelastine and Fluticasone.",
    "category": "other",
    "book_page": 972,
    "page_index": 132,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Azelastine and Fluticasone.",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Azelastine and Fluticasone.. Refer to page 972 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "elexacaftor_tezacaftor_ivacaftor",
    "name": "ELEXACAFTOR/TEZACAFTOR/IVACAFTOR",
    "scientific_name": "ELEXACAFTOR/TEZACAFTOR/IVACAFTOR",
    "brand_names": "Trikafta",
    "see": "",
    "category": "other",
    "book_page": 972,
    "page_index": 132,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Morning dose: Evening dose: Morning dose:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "emla",
    "name": "EMLA",
    "scientific_name": "EMLA",
    "brand_names": "",
    "see": "See Lidocaine and Prilocaine",
    "category": "other",
    "book_page": 975,
    "page_index": 135,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Lidocaine and Prilocaine",
        "dose_type": "per_day",
        "dose_per_kg": 0.08,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Lidocaine and Prilocaine. Refer to page 975 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "enalapril_maleate_po_enalaprilat_iv",
    "name": "ENALAPRIL MALEATE (PO), ENALAPRILAT (IV)",
    "scientific_name": "ENALAPRIL MALEATE (PO), ENALAPRILAT (IV)",
    "brand_names": "Enalapril: Vasotec, Epaned, and generics, Enalaprilat: generics; previously available as Vasotec IV",
    "see": "",
    "category": "cardio",
    "book_page": 975,
    "page_index": 135,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.08 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.08,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Missed morning dose: Take missed morning dose as soon as possible and do not take Missed evening dose: Do not take the missed dose, then resume usual dosing the next day. Infant and child:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "enoxaparin",
    "name": "ENOXAPARIN",
    "scientific_name": "ENOXAPARIN",
    "brand_names": "Lovenox, Enoxiluv Kit, and generics, Anticoagulant, low-molecular-weight heparin",
    "see": "",
    "category": "other",
    "book_page": 976,
    "page_index": 136,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2.1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 2.1,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Premature neonate <37 wk postmenstrual age: 2.1 mg/kg/dose SC Q12 hr <2 mo old: 1.7 mg/kg/dose SC Q12 hr ≥2 mo–<6 yr: 1.3 mg/kg/dose SC Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 30 mg / 0.3 mL",
        "mg": 30.0,
        "ml": 0.3
      },
      {
        "label": "Oral Liquid 40 mg / 0.4 mL",
        "mg": 40.0,
        "ml": 0.4
      },
      {
        "label": "Oral Liquid 60 mg / 0.6 mL",
        "mg": 60.0,
        "ml": 0.6
      },
      {
        "label": "Oral Liquid 80 mg / 0.8 mL",
        "mg": 80.0,
        "ml": 0.8
      }
    ]
  },
  {
    "id": "epinephrine_hcl",
    "name": "EPINEPHRINE HCL",
    "scientific_name": "EPINEPHRINE HCL",
    "brand_names": "Adrenalin, EpiPen, Auvi-Q, Neffy, EpinephrineSNAP,, Primatene Mist, and generics",
    "see": "",
    "category": "other",
    "book_page": 978,
    "page_index": 138,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 978 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "respiratory_bronchodilator_use",
    "name": "RESPIRATORY BRONCHODILATOR USE:",
    "scientific_name": "RESPIRATORY BRONCHODILATOR USE:",
    "brand_names": "SC Injection (use 1:1000 or 1 mg/mL aqueous injection):",
    "see": "",
    "category": "other",
    "book_page": 980,
    "page_index": 140,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.01 ml/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.01,
        "dose_unit": "ml/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: 0.01 mL/kg/dose SC (max. single dose 0.5 mL); repeat Q15 min × 3–4 dose. Wait >4 hr between additional doses PRN; max. dose: 8 inhalations/24 hr. mg/kg body weight; for infants, 0.05 mg is an adequate initial dose, and this may be"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 1 mg / 0.1 mL",
        "mg": 1.0,
        "ml": 0.1
      },
      {
        "label": "Oral Liquid 2 mg / 0.1 mL",
        "mg": 2.0,
        "ml": 0.1
      },
      {
        "label": "Oral Liquid 20 mg / 1 mL",
        "mg": 20.0,
        "ml": 1.0
      },
      {
        "label": "Oral Liquid 1 mg / 1 mL",
        "mg": 1.0,
        "ml": 1.0
      }
    ]
  },
  {
    "id": "epinephrine_racemic",
    "name": "EPINEPHRINE, RACEMIC",
    "scientific_name": "EPINEPHRINE, RACEMIC",
    "brand_names": "Asthmanefrin and S-2",
    "see": "",
    "category": "other",
    "book_page": 981,
    "page_index": 141,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 ml/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "ml/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Initial dose: Maintenance dose: Dose is individualized to achieve and maintain the lowest Hgb level Initial dose:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "epoetin_alfa",
    "name": "EPOETIN ALFA",
    "scientific_name": "EPOETIN ALFA",
    "brand_names": "Epogen, Procrit, Retacrit, and Erythropoietin, Recombinant human erythropoietin",
    "see": "",
    "category": "other",
    "book_page": 981,
    "page_index": 141,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 ml/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "ml/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Initial dose: Maintenance dose: Dose is individualized to achieve and maintain the lowest Hgb level Initial dose:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "dosage_adjustment_for_anemia_in_chronic_renal_failure",
    "name": "DOSAGE ADJUSTMENT FOR ANEMIA IN CHRONIC RENAL FAILURE:",
    "scientific_name": "DOSAGE ADJUSTMENT FOR ANEMIA IN CHRONIC RENAL FAILURE:",
    "brand_names": "Reduce dose by ≥25%: When Hgb increases >1 g/dL in any 2-wk period. Dose reductions",
    "see": "",
    "category": "other",
    "book_page": 982,
    "page_index": 142,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 982 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "dosage_reduction_adjustment_withholding_therapy_for_anemia_in_cancer",
    "name": "DOSAGE REDUCTION ADJUSTMENT/WITHHOLDING THERAPY FOR ANEMIA IN CANCER:",
    "scientific_name": "DOSAGE REDUCTION ADJUSTMENT/WITHHOLDING THERAPY FOR ANEMIA IN CANCER:",
    "brand_names": "If Hgb exceeds a level needed to avoid blood transfusion: Withhold dose and resume",
    "see": "",
    "category": "other",
    "book_page": 982,
    "page_index": 142,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 982 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "epoprostenol",
    "name": "EPOPROSTENOL",
    "scientific_name": "EPOPROSTENOL",
    "brand_names": "Flolan, Veletri, and generics, PGI 2 , PGX, prostacyclin, Prostaglandin I 2 , vasodilator",
    "see": "",
    "category": "other",
    "book_page": 982,
    "page_index": 142,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 982 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ergocalciferol",
    "name": "ERGOCALCIFEROL",
    "scientific_name": "ERGOCALCIFEROL",
    "brand_names": "Drisdol and generics; previously available as calcidol, Vitamin D 2",
    "see": "",
    "category": "other",
    "book_page": 983,
    "page_index": 143,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Usual effective dose: Neonate: 20–40 nanograms/kg/min Neonate: 10–50 nanograms/kg/min via continuous nebulization at a rate of 8 mL/hr OR 50"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ergotamine_tartrate_caffeine",
    "name": "ERGOTAMINE TARTRATE ± CAFFEINE",
    "scientific_name": "ERGOTAMINE TARTRATE ± CAFFEINE",
    "brand_names": "Ergomar",
    "see": "",
    "category": "antihistamine",
    "book_page": 984,
    "page_index": 144,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 8000 IU/24 hr PO × 4 wk, followed by 4000 IU/24 hr PO × 2 mo or 50,000 IU weekly × 4 wk, Child: 4000 IU/24 hr PO × 12 wk or 50,000 IU every other wk × 12 wk Child: 2000 IU/24 hr PO × 3 mo or 50,000 IU every mo × 3 mo"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ergotamine_plus_caffeine",
    "name": "ERGOTAMINE PLUS CAFFEINE:",
    "scientific_name": "ERGOTAMINE PLUS CAFFEINE:",
    "brand_names": "Doses based on mg of ergotamine",
    "see": "",
    "category": "antihistamine",
    "book_page": 985,
    "page_index": 145,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (15 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 15.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "45 min if needed; max. dose: 2 mg per attack, 4 mg/24 hr, not to exceed 8 mg/wk Adult: 2 mg at first sign of attack; follow with second 2-mg dose after 1 hr if needed; max. dose: ≥1 mo–12 yr: 15 mg/kg/dose IV/IM Q12 hr; max. dose: 1 g/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ertapenem",
    "name": "ERTAPENEM",
    "scientific_name": "ERTAPENEM",
    "brand_names": "Invanz and generics, Antibiotic, carbapenem",
    "see": "",
    "category": "antibiotic",
    "book_page": 985,
    "page_index": 145,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (15 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 15.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "45 min if needed; max. dose: 2 mg per attack, 4 mg/24 hr, not to exceed 8 mg/wk Adult: 2 mg at first sign of attack; follow with second 2-mg dose after 1 hr if needed; max. dose: ≥1 mo–12 yr: 15 mg/kg/dose IV/IM Q12 hr; max. dose: 1 g/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "erythromycin_preparations",
    "name": "ERYTHROMYCIN PREPARATIONS",
    "scientific_name": "ERYTHROMYCIN PREPARATIONS",
    "brand_names": "Erythromycin, EES, EryPed, Ery-Tab, Erythrocin, and, generics",
    "see": "",
    "category": "antibiotic",
    "book_page": 986,
    "page_index": 146,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (20 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 20.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Oral: <1.2 kg: 20 mg/kg/24 hr PO ÷ Q12 hr 0–7 days: 20 mg/kg/24 hr PO ÷ Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 200 mg / 5 mL",
        "mg": 200.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 400 mg / 5 mL",
        "mg": 400.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "erythropoietin",
    "name": "ERYTHROPOIETIN",
    "scientific_name": "ERYTHROPOIETIN",
    "brand_names": "",
    "see": "See Epoetin Alfa",
    "category": "other",
    "book_page": 987,
    "page_index": 147,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Epoetin Alfa",
        "dose_type": "per_dose",
        "dose_per_kg": 20.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Epoetin Alfa. Refer to page 987 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "escitalopram",
    "name": "ESCITALOPRAM",
    "scientific_name": "ESCITALOPRAM",
    "brand_names": "Lexapro and generics, Antidepressant, selective serotonin reuptake",
    "see": "",
    "category": "other",
    "book_page": 987,
    "page_index": 147,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (20 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 20.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Preoperative bowel prep: 20 mg/kg/dose (max. dose: 1000 mg/dose) PO erythromycin base Infant and child: 10–20 mg/kg/24 hr PO ÷ TID–QID (QAC or QAC and QHS)"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "esmolol_hcl",
    "name": "ESMOLOL HCL",
    "scientific_name": "ESMOLOL HCL",
    "brand_names": "Brevibloc and generics, β 1 -selective adrenergic blocking agent,",
    "see": "",
    "category": "respiratory",
    "book_page": 988,
    "page_index": 148,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Loading dose: 500 mCg/kg IV over 1 min"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 2000 mg / 100 mL",
        "mg": 2000.0,
        "ml": 100.0
      },
      {
        "label": "Oral Liquid 2500 mg / 250 mL",
        "mg": 2500.0,
        "ml": 250.0
      },
      {
        "label": "Oral Liquid 2000 mg / 100 mL",
        "mg": 2000.0,
        "ml": 100.0
      },
      {
        "label": "Oral Liquid 2500 mg / 250 mL",
        "mg": 2500.0,
        "ml": 250.0
      }
    ]
  },
  {
    "id": "esomeprazole",
    "name": "ESOMEPRAZOLE",
    "scientific_name": "ESOMEPRAZOLE",
    "brand_names": "Nexium, Nexium 24HR, and generics, Gastric acid proton pump inhibitor",
    "see": "",
    "category": "antibiotic",
    "book_page": 989,
    "page_index": 149,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (3.3 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 3.3,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Maintenance dose: 50–250 mCg/kg/min IV as infusion. Titrate doses upward 50–100 mCg/kg/ min Q5–10 min as needed. Heart surgery patients may require higher doses (∼700 mCg/kg/ min). Dosages as high as 1000 mCg/kg/min have been reported in children 1–12 yr."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "etanercept",
    "name": "ETANERCEPT",
    "scientific_name": "ETANERCEPT",
    "brand_names": "Enbrel, Enbrel SureClick, Enbrel Mini, Antirheumatic, immunomodulatory agent, tumor",
    "see": "",
    "category": "other",
    "book_page": 990,
    "page_index": 150,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant: 0.5–1 mg/kg/dose once daily"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ethambutol_hcl",
    "name": "ETHAMBUTOL HCL",
    "scientific_name": "ETHAMBUTOL HCL",
    "brand_names": "Generics; previously available as Myambutol",
    "see": "",
    "category": "other",
    "book_page": 992,
    "page_index": 152,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (25 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 25.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<15 yr and <40 kg: 15–25 mg/kg/dose (max. dose: 1 g/24 hr) PO once daily or 50 mg/kg/dose PO twice weekly (max. dose: 2.5 g/week) Infant and child: 15–25 mg/kg/24 hr PO once daily; max. dose: 2.5 g/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "ethosuximide",
    "name": "ETHOSUXIMIDE",
    "scientific_name": "ETHOSUXIMIDE",
    "brand_names": "Zarontin and generics, Anticonvulsant",
    "see": "",
    "category": "other",
    "book_page": 992,
    "page_index": 152,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (25 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 25.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<15 yr and <40 kg: 15–25 mg/kg/dose (max. dose: 1 g/24 hr) PO once daily or 50 mg/kg/dose PO twice weekly (max. dose: 2.5 g/week) Infant and child: 15–25 mg/kg/24 hr PO once daily; max. dose: 2.5 g/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "etomidate",
    "name": "ETOMIDATE",
    "scientific_name": "ETOMIDATE",
    "brand_names": "Amidate and generics, General anesthetic",
    "see": "",
    "category": "other",
    "book_page": 993,
    "page_index": 153,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (60 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 60.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Max. dose (all ages): The lesser of 60 mg/kg/24 hr or 2 g/24 hr Normotensive patient: 0.3 mg/kg/dose IV/IO ×1; max. dose: 20 mg/dose Hypotensive patient (see remarks): 0.15 mg/kg/dose IV/IO ×1; max. dose: 20 mg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "famciclovir",
    "name": "FAMCICLOVIR",
    "scientific_name": "FAMCICLOVIR",
    "brand_names": "Generics; previously available as Famvir",
    "see": "",
    "category": "antibiotic",
    "book_page": 993,
    "page_index": 153,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (60 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 60.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Max. dose (all ages): The lesser of 60 mg/kg/24 hr or 2 g/24 hr Normotensive patient: 0.3 mg/kg/dose IV/IO ×1; max. dose: 20 mg/dose Hypotensive patient (see remarks): 0.15 mg/kg/dose IV/IO ×1; max. dose: 20 mg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "famotidine",
    "name": "FAMOTIDINE",
    "scientific_name": "FAMOTIDINE",
    "brand_names": "Pepcid, Pepcid AC [OTC], Pepcid AC Maximum Strength, [OTC], Pepcid Complete [OTC], Zantac 360 [OTC],",
    "see": "",
    "category": "gi",
    "book_page": 994,
    "page_index": 154,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.5,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "IV: 0.25–0.5 mg/kg/dose Q24 hr PO: 0.5–1 mg/kg/dose Q24 hr IV (limited to PK data): 0.25 mg/kg/dose Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 20 mg / 50 mL",
        "mg": 20.0,
        "ml": 50.0
      },
      {
        "label": "Oral Liquid 40 mg / 5 mL",
        "mg": 40.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "felbamate",
    "name": "FELBAMATE",
    "scientific_name": "FELBAMATE",
    "brand_names": "Felbatol and generics, Anticonvulsant",
    "see": "",
    "category": "other",
    "book_page": 995,
    "page_index": 155,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 1.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "IV: 0.5–1 mg/kg/24 hr ÷ Q12 hr up to a max. dose of 40 mg/24 hr PO: 1–2 mg/kg/24 hr ÷ Q12 hr up to a max. dose of 80 mg/24 hr Start at 15 mg/kg/24 hr PO ÷ TID–QID; increase dosage by 15 mg/kg/24 hr at weekly"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 600 mg / 5 mL",
        "mg": 600.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "fentanyl",
    "name": "FENTANYL",
    "scientific_name": "FENTANYL",
    "brand_names": "Fentora, Actiq, generics; previously available as, Sublimaze and Duragesic",
    "see": "",
    "category": "other",
    "book_page": 996,
    "page_index": 156,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (4 mcg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 4.0,
        "dose_unit": "mcg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate and younger infant: Sedation/analgesia: 1–4 mCg/kg/dose (max. dose: 100 mCg/dose) IV Q2–4 hr PRN Continuous IV infusion: 1–5 mCg/kg/hr; tolerance may develop"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ferric_gluconate",
    "name": "FERRIC GLUCONATE",
    "scientific_name": "FERRIC GLUCONATE",
    "brand_names": "",
    "see": "See Iron―Injectable Preparations",
    "category": "other",
    "book_page": 997,
    "page_index": 157,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Iron―Injectable Preparations",
        "dose_type": "per_dose",
        "dose_per_kg": 2.0,
        "dose_unit": "mcg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Iron―Injectable Preparations. Refer to page 997 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ferrous_sulfate",
    "name": "FERROUS SULFATE",
    "scientific_name": "FERROUS SULFATE",
    "brand_names": "",
    "see": "See Iron―Oral Preparations",
    "category": "other",
    "book_page": 997,
    "page_index": 157,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Iron―Oral Preparations",
        "dose_type": "per_dose",
        "dose_per_kg": 2.0,
        "dose_unit": "mcg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Iron―Oral Preparations. Refer to page 997 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "fexofenadine_pseudoephedrine",
    "name": "FEXOFENADINE ± PSEUDOEPHEDRINE",
    "scientific_name": "FEXOFENADINE ± PSEUDOEPHEDRINE",
    "brand_names": "Allegra [OTC], Children's Allegra Allergy [OTC], and, generics",
    "see": "",
    "category": "antihistamine",
    "book_page": 998,
    "page_index": 158,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (16 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 16.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child ≥6 mo: 16 mg/kg/dose (max. dose: 200 mg/dose) BID × 10 days; or alternative fixed"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "fidaxomicin",
    "name": "FIDAXOMICIN",
    "scientific_name": "FIDAXOMICIN",
    "brand_names": "Dificid",
    "see": "",
    "category": "other",
    "book_page": 998,
    "page_index": 158,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (16 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 16.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child ≥6 mo: 16 mg/kg/dose (max. dose: 200 mg/dose) BID × 10 days; or alternative fixed"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "filgrastim",
    "name": "FILGRASTIM",
    "scientific_name": "FILGRASTIM",
    "brand_names": "Neupogen, and G-CSF; biosimilar brands, include: Granix, Nivestym, Nypozi, Releuko, Zarxio",
    "see": "",
    "category": "other",
    "book_page": 999,
    "page_index": 159,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (5 mcg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 5.0,
        "dose_unit": "mcg/kg/dose",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "IV/SC: 5 mCg/kg/dose once daily × 14 days or until ANC >10,000/mm 3 . Dosage may be increased by 5 mCg/kg/24 hr if desired effect is not achieved within 7 days."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 300 mg / 1 mL",
        "mg": 300.0,
        "ml": 1.0
      },
      {
        "label": "Oral Liquid 480 mg / 1.6 mL",
        "mg": 480.0,
        "ml": 1.6
      },
      {
        "label": "Oral Liquid 300 mg / 0.5 mL",
        "mg": 300.0,
        "ml": 0.5
      },
      {
        "label": "Oral Liquid 480 mg / 0.8 mL",
        "mg": 480.0,
        "ml": 0.8
      }
    ]
  },
  {
    "id": "fluconazole",
    "name": "FLUCONAZOLE",
    "scientific_name": "FLUCONAZOLE",
    "brand_names": "Diflucan and generics, Antifungal agent",
    "see": "",
    "category": "antibiotic",
    "book_page": 1000,
    "page_index": 160,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (6 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 6.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Loading dose: 12–25 mg/kg Thrush: 6 mg/kg Maintenance dose: 6–12 mg/kg with the following dosing intervals (see following table);"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "flucytosine",
    "name": "FLUCYTOSINE",
    "scientific_name": "FLUCYTOSINE",
    "brand_names": "Ancobon, 5-FC, 5-Fluorocytosine, and generics, Antifungal agent",
    "see": "",
    "category": "other",
    "book_page": 1001,
    "page_index": 161,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (75 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 75.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≤14 days old: 75 mg/kg/24 hr PO ÷ Q8 hr 15–60 days old: 100 mg/kg/24 hr PO ÷ Q6 hr ≤7 days old: 75 mg/kg/24 hr PO ÷ Q8 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "fludrocortisone_acetate",
    "name": "FLUDROCORTISONE ACETATE",
    "scientific_name": "FLUDROCORTISONE ACETATE",
    "brand_names": "Generics; 9-fluorohydrocortisone; previously available",
    "see": "",
    "category": "steroid",
    "book_page": 1002,
    "page_index": 162,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: 0.05–0.1 mg/24 hr PO once daily Child and adolescent (limited data): 0.01 mg/kg (max. dose: 0.2 mg) IV over 15 seconds bolus doses, a continuous infusion of 0.005–0.01 mg/kg/hr has been used."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "flumazenil",
    "name": "FLUMAZENIL",
    "scientific_name": "FLUMAZENIL",
    "brand_names": "Generics; previously available as Romazicon",
    "see": "",
    "category": "other",
    "book_page": 1002,
    "page_index": 162,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: 0.05–0.1 mg/24 hr PO once daily Child and adolescent (limited data): 0.01 mg/kg (max. dose: 0.2 mg) IV over 15 seconds bolus doses, a continuous infusion of 0.005–0.01 mg/kg/hr has been used."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "flunisolide",
    "name": "FLUNISOLIDE",
    "scientific_name": "FLUNISOLIDE",
    "brand_names": "Generics; previously available as Nasarel or Nasalide",
    "see": "",
    "category": "other",
    "book_page": 1003,
    "page_index": 163,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": 0.2,
        "max_daily_dose": 0.4,
        "notes": "Child and adolescent: Initial dose: 0.01 mg/kg (max dose: 0.2 mg) given over 15 sec; if needed after 45 sec, 0.01 mg/kg (max. dose: 0.2 mg) Q1 min to a max. total cumulative dose of 0.05 mg/kg or 1 mg, whichever is lower. Usual total dose: 0.08–1 mg (average 0.65 mg)."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "fluoride",
    "name": "FLUORIDE",
    "scientific_name": "FLUORIDE",
    "brand_names": "Fluoritab, many others, and generics, Mineral",
    "see": "",
    "category": "other",
    "book_page": 1003,
    "page_index": 163,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": 0.2,
        "max_daily_dose": 0.4,
        "notes": "Child and adolescent: Initial dose: 0.01 mg/kg (max dose: 0.2 mg) given over 15 sec; if needed after 45 sec, 0.01 mg/kg (max. dose: 0.2 mg) Q1 min to a max. total cumulative dose of 0.05 mg/kg or 1 mg, whichever is lower. Usual total dose: 0.08–1 mg (average 0.65 mg)."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "fluoxetine_hydrochloride",
    "name": "FLUOXETINE HYDROCHLORIDE",
    "scientific_name": "FLUOXETINE HYDROCHLORIDE",
    "brand_names": "Prozac and generics, Antidepressant, selective serotonin reuptake inhibitor",
    "see": "",
    "category": "other",
    "book_page": 1004,
    "page_index": 164,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Contraindicated in areas where drinking water fluoridation is >0.7 ppm. Acute overdose: GI Child, 8–<12 yr: Start at 5 or 10 mg PO once daily. Usual dose: 10 mg once daily. May dose: 20–40 mg once daily."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 20 mg / 5 mL",
        "mg": 20.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "fluticasone_furoate_vilanterol",
    "name": "FLUTICASONE FUROATE + VILANTEROL",
    "scientific_name": "FLUTICASONE FUROATE + VILANTEROL",
    "brand_names": "Breo Ellipta and generics, Corticosteroid and long-acting β 2 -adrenergic agonist",
    "see": "",
    "category": "respiratory",
    "book_page": 1005,
    "page_index": 165,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Max. dose: One inhalation/24 hr for each dosage strength (25 mCg vilanterol/24 hr)"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "fluticasone_preparations",
    "name": "FLUTICASONE PREPARATIONS",
    "scientific_name": "FLUTICASONE PREPARATIONS",
    "brand_names": "Fluticasone propionate: Flonase and generics;, previously available as Flovent Diskus, Flovent HFA, and",
    "see": "",
    "category": "steroid",
    "book_page": 1006,
    "page_index": 166,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1006 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "fluticasone_propionate_and_salmeterol",
    "name": "FLUTICASONE PROPIONATE AND SALMETEROL",
    "scientific_name": "FLUTICASONE PROPIONATE AND SALMETEROL",
    "brand_names": "Advair Diskus, Advair HFA, AirDuo RespiClick,, and generics",
    "see": "",
    "category": "respiratory",
    "book_page": 1008,
    "page_index": 168,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1008 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "fluvoxamine",
    "name": "FLUVOXAMINE",
    "scientific_name": "FLUVOXAMINE",
    "brand_names": "Generics; previously available as Luvox and Luvox CR",
    "see": "",
    "category": "antihistamine",
    "book_page": 1011,
    "page_index": 171,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Max. dose: Child: 8–11 yr: 200 mg/24 hr; and child 12 yr: 300 mg/24 hr dose: 300 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "folic_acid",
    "name": "FOLIC ACID",
    "scientific_name": "FOLIC ACID",
    "brand_names": "FA-8 and many generics; previously available as Folvite, Water-soluble vitamin",
    "see": "",
    "category": "other",
    "book_page": 1011,
    "page_index": 171,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Max. dose: Child: 8–11 yr: 200 mg/24 hr; and child 12 yr: 300 mg/24 hr dose: 300 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "fomepizole",
    "name": "FOMEPIZOLE",
    "scientific_name": "FOMEPIZOLE",
    "brand_names": "Generics; previously available as Antizol",
    "see": "",
    "category": "other",
    "book_page": 1012,
    "page_index": 172,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (15 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 15.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant: 0.1 mg/24 hr once daily Load: 15 mg/kg/dose × 1 Maintenance: 10 mg/kg/dose Q12 hr × 4 doses, then 15 mg/kg/dose Q12 hr until ethylene"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "foscarnet",
    "name": "FOSCARNET",
    "scientific_name": "FOSCARNET",
    "brand_names": "Foscavir and generics, Antiviral agent",
    "see": "",
    "category": "other",
    "book_page": 1013,
    "page_index": 173,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (180 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 180.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Induction: 180 mg/kg/24 hr ÷ Q8–12 hr in combination with ganciclovir; continue until Maintenance: 90–120 mg/kg/dose Q24 hr Infant and child:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 1.2 mg / 0.05 mL",
        "mg": 1.2,
        "ml": 0.05
      }
    ]
  },
  {
    "id": "fosphenytoin",
    "name": "FOSPHENYTOIN",
    "scientific_name": "FOSPHENYTOIN",
    "brand_names": "Cerebyx and generics, Anticonvulsant",
    "see": "",
    "category": "emergency",
    "book_page": 1014,
    "page_index": 174,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "mL/kg IV (max. dose: 1000 mL) of NS or D 5 W should be administered prior to the first dose mg/kg, use 50% of the aforementioned hydration recommendations. Actual hydration may Loading dose:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "furosemide",
    "name": "FUROSEMIDE",
    "scientific_name": "FUROSEMIDE",
    "brand_names": "Lasix and generics, Loop diuretic",
    "see": "",
    "category": "other",
    "book_page": 1015,
    "page_index": 175,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate (see remarks): 0.5–1 mg/kg/dose Q12–24 hr; max. dose: 2 mg/kg/dose Infant and child: 0.5–2 mg/kg/dose Q6–12 hr; max. dose: 6 mg/kg/dose not to exceed 200 Adult: 20–40 mg/24 hr ÷ Q6–12 hr; max. dose: 200 mg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 40 mg / 5 mL",
        "mg": 40.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "gabapentin",
    "name": "GABAPENTIN",
    "scientific_name": "GABAPENTIN",
    "brand_names": "Neurontin, Gralise, Gabarone, and generics, Anticonvulsant",
    "see": "",
    "category": "other",
    "book_page": 1016,
    "page_index": 176,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (15 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 15.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Max. rate of intermittent IV dose: 0.5 mg/kg/min. For patients receiving ECMO, do not Day 1: 10–15 mg/kg/24 hr ÷ TID, then gradually titrate dose upward to the following dosages 3–4 yr: 40 mg/kg/24 hr ÷ TID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "ganciclovir",
    "name": "GANCICLOVIR",
    "scientific_name": "GANCICLOVIR",
    "brand_names": "Generics, Zirgan; previously available as Cytovene, Antiviral agent",
    "see": "",
    "category": "antibiotic",
    "book_page": 1017,
    "page_index": 177,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (12 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 12.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "to a daily dose of 1800 mg/24 hr ÷ TID (efficacy has been shown from 1800 to 3600 Neonate (congenital CMV): 12 mg/kg/24 hr IV ÷ Q12 hr with transition to oral Induction therapy (duration 14–21 days): 10 mg/kg/24 hr IV ÷ Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 500 mg / 10 mL",
        "mg": 500.0,
        "ml": 10.0
      },
      {
        "label": "Oral Liquid 500 mg / 250 mL",
        "mg": 500.0,
        "ml": 250.0
      }
    ]
  },
  {
    "id": "gatifloxacin",
    "name": "GATIFLOXACIN",
    "scientific_name": "GATIFLOXACIN",
    "brand_names": "Zymaxid and generics, Antibiotic, quinolone",
    "see": "",
    "category": "antibiotic",
    "book_page": 1018,
    "page_index": 178,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1018 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "gcsf",
    "name": "GCSF",
    "scientific_name": "GCSF",
    "brand_names": "",
    "see": "See Filgrastim",
    "category": "other",
    "book_page": 1018,
    "page_index": 178,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Filgrastim",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Filgrastim. Refer to page 1018 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "gentamicin",
    "name": "GENTAMICIN",
    "scientific_name": "GENTAMICIN",
    "brand_names": "Generics; previously available as Garamycin and Gentak",
    "see": "",
    "category": "other",
    "book_page": 1018,
    "page_index": 178,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1018 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "glucagon_hcl",
    "name": "GLUCAGON HCL",
    "scientific_name": "GLUCAGON HCL",
    "brand_names": "Gvoke, Baqsimi, and generics, Antihypoglycemic agent",
    "see": "",
    "category": "other",
    "book_page": 1020,
    "page_index": 180,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.03 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.03,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate, infant, and child <20 kg: 0.5 mg/dose (or 0.02–0.03 mg/kg/dose) Q15–20 min PRN Infant and child: Load with 0.05 mg/kg IV × 1; if no response, may repeat dose. Some recommend initiating a continuous IV infusion of 0.05–0.1 mg/kg/hr at the time of the"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 1 mg / 0.2 mL",
        "mg": 1.0,
        "ml": 0.2
      },
      {
        "label": "Oral Liquid 0.5 mg / 0.1 mL",
        "mg": 0.5,
        "ml": 0.1
      },
      {
        "label": "Oral Liquid 1 mg / 0.2 mL",
        "mg": 1.0,
        "ml": 0.2
      },
      {
        "label": "Oral Liquid 0.5 mg / 0.1 mL",
        "mg": 0.5,
        "ml": 0.1
      }
    ]
  },
  {
    "id": "glycerin",
    "name": "GLYCERIN",
    "scientific_name": "GLYCERIN",
    "brand_names": "Pedia-Lax, Fleet Liquid Glycerin Supp, and others,, including generics",
    "see": "",
    "category": "other",
    "book_page": 1021,
    "page_index": 181,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.5 ml/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.5,
        "dose_unit": "ml/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: 0.5 mL/kg/dose rectal solution PR as an enema once daily PRN or sliver/chip of Child: 0.004–0.01 mg/kg/dose TID–QID Max. dose: 0.2 mg/dose or 0.8 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 1 mg / 5 mL",
        "mg": 1.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "prn",
    "name": "PRN",
    "scientific_name": "PRN",
    "brand_names": "Onset of action: 15–30 min. May cause rectal irritation, abdominal pain, bloating, and, dizziness. Insert suppository high into rectum and retain for 15 min.",
    "see": "",
    "category": "other",
    "book_page": 1021,
    "page_index": 181,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.5 ml/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.5,
        "dose_unit": "ml/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: 0.5 mL/kg/dose rectal solution PR as an enema once daily PRN or sliver/chip of Child: 0.004–0.01 mg/kg/dose TID–QID Max. dose: 0.2 mg/dose or 0.8 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 1 mg / 5 mL",
        "mg": 1.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "glycopyrrolate",
    "name": "GLYCOPYRROLATE",
    "scientific_name": "GLYCOPYRROLATE",
    "brand_names": "Glycate, Glyrx-PF, Cuvposa, and generics; previously, available as Robinul",
    "see": "",
    "category": "other",
    "book_page": 1021,
    "page_index": 181,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.5 ml/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.5,
        "dose_unit": "ml/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: 0.5 mL/kg/dose rectal solution PR as an enema once daily PRN or sliver/chip of Child: 0.004–0.01 mg/kg/dose TID–QID Max. dose: 0.2 mg/dose or 0.8 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 1 mg / 5 mL",
        "mg": 1.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "granisetron",
    "name": "GRANISETRON",
    "scientific_name": "GRANISETRON",
    "brand_names": "Sancuso, Sustol, and generics; previously available as, Kytril",
    "see": "",
    "category": "gi",
    "book_page": 1022,
    "page_index": 182,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (20 mcg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 20.0,
        "dose_unit": "mcg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child ≥2 yr and adult: 10–20 mCg/kg/dose 15–60 min before chemotherapy; the same dose may chemotherapy) as a treatment regimen. Max. dose: 3 mg/dose or 9 mg/24 hr. Alternatively, a single 40 mCg/kg/dose 15–60 min before chemotherapy has been used."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 10 mg / 0.4 mL",
        "mg": 10.0,
        "ml": 0.4
      }
    ]
  },
  {
    "id": "griseofulvin",
    "name": "GRISEOFULVIN",
    "scientific_name": "GRISEOFULVIN",
    "brand_names": "Microsize: Generics; previously available as Grifulvin V,, Griseofulvin Microsize",
    "see": "",
    "category": "other",
    "book_page": 1023,
    "page_index": 183,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (25 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 25.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child >2 yr and adolescent: 20–25 mg/kg/24 hr PO ÷ once daily–BID; give with milk, Adult: 500–1000 mg/24 hr PO ÷ once daily–BID Child >2 yr and adolescent: 10–15 mg/kg/24 hr PO ÷ once daily–BID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "guanfacine",
    "name": "GUANFACINE",
    "scientific_name": "GUANFACINE",
    "brand_names": "Intuniv and generics, α 2 -adrenergic agonist",
    "see": "",
    "category": "other",
    "book_page": 1024,
    "page_index": 184,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "24 hr increments by increasing the dosing frequency to BID, TID, QID. Max. dose: 27–40.5 kg: increments by increasing the dosing frequency to BID, TID, QID. Max. dose: 4 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "cyp3a4",
    "name": "CYP3A4",
    "scientific_name": "CYP3A4",
    "brand_names": "Characteristic",
    "see": "",
    "category": "other",
    "book_page": 1024,
    "page_index": 184,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "24 hr increments by increasing the dosing frequency to BID, TID, QID. Max. dose: 27–40.5 kg: increments by increasing the dosing frequency to BID, TID, QID. Max. dose: 4 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "haloperidol",
    "name": "HALOPERIDOL",
    "scientific_name": "HALOPERIDOL",
    "brand_names": "Generics; previously available as Haldol and Haldol",
    "see": "",
    "category": "other",
    "book_page": 1025,
    "page_index": 185,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.03 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.03,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "PO: Initial dose at 0.5 mg/24 hr ÷ BID–TID. If necessary, increase daily dosage by 0.25– Agitation: 0.01–0.03 mg/kg/24 hr once daily Psychosis: 0.05–0.15 mg/kg/24 hr ÷ BID–TID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "heparin_sodium",
    "name": "HEPARIN SODIUM",
    "scientific_name": "HEPARIN SODIUM",
    "brand_names": "Various generics, Anticoagulant",
    "see": "",
    "category": "other",
    "book_page": 1026,
    "page_index": 186,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child age 1–18 yr 75 U/kg IV (max. dose: 8000 U) 20 (max. initial rate: 1650 U/hr) >18 yr 70 U/kg IV (max. dose: 8000 U) 18 (max. initial rate: 1650 U/hr) Younger child: Lower doses should be used to avoid systemic heparinization."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "hyaluronidase",
    "name": "HYALURONIDASE",
    "scientific_name": "HYALURONIDASE",
    "brand_names": "Amphadase, Hylenex, and Vitrase, Antidote, extravasation",
    "see": "",
    "category": "other",
    "book_page": 1027,
    "page_index": 187,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: Use 150 U/mL product by administering 5 separate SC or"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "hydralazine_hydrochloride",
    "name": "HYDRALAZINE HYDROCHLORIDE",
    "scientific_name": "HYDRALAZINE HYDROCHLORIDE",
    "brand_names": "Generics; previously available as Apresoline",
    "see": "",
    "category": "other",
    "book_page": 1028,
    "page_index": 188,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.2 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.2,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 0.1–0.2 mg/kg/dose IM or IV Q4–6 hr PRN; max. dose: 20 mg/dose. Usual IV/IM dosage range is 0.2–0.6 mg/kg/dose Q4–6 hr. Infant and child: Start at 0.75–1 mg/kg/24 hr PO ÷ Q6–12 hr (max. initial dose: 10 mg/"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "hydrochlorothiazide",
    "name": "HYDROCHLOROTHIAZIDE",
    "scientific_name": "HYDROCHLOROTHIAZIDE",
    "brand_names": "Generics; previously available as HydroDiuril and",
    "see": "",
    "category": "other",
    "book_page": 1028,
    "page_index": 188,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.2 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.2,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 0.1–0.2 mg/kg/dose IM or IV Q4–6 hr PRN; max. dose: 20 mg/dose. Usual IV/IM dosage range is 0.2–0.6 mg/kg/dose Q4–6 hr. Infant and child: Start at 0.75–1 mg/kg/24 hr PO ÷ Q6–12 hr (max. initial dose: 10 mg/"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "hydrocortisone",
    "name": "HYDROCORTISONE",
    "scientific_name": "HYDROCORTISONE",
    "brand_names": "Systemic dosage forms: Solu-Cortef, Cortef, Alkindi, Sprinkle, and generics",
    "see": "",
    "category": "steroid",
    "book_page": 1029,
    "page_index": 189,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≥6 mo, child, and adolescent: 1–2 mg/kg/24 hr PO ÷ once daily–BID; max. dose: <2 yr: Adult: 25–100 mg/24 hr PO ÷ once daily–BID; max. dose: 200 mg/24 hr Infant and child: Start at 1–2 mg/kg/24 hr PO ÷ once daily–BID; max. dose: <6 mo: 37.5"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 60 mL",
        "mg": 100.0,
        "ml": 60.0
      }
    ]
  },
  {
    "id": "hydromorphone_hcl",
    "name": "HYDROMORPHONE HCL",
    "scientific_name": "HYDROMORPHONE HCL",
    "brand_names": "Dilaudid and generics, Narcotic, analgesic",
    "see": "",
    "category": "other",
    "book_page": 1030,
    "page_index": 190,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (8 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 8.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Maintenance: 8 mg/kg/24 hr IV ÷ Q6 hr Child: PO: 2.5–10 mg/kg/24 hr ÷ Q6–8 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "hydroxychloroquine_sulfate",
    "name": "HYDROXYCHLOROQUINE SULFATE",
    "scientific_name": "HYDROXYCHLOROQUINE SULFATE",
    "brand_names": "Plaquenil, Sovuna, and generics, Antimalarial, antirheumatic agent",
    "see": "",
    "category": "other",
    "book_page": 1031,
    "page_index": 191,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 5.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 5 mg/kg/dose PO once weekly; max. dose: 310 mg Child: 10 mg/kg/dose (max. dose: 620 mg) PO × 1, followed by 5 mg/kg/dose (max. dose: 310 mg) 6 hr later, then 5 mg/kg/dose (max. dose: 310 mg) PO Q24 hr × 2 doses, starting 24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "hydroxyzine",
    "name": "HYDROXYZINE",
    "scientific_name": "HYDROXYZINE",
    "brand_names": "Generics; previously available as Vistaril",
    "see": "",
    "category": "other",
    "book_page": 1032,
    "page_index": 192,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Oral: Child and adolescent: 2 mg/kg/24 hr ÷ Q6–8 hr PRN; max. single dose: <6 yr: 12.5 mg, 6–12 yr: <6 yr: 50 mg/24 hr ÷ Q6–8 hr PRN"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 10 mg / 5 mL",
        "mg": 10.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "ibuprofen",
    "name": "IBUPROFEN",
    "scientific_name": "IBUPROFEN",
    "brand_names": "PO: Motrin, Advil, Children’s Advil, Children’s Motrin,, Infant's Ibuprofen, Motrin Infants' Drops, and generics",
    "category": "antipyretic",
    "book_page": 1032,
    "page_index": 192,
    "requires_weight": true,
    "requires_age": true,
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
      {
        "label": "Oral Suspension 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Oral Suspension 200 mg / 5 mL",
        "mg": 200.0,
        "ml": 5.0
      },
      {
        "label": "Tablets 200 mg",
        "mg": 200.0,
        "ml": 1.0,
        "is_solid": true
      },
      {
        "label": "Tablets 400 mg",
        "mg": 400.0,
        "ml": 1.0,
        "is_solid": true
      }
    ],
    "see": "",
    "is_curated": true
  },
  {
    "id": "iloprost",
    "name": "ILOPROST",
    "scientific_name": "ILOPROST",
    "brand_names": "Ventavis, Aurlumyn, synthetic PGI 2, Prostaglandin I 2 , vasodilator",
    "see": "",
    "category": "other",
    "book_page": 1034,
    "page_index": 194,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1034 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "imipenem_and_cilastatin",
    "name": "IMIPENEM AND CILASTATIN",
    "scientific_name": "IMIPENEM AND CILASTATIN",
    "brand_names": "Primaxin IV and generics, Antibiotic, carbapenem",
    "see": "",
    "category": "antibiotic",
    "book_page": 1034,
    "page_index": 194,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1034 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "imipramine",
    "name": "IMIPRAMINE",
    "scientific_name": "IMIPRAMINE",
    "brand_names": "Generics; previously available as Tofranil",
    "see": "",
    "category": "antihistamine",
    "book_page": 1035,
    "page_index": 195,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (50 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 50.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<7 days old: 50 mg/kg/24 hr IV ÷ Q12 hr ≥7 days old: 75 mg/kg/24 hr IV ÷ Q8 hr Child (4 wk–3 mo): 100 mg/kg/24 hr IV ÷ Q6 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "immune_globulin",
    "name": "IMMUNE GLOBULIN",
    "scientific_name": "IMMUNE GLOBULIN",
    "brand_names": "Immune globulins",
    "see": "",
    "category": "other",
    "book_page": 1036,
    "page_index": 196,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.4 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.4,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Initial: 0.2–0.4 mg/kg/dose PO QHS; increase 50% every 2–3 days PRN to a max. dose of 1–3 mg/kg/dose PO QHS"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "indomethacin",
    "name": "INDOMETHACIN",
    "scientific_name": "INDOMETHACIN",
    "brand_names": "Indocin and generics",
    "see": "",
    "category": "other",
    "book_page": 1040,
    "page_index": 200,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 g/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 1.0,
        "dose_unit": "g/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "3 mg/kg/min. Immediate release: Start at 1–2 mg/kg/24 hr PO ÷ TID–QID; max. dose: the lesser of 4 mg/kg/24 max. dose: 150 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 25 mg / 5 mL",
        "mg": 25.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "infliximab",
    "name": "INFLIXIMAB",
    "scientific_name": "INFLIXIMAB",
    "brand_names": "Remicade, Remicade SC, Avsola, Infectra, Renflexis,, Zymfentra, and generics",
    "see": "",
    "category": "other",
    "book_page": 1041,
    "page_index": 201,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.2 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.2,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Dose (mg/kg/dose Q12–24 hr) a For infants <1500 g, 0.1–0.2 mg/kg/dose IV Q24 hr may be given for an additional 3–5 days. Intraventricular hemorrhage prophylaxis: 0.1 mg/kg/dose IV Q24 hr × 3 doses, initiated at"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "insulin_preparations",
    "name": "INSULIN PREPARATIONS",
    "scientific_name": "INSULIN PREPARATIONS",
    "brand_names": "Pancreatic hormone",
    "see": "",
    "category": "other",
    "book_page": 1043,
    "page_index": 203,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 ml/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 2.0,
        "dose_unit": "ml/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1043 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "iodide",
    "name": "IODIDE",
    "scientific_name": "IODIDE",
    "brand_names": "",
    "see": "See Potassium Iodide",
    "category": "other",
    "book_page": 1043,
    "page_index": 203,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Potassium Iodide",
        "dose_type": "per_dose",
        "dose_per_kg": 2.0,
        "dose_unit": "ml/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Potassium Iodide. Refer to page 1043 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "iodixanol",
    "name": "IODIXANOL",
    "scientific_name": "IODIXANOL",
    "brand_names": "Visipaque and generics, Radiopaque agent, contrast medium",
    "see": "",
    "category": "other",
    "book_page": 1043,
    "page_index": 203,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 ml/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 2.0,
        "dose_unit": "ml/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1043 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "iohexol",
    "name": "IOHEXOL",
    "scientific_name": "IOHEXOL",
    "brand_names": "Iohexol: Omnipaque 140, Omnipaque 180, Omnipaque",
    "see": "",
    "category": "other",
    "book_page": 1044,
    "page_index": 204,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1044 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ipratropium_bromide_albuterol",
    "name": "IPRATROPIUM BROMIDE ± ALBUTEROL",
    "scientific_name": "IPRATROPIUM BROMIDE ± ALBUTEROL",
    "brand_names": "Atrovent HFA and generics, In combination with albuterol: Combivent Respimat and",
    "see": "",
    "category": "respiratory",
    "book_page": 1045,
    "page_index": 205,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1045 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 500 mg / 2.5 mL",
        "mg": 500.0,
        "ml": 2.5
      }
    ]
  },
  {
    "id": "iron_dextran",
    "name": "IRON DEXTRAN",
    "scientific_name": "IRON DEXTRAN",
    "brand_names": "",
    "see": "See Iron―Injectable Preparations",
    "category": "other",
    "book_page": 1047,
    "page_index": 207,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Iron―Injectable Preparations",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Iron―Injectable Preparations. Refer to page 1047 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "iron_sucrose",
    "name": "IRON SUCROSE",
    "scientific_name": "IRON SUCROSE",
    "brand_names": "",
    "see": "See Iron―Injectable Preparations",
    "category": "other",
    "book_page": 1047,
    "page_index": 207,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Iron―Injectable Preparations",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Iron―Injectable Preparations. Refer to page 1047 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "iron_injectable_preparations",
    "name": "IRON―INJECTABLE PREPARATIONS",
    "scientific_name": "IRON―INJECTABLE PREPARATIONS",
    "brand_names": "Ferric gluconate: Ferrlecit and generics, Iron dextran: INFeD",
    "see": "",
    "category": "other",
    "book_page": 1047,
    "page_index": 207,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child ≥6 yr: 1.5 mg/kg elemental Fe (0.12 mL/kg) IV; max. dose: 125 mg elemental Fe/"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ferric_gluconate_iv",
    "name": "FERRIC GLUCONATE (IV):",
    "scientific_name": "FERRIC GLUCONATE (IV):",
    "brand_names": "Iron deficiency anemia in patients undergoing chronic hemodialysis who are receiving",
    "see": "",
    "category": "other",
    "book_page": 1047,
    "page_index": 207,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child ≥6 yr: 1.5 mg/kg elemental Fe (0.12 mL/kg) IV; max. dose: 125 mg elemental Fe/"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "iron_dextran_iv_or_im",
    "name": "IRON DEXTRAN (IV OR IM):",
    "scientific_name": "IRON DEXTRAN (IV OR IM):",
    "brand_names": "Iron deficiency anemia (≥4 mo, child, adolescent):, Test dose (IV over 5 min or IM; may initiate treatment dose 1 hr after test dose):",
    "see": "",
    "category": "other",
    "book_page": 1047,
    "page_index": 207,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child ≥6 yr: 1.5 mg/kg elemental Fe (0.12 mL/kg) IV; max. dose: 125 mg elemental Fe/"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "iron_sucrose_iv",
    "name": "IRON SUCROSE (IV):",
    "scientific_name": "IRON SUCROSE (IV):",
    "brand_names": "Test dose (optional): Infuse 25% of first day dose up to a max. of 25 mg undiluted over",
    "see": "",
    "category": "other",
    "book_page": 1048,
    "page_index": 208,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (7 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 7.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "If no reaction to test dose, give remainder of replacement dose ÷ over 2–3 daily doses. Max. daily IV dose: 100 mg Max. daily IM dose:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ferric_carboxymaltose_iv",
    "name": "FERRIC CARBOXYMALTOSE (IV):",
    "scientific_name": "FERRIC CARBOXYMALTOSE (IV):",
    "brand_names": "Iron deficiency anemia:",
    "see": "",
    "category": "other",
    "book_page": 1048,
    "page_index": 208,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (7 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 7.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "If no reaction to test dose, give remainder of replacement dose ÷ over 2–3 daily doses. Max. daily IV dose: 100 mg Max. daily IM dose:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "iron_oral_preparations",
    "name": "IRON―ORAL PREPARATIONS",
    "scientific_name": "IRON―ORAL PREPARATIONS",
    "brand_names": "Ferrous sulfate: Fer-In-Sol, Slow FE, Slow Iron, and, many generics",
    "see": "",
    "category": "other",
    "book_page": 1049,
    "page_index": 209,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (15 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 15.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Adult weighing ≥50 kg: Use two-dose regimen above or a single-dose regimen of 15 mg/kg/ dose (max. dose: 1000 mg/dose) x 1 dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "isavuconazonium_sulfate",
    "name": "ISAVUCONAZONIUM SULFATE",
    "scientific_name": "ISAVUCONAZONIUM SULFATE",
    "brand_names": "Cresemba, isavuconazole prodrug, Antifungal, triazole",
    "see": "",
    "category": "other",
    "book_page": 1050,
    "page_index": 210,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Premature infant: 2–4 mg elemental Fe/kg/24 hr PO ÷ once daily–BID; max. dose: 15 mg Child: 3–6 mg elemental Fe/kg/24 hr PO ÷ BID–TID Child: Give dose below PO ÷ once daily–TID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "isoniazid",
    "name": "ISONIAZID",
    "scientific_name": "ISONIAZID",
    "brand_names": "Generics, INH; previously available as Nydrazid and, Laniazid",
    "see": "",
    "category": "other",
    "book_page": 1051,
    "page_index": 211,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1051 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 50 mg / 5 mL",
        "mg": 50.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "isoproterenol",
    "name": "ISOPROTERENOL",
    "scientific_name": "ISOPROTERENOL",
    "brand_names": "Generics; previously available as Isuprel",
    "see": "",
    "category": "other",
    "book_page": 1052,
    "page_index": 212,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: 10–15 mg/kg (max. dose: 300 mg) PO once daily or 20–30 mg/kg (max. dose: 900 mg) per dose 5 mg/kg (max. dose: 300 mg) PO once daily or 15 mg/kg (max. dose: 900 mg) per dose three times"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "edta",
    "name": "EDTA",
    "scientific_name": "EDTA",
    "brand_names": "NOTE: The dosage units for adults are in mCg/min, compared to mCg/kg/min for children., IV infusion:",
    "see": "",
    "category": "other",
    "book_page": 1052,
    "page_index": 212,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: 10–15 mg/kg (max. dose: 300 mg) PO once daily or 20–30 mg/kg (max. dose: 900 mg) per dose 5 mg/kg (max. dose: 300 mg) PO once daily or 15 mg/kg (max. dose: 900 mg) per dose three times"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "isotretinoin",
    "name": "ISOTRETINOIN",
    "scientific_name": "ISOTRETINOIN",
    "brand_names": "Absorica, Absorica LD, Accutane, Amnesteem, Claravis,, Zenatane, and generics",
    "see": "",
    "category": "other",
    "book_page": 1053,
    "page_index": 213,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Standard formulation: 0.5–2 mg/kg/24 hr PO ÷ BID × 15–20 wk or until the total cyst count decreases by 70%, whichever comes first. Dosages as low as 0.05 mg/kg/24 hr have been Micronized formulation (Absorica LD): 0.4–0.8 mg/kg/24 hr PO ÷ BID × 15–20 wk or until the"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "isradipine",
    "name": "ISRADIPINE",
    "scientific_name": "ISRADIPINE",
    "brand_names": "Generics; previously available as DynaCirc",
    "see": "",
    "category": "cardio",
    "book_page": 1053,
    "page_index": 213,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Standard formulation: 0.5–2 mg/kg/24 hr PO ÷ BID × 15–20 wk or until the total cyst count decreases by 70%, whichever comes first. Dosages as low as 0.05 mg/kg/24 hr have been Micronized formulation (Absorica LD): 0.4–0.8 mg/kg/24 hr PO ÷ BID × 15–20 wk or until the"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "itraconazole",
    "name": "ITRACONAZOLE",
    "scientific_name": "ITRACONAZOLE",
    "brand_names": "Sporanox, Tolsura, and generics, Antifungal agent",
    "see": "",
    "category": "antibiotic",
    "book_page": 1054,
    "page_index": 214,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child (limited data): Start at 0.05–0.1 mg/kg/dose PO BID–TID (start at 0.05 mg/kg/dose maximum of 0.6 mg/kg/24 hr not to exceed 10 mg/24 hr. Usual daily dose of 0.3–0.4 mg/ Neonate (limited data in full-term neonates treated for tinea capitis): 5 mg/kg/24 hr PO"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ivacaftor",
    "name": "IVACAFTOR",
    "scientific_name": "IVACAFTOR",
    "brand_names": "Kalydeco",
    "see": "",
    "category": "other",
    "book_page": 1055,
    "page_index": 215,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 5.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Histoplasmosis: 2–5 mg/kg/dose (max. dose: 200 mg/dose) PO TID × 3 days, followed by 2–5 mg/kg/dose (max. dose: 200 mg/dose) PO BID × 12 mo Aspergillosis and severe infections (use oral solution): 600 mg/24 hr PO ÷ TID × 3–4"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ivermectin",
    "name": "IVERMECTIN",
    "scientific_name": "IVERMECTIN",
    "brand_names": "Stromectol, Sklice, Soolantra, and generics, Anthelmintic",
    "see": "",
    "category": "other",
    "book_page": 1057,
    "page_index": 217,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.2 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.2,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Cutaneous lava migrans or strongyloidiasis: 0.2 mg/kg/dose PO once daily × 1 day for Scabies: 0.2 mg/kg/dose PO × 1, followed by repeat second dose in 7 or 10–14 days; ≥80 0.2 mg/kg"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "kalydeco",
    "name": "KALYDECO",
    "scientific_name": "KALYDECO",
    "brand_names": "",
    "see": "See Ivacaftor.",
    "category": "other",
    "book_page": 1058,
    "page_index": 218,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Ivacaftor.",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Ivacaftor.. Refer to page 1058 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ketamine",
    "name": "KETAMINE",
    "scientific_name": "KETAMINE",
    "brand_names": "Ketalar and generics, General anesthetic",
    "see": "",
    "category": "antihistamine",
    "book_page": 1058,
    "page_index": 218,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "PO: 5 mg/kg × 1, 30–45 min prior to procedure IV: 0.5–1 mg/kg; max. dose: 150 mg/dose IM: 2–5 mg/kg × 1"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ketoconazole",
    "name": "KETOCONAZOLE",
    "scientific_name": "KETOCONAZOLE",
    "brand_names": "Nizoral, Ketodan, and generics, Antifungal agent, imidazole",
    "see": "",
    "category": "antibiotic",
    "book_page": 1059,
    "page_index": 219,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (6.6 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 6.6,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Rate of IV infusion should not exceed 0.5 mg/kg/min and infusion should not be administered Child ≥2 yr and adolescent: 3.3–6.6 mg/kg/24 hr once daily"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "ketorolac",
    "name": "KETOROLAC",
    "scientific_name": "KETOROLAC",
    "brand_names": "Many generics (previously available as Toradol), Acular,, Acular LS, Acuvail",
    "see": "",
    "category": "other",
    "book_page": 1060,
    "page_index": 220,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.5,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 0.5 mg/kg/dose IM/IV Q6–8 hr. Max. dose: 30 mg Q6 hr or 120 mg/24 hr Adult: 15–30 mg IM/IV Q6 hr. Max. dose: 120 mg/24 hr Child 2–≤16 yr (limited data): 1 mg/kg/dose Q4–6 hr; max. dose: 10 mg/dose and"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "im_iv_po",
    "name": "(IM, IV, PO).",
    "scientific_name": "(IM, IV, PO).",
    "brand_names": "",
    "see": "",
    "category": "other",
    "book_page": 1060,
    "page_index": 220,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.5,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 0.5 mg/kg/dose IM/IV Q6–8 hr. Max. dose: 30 mg Q6 hr or 120 mg/24 hr Adult: 15–30 mg IM/IV Q6 hr. Max. dose: 120 mg/24 hr Child 2–≤16 yr (limited data): 1 mg/kg/dose Q4–6 hr; max. dose: 10 mg/dose and"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "labetalol",
    "name": "LABETALOL",
    "scientific_name": "LABETALOL",
    "brand_names": "Generics; previously available as Normodyne and",
    "see": "",
    "category": "other",
    "book_page": 1061,
    "page_index": 221,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (3 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 3.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "PO: Initial: 1–3 mg/kg/24 hr ÷ BID. May increase up to a maximum of 12 mg/kg/24 hr up to Intermittent dose: 0.2–1 mg/kg/dose Q10 min PRN; max. dose: 40 mg/dose Infusion (hypertensive emergencies): 0.4–1 mg/kg/hr to a max. dose of 3 mg/kg/hr; may initiate"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "lacosamide",
    "name": "LACOSAMIDE",
    "scientific_name": "LACOSAMIDE",
    "brand_names": "Vimpat, Motpoly XR, and generics, Anticonvulsant",
    "see": "",
    "category": "other",
    "book_page": 1062,
    "page_index": 222,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<6 PO: 1 mg/kg/dose BID IV: 0.66 mg/kg/dose mg/kg/dose BID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "tid",
    "name": "TID",
    "scientific_name": "TID",
    "brand_names": "PO: Increase by 1",
    "see": "",
    "category": "other",
    "book_page": 1062,
    "page_index": 222,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<6 PO: 1 mg/kg/dose BID IV: 0.66 mg/kg/dose mg/kg/dose BID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "bid",
    "name": "BID",
    "scientific_name": "BID",
    "brand_names": "PO/IV: Increase by 1 mg/kg/",
    "see": "",
    "category": "other",
    "book_page": 1062,
    "page_index": 222,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<6 PO: 1 mg/kg/dose BID IV: 0.66 mg/kg/dose mg/kg/dose BID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "bid",
    "name": "BID",
    "scientific_name": "BID",
    "brand_names": "Adjunctive therapy: 100–200",
    "see": "",
    "category": "other",
    "book_page": 1063,
    "page_index": 223,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1063 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "lactulose",
    "name": "LACTULOSE",
    "scientific_name": "LACTULOSE",
    "brand_names": "Constulose, Enulose, Generlac, Kristalose, and generics, Ammonium detoxicant, hyperosmotic laxative",
    "see": "",
    "category": "other",
    "book_page": 1064,
    "page_index": 224,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (3 ml/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 3.0,
        "dose_unit": "ml/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 1.5–3 mL/kg/24 hr PO ÷ once daily–BID; max. dose: 90 mL/24 hr Infant: 2.5–10 mL/24 hr PO ÷ TID–QID Child and adolescent: 40–90 mL/24 hr PO ÷ TID–QID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "lamivudine",
    "name": "LAMIVUDINE",
    "scientific_name": "LAMIVUDINE",
    "brand_names": "Epivir, 3TC, and generics; previously available as, Epivir-HBV",
    "see": "",
    "category": "other",
    "book_page": 1064,
    "page_index": 224,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (3 ml/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 3.0,
        "dose_unit": "ml/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 1.5–3 mL/kg/24 hr PO ÷ once daily–BID; max. dose: 90 mL/24 hr Infant: 2.5–10 mL/24 hr PO ÷ TID–QID Child and adolescent: 40–90 mL/24 hr PO ÷ TID–QID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "lamotrigine",
    "name": "LAMOTRIGINE",
    "scientific_name": "LAMOTRIGINE",
    "brand_names": "Lamictal, Subvenite, Lamictal ODT, Lamictal XR, and, generics",
    "see": "",
    "category": "other",
    "book_page": 1065,
    "page_index": 225,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "nevirapine): 2 mg/kg/dose PO BID within 6–12 hr after birth. Increase dose to 4 mg/kg/ 2–17 yr: 3 mg/kg/dose PO once daily up to a max. dose of 100 mg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "without",
    "name": "WITHOUT",
    "scientific_name": "WITHOUT",
    "brand_names": "valproic acid",
    "see": "",
    "category": "other",
    "book_page": 1069,
    "page_index": 229,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "hr ÷ once hr ÷ once 200 mg/24 hr ÷ once"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "lansoprazole",
    "name": "LANSOPRAZOLE",
    "scientific_name": "LANSOPRAZOLE",
    "brand_names": "Prevacid, Prevacid SoluTab, and generics, Gastric acid pump inhibitor",
    "see": "",
    "category": "antibiotic",
    "book_page": 1070,
    "page_index": 230,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1.5 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 1.5,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate (limited data, with use not recommended in preterm neonates): 0.5–1.5 mg/kg/24 hr PO ÷ once daily–BID Infant: 1–2 mg/kg/24 hr PO ÷ once daily–BID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "letermovir",
    "name": "LETERMOVIR",
    "scientific_name": "LETERMOVIR",
    "brand_names": "Prevymis",
    "see": "",
    "category": "antibiotic",
    "book_page": 1071,
    "page_index": 231,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1071 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "levalbuterol",
    "name": "LEVALBUTEROL",
    "scientific_name": "LEVALBUTEROL",
    "brand_names": "Xopenex HFA and generics; previously available as, Xopenex",
    "see": "",
    "category": "respiratory",
    "book_page": 1072,
    "page_index": 232,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1072 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 1.25 mg / 0.5 mL",
        "mg": 1.25,
        "ml": 0.5
      }
    ]
  },
  {
    "id": "levetiracetam",
    "name": "LEVETIRACETAM",
    "scientific_name": "LEVETIRACETAM",
    "brand_names": "Keppra, Keppra XR, Elepsia XR, Roweepra, Spritam, and, generics",
    "see": "",
    "category": "other",
    "book_page": 1073,
    "page_index": 233,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (7 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 7.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant (1–5 mo): Start at 7 mg/kg/dose PO/IV BID; increase by 7 mg/kg/dose BID every 2 wk as tolerated to the recommended dose of 21 mg/kg/dose BID. An average daily dose of 35 mg/kg/24 hr was reported in clinical trials."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 500 mg / 100 mL",
        "mg": 500.0,
        "ml": 100.0
      },
      {
        "label": "Oral Liquid 1000 mg / 100 mL",
        "mg": 1000.0,
        "ml": 100.0
      },
      {
        "label": "Oral Liquid 1500 mg / 100 mL",
        "mg": 1500.0,
        "ml": 100.0
      }
    ]
  },
  {
    "id": "levocarnitine",
    "name": "LEVOCARNITINE",
    "scientific_name": "LEVOCARNITINE",
    "brand_names": "",
    "see": "See Carnitine.",
    "category": "other",
    "book_page": 1074,
    "page_index": 234,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Carnitine.",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Carnitine.. Refer to page 1074 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 50 mL",
        "mg": 250.0,
        "ml": 50.0
      },
      {
        "label": "Oral Liquid 500 mg / 100 mL",
        "mg": 500.0,
        "ml": 100.0
      },
      {
        "label": "Oral Liquid 750 mg / 150 mL",
        "mg": 750.0,
        "ml": 150.0
      }
    ]
  },
  {
    "id": "levofloxacin",
    "name": "LEVOFLOXACIN",
    "scientific_name": "LEVOFLOXACIN",
    "brand_names": "Generics; previously available as Levaquin",
    "see": "",
    "category": "antibiotic",
    "book_page": 1074,
    "page_index": 234,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant, child, and adolescent: 60 mg/kg (max. dose: 4500 mg/dose) IV/IO over 10 min × 1, Child: 6 mo–<5 yr: 10 mg/kg/dose IV/PO Q12 hr; max. dose: 500 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 50 mL",
        "mg": 250.0,
        "ml": 50.0
      },
      {
        "label": "Oral Liquid 500 mg / 100 mL",
        "mg": 500.0,
        "ml": 100.0
      },
      {
        "label": "Oral Liquid 750 mg / 150 mL",
        "mg": 750.0,
        "ml": 150.0
      }
    ]
  },
  {
    "id": "levothyroxine_t_4",
    "name": "LEVOTHYROXINE (T 4 )",
    "scientific_name": "LEVOTHYROXINE (T 4 )",
    "brand_names": "Synthroid, Euthyrox, Ermeza, Levoxyl, Tirosint,, Thyquidity, Tirosint-Sol, Unithroid, and generics",
    "see": "",
    "category": "other",
    "book_page": 1075,
    "page_index": 235,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "6 mo–<5 yr: 8–10 mg/kg/dose PO/IV Q12 hr; max. dose: 750 mg/24 hr 5–<18 yr: 8–10 mg/kg/dose PO/IV Q24 hr; max. dose: 750 mg/24 hr ≥6 mo and <50 kg: 8 mg/kg/dose PO/IV Q12 hr; max. dose: 500 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "lidocaine",
    "name": "LIDOCAINE",
    "scientific_name": "LIDOCAINE",
    "brand_names": "Xylocaine, L-M-X, Lidoderm, many different brands of, topical products, and generics",
    "see": "",
    "category": "other",
    "book_page": 1077,
    "page_index": 237,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (4.5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 4.5,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Without epinephrine: max. dose of 4.5 mg/kg/dose (up to 300 mg); do not repeat within 2 hr. With epinephrine: max. dose of 7 mg/kg/dose (up to 500 mg); do not repeat within 2 hr. Cream (child ≥2 yr and adult): Apply to affected intact skin areas BID–QID; max. dose: 4.5 mg/kg/"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "lidocaine_and_prilocaine",
    "name": "LIDOCAINE AND PRILOCAINE",
    "scientific_name": "LIDOCAINE AND PRILOCAINE",
    "brand_names": "Many brand names, Oraqix, Eutectic mixture of, lidocaine and prilocaine; previously available as EMLA",
    "see": "",
    "category": "cardio",
    "book_page": 1078,
    "page_index": 238,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (4.5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 4.5,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child (≥3 yr): Up to the lesser of 4.5 mg/kg/dose or 300 mg/dose; swish and spit Q3 hr PRN Adult: 15 mL; swish and spit Q3 hr PRN up to a max. dose 4.5 mg/kg/dose or 300 mg/dose >5 mg/L due to reduced protein binding of drug. Elimination T 1/2 : premature infant: 3.2 hr;"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "linezolid",
    "name": "LINEZOLID",
    "scientific_name": "LINEZOLID",
    "brand_names": "Zyvox and generics, Antibiotic, oxazolidinone",
    "see": "",
    "category": "other",
    "book_page": 1079,
    "page_index": 239,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: <14 days old: 10 mg/kg/dose IV Q12 hr ≥14 days old: 10 mg/kg/dose IV Q8 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "liraglutide",
    "name": "LIRAGLUTIDE",
    "scientific_name": "LIRAGLUTIDE",
    "brand_names": "Saxenda, Victoza, and generics, Antidiabetic agent, glucagon-like peptide-1 (GLP-1)",
    "see": "",
    "category": "other",
    "book_page": 1080,
    "page_index": 240,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "infections (including endocarditis): 10 mg/kg/dose IV/PO Q8 hr <5 yr: 10 mg/kg/dose IV/PO Q8 hr 5–11 yr: 10 mg/kg/dose IV/PO Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 18 mg / 3 mL",
        "mg": 18.0,
        "ml": 3.0
      }
    ]
  },
  {
    "id": "lisdexamfetamine",
    "name": "LISDEXAMFETAMINE",
    "scientific_name": "LISDEXAMFETAMINE",
    "brand_names": "Vyvanse and generics, CNS stimulant",
    "see": "",
    "category": "antihistamine",
    "book_page": 1081,
    "page_index": 241,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "to achieve the recommended dosage of 50–70 mg PO once daily; max. dose: 70 mg/24"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "lisinopril",
    "name": "LISINOPRIL",
    "scientific_name": "LISINOPRIL",
    "brand_names": "Qbrelis, Zestril, and generics; previously available as, Prinivil",
    "see": "",
    "category": "cardio",
    "book_page": 1082,
    "page_index": 242,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "6–17 yr: Start with 0.07–0.1 mg/kg/dose PO once daily; max. initial dose: 5 mg/dose. If needed, titrate dose upward at 1–2 wk intervals to doses up to 0.61 mg/kg/24 hr or 40 dose: 80 mg/24 hr."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "lithium",
    "name": "LITHIUM",
    "scientific_name": "LITHIUM",
    "brand_names": "Lithobid and many generics; previously available as, Eskalith",
    "see": "",
    "category": "other",
    "book_page": 1083,
    "page_index": 243,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (60 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 60.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Initial (immediate-release dosage forms): 15–60 mg/kg/24 hr PO ÷ TID–QID. Adjust as Adolescent: 600–1800 mg/24 hr PO ÷ TID–QID (divided BID–TID using extended-release 900–1800 mg/24 hr PO ÷ BID–TID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "loperamide",
    "name": "LOPERAMIDE",
    "scientific_name": "LOPERAMIDE",
    "brand_names": "Imodium, Imodium A–D, and generics, Antidiarrheal",
    "see": "",
    "category": "other",
    "book_page": 1084,
    "page_index": 244,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Max. single dose: 2 mg Follow initial day’s dose with 0.1 mg/kg/dose after each loose stool (not to exceed the Infant–child (limited data): 0.08–0.24 mg/kg/24 hr PO ÷ BID–TID; max. dose: 2 mg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 1 mg / 7.5 mL",
        "mg": 1.0,
        "ml": 7.5
      }
    ]
  },
  {
    "id": "loratadine_pseudoephedrine",
    "name": "LORATADINE ± PSEUDOEPHEDRINE",
    "scientific_name": "LORATADINE ± PSEUDOEPHEDRINE",
    "brand_names": "Alavert, Claritin, Claritin Childrens, Triaminic, Allerchews, many others and generics",
    "see": "",
    "category": "antihistamine",
    "book_page": 1084,
    "page_index": 244,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Max. single dose: 2 mg Follow initial day’s dose with 0.1 mg/kg/dose after each loose stool (not to exceed the Infant–child (limited data): 0.08–0.24 mg/kg/24 hr PO ÷ BID–TID; max. dose: 2 mg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 1 mg / 7.5 mL",
        "mg": 1.0,
        "ml": 7.5
      }
    ]
  },
  {
    "id": "lorazepam",
    "name": "LORAZEPAM",
    "scientific_name": "LORAZEPAM",
    "brand_names": "Ativan, Loreev XR, and generics, Benzodiazepine anticonvulsant",
    "see": "",
    "category": "emergency",
    "book_page": 1085,
    "page_index": 245,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate, infant, child, and adolescent: 0.05–0.1 mg/kg/dose IV over 2–5 min. May repeat dose in 5–10 min. Max. dose: 4 mg/dose. If IV access not available, 0.1 mg/kg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "dosages_are_for_immediate_release_dosage_forms_tabs_injection_and_oral",
    "name": "DOSAGES ARE FOR IMMEDIATE-RELEASE DOSAGE FORMS (TABS, INJECTION, AND ORAL",
    "scientific_name": "DOSAGES ARE FOR IMMEDIATE-RELEASE DOSAGE FORMS (TABS, INJECTION, AND ORAL",
    "brand_names": "SOLUTION) (for extended-release capsules, see Remarks):, Status epilepticus (IV route is preferred but may use IM route if IV is not available):",
    "see": "",
    "category": "other",
    "book_page": 1085,
    "page_index": 245,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate, infant, child, and adolescent: 0.05–0.1 mg/kg/dose IV over 2–5 min. May repeat dose in 5–10 min. Max. dose: 4 mg/dose. If IV access not available, 0.1 mg/kg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "losartan",
    "name": "LOSARTAN",
    "scientific_name": "LOSARTAN",
    "brand_names": "Cozaar and generics, Angiotensin II receptor antagonist",
    "see": "",
    "category": "cardio",
    "book_page": 1086,
    "page_index": 246,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.05 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.05,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 0.025–0.05 mg/kg/dose IV Q6 hr PRN; max. single dose: 2 mg Infant and child: 0.05 mg/kg/dose PO/IV Q4–8 hr; max. dose: 2 mg/dose 6–16 yr: Start with 0.7 mg/kg/dose (max. dose: 50 mg/dose) PO once daily. Adjust dose to"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "low_molecular_weight_heparin",
    "name": "LOW-MOLECULAR-WEIGHT HEPARIN",
    "scientific_name": "LOW-MOLECULAR-WEIGHT HEPARIN",
    "brand_names": "",
    "see": "See Enoxaparin.",
    "category": "respiratory",
    "book_page": 1087,
    "page_index": 247,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Enoxaparin.",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Enoxaparin.. Refer to page 1087 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "lumacaftor_and_ivacaftor",
    "name": "LUMACAFTOR AND IVACAFTOR",
    "scientific_name": "LUMACAFTOR AND IVACAFTOR",
    "brand_names": "Orkambi",
    "see": "",
    "category": "other",
    "book_page": 1087,
    "page_index": 247,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1087 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "magnesium_citrate",
    "name": "MAGNESIUM CITRATE",
    "scientific_name": "MAGNESIUM CITRATE",
    "brand_names": "Slow Mag Mg Gummies, and various generics",
    "see": "",
    "category": "other",
    "book_page": 1089,
    "page_index": 249,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (4 ml/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 4.0,
        "dose_unit": "ml/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "2–<6 yr: 2–4 mL/kg/24 hr PO ÷ once daily–BID; OR 60–90 mL/24 hr PO ÷ once daily–BID 6–12 yr: 100–150 mL/24 hr PO ÷ once daily–BID >12 yr and adult: 150–300 mL/24 hr PO ÷ once daily–BID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 400 mg / 5 mL",
        "mg": 400.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 2400 mg / 10 mL",
        "mg": 2400.0,
        "ml": 10.0
      },
      {
        "label": "Oral Liquid 400 mg / 5 mL",
        "mg": 400.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "magnesium_hydroxide",
    "name": "MAGNESIUM HYDROXIDE",
    "scientific_name": "MAGNESIUM HYDROXIDE",
    "brand_names": "Milk of Magnesia, Pedia-Lax, and various generics, 41.69% Elemental Magnesium",
    "see": "",
    "category": "other",
    "book_page": 1089,
    "page_index": 249,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (4 ml/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 4.0,
        "dose_unit": "ml/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "2–<6 yr: 2–4 mL/kg/24 hr PO ÷ once daily–BID; OR 60–90 mL/24 hr PO ÷ once daily–BID 6–12 yr: 100–150 mL/24 hr PO ÷ once daily–BID >12 yr and adult: 150–300 mL/24 hr PO ÷ once daily–BID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 400 mg / 5 mL",
        "mg": 400.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 2400 mg / 10 mL",
        "mg": 2400.0,
        "ml": 10.0
      },
      {
        "label": "Oral Liquid 400 mg / 5 mL",
        "mg": 400.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "magnesium_oxide",
    "name": "MAGNESIUM OXIDE",
    "scientific_name": "MAGNESIUM OXIDE",
    "brand_names": "Mag-200 and other generics, 60.32% Elemental Magnesium",
    "see": "",
    "category": "other",
    "book_page": 1090,
    "page_index": 250,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: Child: 5–10 mg/kg/24 hr PO ÷ TID–QID Adult: 400–800 mg/24 hr PO ÷ BID–QID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 400 mg / 5 mL",
        "mg": 400.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 400 mg / 5 mL",
        "mg": 400.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 800 mg / 5 mL",
        "mg": 800.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "magnesium_sulfate",
    "name": "MAGNESIUM SULFATE",
    "scientific_name": "MAGNESIUM SULFATE",
    "brand_names": "Epsom salts, many others, and generics, 9.9% Elemental Magnesium",
    "see": "",
    "category": "other",
    "book_page": 1090,
    "page_index": 250,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: Child: 5–10 mg/kg/24 hr PO ÷ TID–QID Adult: 400–800 mg/24 hr PO ÷ BID–QID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 400 mg / 5 mL",
        "mg": 400.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 400 mg / 5 mL",
        "mg": 400.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 800 mg / 5 mL",
        "mg": 800.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "mannitol",
    "name": "MANNITOL",
    "scientific_name": "MANNITOL",
    "brand_names": "Osmitrol, and generics, inhalation: Bronchitol and Aridol, Osmotic diuretic",
    "see": "",
    "category": "other",
    "book_page": 1091,
    "page_index": 251,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.25 g/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.25,
        "dose_unit": "g/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 0.25 g/kg/dose PO Q4–6 hr IV/IM: 25–50 mg/kg/dose Q4–6 hr × 3–4 doses; repeat PRN. Max. single dose: 2 g PO: 100–200 mg/kg/dose QID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "mebendazole",
    "name": "MEBENDAZOLE",
    "scientific_name": "MEBENDAZOLE",
    "brand_names": "Emverm; previously available as Vermox",
    "see": "",
    "category": "antibiotic",
    "book_page": 1092,
    "page_index": 252,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1092 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "medroxyprogesterone",
    "name": "MEDROXYPROGESTERONE",
    "scientific_name": "MEDROXYPROGESTERONE",
    "brand_names": "Depo-Provera, Provera, Depo-Sub Q Provera 104, and, generics",
    "see": "",
    "category": "other",
    "book_page": 1093,
    "page_index": 253,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1093 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "mefloquine_hcl",
    "name": "MEFLOQUINE HCL",
    "scientific_name": "MEFLOQUINE HCL",
    "brand_names": "Generics; previously available as Lariam",
    "see": "",
    "category": "other",
    "book_page": 1094,
    "page_index": 254,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<10 kg: 5 mg/kg Child ≥6 mo and >5 kg: 15 mg/kg (max. dose: 750 mg) PO × 1 followed by 10 mg/kg (max. dose: 500 mg) PO × 1 6–12 hr later"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "meropenem",
    "name": "MEROPENEM",
    "scientific_name": "MEROPENEM",
    "brand_names": "Generics; previously available as Merrem",
    "see": "",
    "category": "antibiotic",
    "book_page": 1095,
    "page_index": 255,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (20 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 20.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≤14 days old: 20 mg/kg/dose Q12 hr 15–28 days old: 20 mg/kg/dose Q8 hr 29–60 days old: 30 mg/kg/dose Q8 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "mesalamine",
    "name": "MESALAMINE",
    "scientific_name": "MESALAMINE",
    "brand_names": "Apriso, Canasa, Delzicol, Lialda, Pentasa, Rowasa,, SfRowasa, and generics; 5-aminosalicylic acid, 5-ASA",
    "see": "",
    "category": "antihistamine",
    "book_page": 1096,
    "page_index": 256,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (80 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 80.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Caps (controlled release) and tabs (delayed release): 60–80 mg/kg/24 hr PO ÷ once daily–BID (defined by dosage form used); max. dose: 4.8 g/24 hr Enema (Rowasa): 25 mg/kg/dose (max. dose: 1 g/dose) PR once daily; doses greater than"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "metformin",
    "name": "METFORMIN",
    "scientific_name": "METFORMIN",
    "brand_names": "Riomet and generics; previously available as, Glucophage and Glucophage XR",
    "see": "",
    "category": "other",
    "book_page": 1098,
    "page_index": 258,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1098 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "methadone_hcl",
    "name": "METHADONE HCL",
    "scientific_name": "METHADONE HCL",
    "brand_names": "Methadose and generics; previously available as, Dolophine",
    "see": "",
    "category": "other",
    "book_page": 1099,
    "page_index": 259,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.7 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.7,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 0.7 mg/kg/24 hr PO, SC, IM, or IV ÷ Q4–6 hr PRN pain; max. dose: 10 mg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 5 mg / 5 mL",
        "mg": 5.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 10 mg / 5 mL",
        "mg": 10.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "cyp2d6",
    "name": "CYP2D6.",
    "scientific_name": "CYP2D6.",
    "brand_names": "",
    "see": "See Chapter 6 for equianalgesic dosing and onset of action. Adjust dose in renal failure (see",
    "category": "other",
    "book_page": 1099,
    "page_index": 259,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Chapter 6 for equianalgesic dosing and onset of action. Adjust dose in renal failure (see",
        "dose_type": "per_day",
        "dose_per_kg": 0.7,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Chapter 6 for equianalgesic dosing and onset of action. Adjust dose in renal failure (see. Refer to page 1099 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 5 mg / 5 mL",
        "mg": 5.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 10 mg / 5 mL",
        "mg": 10.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "methimazole",
    "name": "METHIMAZOLE",
    "scientific_name": "METHIMAZOLE",
    "brand_names": "Generics; previously available as Tapazole",
    "see": "",
    "category": "antibiotic",
    "book_page": 1100,
    "page_index": 260,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.7 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.7,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: Initial: 0.4–0.7 mg/kg/24 hr or 15–20 mg/m 2 /24 hr PO ÷ Q8 hr Maintenance: 1/3–2/3 of initial dose PO ÷ Q8 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "methylene_blue",
    "name": "METHYLENE BLUE",
    "scientific_name": "METHYLENE BLUE",
    "brand_names": "ProvayBlue and generics, Antidote, drug-induced methemoglobinemia, and",
    "see": "",
    "category": "other",
    "book_page": 1100,
    "page_index": 260,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.7 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.7,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: Initial: 0.4–0.7 mg/kg/24 hr or 15–20 mg/m 2 /24 hr PO ÷ Q8 hr Maintenance: 1/3–2/3 of initial dose PO ÷ Q8 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "methylphenidate_hcl",
    "name": "METHYLPHENIDATE HCL",
    "scientific_name": "METHYLPHENIDATE HCL",
    "brand_names": "Ritalin, Aptensio XR, Jornay PM, Methylin, Metadate CD,, Metadate ER, Methylin ER, Concerta, Relexxii,",
    "see": "",
    "category": "other",
    "book_page": 1101,
    "page_index": 261,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.3 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.3,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Initial: 0.3 mg/kg/dose (or 2.5–5 mg/dose) given before breakfast and lunch. May increase by 0.1 mg/kg/dose (or 5–10 mg/24 hr) weekly until maintenance dose achieved. May give extra Maintenance dose range: 0.3–1 mg/kg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 25 mg / 5 mL",
        "mg": 25.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "prn",
    "name": "PRN",
    "scientific_name": "PRN",
    "brand_names": "60 mg/24 hr",
    "see": "",
    "category": "other",
    "book_page": 1102,
    "page_index": 262,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "following max. dose: 13–17 yr: 72 mg/24 hr not to exceed 2 mg/kg/24 hr intervals PRN up to a maximum of 54 mg/24 hr for children 6–12 yr and 72 mg/24 hr (not to exceed 2 mg/kg/24 hr) for"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "9_30_pm_8_00_pm",
    "name": "9:30 PM; 8:00 PM",
    "scientific_name": "9:30 PM; 8:00 PM",
    "brand_names": "was the most",
    "see": "",
    "category": "other",
    "book_page": 1102,
    "page_index": 262,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "following max. dose: 13–17 yr: 72 mg/24 hr not to exceed 2 mg/kg/24 hr intervals PRN up to a maximum of 54 mg/24 hr for children 6–12 yr and 72 mg/24 hr (not to exceed 2 mg/kg/24 hr) for"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "qhs",
    "name": "QHS",
    "scientific_name": "QHS",
    "brand_names": "100 mg/24 hr",
    "see": "",
    "category": "other",
    "book_page": 1102,
    "page_index": 262,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "following max. dose: 13–17 yr: 72 mg/24 hr not to exceed 2 mg/kg/24 hr intervals PRN up to a maximum of 54 mg/24 hr for children 6–12 yr and 72 mg/24 hr (not to exceed 2 mg/kg/24 hr) for"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "prn",
    "name": "PRN",
    "scientific_name": "PRN",
    "brand_names": "≤50 kg: 60 mg/24",
    "see": "",
    "category": "other",
    "book_page": 1103,
    "page_index": 263,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "2 mg/kg/24 hr; dosage corresponds to the available extended-release tablet size. Usual max. dose: 60 mg/"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "methylprednisolone",
    "name": "METHYLPREDNISOLONE",
    "scientific_name": "METHYLPREDNISOLONE",
    "brand_names": "Medrol, Medrol Dosepack, Solu-Medrol, Depo-Medrol,, and generics",
    "see": "",
    "category": "steroid",
    "book_page": 1104,
    "page_index": 264,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1.7 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 1.7,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "PO/IM/IV (use succinate salt for IM/IV): 0.5–1.7 mg/kg/24 hr ÷ Q6–12 hr Child ≤12 yr (IV/IM/PO; use succinate salt for IV/IM): 1–2 mg/kg/24 hr ÷ Q12 hr (max. dose: 60 mg/24 hr). An alternative regimen for ≤5 yr old of 1 mg/kg/dose Q6 hr × 24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "metoclopramide",
    "name": "METOCLOPRAMIDE",
    "scientific_name": "METOCLOPRAMIDE",
    "brand_names": "Reglan and generics, Antiemetic, prokinetic agent",
    "see": "",
    "category": "other",
    "book_page": 1105,
    "page_index": 265,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.2 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.2,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: 0.1–0.2 mg/kg/dose IV/IM/PO up to QID; max. dose: 0.8 mg/kg/24 hr or 1–2 mg/kg/dose IV/IM/PO Q2–6 hr up to 5 doses/24 hr Child:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 5 mg / 5 mL",
        "mg": 5.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "metolazone",
    "name": "METOLAZONE",
    "scientific_name": "METOLAZONE",
    "brand_names": "Generics; previously available as Zaroxolyn",
    "see": "",
    "category": "other",
    "book_page": 1105,
    "page_index": 265,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.2 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.2,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: 0.1–0.2 mg/kg/dose IV/IM/PO up to QID; max. dose: 0.8 mg/kg/24 hr or 1–2 mg/kg/dose IV/IM/PO Q2–6 hr up to 5 doses/24 hr Child:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 5 mg / 5 mL",
        "mg": 5.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "metronidazole",
    "name": "METRONIDAZOLE",
    "scientific_name": "METRONIDAZOLE",
    "brand_names": "Flagyl, Likmez, MetroGel, MetroLotion, MetroCream,",
    "category": "antibiotic",
    "book_page": 1106,
    "page_index": 266,
    "requires_weight": true,
    "requires_age": false,
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
      {
        "label": "Oral Suspension 200 mg / 5 mL (125 mg base/5 mL)",
        "mg": 200.0,
        "ml": 5.0
      },
      {
        "label": "IV Infusion Solution 500 mg / 100 mL",
        "mg": 5.0,
        "ml": 1.0
      },
      {
        "label": "Tablets 250 mg",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      },
      {
        "label": "Tablets 500 mg",
        "mg": 500.0,
        "ml": 1.0,
        "is_solid": true
      }
    ],
    "see": "",
    "is_curated": true
  },
  {
    "id": "micafungin_sodium",
    "name": "MICAFUNGIN SODIUM",
    "scientific_name": "MICAFUNGIN SODIUM",
    "brand_names": "Mycamine and generics, Antifungal, echinocandin",
    "see": "",
    "category": "antibiotic",
    "book_page": 1108,
    "page_index": 268,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "recommend a 15-mg/kg loading dose. <1 kg: 10 mg/kg/dose IV Q24 hr; additional data from another multidose trial in 12 preterm neonates (median birth weight: 775 g, 27 wk gestation) suggest 15 mg/kg/dose IV Q24 hr will"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "miconazole",
    "name": "MICONAZOLE",
    "scientific_name": "MICONAZOLE",
    "brand_names": "Topical products: Micatin, Desenex, Lotrimin AF, and, other brands & generics",
    "see": "",
    "category": "antibiotic",
    "book_page": 1109,
    "page_index": 269,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1109 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "midazolam",
    "name": "MIDAZOLAM",
    "scientific_name": "MIDAZOLAM",
    "brand_names": "Generics; previously available as Versed; intranasal:",
    "category": "emergency",
    "book_page": 1110,
    "page_index": 270,
    "requires_weight": true,
    "requires_age": true,
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
      {
        "label": "Vial 5 mg / 1 mL",
        "mg": 5.0,
        "ml": 1.0
      },
      {
        "label": "Vial 15 mg / 3 mL (5 mg/mL)",
        "mg": 5.0,
        "ml": 1.0
      },
      {
        "label": "Vial 5 mg / 5 mL (1 mg/mL)",
        "mg": 1.0,
        "ml": 1.0
      }
    ],
    "see": "",
    "is_curated": true
  },
  {
    "id": "milrinone",
    "name": "MILRINONE",
    "scientific_name": "MILRINONE",
    "brand_names": "Generics; previously available as Primacor",
    "see": "",
    "category": "other",
    "book_page": 1111,
    "page_index": 271,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.3 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.3,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant ≥2 mo and child: Load with 0.2 mg/kg IV × 1 followed by a continuous infusion of 1 mCg/kg/min; titrate dose upward Q5 min to effect (mean dose of 2.3 mCg/kg/min with a range of 1–18 mCg/kg/min has been reported)."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "mineral_oil",
    "name": "MINERAL OIL",
    "scientific_name": "MINERAL OIL",
    "brand_names": "Fleet Laxative Mineral Oil, GoodSense Mineral Oil,, Kondremul, and generics",
    "see": "",
    "category": "other",
    "book_page": 1112,
    "page_index": 272,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (4 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 4.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Oral liquid: 5–15 mL/24 hr PO ÷ once daily (QHS)–TID Oral emulsion (Kondremul): 10–30 mL/24 hr PO ÷ once daily (QHS)–TID Oral liquid: 15–45 mL/24 hr PO ÷ once daily (QHS)–TID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "minocycline",
    "name": "MINOCYCLINE",
    "scientific_name": "MINOCYCLINE",
    "brand_names": "Minocin, Emrosi, Amzeeq, and generics, Antibiotic, tetracycline derivative",
    "see": "",
    "category": "antibiotic",
    "book_page": 1112,
    "page_index": 272,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (4 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 4.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Oral liquid: 5–15 mL/24 hr PO ÷ once daily (QHS)–TID Oral emulsion (Kondremul): 10–30 mL/24 hr PO ÷ once daily (QHS)–TID Oral liquid: 15–45 mL/24 hr PO ÷ once daily (QHS)–TID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "minoxidil",
    "name": "MINOXIDIL",
    "scientific_name": "MINOXIDIL",
    "brand_names": "",
    "see": "",
    "category": "other",
    "book_page": 1113,
    "page_index": 273,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1113 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "mometasone_furoate_fomoterol_fumarate",
    "name": "MOMETASONE FUROATE ± FOMOTEROL FUMARATE",
    "scientific_name": "MOMETASONE FUROATE ± FOMOTEROL FUMARATE",
    "brand_names": "Asmanex, Nasonex, and other generic nasal and topical, products; previously available as Elocon (topical forms)",
    "see": "",
    "category": "respiratory",
    "book_page": 1114,
    "page_index": 274,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.2,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child <12 yr: Start with 0.1–0.2 mg/kg/24 hr PO once daily; max. dose: 5 mg/24 hr. Dose may be increased in increments of 0.1–0.2 mg/kg/24 hr at 3-day intervals. Usual effective range: 0.25–1 mg/kg/24 hr PO ÷ once daily–TID; max. dose: 50 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "bid",
    "name": "BID.",
    "scientific_name": "BID.",
    "brand_names": "Previously treated with oral corticosteroids: Start with 440 mCg BID; max. dose: 880 mCg/24 hr.",
    "see": "",
    "category": "other",
    "book_page": 1115,
    "page_index": 275,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "prior therapy; max. dose: 110 mCg/24 hr. mCg (1 inhalation) QHS. Dose may be increased up to a max. dose of 440 mCg/24 hr ÷ QHS or Previously treated with oral corticosteroids: Start with 440 mCg BID; max. dose: 880 mCg/24 hr."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "mometasone_furoate_fomoterol_fumarate_dulera",
    "name": "MOMETASONE FUROATE + FOMOTEROL FUMARATE (DULERA):",
    "scientific_name": "MOMETASONE FUROATE + FOMOTEROL FUMARATE (DULERA):",
    "brand_names": "",
    "see": "",
    "category": "respiratory",
    "book_page": 1115,
    "page_index": 275,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "prior therapy; max. dose: 110 mCg/24 hr. mCg (1 inhalation) QHS. Dose may be increased up to a max. dose of 440 mCg/24 hr ÷ QHS or Previously treated with oral corticosteroids: Start with 440 mCg BID; max. dose: 880 mCg/24 hr."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "montelukast",
    "name": "MONTELUKAST",
    "scientific_name": "MONTELUKAST",
    "brand_names": "Singulair and generics, Antiasthmatic, antiallergy, leukotriene receptor",
    "see": "",
    "category": "other",
    "book_page": 1116,
    "page_index": 276,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "response. Max. dose: Two inhalations BID of 200 mCg mometasone + 5 mCg formoterol."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "morphine_sulfate",
    "name": "MORPHINE SULFATE",
    "scientific_name": "MORPHINE SULFATE",
    "brand_names": "Duramorph, MS Contin, Avinza, and many generics, Narcotic, analgesic",
    "see": "",
    "category": "other",
    "book_page": 1117,
    "page_index": 277,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: Neonate: Analgesia/tetralogy (cyanotic) spells: 0.05–0.1 mg/kg/dose IM, slow IV, SC Q4 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 10 mg / 5 mL",
        "mg": 10.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 20 mg / 5 mL",
        "mg": 20.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "mupirocin",
    "name": "MUPIROCIN",
    "scientific_name": "MUPIROCIN",
    "brand_names": "Generics; previously available as Bactroban",
    "see": "",
    "category": "other",
    "book_page": 1118,
    "page_index": 278,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.5,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant >6 mo and child: PO: 0.2–0.5 mg/kg/dose (initial max. dose: 15–20 mg/dose) Q4–6 hr PRN (immediate release) or 0.3–0.6 mg/kg/dose Q12 hr PRN (controlled release)"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "mycophenolate",
    "name": "MYCOPHENOLATE",
    "scientific_name": "MYCOPHENOLATE",
    "brand_names": "Mycophenolate mofetil: CellCept, Myhibbin, and generics, Mycophenolic acid: Myfortic and generics",
    "see": "",
    "category": "other",
    "book_page": 1119,
    "page_index": 279,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Max. dose: 3000 mg/24 hr. Delayed-release tabs (Myfortic; ≥5 yr): 400 mg/m 2 /dose PO BID; max. dose: 720 mg BID; this"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "nafcillin",
    "name": "NAFCILLIN",
    "scientific_name": "NAFCILLIN",
    "brand_names": "Generics; previously available as Nallpen",
    "see": "",
    "category": "antibiotic",
    "book_page": 1121,
    "page_index": 281,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (50 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 50.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≤14 days old: 50 mg/kg/24 hr ÷ Q12 hr 15–28 days old: 75 mg/kg/24 hr ÷ Q8 hr ≤7 days old: 50 mg/kg/24 hr ÷ Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 0.4 mg / 1 mL",
        "mg": 0.4,
        "ml": 1.0
      },
      {
        "label": "Oral Liquid 2 mg / 2 mL",
        "mg": 2.0,
        "ml": 2.0
      },
      {
        "label": "Oral Liquid 5 mg / 0.5 mL",
        "mg": 5.0,
        "ml": 0.5
      },
      {
        "label": "Oral Liquid 10 mg / 0.4 mL",
        "mg": 10.0,
        "ml": 0.4
      }
    ]
  },
  {
    "id": "naloxone",
    "name": "NALOXONE",
    "scientific_name": "NALOXONE",
    "brand_names": "Narcan, Kloxxado, RiVive, Rextovy, Zimhi, and generics, Narcotic antagonist",
    "see": "",
    "category": "other",
    "book_page": 1121,
    "page_index": 281,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (50 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 50.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≤14 days old: 50 mg/kg/24 hr ÷ Q12 hr 15–28 days old: 75 mg/kg/24 hr ÷ Q8 hr ≤7 days old: 50 mg/kg/24 hr ÷ Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 0.4 mg / 1 mL",
        "mg": 0.4,
        "ml": 1.0
      },
      {
        "label": "Oral Liquid 2 mg / 2 mL",
        "mg": 2.0,
        "ml": 2.0
      },
      {
        "label": "Oral Liquid 5 mg / 0.5 mL",
        "mg": 5.0,
        "ml": 0.5
      },
      {
        "label": "Oral Liquid 10 mg / 0.4 mL",
        "mg": 10.0,
        "ml": 0.4
      }
    ]
  },
  {
    "id": "naproxen_naproxen_sodium",
    "name": "NAPROXEN/NAPROXEN SODIUM",
    "scientific_name": "NAPROXEN/NAPROXEN SODIUM",
    "brand_names": "Naprosyn, EC-Naprosyn, Naprelan, Aleve [OTC], and, many others, including generics",
    "see": "",
    "category": "other",
    "book_page": 1123,
    "page_index": 283,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Analgesia: 5–10 mg/kg/dose PO Q12 hr; max. dose: 1000 mg/24 hr JIA: 10–15 mg/kg/24 hr PO ÷ Q12 hr; max. dose: 1000 mg/24 hr Ankylosing spondylitis: 15–20 mg/kg/24 hr PO ÷ Q12 hr; max. dose: 1500 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "neo_polycin_hc",
    "name": "NEO-POLYCIN HC",
    "scientific_name": "NEO-POLYCIN HC",
    "brand_names": "",
    "see": "See Neomycin/polymyxin B Ophthalmic Products.",
    "category": "other",
    "book_page": 1124,
    "page_index": 284,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Neomycin/polymyxin B Ophthalmic Products.",
        "dose_type": "per_day",
        "dose_per_kg": 100.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Neomycin/polymyxin B Ophthalmic Products.. Refer to page 1124 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "neo_polymycin_ophthalmic_ointment",
    "name": "NEO-POLYMYCIN OPHTHALMIC OINTMENT",
    "scientific_name": "NEO-POLYMYCIN OPHTHALMIC OINTMENT",
    "brand_names": "",
    "see": "See Neomycin/polymyxin B Ophthalmic Products.",
    "category": "antibiotic",
    "book_page": 1124,
    "page_index": 284,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Neomycin/polymyxin B Ophthalmic Products.",
        "dose_type": "per_day",
        "dose_per_kg": 100.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Neomycin/polymyxin B Ophthalmic Products.. Refer to page 1124 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "neomycin_sulfate",
    "name": "NEOMYCIN SULFATE",
    "scientific_name": "NEOMYCIN SULFATE",
    "brand_names": "Generics",
    "see": "",
    "category": "antibiotic",
    "book_page": 1124,
    "page_index": 284,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (100 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 100.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Preterm (>1.2 kg), newborn, infant, child, and adolescent: 50–100 mg/kg/24 hr PO ÷ Q6 hr (max. dose: 12 g/24 hr) for up to 2 wk Infant, child, and adolescent: 50–100 mg/kg/24 hr PO ÷ Q6–8 hr × 5–6 days; max. dose:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "neomycin_polymyxin_b_ophthalmic_products",
    "name": "NEOMYCIN/POLYMYXIN B OPHTHALMIC PRODUCTS",
    "scientific_name": "NEOMYCIN/POLYMYXIN B OPHTHALMIC PRODUCTS",
    "brand_names": "Neomycin/Polymyxin B + Bacitracin:",
    "see": "",
    "category": "antibiotic",
    "book_page": 1125,
    "page_index": 285,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1125 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "neomycin_polymyxin_b_bacitracin",
    "name": "NEOMYCIN/POLYMYXIN B/BACITRACIN",
    "scientific_name": "NEOMYCIN/POLYMYXIN B/BACITRACIN",
    "brand_names": "Neosporin Original, Triple Antibiotic, and various, generics",
    "see": "",
    "category": "antibiotic",
    "book_page": 1126,
    "page_index": 286,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.04 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.04,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 0.025–0.04 mg/kg IM × 1 Child: 0.01–0.04 mg/kg/dose IM/IV/SC Q2–4 hr PRN All ages: 0.03–0.07 mg/kg/dose IV; max. dose: 5 mg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "neostigmine",
    "name": "NEOSTIGMINE",
    "scientific_name": "NEOSTIGMINE",
    "brand_names": "Bloxiverz and generics, Anticholinesterase (cholinergic) agent",
    "see": "",
    "category": "other",
    "book_page": 1126,
    "page_index": 286,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.04 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.04,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 0.025–0.04 mg/kg IM × 1 Child: 0.01–0.04 mg/kg/dose IM/IV/SC Q2–4 hr PRN All ages: 0.03–0.07 mg/kg/dose IV; max. dose: 5 mg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "nevirapine",
    "name": "NEVIRAPINE",
    "scientific_name": "NEVIRAPINE",
    "brand_names": "Generics; previously available as Viramune; NVP",
    "see": "",
    "category": "antibiotic",
    "book_page": 1127,
    "page_index": 287,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.011 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.011,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "For diagnosis of myasthenia gravis (MG), administer atropine 0.011 mg/kg/dose IV immediately before or IM (0.011 mg/kg/dose) 30 min before neostigmine. For treatment of Antidote: Atropine 0.01–0.04 mg/kg/dose. Atropine and epinephrine should be available in the"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "niacin_vitamin_b3",
    "name": "NIACIN/VITAMIN B3",
    "scientific_name": "NIACIN/VITAMIN B3",
    "brand_names": "Niacor, Slo-Niacin, Nicotinic acid, Vitamin B3, and many, generics",
    "see": "",
    "category": "other",
    "book_page": 1128,
    "page_index": 288,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (4 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 4.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Birth–1 wk old: 4 mg/kg/dose PO BID; first dose within 6–12 hr after delivery >1–4 wk old: 6 mg/kg/dose PO BID Birth–4 wk old: 6 mg/kg/dose PO BID; first dose within 6–12 hr after delivery"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "nicardipine",
    "name": "NICARDIPINE",
    "scientific_name": "NICARDIPINE",
    "brand_names": "Cardene IV and generics, Calcium channel blocker, antihypertensive",
    "see": "",
    "category": "cardio",
    "book_page": 1129,
    "page_index": 289,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 50–100 mg/dose TID Max. dose: 500 mg/24 hr Continuous IV infusion for severe hypertension: Start at 0.5–1 mCg/kg/min; dose may be"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "nifedipine",
    "name": "NIFEDIPINE",
    "scientific_name": "NIFEDIPINE",
    "brand_names": "Procardia XL and many generics; previously available as, Procardia and Adalat CC",
    "see": "",
    "category": "cardio",
    "book_page": 1130,
    "page_index": 290,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.5 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.5,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Sustained-release tabs: Start with 0.2–0.5 mg/kg/24 hr PO (initial max. dose: 30–60 mg/24 hr) ÷ Q12–24 hr. May increase to max. dose: 3 mg/kg/24 hr up to 120 mg/24 hr in blood pressure in children, an initial dose of ≤0.25 mg/kg is recommended."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "nirsevimab",
    "name": "NIRSEVIMAB",
    "scientific_name": "NIRSEVIMAB",
    "brand_names": "Beyfortus",
    "see": "",
    "category": "other",
    "book_page": 1131,
    "page_index": 291,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1131 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 50 mg / 0.5 mL",
        "mg": 50.0,
        "ml": 0.5
      },
      {
        "label": "Oral Liquid 100 mg / 1 mL",
        "mg": 100.0,
        "ml": 1.0
      }
    ]
  },
  {
    "id": "nitrofurantoin",
    "name": "NITROFURANTOIN",
    "scientific_name": "NITROFURANTOIN",
    "brand_names": "Macrodantin, Macrobid, and generics; previously, available as Furadantin",
    "see": "",
    "category": "emergency",
    "book_page": 1132,
    "page_index": 292,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (7 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 7.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Cystitis treatment: 5–7 mg/kg/24 hr PO ÷ Q6 hr; max. dose: 400 mg/24 hr UTI prophylaxis: 1–2 mg/kg/dose PO QHS; max. dose: 100 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 25 mg / 5 mL",
        "mg": 25.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 50 mg / 5 mL",
        "mg": 50.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "nitroglycerin",
    "name": "NITROGLYCERIN",
    "scientific_name": "NITROGLYCERIN",
    "brand_names": "Nitro-Bid, Nitrostat, Nitro-Time, Nitro-Dur, Nitrolingual,, Rectiv, and generics",
    "see": "",
    "category": "other",
    "book_page": 1132,
    "page_index": 292,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (7 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 7.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Cystitis treatment: 5–7 mg/kg/24 hr PO ÷ Q6 hr; max. dose: 400 mg/24 hr UTI prophylaxis: 1–2 mg/kg/dose PO QHS; max. dose: 100 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 25 mg / 5 mL",
        "mg": 25.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 50 mg / 5 mL",
        "mg": 50.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "nitroprusside",
    "name": "NITROPRUSSIDE",
    "scientific_name": "NITROPRUSSIDE",
    "brand_names": "Nipride RTU and generics, Vasodilator, antihypertensive",
    "see": "",
    "category": "other",
    "book_page": 1134,
    "page_index": 294,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Dose: Start at 0.3–0.5 mCg/kg/min, titrate to effect. Usual dose is 3–4 mCg/kg/min. Max. dose: 10 mCg/kg/min a dose ≥4 mCg/kg/min. Thiocyanate levels should be <50 mg/L. Monitor cyanide levels"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "norepinephrine_bitartrate",
    "name": "NOREPINEPHRINE BITARTRATE",
    "scientific_name": "NOREPINEPHRINE BITARTRATE",
    "brand_names": "Levophed and generics, Adrenergic agonist",
    "see": "",
    "category": "other",
    "book_page": 1134,
    "page_index": 294,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Dose: Start at 0.3–0.5 mCg/kg/min, titrate to effect. Usual dose is 3–4 mCg/kg/min. Max. dose: 10 mCg/kg/min a dose ≥4 mCg/kg/min. Thiocyanate levels should be <50 mg/L. Monitor cyanide levels"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "nortriptyline_hydrochloride",
    "name": "NORTRIPTYLINE HYDROCHLORIDE",
    "scientific_name": "NORTRIPTYLINE HYDROCHLORIDE",
    "brand_names": "Pamelor and generics, Antidepressant, tricyclic",
    "see": "",
    "category": "other",
    "book_page": 1135,
    "page_index": 295,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (3 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 3.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Adolescent: 1–3 mg/kg/24 hr PO ÷ TID–QID or 30–50 mg/24 hr PO ÷ TID–QID Adult: 75–100 mg/24 hr PO ÷ TID–QID; alternatively, initiate at 25–50 mg PO QHS and if"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 10 mg / 5 mL",
        "mg": 10.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "nystatin",
    "name": "NYSTATIN",
    "scientific_name": "NYSTATIN",
    "brand_names": "Klayesta, Nyamyc, Nystop, and generics; previously, available as Mycostatin and Nilstat",
    "see": "",
    "category": "other",
    "book_page": 1135,
    "page_index": 295,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (3 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 3.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Adolescent: 1–3 mg/kg/24 hr PO ÷ TID–QID or 30–50 mg/24 hr PO ÷ TID–QID Adult: 75–100 mg/24 hr PO ÷ TID–QID; alternatively, initiate at 25–50 mg PO QHS and if"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 10 mg / 5 mL",
        "mg": 10.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "octreotide_acetate",
    "name": "OCTREOTIDE ACETATE",
    "scientific_name": "OCTREOTIDE ACETATE",
    "brand_names": "Sandostatin, Sandostatin LAR Depot, and generics, Somatostatin analog, antisecretory agent",
    "see": "",
    "category": "other",
    "book_page": 1136,
    "page_index": 296,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mcg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 10.0,
        "dose_unit": "mcg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Preterm neonate: 0.5 mL (50,000 U) to each side of mouth QID Term neonate and infant: 1 mL (100,000 U) to each side of mouth QID Infant and child:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ofloxacin_otic_and_ophthalmic",
    "name": "OFLOXACIN (OTIC AND OPHTHALMIC)",
    "scientific_name": "OFLOXACIN (OTIC AND OPHTHALMIC)",
    "brand_names": "Ocuflox and generics; previously available as Floxin and, Floxin Otic",
    "see": "",
    "category": "antibiotic",
    "book_page": 1137,
    "page_index": 297,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1137 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "olanzapine",
    "name": "OLANZAPINE",
    "scientific_name": "OLANZAPINE",
    "brand_names": "Zyprexa, Zyprexa Relprevv, and generics, Antipsychotic, atypical second generation",
    "see": "",
    "category": "other",
    "book_page": 1138,
    "page_index": 298,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.14 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.14,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "max. dose: 20 mg/24 hr dose: 20 mg/24 hr (doses >20 mg/24 hr have not been evaluated) dosage range: 5–20 mg/24 hr. Suggested max. dose: 20 mg/24 hr (doses >20 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "olopatadine",
    "name": "OLOPATADINE",
    "scientific_name": "OLOPATADINE",
    "brand_names": "Pataday and generics, Antihistamine",
    "see": "",
    "category": "antihistamine",
    "book_page": 1140,
    "page_index": 300,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1140 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "omeprazole",
    "name": "OMEPRAZOLE",
    "scientific_name": "OMEPRAZOLE",
    "brand_names": "Prilosec, Prilosec OTC, and generics, In combination with sodium bicarbonate: Zegerid,",
    "see": "",
    "category": "antibiotic",
    "book_page": 1140,
    "page_index": 300,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1140 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "omnipaque",
    "name": "OMNIPAQUE",
    "scientific_name": "OMNIPAQUE",
    "brand_names": "",
    "see": "See Iohexol.",
    "category": "other",
    "book_page": 1142,
    "page_index": 302,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Iohexol.",
        "dose_type": "per_dose",
        "dose_per_kg": 0.15,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Iohexol.. Refer to page 1142 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 4 mg / 5 mL",
        "mg": 4.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "ondansetron",
    "name": "ONDANSETRON",
    "scientific_name": "ONDANSETRON",
    "brand_names": "Generics; previously available as Zofran",
    "category": "gi",
    "book_page": 1142,
    "page_index": 302,
    "requires_weight": true,
    "requires_age": true,
    "min_age_months": 6,
    "indications": [
      {
        "id": "vomiting_gastro",
        "name": "Acute Gastroenteritis Vomiting (AAP Protocol)",
        "dose_type": "weight_tiered",
        "weight_rules": [
          {
            "max_kg": 15,
            "dose_mg": 2,
            "desc": "Weight 8 to 15 kg: 2 mg single dose"
          },
          {
            "min_kg": 15,
            "max_kg": 30,
            "dose_mg": 4,
            "desc": "Weight 15 to 30 kg: 4 mg single dose"
          },
          {
            "min_kg": 30,
            "dose_mg": 8,
            "desc": "Weight > 30 kg: 8 mg single dose"
          }
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
      {
        "label": "Oral Solution 4 mg / 5 mL",
        "mg": 4.0,
        "ml": 5.0
      },
      {
        "label": "Orally Disintegrating Tablets (ODT) 4 mg",
        "mg": 4.0,
        "ml": 1.0,
        "is_solid": true
      },
      {
        "label": "Injectable Solution 2 mg / 1 mL (4 mg / 2 mL)",
        "mg": 2.0,
        "ml": 1.0
      }
    ],
    "see": "",
    "is_curated": true
  },
  {
    "id": "orkambi",
    "name": "ORKAMBI",
    "scientific_name": "ORKAMBI",
    "brand_names": "",
    "see": "See Lumacaftor and Ivacaftor.",
    "category": "other",
    "book_page": 1143,
    "page_index": 303,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Lumacaftor and Ivacaftor.",
        "dose_type": "per_dose",
        "dose_per_kg": 0.3,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Lumacaftor and Ivacaftor.. Refer to page 1143 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "oseltamivir_phosphate",
    "name": "OSELTAMIVIR PHOSPHATE",
    "scientific_name": "OSELTAMIVIR PHOSPHATE",
    "brand_names": "Tamiflu and generics, Antiviral, neuraminidase inhibitor",
    "see": "",
    "category": "antibiotic",
    "book_page": 1143,
    "page_index": 303,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.3 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.3,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "IV (≥1 mo): 0.15–0.3 mg/kg/dose × 1; max. dose: 8 mg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "oxacillin",
    "name": "OXACILLIN",
    "scientific_name": "OXACILLIN",
    "brand_names": "Various generics, Antibiotic, penicillin (penicillinase resistant)",
    "see": "",
    "category": "antibiotic",
    "book_page": 1145,
    "page_index": 305,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (25 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 25.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Usual dose: 25 mg/kg/dose; following the dosage interval below Meningitis or severe infection: 50 mg/kg/dose; following the dosage interval below Infant and child (IM/IV): 100–200 mg/kg/24 hr ÷ Q4–6 hr (max. dose: 12 g/24 hr); use 200"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 300 mg / 5 mL",
        "mg": 300.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "oxcarbazepine",
    "name": "OXCARBAZEPINE",
    "scientific_name": "OXCARBAZEPINE",
    "brand_names": "Trileptal, Oxtellar XR, and generics, Anticonvulsant",
    "see": "",
    "category": "other",
    "book_page": 1145,
    "page_index": 305,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (25 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 25.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Usual dose: 25 mg/kg/dose; following the dosage interval below Meningitis or severe infection: 50 mg/kg/dose; following the dosage interval below Infant and child (IM/IV): 100–200 mg/kg/24 hr ÷ Q4–6 hr (max. dose: 12 g/24 hr); use 200"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 300 mg / 5 mL",
        "mg": 300.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "extended_release_tabs_oxtellar_xr_see_remarks",
    "name": "EXTENDED RELEASE TABS (OXTELLAR XR; SEE REMARKS):",
    "scientific_name": "EXTENDED RELEASE TABS (OXTELLAR XR; SEE REMARKS):",
    "brand_names": "",
    "see": "",
    "category": "other",
    "book_page": 1146,
    "page_index": 306,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Adjunctive therapy for partial-onset seizures (limited data): Start with 8–10 mg/kg/24 hr PO ÷ of 16–20 mg/kg/24 hr PO ÷ BID; gradually increase the dose over a 2–4-wk period and do not exceed 60 mg/kg/24 hr ÷ BID."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "oxybutynin_chloride",
    "name": "OXYBUTYNIN CHLORIDE",
    "scientific_name": "OXYBUTYNIN CHLORIDE",
    "brand_names": "Oxytrol, Oxytrol for Women, and generics; previously, available as Ditropan",
    "see": "",
    "category": "other",
    "book_page": 1147,
    "page_index": 307,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.2 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.2,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "dose: 300 mg/24 hr) followed by a slower than normal increase in dose if necessary (see Immediate release: 0.2 mg/kg/dose PO BID–TID; max. dose: 15 mg/24 hr Immediate release: 5 mg/dose PO BID–TID; max. dose: 20 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "oxycodone",
    "name": "OXYCODONE",
    "scientific_name": "OXYCODONE",
    "brand_names": "OxyContin, Roxicodone, RoxyBond, Oxaydo, Xtampza ER,, and many others, including generics",
    "see": "",
    "category": "other",
    "book_page": 1148,
    "page_index": 308,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.05 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.05,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant ≤6 mo: 0.025–0.05 mg/kg/dose PO Q4–6 hr PRN Infant >6 mo, child, and adolescent <50 kg: 0.05–0.15 mg/kg/dose PO Q4–6 hr PRN up to"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "oxycodone_and_acetaminophen",
    "name": "OXYCODONE AND ACETAMINOPHEN",
    "scientific_name": "OXYCODONE AND ACETAMINOPHEN",
    "brand_names": "Endocet, Percocet, Prolate, and many others, including, generics",
    "see": "",
    "category": "other",
    "book_page": 1149,
    "page_index": 309,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1149 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 300 mg / 5 mL",
        "mg": 300.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "oxycodone_and_aspirin",
    "name": "OXYCODONE AND ASPIRIN",
    "scientific_name": "OXYCODONE AND ASPIRIN",
    "brand_names": "Various generics; previously available as Percodan and, Endodan",
    "see": "",
    "category": "other",
    "book_page": 1149,
    "page_index": 309,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1149 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 300 mg / 5 mL",
        "mg": 300.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "oxymetazoline",
    "name": "OXYMETAZOLINE",
    "scientific_name": "OXYMETAZOLINE",
    "brand_names": "Afrin, Vicks Sinex 12 Hour , Nostrilla, and many others,, including generics",
    "see": "",
    "category": "other",
    "book_page": 1150,
    "page_index": 310,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1150 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "palivizumab",
    "name": "PALIVIZUMAB",
    "scientific_name": "PALIVIZUMAB",
    "brand_names": "Synagis",
    "see": "",
    "category": "other",
    "book_page": 1150,
    "page_index": 310,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1150 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "pancrelipase_pancreatic_enzymes",
    "name": "PANCRELIPASE/PANCREATIC ENZYMES",
    "scientific_name": "PANCRELIPASE/PANCREATIC ENZYMES",
    "brand_names": "Creon Pancreaze Pertzye Viokace and Zenpep",
    "see": "",
    "category": "other",
    "book_page": 1151,
    "page_index": 311,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (15 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 15.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "DOSE: ≤24 mo old: 15 mg/kg/dose IM Q monthly just prior to and during the RSV season. Maximum of"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "pantoprazole",
    "name": "PANTOPRAZOLE",
    "scientific_name": "PANTOPRAZOLE",
    "brand_names": "Protonix and generics, Gastric acid pump inhibitor",
    "see": "",
    "category": "antibiotic",
    "book_page": 1153,
    "page_index": 313,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant, child, and adolescent: 1–2 mg/kg/24 hr PO once daily; max. dose: 40 mg/24 hr × 1–5 yr (limited data): 0.3, 0.6, or 1.2 mg/kg/24 hr PO once daily all improved GERD symptoms in <12.5 kg: 0.8 mg/kg IV once daily"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 40 mg / 100 mL",
        "mg": 40.0,
        "ml": 100.0
      },
      {
        "label": "Oral Liquid 80 mg / 100 mL",
        "mg": 80.0,
        "ml": 100.0
      }
    ]
  },
  {
    "id": "paromomycin_sulfate",
    "name": "PAROMOMYCIN SULFATE",
    "scientific_name": "PAROMOMYCIN SULFATE",
    "brand_names": "Humatin and generics, Amebicide, antibiotic (aminoglycoside)",
    "see": "",
    "category": "antibiotic",
    "book_page": 1154,
    "page_index": 314,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "IV: 80 mg Q12 hr; dose may be increased as needed to Q8 hr (max. dose: 240 mg/24 hr). Therapy"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "paroxetine",
    "name": "PAROXETINE",
    "scientific_name": "PAROXETINE",
    "brand_names": "Paxil, Paxil CR, and generics, Antidepressant, selective serotonin reuptake inhibitor",
    "see": "",
    "category": "other",
    "book_page": 1155,
    "page_index": 315,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (35 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 35.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child and adult: 25–35 mg/kg/24 hr PO ÷ Q8 hr × 5–10 days (usually 7 days) Infant, child, and adolescent: 25–35 mg/kg/24 hr PO ÷ BID–QID for 14 days with or without azithromycin; max. dose: use adult dosage of 500 mg QID."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 10 mg / 5 mL",
        "mg": 10.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "penicillin_g_preparations_aqueous_potassium",
    "name": "PENICILLIN G PREPARATIONS—AQUEOUS POTASSIUM",
    "scientific_name": "PENICILLIN G PREPARATIONS—AQUEOUS POTASSIUM",
    "brand_names": "",
    "see": "",
    "category": "antibiotic",
    "book_page": 1156,
    "page_index": 316,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0 units/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.0,
        "dose_unit": "units/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≤7 days old: 100,000–200,000 units/kg/24 hr ÷ Q12 hr 8–28 days old: 150,000–300,000 units/kg/24 hr ÷ Q8 hr General dosing: 100,000 units/kg/24 hr ÷ Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "and_sodium",
    "name": "AND SODIUM",
    "scientific_name": "AND SODIUM",
    "brand_names": "Pfizerpen and generics, Antibiotic, aqueous penicillin",
    "see": "",
    "category": "other",
    "book_page": 1156,
    "page_index": 316,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0 units/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.0,
        "dose_unit": "units/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≤7 days old: 100,000–200,000 units/kg/24 hr ÷ Q12 hr 8–28 days old: 150,000–300,000 units/kg/24 hr ÷ Q8 hr General dosing: 100,000 units/kg/24 hr ÷ Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "penicillin_g_preparations_aqueous_potassium_and_sodium",
    "name": "PENICILLIN G PREPARATIONS—AQUEOUS POTASSIUM AND SODIUM",
    "scientific_name": "PENICILLIN G PREPARATIONS—AQUEOUS POTASSIUM AND SODIUM",
    "brand_names": "continued",
    "see": "",
    "category": "antibiotic",
    "book_page": 1157,
    "page_index": 317,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0 units/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.0,
        "dose_unit": "units/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≤7 days old: 100,000 units/kg/24 hr IV ÷ Q12 hr; increase to the following dosage at day 8 of life 8–28 days old: 150,000 units/kg/24 hr IV ÷ Q8 hr >28–60 days old: 200,00 units/kg/24 hr IV ÷ Q6 hr; if full-term neonate, may receive higher dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "penicillin_g_preparations_benzathine",
    "name": "PENICILLIN G PREPARATIONS—BENZATHINE",
    "scientific_name": "PENICILLIN G PREPARATIONS—BENZATHINE",
    "brand_names": "Bicillin L-A, Extencilline, Lentocilin, Antibiotic, penicillin (very-long-acting IM)",
    "see": "",
    "category": "antibiotic",
    "book_page": 1157,
    "page_index": 317,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0 units/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.0,
        "dose_unit": "units/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≤7 days old: 100,000 units/kg/24 hr IV ÷ Q12 hr; increase to the following dosage at day 8 of life 8–28 days old: 150,000 units/kg/24 hr IV ÷ Q8 hr >28–60 days old: 200,00 units/kg/24 hr IV ÷ Q6 hr; if full-term neonate, may receive higher dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "penicillin_g_preparations_penicillin_g",
    "name": "PENICILLIN G PREPARATIONS—PENICILLIN G",
    "scientific_name": "PENICILLIN G PREPARATIONS—PENICILLIN G",
    "brand_names": "",
    "see": "",
    "category": "antibiotic",
    "book_page": 1158,
    "page_index": 318,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0 units/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.0,
        "dose_unit": "units/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: 50,000 units/kg/dose IM × 1 Infant and child: Max. dose: 2.4 million units/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "benzathine_and_penicillin_g_procaine",
    "name": "BENZATHINE AND PENICILLIN G PROCAINE",
    "scientific_name": "BENZATHINE AND PENICILLIN G PROCAINE",
    "brand_names": "Bicillin C-R, Bicillin C-R 900/300, Antibiotic, penicillin (very-long-acting IM)",
    "see": "",
    "category": "antibiotic",
    "book_page": 1158,
    "page_index": 318,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0 units/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.0,
        "dose_unit": "units/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: 50,000 units/kg/dose IM × 1 Infant and child: Max. dose: 2.4 million units/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "penicillin_g_preparations_penicillin_g_benzathine_and",
    "name": "PENICILLIN G PREPARATIONS—PENICILLIN G BENZATHINE AND",
    "scientific_name": "PENICILLIN G PREPARATIONS—PENICILLIN G BENZATHINE AND",
    "brand_names": "PENICILLIN G PROCAINE continued",
    "see": "",
    "category": "antibiotic",
    "book_page": 1159,
    "page_index": 319,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (75 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 75.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: Infant and child: 25–75 mg/kg/24 hr PO ÷ Q6–8 hr; max. dose: 2 g/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "penicillin_v_potassium",
    "name": "PENICILLIN V POTASSIUM",
    "scientific_name": "PENICILLIN V POTASSIUM",
    "brand_names": "Generics; previously available as Veetids",
    "see": "",
    "category": "antibiotic",
    "book_page": 1159,
    "page_index": 319,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (75 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 75.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: Infant and child: 25–75 mg/kg/24 hr PO ÷ Q6–8 hr; max. dose: 2 g/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "pentamidine_isethionate",
    "name": "PENTAMIDINE ISETHIONATE",
    "scientific_name": "PENTAMIDINE ISETHIONATE",
    "brand_names": "Pentam 300, NebuPent, and generics, Antibiotic, antiprotozoal",
    "see": "",
    "category": "other",
    "book_page": 1160,
    "page_index": 320,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (4 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 4.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Pneumocystis jiroveci (carinii): 4 mg/kg/24 hr IM/IV once daily × 14–21 days (IV is the system involvement): 4 mg/kg/24 hr IM/IV once daily × 7–10 days Visceral leishmaniasis (Leishmania donovani, L. infantum, L. chagasi): 2–4 mg/kg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "pentobarbital",
    "name": "PENTOBARBITAL",
    "scientific_name": "PENTOBARBITAL",
    "brand_names": "Generics; previously available as Nembutal",
    "see": "",
    "category": "emergency",
    "book_page": 1160,
    "page_index": 320,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (4 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 4.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Pneumocystis jiroveci (carinii): 4 mg/kg/24 hr IM/IV once daily × 14–21 days (IV is the system involvement): 4 mg/kg/24 hr IM/IV once daily × 7–10 days Visceral leishmaniasis (Leishmania donovani, L. infantum, L. chagasi): 2–4 mg/kg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "permethrin",
    "name": "PERMETHRIN",
    "scientific_name": "PERMETHRIN",
    "brand_names": "Elimite, Nix and generics, Scabicidal agent",
    "see": "",
    "category": "other",
    "book_page": 1161,
    "page_index": 321,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (6 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 6.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "IM/PR: 2–6 mg/kg/dose Max. dose: 100 mg/dose IV: Loading dose: 10–15 mg/kg given slowly over 1–2 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "phenazopyridine_hcl",
    "name": "PHENAZOPYRIDINE HCL",
    "scientific_name": "PHENAZOPYRIDINE HCL",
    "brand_names": "Pyridium, Azo-Urinary Pain Relief Maximum Strength, [OTC], many other brands and generics",
    "see": "",
    "category": "other",
    "book_page": 1162,
    "page_index": 322,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (12 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 12.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child 6–<12 yr: 12 mg/kg/24 hr PO ÷ TID until symptoms of lower urinary tract irritation are controlled or for 2 days. Max. dose: 200 mg/dose Neonate, infant, and child: 15–20 mg/kg/dose (max. loading dose: 1000 mg) in a single or divided"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 20 mg / 5 mL",
        "mg": 20.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "phenobarbital",
    "name": "PHENOBARBITAL",
    "scientific_name": "PHENOBARBITAL",
    "brand_names": "Sezaby and generics; previously available as Luminal, Barbiturate",
    "see": "",
    "category": "emergency",
    "book_page": 1162,
    "page_index": 322,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (12 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 12.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child 6–<12 yr: 12 mg/kg/24 hr PO ÷ TID until symptoms of lower urinary tract irritation are controlled or for 2 days. Max. dose: 200 mg/dose Neonate, infant, and child: 15–20 mg/kg/dose (max. loading dose: 1000 mg) in a single or divided"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 20 mg / 5 mL",
        "mg": 20.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "phentolamine_mesylate",
    "name": "PHENTOLAMINE MESYLATE",
    "scientific_name": "PHENTOLAMINE MESYLATE",
    "brand_names": "OraVerse and generics; previously available as Regitine, α-Adrenergic blocking agent; antidote, extravasation",
    "see": "",
    "category": "antihistamine",
    "book_page": 1163,
    "page_index": 323,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.2 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.2,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "not to exceed 1 mg/kg/min. Max. total dose: Neonate: 2.5 mg"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 0.4 mg / 1.7 mL",
        "mg": 0.4,
        "ml": 1.7
      }
    ]
  },
  {
    "id": "phenylephrine_hcl",
    "name": "PHENYLEPHRINE HCL",
    "scientific_name": "PHENYLEPHRINE HCL",
    "brand_names": "Vazculep, Biorphen, Immphentiv, Neo-Synephrine, many, others, and generics",
    "see": "",
    "category": "other",
    "book_page": 1164,
    "page_index": 324,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 0.05–0.1 mg/kg/dose up to a max. dose of 5 mg 1–2 hr before surgery, repeat Child: IV bolus: 5–20 mCg/kg/dose (initial max. dose: 500 mCg/dose, subsequent max. dose: 1000 mCg/"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 2.5 mg / 5 mL",
        "mg": 2.5,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "phenytoin",
    "name": "PHENYTOIN",
    "scientific_name": "PHENYTOIN",
    "brand_names": "Dilantin, Dilantin Infatab, Phenytoin Infatab, Phenytek,, and generics",
    "see": "",
    "category": "emergency",
    "book_page": 1165,
    "page_index": 325,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (5 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 5.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Loading dose (all ages): 20 mg/kg IV; max. dose: 1500 mg/24 hr Neonate: Start with 5 mg/kg/24 hr PO/IV ÷ Q12 hr; usual range 4–8 mg/kg/24 hr PO/IV ÷ Infant/child: Start with 5 mg/kg/24 hr PO/IV ÷ BID–TID; usual dose range (doses divided BID–TID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "phosphorus_supplements",
    "name": "PHOSPHORUS SUPPLEMENTS",
    "scientific_name": "PHOSPHORUS SUPPLEMENTS",
    "brand_names": "K-PHOS Neutral, K-PHOS No. 2, Av-Phos 250 Neutral,, Phospho-Trin 250 Neutral, Phospha 250 Neutral, PHOS-",
    "see": "",
    "category": "other",
    "book_page": 1167,
    "page_index": 327,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Oral: Acute hypophosphatemia: 0.16–0.32 mM/kg/dose (or 5–10 mg/kg/dose) IV over 4–6 hr. Higher doses of 0.32-0.64 mM/kg/dose (or 10–20 mg/kg/dose) IV over 8–12 hr have been"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "physostigmine_salicylate",
    "name": "PHYSOSTIGMINE SALICYLATE",
    "scientific_name": "PHYSOSTIGMINE SALICYLATE",
    "brand_names": "Anticholium; previously available as Antilirium",
    "see": "",
    "category": "other",
    "book_page": 1168,
    "page_index": 328,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.02 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.02,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 0.02 mg/kg/dose (max. dose: 0.5 mg/dose) IM or IV (administered no >0.5 mg/min); ≤1.5 kg: 0.3–0.5 mg/kg/dose × 1 <40 kg: 0.03 mg/kg PO × 1"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "phytonadione_vitamin_k_1",
    "name": "PHYTONADIONE/VITAMIN K 1",
    "scientific_name": "PHYTONADIONE/VITAMIN K 1",
    "brand_names": "Mephyton and generics, Vitamin, fat soluble",
    "see": "",
    "category": "other",
    "book_page": 1168,
    "page_index": 328,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.02 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.02,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 0.02 mg/kg/dose (max. dose: 0.5 mg/dose) IM or IV (administered no >0.5 mg/min); ≤1.5 kg: 0.3–0.5 mg/kg/dose × 1 <40 kg: 0.03 mg/kg PO × 1"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "pilocarpine_hcl",
    "name": "PILOCARPINE HCL",
    "scientific_name": "PILOCARPINE HCL",
    "brand_names": "Vuity, Qlosi, Salagen, and generics; previously available, as Isopto Carpine",
    "see": "",
    "category": "other",
    "book_page": 1169,
    "page_index": 329,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<40 kg: 0.03 mg/kg × 1"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "pimecrolimus",
    "name": "PIMECROLIMUS",
    "scientific_name": "PIMECROLIMUS",
    "brand_names": "Elidel and generics, Topical immunosuppressant, calcineurin inhibitor",
    "see": "",
    "category": "other",
    "book_page": 1170,
    "page_index": 330,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1170 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "piperacillin_with_tazobactam",
    "name": "PIPERACILLIN WITH TAZOBACTAM",
    "scientific_name": "PIPERACILLIN WITH TAZOBACTAM",
    "brand_names": "Zosyn and generics, Antibiotic, penicillin (extended spectrum with",
    "see": "",
    "category": "antibiotic",
    "book_page": 1170,
    "page_index": 330,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1170 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "polycitra",
    "name": "POLYCITRA",
    "scientific_name": "POLYCITRA",
    "brand_names": "",
    "see": "See Citrate Mixtures.",
    "category": "other",
    "book_page": 1172,
    "page_index": 332,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Citrate Mixtures.",
        "dose_type": "per_day",
        "dose_per_kg": 1.5,
        "dose_unit": "g/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Citrate Mixtures.. Refer to page 1172 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "polyethylene_glycol_electrolyte_solution",
    "name": "POLYETHYLENE GLYCOL—ELECTROLYTE SOLUTION",
    "scientific_name": "POLYETHYLENE GLYCOL—ELECTROLYTE SOLUTION",
    "brand_names": "Bowel-cleansing products: GoLYTELY, Colyte, GaviLyte,, and generics",
    "see": "",
    "category": "other",
    "book_page": 1172,
    "page_index": 332,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1.5 g/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 1.5,
        "dose_unit": "g/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: Oral: 240 mL PO Q10 min up to 4 L or until rectal effluent is clear ≥2 yr and adolescent: 1.5 g/kg/24 hr (max. dose: 100 g/24 hr) × 4 days"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "polymyxin_b_sulfate_and_bacitracin",
    "name": "POLYMYXIN B SULFATE AND BACITRACIN",
    "scientific_name": "POLYMYXIN B SULFATE AND BACITRACIN",
    "brand_names": "",
    "see": "See Bacitracin ± Polymyxin B.",
    "category": "other",
    "book_page": 1173,
    "page_index": 333,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Bacitracin ± Polymyxin B.",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Bacitracin ± Polymyxin B.. Refer to page 1173 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "polymyxin_b_sulfate_and_trimethoprim_sulfate",
    "name": "POLYMYXIN B SULFATE AND TRIMETHOPRIM SULFATE",
    "scientific_name": "POLYMYXIN B SULFATE AND TRIMETHOPRIM SULFATE",
    "brand_names": "Generics; previously available as Polytrim Ophthalmic",
    "see": "",
    "category": "other",
    "book_page": 1173,
    "page_index": 333,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: Dilute powder using the ratio of 17 g powder to 240 mL of water, juice, or milk. A trial"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "polymyxin_b_sulfate_neomycin_sulfate_hydrocortisone_otic",
    "name": "POLYMYXIN B SULFATE, NEOMYCIN SULFATE, HYDROCORTISONE OTIC",
    "scientific_name": "POLYMYXIN B SULFATE, NEOMYCIN SULFATE, HYDROCORTISONE OTIC",
    "brand_names": "Generics; previously available as Cortisporin Otic",
    "see": "",
    "category": "antibiotic",
    "book_page": 1174,
    "page_index": 334,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1174 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 300 mg / 16.7 mL",
        "mg": 300.0,
        "ml": 16.7
      }
    ]
  },
  {
    "id": "polysporin",
    "name": "POLYSPORIN",
    "scientific_name": "POLYSPORIN",
    "brand_names": "",
    "see": "See Bacitracin ± Polymyxin B.",
    "category": "other",
    "book_page": 1174,
    "page_index": 334,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Bacitracin ± Polymyxin B.",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Bacitracin ± Polymyxin B.. Refer to page 1174 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 300 mg / 16.7 mL",
        "mg": 300.0,
        "ml": 16.7
      }
    ]
  },
  {
    "id": "polytrim_ophthalmic_solution",
    "name": "POLYTRIM OPHTHALMIC SOLUTION",
    "scientific_name": "POLYTRIM OPHTHALMIC SOLUTION",
    "brand_names": "",
    "see": "See Polymyxin B Sulfate and Trimethoprim Sulfate.",
    "category": "other",
    "book_page": 1174,
    "page_index": 334,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Polymyxin B Sulfate and Trimethoprim Sulfate.",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Polymyxin B Sulfate and Trimethoprim Sulfate.. Refer to page 1174 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 300 mg / 16.7 mL",
        "mg": 300.0,
        "ml": 16.7
      }
    ]
  },
  {
    "id": "poractant_alfa",
    "name": "PORACTANT ALFA",
    "scientific_name": "PORACTANT ALFA",
    "brand_names": "",
    "see": "See Surfactant, Pulmonary/Poractant Alfa.",
    "category": "other",
    "book_page": 1174,
    "page_index": 334,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Surfactant, Pulmonary/Poractant Alfa.",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Surfactant, Pulmonary/Poractant Alfa.. Refer to page 1174 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 300 mg / 16.7 mL",
        "mg": 300.0,
        "ml": 16.7
      }
    ]
  },
  {
    "id": "posaconazole",
    "name": "POSACONAZOLE",
    "scientific_name": "POSACONAZOLE",
    "brand_names": "Noxafil, Noxafil PowderMix, and generics, Antifungal agent",
    "see": "",
    "category": "antibiotic",
    "book_page": 1174,
    "page_index": 334,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1174 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 300 mg / 16.7 mL",
        "mg": 300.0,
        "ml": 16.7
      }
    ]
  },
  {
    "id": "potassium_iodide",
    "name": "POTASSIUM IODIDE",
    "scientific_name": "POTASSIUM IODIDE",
    "brand_names": "Iosat, SSKI, ThyroShield, ThyroSafe, and others, Antithyroid agent",
    "see": "",
    "category": "other",
    "book_page": 1176,
    "page_index": 336,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1176 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "potassium_supplements",
    "name": "POTASSIUM SUPPLEMENTS",
    "scientific_name": "POTASSIUM SUPPLEMENTS",
    "brand_names": "Many brand names and generics, Electrolyte",
    "see": "",
    "category": "other",
    "book_page": 1177,
    "page_index": 337,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (50 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 50.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 50–250 mg (about 1–5 drops of SSKI) PO TID tolerated to the max. dose of the lesser of 50 mg/kg/dose or 2000–2500 mg PO TID."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "pralidoxime_chloride_atropine",
    "name": "PRALIDOXIME CHLORIDE ± ATROPINE",
    "scientific_name": "PRALIDOXIME CHLORIDE ± ATROPINE",
    "brand_names": "Protopam, 2-PAM, and generics, In combination with atropine: ATNAA",
    "see": "",
    "category": "other",
    "book_page": 1178,
    "page_index": 338,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (50 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 50.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 1–4 mEq/kg/24 hr ÷ BID–QID. Monitor serum potassium. Adult: 40–100 mEq/24 hr ÷ BID–QID. Limit single doses by 20–25 mEq to minimize GI side effects. Child: 0.5–1 mEq/kg/dose given as an infusion of 0.5 mEq/kg/hr × 1–2 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 600 mg / 2 mL",
        "mg": 600.0,
        "ml": 2.0
      },
      {
        "label": "Oral Liquid 2.1 mg / 0.7 mL",
        "mg": 2.1,
        "ml": 0.7
      }
    ]
  },
  {
    "id": "prednisolone",
    "name": "PREDNISOLONE",
    "scientific_name": "PREDNISOLONE",
    "brand_names": "Oral products:",
    "category": "steroid",
    "book_page": 1179,
    "page_index": 339,
    "requires_weight": true,
    "requires_age": false,
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
      {
        "label": "Oral Syrup 15 mg / 5 mL (3 mg/mL)",
        "mg": 15.0,
        "ml": 5.0
      },
      {
        "label": "Oral Syrup 5 mg / 5 mL (1 mg/mL)",
        "mg": 5.0,
        "ml": 5.0
      },
      {
        "label": "Tablets 5 mg",
        "mg": 5.0,
        "ml": 1.0,
        "is_solid": true
      },
      {
        "label": "Tablets 20 mg",
        "mg": 20.0,
        "ml": 1.0,
        "is_solid": true
      }
    ],
    "see": "",
    "is_curated": true
  },
  {
    "id": "tid_qid",
    "name": "TID–QID.",
    "scientific_name": "TID–QID.",
    "brand_names": "",
    "see": "See Prednisone for remarks. See Chapter 10 for relative steroid potencies. Pregnancy category",
    "category": "other",
    "book_page": 1180,
    "page_index": 340,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Prednisone for remarks. See Chapter 10 for relative steroid potencies. Pregnancy category",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Prednisone for remarks. See Chapter 10 for relative steroid potencies. Pregnancy category. Refer to page 1180 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 5 mg / 5 mL",
        "mg": 5.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 10 mg / 5 mL",
        "mg": 10.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 15 mg / 5 mL",
        "mg": 15.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 20 mg / 5 mL",
        "mg": 20.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "prednisone",
    "name": "PREDNISONE",
    "scientific_name": "PREDNISONE",
    "brand_names": "Rayos, Prednisone Intensol, and generics, Corticosteroid",
    "see": "",
    "category": "steroid",
    "book_page": 1180,
    "page_index": 340,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 2 mg/kg/24 hr PO ÷ once daily–BID × 5–7 days; max. dose: 80 mg/24 hr. Patients Child ≤12 yr: 1–2 mg/kg/24 hr PO ÷ Q12 hr (max. dose: 60 mg/24 hr) Child >12 yr and adult: 40–80 mg/24 hr PO ÷ Q12–24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 5 mg / 5 mL",
        "mg": 5.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 10 mg / 5 mL",
        "mg": 10.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 15 mg / 5 mL",
        "mg": 15.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 20 mg / 5 mL",
        "mg": 20.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "primaquine_phosphate",
    "name": "PRIMAQUINE PHOSPHATE",
    "scientific_name": "PRIMAQUINE PHOSPHATE",
    "brand_names": "Various generics, Antimalarial",
    "see": "",
    "category": "other",
    "book_page": 1181,
    "page_index": 341,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child ≤12 yr: 1–2 mg/kg/24 hr PO ÷ Q12–24 hr (max. dose: 60 mg/24 hr) Child >12 yr and adult: 40–60 mg/24 hr PO ÷ Q12–24 hr Infant and child: 1–2 mg/kg/24 hr PO once daily × 3–5 days with the following maximum dose by age:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "primidone",
    "name": "PRIMIDONE",
    "scientific_name": "PRIMIDONE",
    "brand_names": "Mysoline and generics, Anticonvulsant, barbiturate",
    "see": "",
    "category": "other",
    "book_page": 1182,
    "page_index": 342,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (20 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 20.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: 12–20 mg/kg/24 hr PO ÷ BID–QID; initiate therapy at the lower dosage range and mg/kg/ 24 hr PO ÷ TID–QID max. dose: 2 g/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "probenecid",
    "name": "PROBENECID",
    "scientific_name": "PROBENECID",
    "brand_names": "Various generics, Penicillin therapy adjuvant, uric acid–lowering agent",
    "see": "",
    "category": "other",
    "book_page": 1183,
    "page_index": 343,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (40 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 40.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child (2–14 yr): 25 mg/kg PO × 1, then 40 mg/kg/24 hr PO ÷ QID; max. single dose: 500 Q4 wk PRN up to a max. dose of 2–3 g/24 hr ÷ BID ≤45 kg: 23 mg/kg/dose PO × 1"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "prochlorperazine",
    "name": "PROCHLORPERAZINE",
    "scientific_name": "PROCHLORPERAZINE",
    "brand_names": "Compro and generics; previously available as, Compazine",
    "see": "",
    "category": "other",
    "book_page": 1183,
    "page_index": 343,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (40 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 40.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child (2–14 yr): 25 mg/kg PO × 1, then 40 mg/kg/24 hr PO ÷ QID; max. single dose: 500 Q4 wk PRN up to a max. dose of 2–3 g/24 hr ÷ BID ≤45 kg: 23 mg/kg/dose PO × 1"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "promethazine",
    "name": "PROMETHAZINE",
    "scientific_name": "PROMETHAZINE",
    "brand_names": "Phenergan, Promethegan, and generics, Antihistamine, antiemetic, phenothiazine derivative",
    "see": "",
    "category": "other",
    "book_page": 1184,
    "page_index": 344,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.13 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.13,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Max. IM/IV dose: 40 mg/24 hr IM: 0.13 mg/kg/dose × 1 and convert to PO immediately Child (5–18 yr, limited data): 0.15 mg/kg/dose (max. dose: 10 mg/dose) IV over 10 min"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 6.25 mg / 5 mL",
        "mg": 6.25,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "propranolol",
    "name": "PROPRANOLOL",
    "scientific_name": "PROPRANOLOL",
    "brand_names": "Inderal LA, Hemangeol, and generics; previously, available as Inderal",
    "see": "",
    "category": "cardio",
    "book_page": 1185,
    "page_index": 345,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: IV: 0.01–0.1 mg/kg/dose IV push over 10 min, repeat Q6–8 hr PRN; max. dose: 1 mg/dose for PO: Start at 0.5–1 mg/kg/24 hr ÷ Q6–8 hr; increase dosage Q3–5 days PRN. Usual dosage range:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 20 mg / 5 mL",
        "mg": 20.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 40 mg / 5 mL",
        "mg": 40.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "propylthiouracil",
    "name": "PROPYLTHIOURACIL",
    "scientific_name": "PROPYLTHIOURACIL",
    "brand_names": "PTU and generics, Antithyroid agent",
    "see": "",
    "category": "other",
    "book_page": 1186,
    "page_index": 346,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: 0.5–2 mg/kg/24 hr PO ÷ Q6–12 hr Infant and child: 0.5–2 mg/kg/24 hr PO ÷ Q8 hr; max. dose: 40 mg/dose mg/kg/dose PO BID (at least 9 hr apart) × 7 days, then increase to 1.1 mg/kg/dose PO"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "prostaglandin_e_1_see_alprostadil",
    "name": "PROSTAGLANDIN E 1 SEE ALPROSTADIL.",
    "scientific_name": "PROSTAGLANDIN E 1 SEE ALPROSTADIL.",
    "brand_names": "",
    "see": "",
    "category": "other",
    "book_page": 1187,
    "page_index": 347,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (7 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 7.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: Initial: 5–7 mg/kg/24 hr PO ÷ Q8 hr, OR by age: 6–10 yr: 50–150 mg/24 hr PO ÷ Q8 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "protamine_sulfate",
    "name": "PROTAMINE SULFATE",
    "scientific_name": "PROTAMINE SULFATE",
    "brand_names": "Various generics, Antidote, heparin",
    "see": "",
    "category": "antihistamine",
    "book_page": 1187,
    "page_index": 347,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (7 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 7.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: Initial: 5–7 mg/kg/24 hr PO ÷ Q8 hr, OR by age: 6–10 yr: 50–150 mg/24 hr PO ÷ Q8 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "pseudoephedrine",
    "name": "PSEUDOEPHEDRINE",
    "scientific_name": "PSEUDOEPHEDRINE",
    "brand_names": "Sudafed, Children's Sudafed, Sudafed 12 Hour, Sudafed",
    "see": "",
    "category": "other",
    "book_page": 1188,
    "page_index": 348,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (4 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 4.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Consider time since last enoxaparin dose: Max. dose: 50 mg/dose. See aforementioned heparin antidote IV dosage for max. administration Child <12 yr: 4 mg/kg/24 hr PO ÷ Q6 hr or by age:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 15 mg / 5 mL",
        "mg": 15.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "psyllium",
    "name": "PSYLLIUM",
    "scientific_name": "PSYLLIUM",
    "brand_names": "Metamucil, Konsyl Original Formula, and many others,, including some generics",
    "see": "",
    "category": "other",
    "book_page": 1189,
    "page_index": 349,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (11 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 11.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<6 yr: 1.25–2.5 g/dose PO once daily–TID; max. dose: 7.5 g/24 hr 6–11 yr: 2.5–3.75 g/dose PO once daily–TID; max. dose: 15 g/24 hr ≥12 yr and adult: 2.5–7.5 g/dose PO once daily–TID; max. dose: 30 g/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "pyrantel_pamoate",
    "name": "PYRANTEL PAMOATE",
    "scientific_name": "PYRANTEL PAMOATE",
    "brand_names": "Reese’s Pinworm Medicine, Pin-Away, Pin Rid, and, many other generics",
    "see": "",
    "category": "other",
    "book_page": 1189,
    "page_index": 349,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (11 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 11.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<6 yr: 1.25–2.5 g/dose PO once daily–TID; max. dose: 7.5 g/24 hr 6–11 yr: 2.5–3.75 g/dose PO once daily–TID; max. dose: 15 g/24 hr ≥12 yr and adult: 2.5–7.5 g/dose PO once daily–TID; max. dose: 30 g/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "pyrazinamide",
    "name": "PYRAZINAMIDE",
    "scientific_name": "PYRAZINAMIDE",
    "brand_names": "Pyrazinoic acid amide and generics, Antituberculous agent",
    "see": "",
    "category": "other",
    "book_page": 1190,
    "page_index": 350,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (40 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 40.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: Daily dose regimen: 30–40 mg/kg/24 hr PO once daily; max. dose: 2 g/24 hr Twice-weekly dose regimen: 50 mg/kg/dose PO 2× per week; max. dose: 2 g/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "pyrethrins_with_piperonyl_butoxide",
    "name": "PYRETHRINS WITH PIPERONYL BUTOXIDE",
    "scientific_name": "PYRETHRINS WITH PIPERONYL BUTOXIDE",
    "brand_names": "A-200, Pronto Plus, RID, and many others, Pediculicide",
    "see": "",
    "category": "other",
    "book_page": 1190,
    "page_index": 350,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (40 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 40.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: Daily dose regimen: 30–40 mg/kg/24 hr PO once daily; max. dose: 2 g/24 hr Twice-weekly dose regimen: 50 mg/kg/dose PO 2× per week; max. dose: 2 g/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "pyridostigmine_bromide",
    "name": "PYRIDOSTIGMINE BROMIDE",
    "scientific_name": "PYRIDOSTIGMINE BROMIDE",
    "brand_names": "Mestinon, Regonol, and generics, Cholinergic agent",
    "see": "",
    "category": "other",
    "book_page": 1191,
    "page_index": 351,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: PO: 1 mg/kg/dose Q4 hr; max. dose: 7 mg/kg/24 hr IM/IV: 0.05–0.15 mg/kg/dose Q4–6 hr; max. single IM/IV dose: 10 mg"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 60 mg / 5 mL",
        "mg": 60.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 2.5 mL",
        "mg": 100.0,
        "ml": 2.5
      }
    ]
  },
  {
    "id": "pyridoxine",
    "name": "PYRIDOXINE",
    "scientific_name": "PYRIDOXINE",
    "brand_names": "Vitamin B 6 and various names, including generics, Vitamin, water soluble",
    "see": "",
    "category": "other",
    "book_page": 1191,
    "page_index": 351,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: PO: 1 mg/kg/dose Q4 hr; max. dose: 7 mg/kg/24 hr IM/IV: 0.05–0.15 mg/kg/dose Q4–6 hr; max. single IM/IV dose: 10 mg"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 60 mg / 5 mL",
        "mg": 60.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 2.5 mL",
        "mg": 100.0,
        "ml": 2.5
      }
    ]
  },
  {
    "id": "pyrimethamine",
    "name": "PYRIMETHAMINE",
    "scientific_name": "PYRIMETHAMINE",
    "brand_names": "Daraprim and generics, Antiparasitic agent",
    "see": "",
    "category": "antihistamine",
    "book_page": 1192,
    "page_index": 352,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 1.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 5–25 mg/24 hr × 3 wk, followed by 2.5–5 mg/24 hr as maintenance therapy (via Child: 1 mg/kg/24 hr or 10–50 mg/24 hr Child: 50–200 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "quetiapine",
    "name": "QUETIAPINE",
    "scientific_name": "QUETIAPINE",
    "brand_names": "Seroquel, Seroquel XR, and generics, Antipsychotic, second generation",
    "see": "",
    "category": "other",
    "book_page": 1193,
    "page_index": 353,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 1.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "HIV exposed/positive: 1 mg/kg/24 hr PO once daily (max. dose: 25 mg/24 hr) ≥6 wk"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "quinidine",
    "name": "QUINIDINE",
    "scientific_name": "QUINIDINE",
    "brand_names": "Various generics, Class IA antiarrhythmic, antimalarial agent",
    "see": "",
    "category": "other",
    "book_page": 1196,
    "page_index": 356,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (60 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 60.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child (as sulfate): 15–60 mg/kg/24 hr PO ÷ Q6 hr; max. dose: 2400 mg/24 hr Loading dose: 10 mg/kg/dose IV (max. dose: 600 mg) over 1–2 hr followed by maintenance dose."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "raltegravir",
    "name": "RALTEGRAVIR",
    "scientific_name": "RALTEGRAVIR",
    "brand_names": "Isentress and Isentress HD",
    "see": "",
    "category": "antibiotic",
    "book_page": 1197,
    "page_index": 357,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Maintenance dose: 0.02 mg/kg/min IV as continuous infusion until oral therapy can be"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "rasburicase",
    "name": "RASBURICASE",
    "scientific_name": "RASBURICASE",
    "brand_names": "Elitek",
    "see": "",
    "category": "other",
    "book_page": 1198,
    "page_index": 358,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1.5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.5,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<7 days old: 1.5 mg/kg/dose PO once daily or by the following weight categories: 1–4 weeks old: 3 mg/kg/dose PO BID or by the following weight categories: 4–6 weeks old: 6 mg/kg/dose PO BID or by the following weight categories:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "rh_o_d_immune_globulin_intravenous_human",
    "name": "RH O (D) IMMUNE GLOBULIN INTRAVENOUS (HUMAN)",
    "scientific_name": "RH O (D) IMMUNE GLOBULIN INTRAVENOUS (HUMAN)",
    "brand_names": "WinRho-SDF, Rhophylac, HyperRHO S/D Mini-Dose,, HyperRHO S/D Full Dose, RhoGAM Ultra-Filtered Plus",
    "see": "",
    "category": "other",
    "book_page": 1199,
    "page_index": 359,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.2 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.2,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Hyperuricemia (all ages; see remarks): 0.1–0.2 mg/kg/dose (rounded down to the nearest HyperRHO S/D Mini-Dose: 250 IU HyperRHO S/D Full Dose: 1500 IU"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ribavirin",
    "name": "RIBAVIRIN",
    "scientific_name": "RIBAVIRIN",
    "brand_names": "Oral: Generics; previously available as Rebetol",
    "see": "",
    "category": "antibiotic",
    "book_page": 1200,
    "page_index": 360,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (15 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 15.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Oral: Generics; previously available as Rebetol Child: In combination with sofosbuvir for patients with genotypes 2 or 3 with/without <47 kg: 15 mg/kg/24 hr PO ÷ BID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "riboflavin",
    "name": "RIBOFLAVIN",
    "scientific_name": "RIBOFLAVIN",
    "brand_names": "Vitamin B 2 and various brands and generics, Water-soluble vitamin",
    "see": "",
    "category": "other",
    "book_page": 1201,
    "page_index": 361,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (12 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 12.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 12 mg/kg/dose PO once daily; may further reduce to 8 mg/kg/dose PO once daily Child: 12 mg/kg/dose PO once daily; may further reduce to 8 mg/kg/dose PO once daily (monitor Hgb <12 g/dL after 4 weeks of reduced dose: Discontinue therapy permanently."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "rifabutin",
    "name": "RIFABUTIN",
    "scientific_name": "RIFABUTIN",
    "brand_names": "Generics; previously available as Mycobutin",
    "see": "",
    "category": "other",
    "book_page": 1202,
    "page_index": 362,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (5 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 5.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 2.5–10 mg/24 hr PO ÷ once daily–BID Adult: 5–30 mg/24 hr PO ÷ once daily–BID Infant and child: 5 mg/kg/24 hr PO once daily; max. dose: 300 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "rifampin",
    "name": "RIFAMPIN",
    "scientific_name": "RIFAMPIN",
    "brand_names": "Rifadin and generics, Antibiotic, antituberculous agent, rifamycin",
    "see": "",
    "category": "other",
    "book_page": 1203,
    "page_index": 363,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (20 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 20.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate, infant, child, and adolescent: 10–20 mg/kg/24 hr IV/PO ÷ Q12 hr; max. dose: Empirical early infection (≤1 yr postsurgery): 20 mg/kg/24 hr IV/PO ÷ Q8 hr; max. dose: 900 Empirical late infection (>1 yr postsurgery): 15–20 mg/kg/24 hr IV/PO ÷ Q12 hr; max. dose:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "rifaximin",
    "name": "RIFAXIMIN",
    "scientific_name": "RIFAXIMIN",
    "brand_names": "Xifaxan",
    "see": "",
    "category": "other",
    "book_page": 1204,
    "page_index": 364,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (30 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 30.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child ≥8 yr and adolescent (limited data): 10–30 mg/kg/24 hr PO ÷ TID; max. dose: 1200"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "rimantadine",
    "name": "RIMANTADINE",
    "scientific_name": "RIMANTADINE",
    "brand_names": "Generics; previously available as Flumadine",
    "see": "",
    "category": "antihistamine",
    "book_page": 1205,
    "page_index": 365,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (30 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 30.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child <12 yr (limited data): 15–30 mg/kg/24 hr PO ÷ TID × 20 days; max. dose: 1200 mg/ Child: 1–9 yr: 5 mg/kg/24 hr PO ÷ once daily–BID; max. dose: 150 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 10 mg / 1 mL",
        "mg": 10.0,
        "ml": 1.0
      }
    ]
  },
  {
    "id": "risperidone",
    "name": "RISPERIDONE",
    "scientific_name": "RISPERIDONE",
    "brand_names": "Risperdal, Risperdal Consta, Rykindo, Uzedy, Perseris,, and generics",
    "see": "",
    "category": "other",
    "book_page": 1206,
    "page_index": 366,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Initial dose: Dose increment (if needed) after 4 days of initial dose: made at 24-hr intervals. Dosage range: 4–6 mg/24 hr. Usual max. dose: 8 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 50 mg / 0.14 mL",
        "mg": 50.0,
        "ml": 0.14
      },
      {
        "label": "Oral Liquid 75 mg / 0.21 mL",
        "mg": 75.0,
        "ml": 0.21
      },
      {
        "label": "Oral Liquid 100 mg / 0.28 mL",
        "mg": 100.0,
        "ml": 0.28
      },
      {
        "label": "Oral Liquid 125 mg / 0.35 mL",
        "mg": 125.0,
        "ml": 0.35
      }
    ]
  },
  {
    "id": "rivaroxaban",
    "name": "RIVAROXABAN",
    "scientific_name": "RIVAROXABAN",
    "brand_names": "Xarelto, Xarelto Starter Pack, and generics, Anticoagulant, direct thrombin inhibitor",
    "see": "",
    "category": "other",
    "book_page": 1208,
    "page_index": 368,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1208 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "rizatriptan_benzoate",
    "name": "RIZATRIPTAN BENZOATE",
    "scientific_name": "RIZATRIPTAN BENZOATE",
    "brand_names": "Maxalt, Maxalt-MLT, and generics, Antimigraine agent, selective serotonin agonist",
    "see": "",
    "category": "other",
    "book_page": 1210,
    "page_index": 370,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "administered. Max. daily dose: 30 mg/24 hr ≥40 kg: 5 mg PO × 1; max. dose: 5 mg/24-hr period ≥18 yr and adult: 5 mg PO up to a maximum of three doses at 2-hr intervals; max. dose: 15 mg/"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "rocuronium",
    "name": "ROCURONIUM",
    "scientific_name": "ROCURONIUM",
    "brand_names": "Generics; previously available as Zemuron",
    "see": "",
    "category": "other",
    "book_page": 1210,
    "page_index": 370,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "administered. Max. daily dose: 30 mg/24 hr ≥40 kg: 5 mg PO × 1; max. dose: 5 mg/24-hr period ≥18 yr and adult: 5 mg PO up to a maximum of three doses at 2-hr intervals; max. dose: 15 mg/"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "rufinamide",
    "name": "RUFINAMIDE",
    "scientific_name": "RUFINAMIDE",
    "brand_names": "Banzel and generics, Anticonvulsant, triazole derivative",
    "see": "",
    "category": "other",
    "book_page": 1211,
    "page_index": 371,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.5,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant: Intravenous (IV): 0.5 mg/kg/dose; may repeat Q20–30 min as needed (PRN) IV: Start with 0.6 mg/kg/dose × 1; if needed, give maintenance doses at 0.075–0.125 mg/kg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "salmeterol",
    "name": "SALMETEROL",
    "scientific_name": "SALMETEROL",
    "brand_names": "Serevent Diskus",
    "see": "",
    "category": "respiratory",
    "book_page": 1212,
    "page_index": 372,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≥4 yr and adult: 1 inhalation (50 mCg) Q12 hr; max. dose: 1 inhalation Q12 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "scopolamine_hydrobromide",
    "name": "SCOPOLAMINE HYDROBROMIDE",
    "scientific_name": "SCOPOLAMINE HYDROBROMIDE",
    "brand_names": "Generics; previously available as Transderm Scop",
    "see": "",
    "category": "antihistamine",
    "book_page": 1213,
    "page_index": 373,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1213 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "selenium_sulfide",
    "name": "SELENIUM SULFIDE",
    "scientific_name": "SELENIUM SULFIDE",
    "brand_names": "Selsun Blue and many other brands, including generics, Topical antiseborrheic agent",
    "see": "",
    "category": "other",
    "book_page": 1214,
    "page_index": 374,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1214 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "senna_sennosides",
    "name": "SENNA/SENNOSIDES",
    "scientific_name": "SENNA/SENNOSIDES",
    "brand_names": "Senokot, Senna-Lax, Ex-Lax, Genexa Kids Senna, Laxative, and many others",
    "see": "",
    "category": "other",
    "book_page": 1215,
    "page_index": 375,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (20 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 20.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: Oral: 10–20 mg/kg/dose PO QHS (max. dose: as shown below) or dosage by age: 1 mo–1 yr: 55–109 mg PO QHS to max. dose: 218 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 176 mg / 5 mL",
        "mg": 176.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 218 mg / 5 mL",
        "mg": 218.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 8.8 mg / 5 mL",
        "mg": 8.8,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "sertraline_hcl",
    "name": "SERTRALINE HCL",
    "scientific_name": "SERTRALINE HCL",
    "brand_names": "Zoloft and generics, Antidepressant (selective serotonin reuptake",
    "see": "",
    "category": "other",
    "book_page": 1216,
    "page_index": 376,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1216 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "sildenafil",
    "name": "SILDENAFIL",
    "scientific_name": "SILDENAFIL",
    "brand_names": "Revatio, Viagra, and generics, Phosphodiesterase type 5 (PDE5) inhibitor",
    "see": "",
    "category": "other",
    "book_page": 1217,
    "page_index": 377,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (3 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 3.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "PO: Several dosages have been reported and have ranged from 0.5 to 3 mg/kg/dose Q6–12 hr. A single dose of ~0.3 mg/kg has been used in select patients to facilitate weaning from inhaled IV (case report from 4 neonates >34 wk gestation and <72 hr old): Start with 0.4 mg/kg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "silver_sulfadiazine",
    "name": "SILVER SULFADIAZINE",
    "scientific_name": "SILVER SULFADIAZINE",
    "brand_names": "Silvadene, SSD Cream, and generics, Topical antibiotic",
    "see": "",
    "category": "other",
    "book_page": 1218,
    "page_index": 378,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child <2 yr: 20 mg PO QPC and QHS PRN; max. dose: 240 mg/24 hr 2–12 yr: 40 mg PO QPC and QHS PRN; max. dose: 480 mg/24 hr >12 yr and adult: 40–125 mg PO QPC and QHS PRN; max. dose: 500 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 40 mg / 0.6 mL",
        "mg": 40.0,
        "ml": 0.6
      }
    ]
  },
  {
    "id": "simethicone",
    "name": "SIMETHICONE",
    "scientific_name": "SIMETHICONE",
    "brand_names": "Mylicon, Children’s Mylicon, Phazyme, Mylanta Gas,, Gas-X, and many other brands, including generics",
    "see": "",
    "category": "other",
    "book_page": 1218,
    "page_index": 378,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child <2 yr: 20 mg PO QPC and QHS PRN; max. dose: 240 mg/24 hr 2–12 yr: 40 mg PO QPC and QHS PRN; max. dose: 480 mg/24 hr >12 yr and adult: 40–125 mg PO QPC and QHS PRN; max. dose: 500 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 40 mg / 0.6 mL",
        "mg": 40.0,
        "ml": 0.6
      }
    ]
  },
  {
    "id": "sirolimus",
    "name": "SIROLIMUS",
    "scientific_name": "SIROLIMUS",
    "brand_names": "Generics (previously available as Rapamune) and Hyftor",
    "see": "",
    "category": "other",
    "book_page": 1219,
    "page_index": 379,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "x 1, followed by 3 mg/m 2 /24 hr PO ÷ Q12 hr on the next day. Adjust dose to achieve"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "sodium_bicarbonate",
    "name": "SODIUM BICARBONATE",
    "scientific_name": "SODIUM BICARBONATE",
    "brand_names": "Generics",
    "see": "",
    "category": "other",
    "book_page": 1220,
    "page_index": 380,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate, infant, and child:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "sodium_chloride_inhaled_preparations",
    "name": "SODIUM CHLORIDE—INHALED PREPARATIONS",
    "scientific_name": "SODIUM CHLORIDE—INHALED PREPARATIONS",
    "brand_names": "Hypersal, Nebusal, PulmoSal, Simply Saline, Ocean, Ayr, Saline, Ayr Nasal Mist Allergy/Sinus, many other brands,",
    "see": "",
    "category": "other",
    "book_page": 1221,
    "page_index": 381,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 84–840 mg (1–10 mEq)/kg/24 hr PO ÷ QID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "sodium_phenylacetate_and_sodium_benzoate",
    "name": "SODIUM PHENYLACETATE AND SODIUM BENZOATE",
    "scientific_name": "SODIUM PHENYLACETATE AND SODIUM BENZOATE",
    "brand_names": "Generics; previously available as Ammonul",
    "see": "",
    "category": "other",
    "book_page": 1222,
    "page_index": 382,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1222 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "sodium_phosphate",
    "name": "SODIUM PHOSPHATE",
    "scientific_name": "SODIUM PHOSPHATE",
    "brand_names": "Fleet Enema, Fleet Pedia-Lax, Fleet Enema Extra,, GoodSense Enema, LaCrosse Complete, and generics",
    "see": "",
    "category": "other",
    "book_page": 1223,
    "page_index": 383,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: PO: 1 g/kg per dose (max. dose: 15 g per dose) Q6 hr PR: 1 g/kg per dose Q2–6 hr; max. dose: 30–50 g per dose. Dosing by practical exchange (1 mEq K"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "sodium_polystyrene_sulfonate",
    "name": "SODIUM POLYSTYRENE SULFONATE",
    "scientific_name": "SODIUM POLYSTYRENE SULFONATE",
    "brand_names": "SPS, Kionex, and generics; previously available as, Kayexalate",
    "see": "",
    "category": "other",
    "book_page": 1223,
    "page_index": 383,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: PO: 1 g/kg per dose (max. dose: 15 g per dose) Q6 hr PR: 1 g/kg per dose Q2–6 hr; max. dose: 30–50 g per dose. Dosing by practical exchange (1 mEq K"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "spironolactone",
    "name": "SPIRONOLACTONE",
    "scientific_name": "SPIRONOLACTONE",
    "brand_names": "Aldactone, CaroSpir, and generics, Diuretic, potassium sparing",
    "see": "",
    "category": "other",
    "book_page": 1224,
    "page_index": 384,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (3 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 3.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "PO: 15 g once daily–QID; max. dose: 60 g per 24 hr Neonate: 1–3 mg/kg/24 hr PO ÷ once or twice daily Child: 1–3 mg/kg/24 hr PO ÷ BID–QID; max. dose by indication:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 25 mg / 5 mL",
        "mg": 25.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "streptomycin_sulfate",
    "name": "STREPTOMYCIN SULFATE",
    "scientific_name": "STREPTOMYCIN SULFATE",
    "brand_names": "Generics",
    "see": "",
    "category": "antibiotic",
    "book_page": 1225,
    "page_index": 385,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (40 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 40.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Daily therapy: 20–40 mg/kg/24 hr IM/IV once daily Max. daily dose: 1 g/24 hr Twice-weekly therapy (under direct observation): 25–30 mg/kg/dose IM/IV twice weekly"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "succimer",
    "name": "SUCCIMER",
    "scientific_name": "SUCCIMER",
    "brand_names": "Chemet, DMSA [dimercaptosuccinic acid], Chelating agent",
    "see": "",
    "category": "other",
    "book_page": 1226,
    "page_index": 386,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Lead chelation, child: 10 mg/kg/dose (or 350 mg/m 2 /dose) PO Q8 hr × 5 days, then 10 mg/kg/dose (or 350 mg/ m 2 /dose) PO Q12 hr × 14 days. Max. dose: 500 mg per dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "succinylcholine",
    "name": "SUCCINYLCHOLINE",
    "scientific_name": "SUCCINYLCHOLINE",
    "brand_names": "Anectine, Quelicin, and generics, Neuromuscular blocking agent",
    "see": "",
    "category": "other",
    "book_page": 1226,
    "page_index": 386,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Lead chelation, child: 10 mg/kg/dose (or 350 mg/m 2 /dose) PO Q8 hr × 5 days, then 10 mg/kg/dose (or 350 mg/ m 2 /dose) PO Q12 hr × 14 days. Max. dose: 500 mg per dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "sucralfate",
    "name": "SUCRALFATE",
    "scientific_name": "SUCRALFATE",
    "brand_names": "Carafate and generics",
    "see": "",
    "category": "other",
    "book_page": 1228,
    "page_index": 388,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (80 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 80.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: Duodenal or gastric ulcer (limited data): 40–80 mg/kg/24 hr PO ÷ Q6 hr; max. dose: 1000 Infant, child (<2 yr; limited data): 2 or 4 mg/kg/dose IV once over 10 sec; some suggest"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 1 mL",
        "mg": 100.0,
        "ml": 1.0
      }
    ]
  },
  {
    "id": "sugammadex",
    "name": "SUGAMMADEX",
    "scientific_name": "SUGAMMADEX",
    "brand_names": "Bridion and generics, Neuromuscular blockade reversal agent",
    "see": "",
    "category": "other",
    "book_page": 1228,
    "page_index": 388,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (80 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 80.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: Duodenal or gastric ulcer (limited data): 40–80 mg/kg/24 hr PO ÷ Q6 hr; max. dose: 1000 Infant, child (<2 yr; limited data): 2 or 4 mg/kg/dose IV once over 10 sec; some suggest"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 100 mg / 1 mL",
        "mg": 100.0,
        "ml": 1.0
      }
    ]
  },
  {
    "id": "sulfacetamide_sodium_ophthalmic",
    "name": "SULFACETAMIDE SODIUM OPHTHALMIC",
    "scientific_name": "SULFACETAMIDE SODIUM OPHTHALMIC",
    "brand_names": "Generics; previously available as Bleph-10",
    "see": "",
    "category": "other",
    "book_page": 1229,
    "page_index": 389,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (4 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 4.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "counts with no twitch responses to train-of-four stimulation): 4 mg/kg/dose IV × 1 train-of-four stimulation): 2 mg/kg/dose IV × 1 over 10 sec Reversal of neuromuscular blockade 3 min after rocuronium 1.2 mg/kg:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "sulfadiazine",
    "name": "SULFADIAZINE",
    "scientific_name": "SULFADIAZINE",
    "brand_names": "Various generics, Antibiotic, sulfonamide derivative",
    "see": "",
    "category": "other",
    "book_page": 1230,
    "page_index": 390,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (75 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 75.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant ≥2 mo, child, and adolescent: 75 mg/kg/dose or 2000 mg/m 2 /dose PO × 1, followed by 150 mg/kg/24 hr or 4000 mg/m 2 /24 hr ÷ Q4–6 hr (max. dose: 6000 mg/24 hr) Adult: 2–4 g/dose × 1, followed by 2–4 g/24 hr PO ÷ Q4–8 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "sulfamethoxazole_and_trimethoprim",
    "name": "SULFAMETHOXAZOLE AND TRIMETHOPRIM",
    "scientific_name": "SULFAMETHOXAZOLE AND TRIMETHOPRIM",
    "brand_names": "Trimethoprim-sulfamethoxazole, Co-Trimoxazole,, TMP-SMX, Bactrim, Bactrin DS, Sulfatrim Pediatric",
    "see": "",
    "category": "antibiotic",
    "book_page": 1230,
    "page_index": 390,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (75 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 75.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant ≥2 mo, child, and adolescent: 75 mg/kg/dose or 2000 mg/m 2 /dose PO × 1, followed by 150 mg/kg/24 hr or 4000 mg/m 2 /24 hr ÷ Q4–6 hr (max. dose: 6000 mg/24 hr) Adult: 2–4 g/dose × 1, followed by 2–4 g/24 hr PO ÷ Q4–8 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "sulfasalazine",
    "name": "SULFASALAZINE",
    "scientific_name": "SULFASALAZINE",
    "brand_names": "Azulfidine, Azulfidine EN-tabs, Salicylazosulfapyridine,, and generics",
    "see": "",
    "category": "other",
    "book_page": 1232,
    "page_index": 392,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (50 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 50.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Mild: 40–50 mg/kg/24 hr PO ÷ Q6 hr Moderate/severe: 50–75 mg/kg/24 hr PO ÷ Q4–6 hr Max. initial dose: 4 g/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "sumatriptan_succinate",
    "name": "SUMATRIPTAN SUCCINATE",
    "scientific_name": "SUMATRIPTAN SUCCINATE",
    "brand_names": "Imitrex, Imitrex STAT dose, Zembrace SymTouch,, Tosymra, Onzetra Xsail, and generics",
    "see": "",
    "category": "other",
    "book_page": 1233,
    "page_index": 393,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Max. single dose: 100 mg/dose Max. daily dose: 200 mg/24 hr (with exclusive PO dosing or with an initial SC dose and subsequent an additional dose 1 hr later; max. daily dose: 12 mg/24 hr. Use lower subsequent dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 3 mg / 0.5 mL",
        "mg": 3.0,
        "ml": 0.5
      },
      {
        "label": "Oral Liquid 4 mg / 0.5 mL",
        "mg": 4.0,
        "ml": 0.5
      },
      {
        "label": "Oral Liquid 6 mg / 0.5 mL",
        "mg": 6.0,
        "ml": 0.5
      }
    ]
  },
  {
    "id": "surfactant_pulmonary_beractant",
    "name": "SURFACTANT, PULMONARY/BERACTANT",
    "scientific_name": "SURFACTANT, PULMONARY/BERACTANT",
    "brand_names": "Survanta",
    "see": "",
    "category": "other",
    "book_page": 1234,
    "page_index": 394,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (4 ml/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 4.0,
        "dose_unit": "ml/kg/dose",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "administered. Max. dose: 2 tabs/24 hr. Safety of treating more than five headaches in"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "surfactant_pulmonary_calfactant",
    "name": "SURFACTANT, PULMONARY/CALFACTANT",
    "scientific_name": "SURFACTANT, PULMONARY/CALFACTANT",
    "brand_names": "Infasurf",
    "see": "",
    "category": "other",
    "book_page": 1235,
    "page_index": 395,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (3 ml/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 3.0,
        "dose_unit": "ml/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1235 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "surfactant_pulmonary_poractant_alfa",
    "name": "SURFACTANT, PULMONARY/PORACTANT ALFA",
    "scientific_name": "SURFACTANT, PULMONARY/PORACTANT ALFA",
    "brand_names": "Curosurf",
    "see": "",
    "category": "other",
    "book_page": 1236,
    "page_index": 396,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2.5 ml/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 2.5,
        "dose_unit": "ml/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1236 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "symdeko",
    "name": "SYMDEKO",
    "scientific_name": "SYMDEKO",
    "brand_names": "",
    "see": "See Tezacaftor and Ivacaftor.",
    "category": "other",
    "book_page": 1236,
    "page_index": 396,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Tezacaftor and Ivacaftor.",
        "dose_type": "per_dose",
        "dose_per_kg": 2.5,
        "dose_unit": "ml/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Tezacaftor and Ivacaftor.. Refer to page 1236 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "tacrolimus",
    "name": "TACROLIMUS",
    "scientific_name": "TACROLIMUS",
    "brand_names": "Prograf, Astagraf XL, Envarsus XR, FK506, and, generics; previously available as Protopic",
    "see": "",
    "category": "other",
    "book_page": 1236,
    "page_index": 396,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2.5 ml/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 2.5,
        "dose_unit": "ml/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1236 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "tazarotene",
    "name": "TAZAROTENE",
    "scientific_name": "TAZAROTENE",
    "brand_names": "Arazlo, Fabior, Tazorac, and generics, Topical retinoic acid prodrug, keratolytic agent for",
    "see": "",
    "category": "other",
    "book_page": 1239,
    "page_index": 399,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1239 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "terbinafine",
    "name": "TERBINAFINE",
    "scientific_name": "TERBINAFINE",
    "brand_names": "Previously available as Lamisil, Lamisil AT, and, generics",
    "see": "",
    "category": "other",
    "book_page": 1239,
    "page_index": 399,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1239 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "terbutaline",
    "name": "TERBUTALINE",
    "scientific_name": "TERBUTALINE",
    "brand_names": "Various generics; previously available as Brethine, β 2 -adrenergic agonist",
    "see": "",
    "category": "other",
    "book_page": 1241,
    "page_index": 401,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.01 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.01,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≤12 yr: 0.01 mg/kg/dose Q15–20 min × 3 (max. dose: 0.25 mg/dose); if needed, repeat Q2–6 hr >12 yr and adult: 0.25 mg/dose Q20 min PRN × 3; max. total dose: 0.75 mg Continuous infusion, IV: 2–10 mCg/kg loading dose (max. dose: 1 mg) over 30 min"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "prn",
    "name": "PRN",
    "scientific_name": "PRN",
    "brand_names": ">12 yr and adult: 0.25 mg/dose Q20 min PRN × 3; max. total dose: 0.75 mg",
    "see": "",
    "category": "other",
    "book_page": 1241,
    "page_index": 401,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.01 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.01,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≤12 yr: 0.01 mg/kg/dose Q15–20 min × 3 (max. dose: 0.25 mg/dose); if needed, repeat Q2–6 hr >12 yr and adult: 0.25 mg/dose Q20 min PRN × 3; max. total dose: 0.75 mg Continuous infusion, IV: 2–10 mCg/kg loading dose (max. dose: 1 mg) over 30 min"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "tetracycline_hcl",
    "name": "TETRACYCLINE HCL",
    "scientific_name": "TETRACYCLINE HCL",
    "brand_names": "Various generics; previously available as Sumycin, Antibiotic",
    "see": "",
    "category": "antibiotic",
    "book_page": 1241,
    "page_index": 401,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.01 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.01,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "≤12 yr: 0.01 mg/kg/dose Q15–20 min × 3 (max. dose: 0.25 mg/dose); if needed, repeat Q2–6 hr >12 yr and adult: 0.25 mg/dose Q20 min PRN × 3; max. total dose: 0.75 mg Continuous infusion, IV: 2–10 mCg/kg loading dose (max. dose: 1 mg) over 30 min"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "tezacaftor_and_ivacaftor",
    "name": "TEZACAFTOR AND IVACAFTOR",
    "scientific_name": "TEZACAFTOR AND IVACAFTOR",
    "brand_names": "Symdeko",
    "see": "",
    "category": "other",
    "book_page": 1242,
    "page_index": 402,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1242 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "qam",
    "name": "QAM",
    "scientific_name": "QAM",
    "brand_names": "No ivacaftor",
    "see": "",
    "category": "other",
    "book_page": 1242,
    "page_index": 402,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1242 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "theophylline",
    "name": "THEOPHYLLINE",
    "scientific_name": "THEOPHYLLINE",
    "brand_names": "Theo-24, Elixophyllin, and generics, Bronchodilator, methylxanthine",
    "see": "",
    "category": "respiratory",
    "book_page": 1244,
    "page_index": 404,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 5.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Loading dose: 5 mg/kg/dose PO × 1 Maintenance: 3–6 mg/kg/24 hr PO ÷ Q6–8 hr Loading dose: 1 mg/kg/dose for each 2 mg/L desired increase in serum theophylline level"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 80 mg / 15 mL",
        "mg": 80.0,
        "ml": 15.0
      }
    ]
  },
  {
    "id": "thiamine",
    "name": "THIAMINE",
    "scientific_name": "THIAMINE",
    "brand_names": "Vitamin B 1 , many generic products, Water-soluble vitamin",
    "see": "",
    "category": "antihistamine",
    "book_page": 1245,
    "page_index": 405,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 10–25 mg/dose IM/IV once daily (if critically ill) or 10–50 mg/dose PO once daily × 2 Adult: 10–20 mg/dose IM/IV TID (if critically ill) × 2 wk, followed by 5–10 mg/24 hr PO ÷"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "thioridazine",
    "name": "THIORIDAZINE",
    "scientific_name": "THIORIDAZINE",
    "brand_names": "Various generics; previously available as Mellaril, Antipsychotic, phenothiazine derivative",
    "see": "",
    "category": "other",
    "book_page": 1246,
    "page_index": 406,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.5 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.5,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": 50.0,
        "max_daily_dose": 50.0,
        "notes": "Child ≥6 yr–adolescent: Start with 0.5 mg/kg/24 hr PO ÷ BID–TID (initial max.: 50 mg/ dose); dosage range: 0.5–3 mg/kg/24 hr PO ÷ BID–TID. Max. dose: 3 mg/kg/24 hr Adult: Start with 150–300 mg/24 hr PO ÷ TID. Then gradually increase PRN to max. dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "tiagabine",
    "name": "TIAGABINE",
    "scientific_name": "TIAGABINE",
    "brand_names": "Generics; previously available as Gabitril",
    "see": "",
    "category": "other",
    "book_page": 1246,
    "page_index": 406,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.5 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.5,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": 50.0,
        "max_daily_dose": 50.0,
        "notes": "Child ≥6 yr–adolescent: Start with 0.5 mg/kg/24 hr PO ÷ BID–TID (initial max.: 50 mg/ dose); dosage range: 0.5–3 mg/kg/24 hr PO ÷ BID–TID. Max. dose: 3 mg/kg/24 hr Adult: Start with 150–300 mg/24 hr PO ÷ TID. Then gradually increase PRN to max. dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "tiotropium",
    "name": "TIOTROPIUM",
    "scientific_name": "TIOTROPIUM",
    "brand_names": "Spiriva HandiHaler, Spiriva Respimat, and generic, Anticholinergic agent, long-acting",
    "see": "",
    "category": "respiratory",
    "book_page": 1247,
    "page_index": 407,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.25 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 0.25,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "9.3 + 4.1): Initial dose of 0.25 mg/kg/24 hr PO ÷ TID × 4 wk. Dosage was increased at 4-wk intervals to 0.5, 1, and 1.5 mg/kg/24 hr until an effective and well-tolerated dose was daily dose of 0.73 ± 0.44 mg/kg/24 hr, and patients receiving non–enzyme-inducing AEDs"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "tobramycin",
    "name": "TOBRAMYCIN",
    "scientific_name": "TOBRAMYCIN",
    "brand_names": "Tobrex, TOBI, TOBI Podhaler, Bethkis, Kitabis Pak, and, generics; previously available as Nebcin",
    "see": "",
    "category": "antibiotic",
    "book_page": 1248,
    "page_index": 408,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "age (wk) Postnatal age (days) Dose (mg/kg/dose) Interval (hr)"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 300 mg / 4 mL",
        "mg": 300.0,
        "ml": 4.0
      },
      {
        "label": "Oral Liquid 300 mg / 5 mL",
        "mg": 300.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 170 mg / 3.4 mL",
        "mg": 170.0,
        "ml": 3.4
      }
    ]
  },
  {
    "id": "tolnaftate",
    "name": "TOLNAFTATE",
    "scientific_name": "TOLNAFTATE",
    "brand_names": "Tinactin, many other brands and generics, Antifungal agent",
    "see": "",
    "category": "other",
    "book_page": 1250,
    "page_index": 410,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1250 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "topiramate",
    "name": "TOPIRAMATE",
    "scientific_name": "TOPIRAMATE",
    "brand_names": "Topamax, Topamax Sprinkle, Trokendi XR, Eprontia, and, generics",
    "see": "",
    "category": "other",
    "book_page": 1251,
    "page_index": 411,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (3 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 3.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child 2–16 yr: Start with 1–3 mg/kg/dose (max. dose: 25 mg/dose) PO QHS × 7 days, then increase by 1–3 mg/kg/24 hr increments at 1- to 2-wk intervals (divided daily dose BID) to response. Usual maintenance dose is 5–9 mg/kg/24 hr PO ÷ BID; max. dose: 400 mg/"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "trazodone",
    "name": "TRAZODONE",
    "scientific_name": "TRAZODONE",
    "brand_names": "Raldesy and generics; previously available as Desyrel, Antidepressant, serotonin reuptake inhibitor/",
    "see": "",
    "category": "other",
    "book_page": 1253,
    "page_index": 413,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "18 mo to <3 yr: Start at 1–2 mg/kg/dose (max. dose: 25 mg) PO QHS. If needed, increase by 12.5–25 mg Q2 wk up to 3 mg/kg/dose QHS, not to exceed a max. of 100 3–5 yr: Start at 1–2 mg/kg/dose (max. dose: 50 mg) PO QHS. If needed, increase by"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "treprostinil",
    "name": "TREPROSTINIL",
    "scientific_name": "TREPROSTINIL",
    "brand_names": "Remodulin, Tyvaso, Tyvaso DPI, Orenitram, and generics, Prostaglandin I 2 analogue, vasodilator",
    "see": "",
    "category": "other",
    "book_page": 1253,
    "page_index": 413,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "18 mo to <3 yr: Start at 1–2 mg/kg/dose (max. dose: 25 mg) PO QHS. If needed, increase by 12.5–25 mg Q2 wk up to 3 mg/kg/dose QHS, not to exceed a max. of 100 3–5 yr: Start at 1–2 mg/kg/dose (max. dose: 50 mg) PO QHS. If needed, increase by"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "tretinoin_topical_preparations",
    "name": "TRETINOIN—TOPICAL PREPARATIONS",
    "scientific_name": "TRETINOIN—TOPICAL PREPARATIONS",
    "brand_names": "Retin-A, Retin-A Micro, Altreno, Atralin, Renova, and, many others",
    "see": "",
    "category": "other",
    "book_page": 1254,
    "page_index": 414,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 4,
        "frequency": "Every 6 hours (QID)",
        "frequency_en": "Every 6 hours (QID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "wk for the first 4 wk followed by 2.5 nanogram/kg/min per wk thereafter. Usual target dose: 40–"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "trimethobenzamide_hcl",
    "name": "TRIMETHOBENZAMIDE HCL",
    "scientific_name": "TRIMETHOBENZAMIDE HCL",
    "brand_names": "Tigan and generics, Antiemetic",
    "see": "",
    "category": "other",
    "book_page": 1256,
    "page_index": 416,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (20 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 20.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child PO (avoid use in infants; limited data): 15–20 mg/kg/24 hr ÷ TID–QID PRN"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "triamcinolone",
    "name": "TRIAMCINOLONE",
    "scientific_name": "TRIAMCINOLONE",
    "brand_names": "Nasal preparations: Nasacort Allergy 24HR, Nasal, Allergy 24 Hour, and generics",
    "see": "",
    "category": "steroid",
    "book_page": 1256,
    "page_index": 416,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (20 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 20.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child PO (avoid use in infants; limited data): 15–20 mg/kg/24 hr ÷ TID–QID PRN"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "triamterene",
    "name": "TRIAMTERENE",
    "scientific_name": "TRIAMTERENE",
    "brand_names": "Dyrenium and generics, Diuretic, potassium sparing",
    "see": "",
    "category": "other",
    "book_page": 1258,
    "page_index": 418,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child (limited data): 1–2 mg/kg/24 hr PO ÷ BID. May increase up to a max. of 3–4 mg/kg/ Adult: 50–100 mg/24 hr PO ÷ once daily–BID; max. dose: 300 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "trifluridine",
    "name": "TRIFLURIDINE",
    "scientific_name": "TRIFLURIDINE",
    "brand_names": "Generics; previously available as Viroptic",
    "see": "",
    "category": "other",
    "book_page": 1258,
    "page_index": 418,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child (limited data): 1–2 mg/kg/24 hr PO ÷ BID. May increase up to a max. of 3–4 mg/kg/ Adult: 50–100 mg/24 hr PO ÷ once daily–BID; max. dose: 300 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "trikafta",
    "name": "TRIKAFTA",
    "scientific_name": "TRIKAFTA",
    "brand_names": "",
    "see": "See Elexacaftor/Tezacaftor/Ivacaftor.",
    "category": "other",
    "book_page": 1259,
    "page_index": 419,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Elexacaftor/Tezacaftor/Ivacaftor.",
        "dose_type": "per_day",
        "dose_per_kg": 20.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Elexacaftor/Tezacaftor/Ivacaftor.. Refer to page 1259 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "trimethoprim_and_sulfamethoxazole",
    "name": "TRIMETHOPRIM AND SULFAMETHOXAZOLE",
    "scientific_name": "TRIMETHOPRIM AND SULFAMETHOXAZOLE",
    "brand_names": "",
    "see": "See Sulfamethoxazole and Trimethoprim.",
    "category": "antibiotic",
    "book_page": 1259,
    "page_index": 419,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "See: See Sulfamethoxazole and Trimethoprim.",
        "dose_type": "per_day",
        "dose_per_kg": 20.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Related to See Sulfamethoxazole and Trimethoprim.. Refer to page 1259 for full clinical details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "ursodiol",
    "name": "URSODIOL",
    "scientific_name": "URSODIOL",
    "brand_names": "Urso Forte, Reltone, and generics; previously available, as Actigall",
    "see": "",
    "category": "other",
    "book_page": 1259,
    "page_index": 419,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (20 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 20.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate, infant, and child (limited data): 10–20 mg/kg/24 hr PO ÷ BID–TID; higher doses of 20–36 mg/kg/24 hr have been reported in neonates and infants receiving the Kasai Infant, child, and adolescent (limited data): 15–30 mg/kg/24 hr PO ÷ once daily–BID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "valacyclovir",
    "name": "VALACYCLOVIR",
    "scientific_name": "VALACYCLOVIR",
    "brand_names": "Valtrex and generics, Antiviral agent",
    "see": "",
    "category": "antibiotic",
    "book_page": 1260,
    "page_index": 420,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: Recommended dosages based on steady-state pharmacokinetic data in To mimic an IV acyclovir regimen of 250 mg/m 2 /dose or 10 mg/kg/dose TID: 30 mg/kg/dose PO TID OR alternatively by weight:"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "valganciclovir",
    "name": "VALGANCICLOVIR",
    "scientific_name": "VALGANCICLOVIR",
    "brand_names": "Valcyte and generics, Antiviral agent",
    "see": "",
    "category": "antibiotic",
    "book_page": 1261,
    "page_index": 421,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (20 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 20.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child ≥2 yr and adolescent: 20 mg/kg/dose PO Q8 hr; max. dose: 1000 mg/dose for a Neonate and infant: infants 4–90 days old [mean: 20 days] and 24 neonates 8–34 days old): 16 mg/kg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "valproic_acid_valproate_sodium",
    "name": "VALPROIC ACID/VALPROATE SODIUM",
    "scientific_name": "VALPROIC ACID/VALPROATE SODIUM",
    "brand_names": "Generics; previously available as Depakene (PO) and",
    "see": "",
    "category": "other",
    "book_page": 1263,
    "page_index": 423,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (15 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 15.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Initial: 10–15 mg/kg/24 hr ÷ once daily–TID Increment: 5–10 mg/kg/24 hr at weekly intervals to max. dose of 60 mg/kg/24 hr Maintenance: 30–60 mg/kg/24 hr ÷ BID–TID. Due to drug interactions, higher doses (up to"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL",
        "mg": 250.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "valsartan",
    "name": "VALSARTAN",
    "scientific_name": "VALSARTAN",
    "brand_names": "Diovan and generics, Angiotensin II receptor blocker, antihypertensive",
    "see": "",
    "category": "cardio",
    "book_page": 1264,
    "page_index": 424,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 1.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant ≥6 mo and ≥6 kg (limited data): Start at 1 mg/kg/dose PO once daily; if needed, increase dose every 2 weeks up to a maximum of 4 mg/kg/24 hr. Usual range: 0.25–4 mg/kg/dose once daily"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "vancomycin",
    "name": "VANCOMYCIN",
    "scientific_name": "VANCOMYCIN",
    "brand_names": "Vancocin, Firvanq, and generics, Antibiotic, glycopeptide",
    "see": "",
    "category": "antibiotic",
    "book_page": 1265,
    "page_index": 425,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Bacteremia: 10 mg/kg/dose Meningitis, pneumonia: 15 mg/kg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 500 mg / 100 mL",
        "mg": 500.0,
        "ml": 100.0
      },
      {
        "label": "Oral Liquid 750 mg / 150 mL",
        "mg": 750.0,
        "ml": 150.0
      },
      {
        "label": "Oral Liquid 1000 mg / 200 mL",
        "mg": 1000.0,
        "ml": 200.0
      },
      {
        "label": "Oral Liquid 1250 mg / 250 mL",
        "mg": 1250.0,
        "ml": 250.0
      }
    ]
  },
  {
    "id": "vanzacaftor_tezacaftor_deutivacaftor",
    "name": "VANZACAFTOR + TEZACAFTOR + DEUTIVACAFTOR",
    "scientific_name": "VANZACAFTOR + TEZACAFTOR + DEUTIVACAFTOR",
    "brand_names": "Alyftrek",
    "see": "",
    "category": "other",
    "book_page": 1267,
    "page_index": 427,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "See Harriet Lane Handbook page 1267 for complete prescribing details."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "varicella_zoster_immune_globulin_human",
    "name": "VARICELLA-ZOSTER IMMUNE GLOBULIN (HUMAN)",
    "scientific_name": "VARICELLA-ZOSTER IMMUNE GLOBULIN (HUMAN)",
    "brand_names": "VariZig, VZIG, Hyperimmune globulin, varicella-zoster",
    "see": "",
    "category": "other",
    "book_page": 1269,
    "page_index": 429,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Max. dose: 625 Units/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "vasopressin",
    "name": "VASOPRESSIN",
    "scientific_name": "VASOPRESSIN",
    "brand_names": "Vasostrict and generics, 8-Arginine Vasopressin;, previously available as Pitressin",
    "see": "",
    "category": "other",
    "book_page": 1270,
    "page_index": 430,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Child: 2.5–10 Units BID–QID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "vecuronium_bromide",
    "name": "VECURONIUM BROMIDE",
    "scientific_name": "VECURONIUM BROMIDE",
    "brand_names": "Various generics; previously available as Norcuron",
    "see": "",
    "category": "other",
    "book_page": 1271,
    "page_index": 431,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: Initial: 0.1 mg/kg/dose IV Maintenance: 0.03–0.15 mg/kg/dose IV Q1–2 hr PRN"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "vigabatrin",
    "name": "VIGABATRIN",
    "scientific_name": "VIGABATRIN",
    "brand_names": "Sabril, Vigadrone, Vigafyde, Vigpoder, and generics, Anticonvulsant",
    "see": "",
    "category": "other",
    "book_page": 1271,
    "page_index": 431,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (0.1 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 0.1,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Neonate: Initial: 0.1 mg/kg/dose IV Maintenance: 0.03–0.15 mg/kg/dose IV Q1–2 hr PRN"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "vitamin_a",
    "name": "VITAMIN A",
    "scientific_name": "VITAMIN A",
    "brand_names": "Aquasol A and many generics, Vitamin, fat soluble",
    "see": "",
    "category": "other",
    "book_page": 1273,
    "page_index": 433,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 1,
        "frequency": "Once daily (Q24H)",
        "frequency_en": "Once daily (Q24H)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant: 1500 IU/dose PO once daily"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 750 mg / 0.3 mL",
        "mg": 750.0,
        "ml": 0.3
      },
      {
        "label": "Oral Liquid 3000 mg / 0.25 mL",
        "mg": 3000.0,
        "ml": 0.25
      }
    ]
  },
  {
    "id": "voriconazole",
    "name": "VORICONAZOLE",
    "scientific_name": "VORICONAZOLE",
    "brand_names": "Vfend and generics, Antifungal, triazole",
    "see": "",
    "category": "antibiotic",
    "book_page": 1275,
    "page_index": 435,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (9 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 9.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": 400.0,
        "max_daily_dose": 800.0,
        "notes": "Infant and child <2 yr (limited data): Start with 9 mg/kg/dose IV/PO Q12 hr; monitor levels and adjust dose. Median dose of 31.5 mg/kg/24 hr ÷ 12 hr (range: 12–71 mg/kg/24 hr) has Loading dose: 9 mg/kg/dose IV Q12 hr × 2 followed by maintenance dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "warfarin",
    "name": "WARFARIN",
    "scientific_name": "WARFARIN",
    "brand_names": "Jantoven and generics; previously available as, Coumadin",
    "see": "",
    "category": "other",
    "book_page": 1277,
    "page_index": 437,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (5 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 5.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "increase their voriconazole maintenance doses (IV: 5 mg/kg/dose Q12 hr; PO: double the Administer IV over 1–2 hr with a max. rate of 3 mg/kg/hr at a concentration ≤5 mg/mL. Baseline INR ≤1.3: 0.2 mg/kg/dose PO; max. dose: 7.5 mg/dose"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "zidovudine",
    "name": "ZIDOVUDINE",
    "scientific_name": "ZIDOVUDINE",
    "brand_names": "Retrovir, AZT, and generics, Antiviral agent, nucleoside analogue reverse",
    "see": "",
    "category": "other",
    "book_page": 1279,
    "page_index": 439,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "therapies, which may or may not include zidovudine): 600 mg/24 hr PO ÷ BID–TID total body weight): 2 mg/kg/dose IV over 1 hr followed by 1 mg/kg/hr IV infusion over 2 hr."
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 50 mg / 5 mL",
        "mg": 50.0,
        "ml": 5.0
      }
    ]
  },
  {
    "id": "zinc_salts_systemic",
    "name": "ZINC SALTS, SYSTEMIC",
    "scientific_name": "ZINC SALTS, SYSTEMIC",
    "brand_names": "Galzin, Orazinc, and generics, Trace mineral",
    "see": "",
    "category": "other",
    "book_page": 1281,
    "page_index": 441,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Infant and child: 0.5–2 mg elemental Zn/kg/24 hr PO ÷ once daily–TID Child ≥5–<10 yr: 75 mg elemental Zn/24 hr PO ÷ TID Child ≥10 yr and adolescent: 75–150 mg elemental Zn /24 hr PO ÷ TID"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "zolmitriptan",
    "name": "ZOLMITRIPTAN",
    "scientific_name": "ZOLMITRIPTAN",
    "brand_names": "Zomig and generics previously available as Zomig ZMT, Antimigraine agent, selective serotonin agonist",
    "see": "",
    "category": "other",
    "book_page": 1282,
    "page_index": 442,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (10 mg/kg/dose)",
        "dose_type": "per_dose",
        "dose_per_kg": 10.0,
        "dose_unit": "mg/kg/dose",
        "doses_per_day": 3,
        "frequency": "Every 8 hours (TID)",
        "frequency_en": "Every 8 hours (TID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "Max. daily dose: 10 mg/24 hr dose: 10 mg/24 hr"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  },
  {
    "id": "zonisamide",
    "name": "ZONISAMIDE",
    "scientific_name": "ZONISAMIDE",
    "brand_names": "Zonegran, Zonisade, and generics, Anticonvulsant",
    "see": "",
    "category": "other",
    "book_page": 1283,
    "page_index": 443,
    "requires_weight": true,
    "requires_age": false,
    "is_curated": false,
    "indications": [
      {
        "id": "standard_dose",
        "name": "Recommended Pediatric Dose (2 mg/kg/day)",
        "dose_type": "per_day",
        "dose_per_kg": 2.0,
        "dose_unit": "mg/kg/day",
        "doses_per_day": 2,
        "frequency": "Every 12 hours (BID)",
        "frequency_en": "Every 12 hours (BID)",
        "max_single_dose": null,
        "max_daily_dose": null,
        "notes": "<5 yr: Start with 1–2 mg/kg/24 hr PO ÷ BID. Increase dosage by 0.5–1 mg/kg/24 hr Q2 wk to the usual dosage range of 5–8 mg/kg/24 hr PO ÷ BID. 5–<16 yr: Start with 0.5–1 mg/kg/24 hr PO ÷ once daily–BID. Increase dosage by 0.5–1 mg/kg/24"
      }
    ],
    "concentrations": [
      {
        "label": "Oral Liquid 250 mg / 5 mL (Standard)",
        "mg": 250.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 125 mg / 5 mL",
        "mg": 125.0,
        "ml": 5.0
      },
      {
        "label": "Oral Liquid 100 mg / 5 mL",
        "mg": 100.0,
        "ml": 5.0
      },
      {
        "label": "Tablets / Capsules",
        "mg": 250.0,
        "ml": 1.0,
        "is_solid": true
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.CALCULATOR_DRUGS = CALCULATOR_DRUGS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CALCULATOR_DRUGS;
}
