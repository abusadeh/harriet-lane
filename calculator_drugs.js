// Harriet Lane Smart Pediatric Drug Calculator Database
// Verified against Harriet Lane Handbook 24th Edition & AAP Guidelines

var CALCULATOR_DRUGS = [
  {
    id: 'acetaminophen',
    name: 'ACETAMINOPHEN (Paracetamol)',
    arabic_name: 'باراسيتامول / أسيتامينوفين',
    category: 'antipyretic',
    book_page: 840,
    page_index: 0,
    requires_weight: true,
    requires_age: true,
    min_age_months: 0,
    indications: [
      {
        id: 'fever_pain_oral',
        name: 'حمى وألم (عن طريق الفم / تحاميل)',
        dose_type: 'per_dose',
        dose_per_kg: 15, // standard 10-15 mg/kg
        dose_min: 10,
        dose_max: 15,
        dose_unit: 'mg/kg/dose',
        frequency: 'Every 4–6 hours PRN',
        frequency_ar: 'كل 4 إلى 6 ساعات عند اللزوم (بحد أقصى 5 جرعات باليوم)',
        doses_per_day: 4,
        max_single_dose: 1000,
        max_daily_dose: 4000,
        max_daily_per_kg: 75,
        duration: 'عند اللزوم',
        notes: 'الجرعة المعتادة 10-15 ملغ/كغ/جرعة كل 4-6 ساعات. الحد الأقصى 75 ملغ/كغ/اليوم أو 4000 ملغ/اليوم (أيهما أقل).'
      },
      {
        id: 'iv_infusion',
        name: 'وريدي (IV Infusion للألم الحاد)',
        dose_type: 'per_dose',
        dose_per_kg: 15,
        dose_min: 7.5,
        dose_max: 15,
        dose_unit: 'mg/kg/dose',
        frequency: 'Every 6 hours',
        frequency_ar: 'كل 6 ساعات بالتسريب الوريدي',
        doses_per_day: 4,
        max_single_dose: 750,
        max_daily_dose: 3750,
        max_daily_per_kg: 60,
        notes: 'للأطفال أقل من 10 كغ: 7.5 - 15 ملغ/كغ كل 6 ساعات (حد أقصى 60 ملغ/كغ/اليوم).'
      }
    ],
    concentrations: [
      { label: 'شراب 160 ملغ / 5 مل (معياري)', mg: 160, ml: 5 },
      { label: 'شراب 120 ملغ / 5 مل', mg: 120, ml: 5 },
      { label: 'شراب 250 ملغ / 5 مل (فورت)', mg: 250, ml: 5 },
      { label: 'قطرات رضع 100 ملغ / 1 مل', mg: 100, ml: 1 },
      { label: 'تحاميل 125 ملغ', mg: 125, ml: 1, is_solid: true },
      { label: 'تحاميل 250 ملغ', mg: 250, ml: 1, is_solid: true },
      { label: 'أقراص 500 ملغ', mg: 500, ml: 1, is_solid: true }
    ]
  },
  {
    id: 'ibuprofen',
    name: 'IBUPROFEN',
    arabic_name: 'إيبوبروفين (بروفين)',
    category: 'antipyretic',
    book_page: 1063,
    page_index: 223,
    requires_weight: true,
    requires_age: true,
    min_age_months: 6,
    age_warning: '⚠️ تنبيه أمان: لا يُنصح باستخدام الإيبوبروفين للرضع أقل من 6 أشهر إلا بأمر طبي خاص.',
    indications: [
      {
        id: 'fever_low',
        name: 'حمى خفيفة (< 39.2°C) وألم معتدل',
        dose_type: 'per_dose',
        dose_per_kg: 5,
        dose_min: 5,
        dose_max: 5,
        dose_unit: 'mg/kg/dose',
        frequency: 'Every 6–8 hours PRN',
        frequency_ar: 'كل 6 إلى 8 ساعات عند اللزوم مع الطعام',
        doses_per_day: 3,
        max_single_dose: 400,
        max_daily_dose: 2400,
        max_daily_per_kg: 40,
        duration: 'عند اللزوم',
        notes: 'يُفضل إعطاؤه بعد الأكل لتجنب اضطراب المعدة. الحد الأقصى 40 ملغ/كغ/اليوم.'
      },
      {
        id: 'fever_high_pain',
        name: 'حمى شديدة (≥ 39.2°C) أو مضاد التهاب',
        dose_type: 'per_dose',
        dose_per_kg: 10,
        dose_min: 10,
        dose_max: 10,
        dose_unit: 'mg/kg/dose',
        frequency: 'Every 6–8 hours PRN',
        frequency_ar: 'كل 6 إلى 8 ساعات عند اللزوم مع الطعام',
        doses_per_day: 3,
        max_single_dose: 400,
        max_daily_dose: 2400,
        max_daily_per_kg: 40,
        duration: 'عند اللزوم',
        notes: 'الجرعة 10 ملغ/كغ/جرعة كل 6-8 ساعات. الحد الأقصى للجرعة الواحدة للأطفال 400 ملغ ولليوم 2400 ملغ.'
      }
    ],
    concentrations: [
      { label: 'شراب 100 ملغ / 5 مل', mg: 100, ml: 5 },
      { label: 'شراب 200 ملغ / 5 مل', mg: 200, ml: 5 },
      { label: 'أقراص 200 ملغ', mg: 200, ml: 1, is_solid: true },
      { label: 'أقراص 400 ملغ', mg: 400, ml: 1, is_solid: true }
    ]
  },
  {
    id: 'amoxicillin',
    name: 'AMOXICILLIN',
    arabic_name: 'أموكسيسيلين',
    category: 'antibiotic',
    book_page: 852,
    page_index: 12,
    requires_weight: true,
    requires_age: false,
    indications: [
      {
        id: 'high_dose_aom',
        name: 'التهاب الأذن الوسطى الحاد / الجيوب (جرعة عالية)',
        dose_type: 'per_day',
        dose_per_kg: 90,
        dose_min: 80,
        dose_max: 90,
        dose_unit: 'mg/kg/day',
        frequency: 'Divided BID (q12h)',
        frequency_ar: 'مقسمة على مرتين يومياً (كل 12 ساعة)',
        doses_per_day: 2,
        max_single_dose: 1500,
        max_daily_dose: 3000,
        duration: '10 أيام (أقل من سنتين) أو 5-7 أيام (أكبر من سنتين)',
        notes: 'الجرعة الموصى بها من الأكاديمية الأمريكية لطب الأطفال (AAP) لالتهاب الأذن الوسطى هي 80-90 ملغ/كغ/اليوم.'
      },
      {
        id: 'standard_dose',
        name: 'التهاب البلعوم / التهاب الجلد الخفيف (جرعة معتادة)',
        dose_type: 'per_day',
        dose_per_kg: 45,
        dose_min: 40,
        dose_max: 50,
        dose_unit: 'mg/kg/day',
        frequency: 'Divided BID (q12h) or TID',
        frequency_ar: 'مقسمة على مرتين (كل 12 ساعة) أو ثلاث مرات يومياً',
        doses_per_day: 2,
        max_single_dose: 750,
        max_daily_dose: 1500,
        duration: '10 أيام لالتهاب الحلق بالعقديات',
        notes: 'للالتهابات الخفيفة إلى المعتدلة 40-50 ملغ/كغ/اليوم مقسمة q12h أو q8h.'
      },
      {
        id: 'endocarditis_prophylaxis',
        name: 'وقاية من التهاب الشغاف قبل الإجراءات الجراحية',
        dose_type: 'per_dose',
        dose_per_kg: 50,
        dose_min: 50,
        dose_max: 50,
        dose_unit: 'mg/kg/dose',
        frequency: 'Single dose 30-60 min prior',
        frequency_ar: 'جرعة واحدة قبل الإجراء بـ 30 إلى 60 دقيقة',
        doses_per_day: 1,
        max_single_dose: 2000,
        max_daily_dose: 2000,
        notes: 'جرعة وحيدة 50 ملغ/كغ (حد أقصى 2000 ملغ).'
      }
    ],
    concentrations: [
      { label: 'شراب 400 ملغ / 5 مل (الأكثر شيوعاً للجرعات العالية)', mg: 400, ml: 5 },
      { label: 'شراب 250 ملغ / 5 مل', mg: 250, ml: 5 },
      { label: 'شراب 125 ملغ / 5 مل', mg: 125, ml: 5 },
      { label: 'كبسولات 500 ملغ', mg: 500, ml: 1, is_solid: true }
    ]
  },
  {
    id: 'augmentin',
    name: 'AMOXICILLIN / CLAVULANATE (Augmentin)',
    arabic_name: 'أوغمنتين (أموكسيسيلين + كلافولانات)',
    category: 'antibiotic',
    book_page: 852,
    page_index: 12,
    requires_weight: true,
    requires_age: false,
    indications: [
      {
        id: 'high_dose_augmentin',
        name: 'التهاب الأذن المقاوم / الجيوب (Augmentin ES-600 / نسبة 14:1)',
        dose_type: 'per_day',
        dose_per_kg: 90,
        dose_min: 80,
        dose_max: 90,
        dose_unit: 'mg/kg/day (Amox component)',
        frequency: 'Divided BID (q12h)',
        frequency_ar: 'مقسمة على مرتين يومياً (كل 12 ساعة) مع الطعام',
        doses_per_day: 2,
        max_single_dose: 2000,
        max_daily_dose: 4000,
        duration: '10 أيام',
        notes: 'الحساب مبني على مركب الأموكسيسيلين. استخدم تركيبة ES-600 بنسبة 14:1 لتجنب الإسهال الناتج عن الكلافولانات.'
      },
      {
        id: 'standard_augmentin',
        name: 'التهابات الجهاز التنفسي والمسالك المعتادة (نسبة 7:1)',
        dose_type: 'per_day',
        dose_per_kg: 45,
        dose_min: 25,
        dose_max: 45,
        dose_unit: 'mg/kg/day (Amox component)',
        frequency: 'Divided BID (q12h)',
        frequency_ar: 'مقسمة على مرتين يومياً (كل 12 ساعة) مع الطعام',
        doses_per_day: 2,
        max_single_dose: 875,
        max_daily_dose: 1750,
        duration: '7 - 10 أيام',
        notes: 'الجرعة المعتادة 25-45 ملغ/كغ/اليوم مقسمة كل 12 ساعة.'
      }
    ],
    concentrations: [
      { label: 'شراب ES-600 (600 ملغ أموكس / 5 مل)', mg: 600, ml: 5 },
      { label: 'شراب 457 ملغ / 5 مل (400 ملغ أموكس)', mg: 400, ml: 5 },
      { label: 'شراب 228 ملغ / 5 مل (200 ملغ أموكس)', mg: 200, ml: 5 },
      { label: 'شراب 312 ملغ / 5 مل (250 ملغ أموكس)', mg: 250, ml: 5 },
      { label: 'شراب 156 ملغ / 5 مل (125 ملغ أموكس)', mg: 125, ml: 5 },
      { label: 'أقراص 625 ملغ (500 ملغ أموكس)', mg: 500, ml: 1, is_solid: true },
      { label: 'أقراص 1 جم (875 ملغ أموكس)', mg: 875, ml: 1, is_solid: true }
    ]
  },
  {
    id: 'ceftriaxone',
    name: 'CEFTRIAXONE',
    arabic_name: 'سيفترياكسون (روسيفين)',
    category: 'antibiotic',
    book_page: 914,
    page_index: 74,
    requires_weight: true,
    requires_age: true,
    min_age_months: 1,
    age_warning: '⚠️ تنبيه: يمنع استخدامه لحديثي الولادة الذين يعانون من اليرقان (فرط بيليروبين الدم) أو بالتزامن مع محاليل الكالسيوم الوريدية.',
    indications: [
      {
        id: 'systemic_mod',
        name: 'إنتان عام / ذات الرئة / عدوى بولية معتدلة إلى شديدة (IV/IM)',
        dose_type: 'per_day',
        dose_per_kg: 75,
        dose_min: 50,
        dose_max: 75,
        dose_unit: 'mg/kg/day',
        frequency: 'Once daily or divided q12h',
        frequency_ar: 'جرعة واحدة يومياً (أو مقسمة كل 12 ساعة)',
        doses_per_day: 1,
        max_single_dose: 2000,
        max_daily_dose: 2000,
        notes: 'الجرعة 50-75 ملغ/كغ/اليوم تعطى وريدياً أو عضلياً. الحد الأقصى 2000 ملغ/اليوم.'
      },
      {
        id: 'meningitis',
        name: 'التهاب السحايا الجرثومي (Bacterial Meningitis)',
        dose_type: 'per_day',
        dose_per_kg: 100,
        dose_min: 100,
        dose_max: 100,
        dose_unit: 'mg/kg/day',
        frequency: 'Divided q12h (or once daily)',
        frequency_ar: 'مقسمة كل 12 ساعة (أو جرعة واحدة يومياً)',
        doses_per_day: 2,
        max_single_dose: 2000,
        max_daily_dose: 4000,
        notes: 'الجرعة 100 ملغ/كغ/اليوم (يمكن البدء بجرعة تحميل 100 ملغ/كغ). الحد الأقصى 4000 ملغ/اليوم.'
      },
      {
        id: 'aom_single',
        name: 'التهاب الأذن الوسطى (جرعة وحيدة عضلية IM)',
        dose_type: 'per_dose',
        dose_per_kg: 50,
        dose_min: 50,
        dose_max: 50,
        dose_unit: 'mg/kg/dose',
        frequency: 'Single IM dose',
        frequency_ar: 'حقنة عضلية واحدة فقط',
        doses_per_day: 1,
        max_single_dose: 1000,
        max_daily_dose: 1000,
        notes: 'تُعطى 50 ملغ/كغ حقنة عضلية واحدة (حد أقصى 1000 ملغ) عند فشل العلاج الفموي أو القيء الشديد.'
      }
    ],
    concentrations: [
      { label: 'فيال 1000 ملغ (1 غرام) للحقن', mg: 1000, ml: 10 },
      { label: 'فيال 500 ملغ للحقن', mg: 500, ml: 5 },
      { label: 'فيال 250 ملغ للحقن', mg: 250, ml: 2.5 }
    ]
  },
  {
    id: 'azithromycin',
    name: 'AZITHROMYCIN',
    arabic_name: 'أزيثروميسين (زيثروماكس)',
    category: 'antibiotic',
    book_page: 874,
    page_index: 34,
    requires_weight: true,
    requires_age: false,
    indications: [
      {
        id: 'pneumonia_day1',
        name: 'ذات الرئة المكتسبة / التهاب الجيوب (اليوم الأول)',
        dose_type: 'per_dose',
        dose_per_kg: 10,
        dose_min: 10,
        dose_max: 10,
        dose_unit: 'mg/kg/dose',
        frequency: 'Once daily (Day 1)',
        frequency_ar: 'مرة واحدة في اليوم الأول فقط',
        doses_per_day: 1,
        max_single_dose: 500,
        max_daily_dose: 500,
        duration: 'اليوم الأول',
        notes: 'اليوم 1: 10 ملغ/كغ (حد أقصى 500 ملغ). تليها الأيام 2 إلى 5 بجرعة 5 ملغ/كغ (حد أقصى 250 ملغ).'
      },
      {
        id: 'pneumonia_day2_5',
        name: 'ذات الرئة (الأيام 2 إلى 5)',
        dose_type: 'per_dose',
        dose_per_kg: 5,
        dose_min: 5,
        dose_max: 5,
        dose_unit: 'mg/kg/dose',
        frequency: 'Once daily (Days 2-5)',
        frequency_ar: 'مرة واحدة يومياً من اليوم الثاني حتى الخامس',
        doses_per_day: 1,
        max_single_dose: 250,
        max_daily_dose: 250,
        duration: '4 أيام (الأيام 2-5)',
        notes: '5 ملغ/كغ مرة واحدة يومياً.'
      },
      {
        id: 'pharyngitis_5d',
        name: 'التهاب الحلق / اللوزتين (خيار بديل للبنسلين)',
        dose_type: 'per_dose',
        dose_per_kg: 12,
        dose_min: 12,
        dose_max: 12,
        dose_unit: 'mg/kg/dose',
        frequency: 'Once daily for 5 days',
        frequency_ar: 'مرة واحدة يومياً لمدة 5 أيام متتالية',
        doses_per_day: 1,
        max_single_dose: 500,
        max_daily_dose: 500,
        duration: '5 أيام',
        notes: '12 ملغ/كغ مرة واحدة يومياً لمدة 5 أيام (حد أقصى 500 ملغ/اليوم).'
      }
    ],
    concentrations: [
      { label: 'شراب 200 ملغ / 5 مل', mg: 200, ml: 5 },
      { label: 'شراب 100 ملغ / 5 مل', mg: 100, ml: 5 },
      { label: 'أقراص 250 ملغ', mg: 250, ml: 1, is_solid: true },
      { label: 'أقراص 500 ملغ', mg: 500, ml: 1, is_solid: true }
    ]
  },
  {
    id: 'cefixime',
    name: 'CEFIXIME',
    arabic_name: 'سيفيكسيم (سوبراكس)',
    category: 'antibiotic',
    book_page: 911,
    page_index: 71,
    requires_weight: true,
    requires_age: false,
    indications: [
      {
        id: 'uti_or_aom',
        name: 'التهاب المسالك البولية / التهاب الأذن والبلعوم',
        dose_type: 'per_day',
        dose_per_kg: 8,
        dose_min: 8,
        dose_max: 8,
        dose_unit: 'mg/kg/day',
        frequency: 'Once daily or divided BID (q12h)',
        frequency_ar: 'جرعة واحدة يومياً أو مقسمة على مرتين (كل 12 ساعة)',
        doses_per_day: 1,
        max_single_dose: 400,
        max_daily_dose: 400,
        duration: '7 - 14 يوماً للعدوى البولية',
        notes: 'الجرعة 8 ملغ/كغ/اليوم مرة واحدة يومياً أو 4 ملغ/كغ كل 12 ساعة. الحد الأقصى 400 ملغ/اليوم.'
      }
    ],
    concentrations: [
      { label: 'شراب 100 ملغ / 5 مل', mg: 100, ml: 5 },
      { label: 'شراب 200 ملغ / 5 مل', mg: 200, ml: 5 },
      { label: 'أقراص / كبسولات 400 ملغ', mg: 400, ml: 1, is_solid: true }
    ]
  },
  {
    id: 'prednisolone',
    name: 'PREDNISOLONE / PREDNISONE',
    arabic_name: 'بريدنيزولون / بريدنيزون',
    category: 'steroid',
    book_page: 1198,
    page_index: 358,
    requires_weight: true,
    requires_age: false,
    indications: [
      {
        id: 'asthma_exacerbation',
        name: 'نوبة ربو حادة (Acute Asthma Exacerbation)',
        dose_type: 'per_day',
        dose_per_kg: 2,
        dose_min: 1,
        dose_max: 2,
        dose_unit: 'mg/kg/day',
        frequency: 'Once daily or divided BID',
        frequency_ar: 'جرعة صباحية واحدة أو مقسمة مرتين يومياً لمدة 3-5 أيام',
        doses_per_day: 1,
        max_single_dose: 60,
        max_daily_dose: 60,
        duration: '3 - 5 أيام (لا تحتاج تدريج للجرعة إذا كانت أقل من 7 أيام)',
        notes: 'الجرعة 1-2 ملغ/كغ/اليوم (حد أقصى 60 ملغ/اليوم) لمدة 3-5 أيام.'
      },
      {
        id: 'nephrotic_syndrome',
        name: 'المتناذرة النفروزية (الهجمة الأولى)',
        dose_type: 'per_day',
        dose_per_kg: 2,
        dose_min: 2,
        dose_max: 2,
        dose_unit: 'mg/kg/day',
        frequency: 'Once daily morning',
        frequency_ar: 'جرعة واحدة صباحية يومياً',
        doses_per_day: 1,
        max_single_dose: 60,
        max_daily_dose: 60,
        duration: '4-6 أسابيع حسب البروتوكول',
        notes: 'الجرعة 60 ملغ/م2/اليوم أو 2 ملغ/كغ/اليوم (الحد الأقصى 60 ملغ/اليوم).'
      }
    ],
    concentrations: [
      { label: 'شراب 15 ملغ / 5 مل (3 ملغ/مل)', mg: 15, ml: 5 },
      { label: 'شراب 5 ملغ / 5 مل (1 ملغ/مل)', mg: 5, ml: 5 },
      { label: 'أقراص 5 ملغ', mg: 5, ml: 1, is_solid: true },
      { label: 'أقراص 20 ملغ', mg: 20, ml: 1, is_solid: true }
    ]
  },
  {
    id: 'dexamethasone',
    name: 'DEXAMETHASONE',
    arabic_name: 'ديكساميثازون',
    category: 'steroid',
    book_page: 966,
    page_index: 126,
    requires_weight: true,
    requires_age: false,
    indications: [
      {
        id: 'croup',
        name: 'الخانوق الحاد (Croup / Laryngotracheobronchitis)',
        dose_type: 'per_dose',
        dose_per_kg: 0.6,
        dose_min: 0.15,
        dose_max: 0.6,
        dose_unit: 'mg/kg/dose',
        frequency: 'Single oral/IM/IV dose',
        frequency_ar: 'جرعة وحيدة عن طريق الفم أو عضلياً أو وريدياً',
        doses_per_day: 1,
        max_single_dose: 16,
        max_daily_dose: 16,
        duration: 'جرعة واحدة (يمكن تكرارها بعد 24-48 ساعة إذا لزم)',
        notes: 'الجرعة الفعالة 0.15 - 0.6 ملغ/كغ (الأكثر استخداماً 0.6 ملغ/كغ، حد أقصى 16 ملغ).'
      },
      {
        id: 'asthma_short',
        name: 'نوبة ربو (بروتوكول جرعة واحدة أو يومين)',
        dose_type: 'per_dose',
        dose_per_kg: 0.6,
        dose_min: 0.6,
        dose_max: 0.6,
        dose_unit: 'mg/kg/dose',
        frequency: 'Once daily for 1-2 days',
        frequency_ar: 'مرة واحدة يومياً لمدة يوم إلى يومين فقط',
        doses_per_day: 1,
        max_single_dose: 16,
        max_daily_dose: 16,
        duration: 'يوم أو يومين',
        notes: 'يتميز بفاعلية مماثلة للبريدنيزولون لمدة 5 أيام مع التزام أفضل ومذاق أقل مرارة.'
      }
    ],
    concentrations: [
      { label: 'أمبول للحقن 4 ملغ / 1 مل', mg: 4, ml: 1 },
      { label: 'شراب 0.5 ملغ / 5 مل', mg: 0.5, ml: 5 },
      { label: 'أقراص 0.5 ملغ', mg: 0.5, ml: 1, is_solid: true },
      { label: 'أقراص 4 ملغ', mg: 4, ml: 1, is_solid: true }
    ]
  },
  {
    id: 'salbutamol',
    name: 'SALBUTAMOL (Albuterol)',
    arabic_name: 'سالبوتامول (فنتولين)',
    category: 'respiratory',
    book_page: 846,
    page_index: 6,
    requires_weight: false,
    requires_age: true,
    indications: [
      {
        id: 'nebulizer',
        name: 'جلسة رذاذ (Nebulizer لنوبة الربو أو تضيق القصبات)',
        dose_type: 'fixed_age',
        fixed_dose_desc: 'أقل من 5 سنوات: 1.25 - 2.5 ملغ (0.25 - 0.5 مل من المحلول المركز 5 ملغ/مل) ممددة بـ 3 مل سيروم ملحي. أكبر من 5 سنوات: 2.5 - 5 ملغ.',
        dose_unit: 'mg/dose',
        frequency: 'Every 20 min x3 doses (acute) then q4-6h PRN',
        frequency_ar: 'كل 20 دقيقة (3 جلسات بالحالات الحادة) ثم كل 4-6 ساعات عند اللزوم',
        doses_per_day: 4,
        notes: 'محلول الرذاذ 5 ملغ/مل (0.5%): 0.1 - 0.15 ملغ/كغ (حد أدنى 1.25 ملغ = 0.25 مل، وحد أقصى 5 ملغ = 1 مل).'
      },
      {
        id: 'mdi_inhaler',
        name: 'بخاخ مع حجرة استنشاق (MDI with Spacer)',
        dose_type: 'fixed_age',
        fixed_dose_desc: 'نوبة خفيفة/متوسطة: 2 إلى 4 بخات. نوبة حادة: 4 إلى 8 بخات مع الانتظار 30-60 ثانية بين البخات.',
        dose_unit: 'puffs',
        frequency: 'Every 20 min in acute then q4-6h',
        frequency_ar: 'كل 20 دقيقة في الساعة الأولى ثم كل 4-6 ساعات عند اللزوم',
        notes: 'كل بخة تحتوي 100 ميكروغرام. استخدام الحجرة المباعدة (Spacer) مع القناع للرضع أمر ضروري لضمان وصول الدواء للرئتين.'
      },
      {
        id: 'oral_syrup',
        name: 'شراب فموي (في حال عدم توفر البخاخ أو الرذاذ)',
        dose_type: 'per_dose',
        dose_per_kg: 0.15,
        dose_min: 0.1,
        dose_max: 0.15,
        dose_unit: 'mg/kg/dose',
        frequency: 'TID (q8h)',
        frequency_ar: 'ثلاث مرات يومياً (كل 8 ساعات)',
        doses_per_day: 3,
        max_single_dose: 4,
        max_daily_dose: 12,
        notes: '0.1 - 0.15 ملغ/كغ/جرعة كل 8 ساعات (تنبيه: الاستنشاق أكثر فاعلية وأقل آثاراً جانبية).'
      }
    ],
    concentrations: [
      { label: 'محلول رذاذ 5 ملغ / 1 مل (0.5%)', mg: 5, ml: 1 },
      { label: 'شراب فموي 2 ملغ / 5 مل', mg: 2, ml: 5 },
      { label: 'بخاخ MDI (100 ميكروغرام / بخة)', mg: 0.1, ml: 1, is_solid: true }
    ]
  },
  {
    id: 'ondansetron',
    name: 'ONDANSETRON (Zofran)',
    arabic_name: 'أوندانسيترون (زوفران)',
    category: 'gi',
    book_page: 1162,
    page_index: 322,
    requires_weight: true,
    requires_age: true,
    min_age_months: 6,
    indications: [
      {
        id: 'vomiting_gastro',
        name: 'القيء في التهاب المعدة والأمعاء الحاد (Gastroenteritis)',
        dose_type: 'weight_tiered',
        weight_rules: [
          { max_kg: 15, dose_mg: 2, desc: 'الوزن من 8 إلى 15 كغ: جرعة وحيدة 2 ملغ' },
          { min_kg: 15, max_kg: 30, dose_mg: 4, desc: 'الوزن من 15 إلى 30 كغ: جرعة وحيدة 4 ملغ' },
          { min_kg: 30, dose_mg: 8, desc: 'الوزن أكثر من 30 كغ: جرعة وحيدة 8 ملغ' }
        ],
        dose_per_kg: 0.15,
        dose_unit: 'mg/kg/dose',
        frequency: 'Single dose (or q8h PRN)',
        frequency_ar: 'جرعة وحيدة للسماح ببدء الإماهة الفموية (أو كل 8 ساعات عند اللزوم)',
        doses_per_day: 1,
        max_single_dose: 8,
        max_daily_dose: 16,
        notes: 'توصيات AAP و Harriet Lane: جرعة فموية وحيدة لتسهيل محلول الإماهة الفموية (ORS) وتجنب التنويم بالمستشفى.'
      }
    ],
    concentrations: [
      { label: 'شراب 4 ملغ / 5 مل', mg: 4, ml: 5 },
      { label: 'أقراص تذوب بالفم (ODT) 4 ملغ', mg: 4, ml: 1, is_solid: true },
      { label: 'أمبول حقن 2 ملغ / 1 مل (4 ملغ / 2 مل)', mg: 2, ml: 1 }
    ]
  },
  {
    id: 'diphenhydramine',
    name: 'DIPHENHYDRAMINE',
    arabic_name: 'ديفينهيدرامين (مضاد حساسية)',
    category: 'antihistamine',
    book_page: 975,
    page_index: 135,
    requires_weight: true,
    requires_age: true,
    min_age_months: 24,
    age_warning: '⚠️ تنبيه: لا يُوصى باستخدامه للأطفال أقل من سنتين بسبب مخاطر تثبيط التنفس.',
    indications: [
      {
        id: 'allergy_pruritus',
        name: 'حساسية حادة / حكة / شرى (Allergy / Urticaria)',
        dose_type: 'per_dose',
        dose_per_kg: 1,
        dose_min: 1,
        dose_max: 1.25,
        dose_unit: 'mg/kg/dose',
        frequency: 'Every 6 hours PRN',
        frequency_ar: 'كل 6 ساعات عند اللزوم عن طريق الفم أو الوريد/العضل',
        doses_per_day: 4,
        max_single_dose: 50,
        max_daily_dose: 300,
        max_daily_per_kg: 5,
        notes: '1 ملغ/كغ/جرعة كل 6 ساعات (حد أقصى للجرعة 50 ملغ ولليوم 300 ملغ).'
      }
    ],
    concentrations: [
      { label: 'شراب 12.5 ملغ / 5 مل', mg: 12.5, ml: 5 },
      { label: 'أمبول حقن 50 ملغ / 1 مل', mg: 50, ml: 1 },
      { label: 'أقراص 25 ملغ', mg: 25, ml: 1, is_solid: true }
    ]
  },
  {
    id: 'clarithromycin',
    name: 'CLARITHROMYCIN',
    arabic_name: 'كلاريثرومايسين (كلاسيد)',
    category: 'antibiotic',
    book_page: 938,
    page_index: 98,
    requires_weight: true,
    requires_age: false,
    indications: [
      {
        id: 'standard_inf',
        name: 'التهابات الجهاز التنفسي والجلد',
        dose_type: 'per_day',
        dose_per_kg: 15,
        dose_min: 15,
        dose_max: 15,
        dose_unit: 'mg/kg/day',
        frequency: 'Divided BID (q12h)',
        frequency_ar: 'مقسمة على مرتين يومياً (كل 12 ساعة)',
        doses_per_day: 2,
        max_single_dose: 500,
        max_daily_dose: 1000,
        duration: '7 - 10 أيام',
        notes: '15 ملغ/كغ/اليوم مقسمة كل 12 ساعة (حد أقصى 500 ملغ للجرعة، 1000 ملغ لليوم).'
      }
    ],
    concentrations: [
      { label: 'شراب 125 ملغ / 5 مل', mg: 125, ml: 5 },
      { label: 'شراب 250 ملغ / 5 مل', mg: 250, ml: 5 },
      { label: 'أقراص 500 ملغ', mg: 500, ml: 1, is_solid: true }
    ]
  },
  {
    id: 'clindamycin',
    name: 'CLINDAMYCIN',
    arabic_name: 'كليندامايسين (دالاسين)',
    category: 'antibiotic',
    book_page: 940,
    page_index: 100,
    requires_weight: true,
    requires_age: false,
    indications: [
      {
        id: 'oral_moderate',
        name: 'عدوى بكتيرية فموية / خراجات والتهاب العظم (Oral)',
        dose_type: 'per_day',
        dose_per_kg: 30,
        dose_min: 20,
        dose_max: 30,
        dose_unit: 'mg/kg/day',
        frequency: 'Divided TID (q8h) or QID (q6h)',
        frequency_ar: 'مقسمة على 3 أو 4 جرعات يومياً (كل 6 إلى 8 ساعات)',
        doses_per_day: 3,
        max_single_dose: 450,
        max_daily_dose: 1800,
        notes: 'عن طريق الفم: 20 - 30 ملغ/كغ/اليوم مقسمة q8h (حد أقصى 1800 ملغ/اليوم).'
      },
      {
        id: 'iv_severe',
        name: 'عدوى شديدة / إنتان وريدي (IV/IM)',
        dose_type: 'per_day',
        dose_per_kg: 40,
        dose_min: 25,
        dose_max: 40,
        dose_unit: 'mg/kg/day',
        frequency: 'Divided q6h or q8h IV',
        frequency_ar: 'مقسمة كل 6 إلى 8 ساعات بالتسريب الوريدي',
        doses_per_day: 3,
        max_single_dose: 900,
        max_daily_dose: 2700,
        notes: 'وريدياً: 25 - 40 ملغ/كغ/اليوم مقسمة كل 6-8 ساعات (حد أقصى 2700 ملغ/اليوم).'
      }
    ],
    concentrations: [
      { label: 'شراب 75 ملغ / 5 مل', mg: 75, ml: 5 },
      { label: 'أمبول وريدي 150 ملغ / 1 مل (300 ملغ / 2 مل)', mg: 150, ml: 1 },
      { label: 'كبسولات 150 ملغ', mg: 150, ml: 1, is_solid: true },
      { label: 'كبسولات 300 ملغ', mg: 300, ml: 1, is_solid: true }
    ]
  },
  {
    id: 'metronidazole',
    name: 'METRONIDAZOLE (Flagyl)',
    arabic_name: 'ميترونيدازول (فلاجيل)',
    category: 'antibiotic',
    book_page: 1133,
    page_index: 293,
    requires_weight: true,
    requires_age: false,
    indications: [
      {
        id: 'anaerobic_c_diff',
        name: 'بكتيريا لاهوائية / المطثية العسيرة (Anaerobic / C. diff)',
        dose_type: 'per_day',
        dose_per_kg: 30,
        dose_min: 30,
        dose_max: 30,
        dose_unit: 'mg/kg/day',
        frequency: 'Divided q8h',
        frequency_ar: 'مقسمة كل 8 ساعات (3 مرات يومياً)',
        doses_per_day: 3,
        max_single_dose: 500,
        max_daily_dose: 1500,
        duration: '7 - 10 أيام',
        notes: 'الجرعة 30 ملغ/كغ/اليوم مقسمة كل 8 ساعات (حد أقصى 500 ملغ للجرعة).'
      },
      {
        id: 'amoebiasis_giardia',
        name: 'الجيارديا / داء الأميبات المعوي (Amoebiasis / Giardia)',
        dose_type: 'per_day',
        dose_per_kg: 40,
        dose_min: 35,
        dose_max: 50,
        dose_unit: 'mg/kg/day',
        frequency: 'Divided TID (q8h)',
        frequency_ar: 'مقسمة على 3 مرات يومياً مع الوجبات',
        doses_per_day: 3,
        max_single_dose: 750,
        max_daily_dose: 2250,
        duration: '5 - 10 أيام',
        notes: '35 - 50 ملغ/كغ/اليوم مقسمة كل 8 ساعات.'
      }
    ],
    concentrations: [
      { label: 'شراب 200 ملغ / 5 مل (125 ملغ باز / 5 مل)', mg: 200, ml: 5 },
      { label: 'محلول تسريب وريدي 500 ملغ / 100 مل', mg: 5, ml: 1 },
      { label: 'أقراص 250 ملغ', mg: 250, ml: 1, is_solid: true },
      { label: 'أقراص 500 ملغ', mg: 500, ml: 1, is_solid: true }
    ]
  },
  {
    id: 'normal_saline',
    name: 'NORMAL SALINE 0.9% (Fluid Bolus)',
    arabic_name: 'محلول ملحي نظامي 0.9% (سوائل إنعاش)',
    category: 'emergency',
    book_page: 1243,
    page_index: 403,
    requires_weight: true,
    requires_age: false,
    indications: [
      {
        id: 'shock_bolus',
        name: 'صدمة نقص الحجم / جفاف شديد مع صدمة (Hypovolemic Shock)',
        dose_type: 'per_dose',
        dose_per_kg: 20,
        dose_min: 20,
        dose_max: 20,
        dose_unit: 'mL/kg bolus',
        is_volume_direct: true, // directly in mL
        frequency: 'Rapid IV bolus over 5-20 minutes',
        frequency_ar: 'دفعة وريدية سريعة خلال 5 إلى 20 دقيقة مع إعادة التقييم السريري',
        doses_per_day: 1,
        max_single_dose: 1000, // 1000 mL
        notes: '20 مل/كغ تسريب سريع. أعد تقييم علامات التروية (النبض، زمن عودة امتلاء الشعيرات، ضغط الدم، والوعي). في حال الاشتباه بصدمة قلبية أو الحماض الكيتوني السكري DKA تُعطى 10 مل/كغ بحذر.'
      },
      {
        id: 'dka_cautious_bolus',
        name: 'إنعاش حذر في الحماض السكري (DKA) أو ضعف القلب',
        dose_type: 'per_dose',
        dose_per_kg: 10,
        dose_min: 10,
        dose_max: 10,
        dose_unit: 'mL/kg bolus',
        is_volume_direct: true,
        frequency: 'IV over 30-60 minutes',
        frequency_ar: 'تسريب وريدي خلال 30 إلى 60 دقيقة بحذر',
        doses_per_day: 1,
        max_single_dose: 1000,
        notes: '10 مل/كغ تسريب وريدي مراقب لتجنب وذمة الدماغ أو الحمل الزائد على القلب.'
      }
    ],
    concentrations: [
      { label: 'محلول وريدي جاهز (0.9% NaCl)', mg: 1, ml: 1 }
    ]
  },
  {
    id: 'dextrose_10',
    name: 'DEXTROSE 10% (D10W - Hypoglycemia)',
    arabic_name: 'ديكستروز 10% (هبوط سكر الدم الحاد)',
    category: 'emergency',
    book_page: 970,
    page_index: 130,
    requires_weight: true,
    requires_age: false,
    indications: [
      {
        id: 'acute_hypoglycemia',
        name: 'هبوط حاد في سكر الدم مع أعراض (Acute Symptomatic Hypoglycemia)',
        dose_type: 'per_dose',
        dose_per_kg: 2, // 2 mL/kg of D10W gives 0.2 g/kg glucose
        dose_min: 2,
        dose_max: 5,
        dose_unit: 'mL/kg bolus',
        is_volume_direct: true,
        frequency: 'IV bolus over 2-3 minutes',
        frequency_ar: 'دفعة وريدية بطيئة خلال 2 إلى 3 دقائق مع إعادة فحص السكر بعد 15 دقيقة',
        doses_per_day: 1,
        max_single_dose: 250,
        notes: 'قاعدة Harriet Lane & PALS الذهبية: 2 مل/كغ من ديكستروز 10% (D10W) تعطي 0.2 غ/كغ من الغلوكوز. أعد فحص سكر الدم خلال 15 دقيقة واستمر بمحلول صيانة وريدي.'
      }
    ],
    concentrations: [
      { label: 'محلول وريدي جاهز D10W (10% Dextrose)', mg: 1, ml: 1 }
    ]
  },
  {
    id: 'diazepam',
    name: 'DIAZEPAM (Valium)',
    arabic_name: 'ديازيبام (فاليوم - لحالات الاختلاج)',
    category: 'emergency',
    book_page: 971,
    page_index: 131,
    requires_weight: true,
    requires_age: true,
    indications: [
      {
        id: 'status_iv',
        name: 'نوبة اختلاجية حادة مستمرة (وريدياً IV)',
        dose_type: 'per_dose',
        dose_per_kg: 0.2,
        dose_min: 0.1,
        dose_max: 0.3,
        dose_unit: 'mg/kg/dose',
        frequency: 'Slow IV push over 2-3 min',
        frequency_ar: 'حقن وريدي بطيء خلال 2 إلى 3 دقائق (حد أقصى 5 ملغ لمن هم دون 5 سنوات، و10 ملغ للأكبر)',
        doses_per_day: 1,
        max_single_dose: 10,
        notes: '0.1 - 0.3 ملغ/كغ حقن بطيء مع مراقبة التنفس. يمكن تكرارها مرة واحدة بعد 5-10 دقائق.'
      },
      {
        id: 'status_rectal',
        name: 'اختلاج حاد خارج المشفى (شرجياً Rectal Gel)',
        dose_type: 'per_dose',
        dose_per_kg: 0.3,
        dose_min: 0.2,
        dose_max: 0.5,
        dose_unit: 'mg/kg/dose',
        frequency: 'Rectal administration',
        frequency_ar: 'عبر الشرج في حال تعذر الوريد',
        doses_per_day: 1,
        max_single_dose: 10,
        notes: '0.2 - 0.5 ملغ/كغ عن طريق الشرج.'
      }
    ],
    concentrations: [
      { label: 'أمبول للحقن 10 ملغ / 2 مل (5 ملغ/مل)', mg: 5, ml: 1 },
      { label: 'جل شرجي 5 ملغ / 2.5 مل', mg: 5, ml: 2.5 }
    ]
  },
  {
    id: 'midazolam',
    name: 'MIDAZOLAM',
    arabic_name: 'ميدازولام (اختلاجات حادة وتسكين)',
    category: 'emergency',
    book_page: 1135,
    page_index: 295,
    requires_weight: true,
    requires_age: true,
    indications: [
      {
        id: 'seizure_buccal_in',
        name: 'اختلاج حاد عبر الفم (شدقي) أو الأنف (Buccal / Intranasal)',
        dose_type: 'per_dose',
        dose_per_kg: 0.2,
        dose_min: 0.2,
        dose_max: 0.3,
        dose_unit: 'mg/kg/dose',
        frequency: 'Single dose',
        frequency_ar: 'جرعة وحيدة داخل باطن الخد (Buccal) أو بالأنف (IN)',
        doses_per_day: 1,
        max_single_dose: 10,
        notes: '0.2 - 0.3 ملغ/كغ عبر الغشاء المخاطي للخد أو الأنف (حد أقصى 10 ملغ). خيار الإسعاف المفضل عالمياً عند عدم توفر وريد.'
      },
      {
        id: 'seizure_iv',
        name: 'اختلاج حاد وريدياً (IV)',
        dose_type: 'per_dose',
        dose_per_kg: 0.1,
        dose_min: 0.05,
        dose_max: 0.15,
        dose_unit: 'mg/kg/dose',
        frequency: 'Slow IV push',
        frequency_ar: 'حقن وريدي بطيء خلال دقيقتين مع مراقبة التنفس',
        doses_per_day: 1,
        max_single_dose: 5,
        notes: '0.05 - 0.15 ملغ/كغ حقن وريدي بطيء (حد أقصى 5 ملغ للجرعة الأولى).'
      }
    ],
    concentrations: [
      { label: 'أمبول 5 ملغ / 1 مل', mg: 5, ml: 1 },
      { label: 'أمبول 15 ملغ / 3 مل (5 ملغ/مل)', mg: 5, ml: 1 },
      { label: 'أمبول 5 ملغ / 5 مل (1 ملغ/مل)', mg: 1, ml: 1 }
    ]
  },
  {
    id: 'cetirizine',
    name: 'CETIRIZINE (Zyrtec)',
    arabic_name: 'سيتريزين (زيرتيك)',
    category: 'antihistamine',
    book_page: 928,
    page_index: 88,
    requires_weight: false,
    requires_age: true,
    indications: [
      {
        id: 'allergic_rhinitis',
        name: 'التهاب الأنف التحسسي والشرى (Allergic Rhinitis / Urticaria)',
        dose_type: 'fixed_age',
        fixed_dose_desc: '6 أشهر إلى سنتين: 2.5 ملغ مرة واحدة يومياً (حد أقصى 2.5 ملغ). 2 إلى 5 سنوات: 2.5 إلى 5 ملغ مرة واحدة يومياً. أكبر من 6 سنوات: 5 إلى 10 ملغ مرة واحدة يومياً.',
        dose_unit: 'mg/day',
        frequency: 'Once daily evening',
        frequency_ar: 'مرة واحدة يومياً مساءً',
        notes: 'الجرعة حسب العمر: 6m-2y: 2.5 mg. 2y-5y: 2.5-5 mg. >=6y: 5-10 mg.'
      }
    ],
    concentrations: [
      { label: 'شراب 5 ملغ / 5 مل (1 ملغ/مل)', mg: 5, ml: 5 },
      { label: 'قطرات فموية 10 ملغ / 1 مل', mg: 10, ml: 1 },
      { label: 'أقراص 10 ملغ', mg: 10, ml: 1, is_solid: true }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.CALCULATOR_DRUGS = CALCULATOR_DRUGS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CALCULATOR_DRUGS;
}
