// Harriet Lane Formulary & Smart Pediatric Dose Calculator Core Engine (v2.3.0)

const TOTAL_PAGES = 444;
let drugsData = [];
let pagesTextData = {};
let currentPageIndex = 0; // 0-indexed (0 = Book page 840)
let currentDrug = null;
let currentTab = 'book'; // 'book' or 'calc'
let calcMode = 'formulary'; // 'formulary' or 'custom'

// DOM Elements - Book & Search
const searchScreen = document.getElementById('search-screen');
const pageScreen = document.getElementById('page-screen');
const calcScreen = document.getElementById('calc-screen');
const mainBottomNav = document.getElementById('main-bottom-nav');

const drugSearchInput = document.getElementById('drug-search-input');
const clearSearchBtn = document.getElementById('clear-search-btn');
const drugListContainer = document.getElementById('drug-list');

const backToSearchBtn = document.getElementById('back-to-search-btn');
const directSearchBtn = document.getElementById('direct-search-btn');
const copyTextBtn = document.getElementById('copy-text-btn');
const exportPageBtn = document.getElementById('export-page-btn');
const calcDrugBtn = document.getElementById('calc-drug-btn');

const viewerDrugTitle = document.getElementById('viewer-drug-title');
const viewerPageSubtitle = document.getElementById('viewer-page-subtitle');
const navPageIndicator = document.getElementById('nav-page-indicator');

const prevPageBtn = document.getElementById('prev-page-btn');
const nextPageBtn = document.getElementById('next-page-btn');
const pageJumpPill = document.getElementById('page-jump-pill');
const searchJumpBtn = document.getElementById('search-jump-btn');

const canvasWrapper = document.getElementById('canvas-wrapper');
const pageImage = document.getElementById('page-image');
const spinner = document.getElementById('spinner');
const toast = document.getElementById('toast');

// Navigation Tabs
const navBtnBook = document.getElementById('nav-btn-book');
const navBtnCalc = document.getElementById('nav-btn-calc');
const searchSegBook = document.getElementById('search-seg-book');
const searchSegCalc = document.getElementById('search-seg-calc');
const calcSegBook = document.getElementById('calc-seg-book');
const calcSegCalc = document.getElementById('calc-seg-calc');

// Modals
const textModal = document.getElementById('text-modal');
const textModalTitle = document.getElementById('text-modal-title');
const textModalBody = document.getElementById('text-modal-body');
const btnCopyAll = document.getElementById('btn-copy-all');

const exportModal = document.getElementById('export-modal');
const exportImageBtn = document.getElementById('export-image-btn');
const exportTextBtn = document.getElementById('export-text-btn');

const jumpModal = document.getElementById('jump-modal');
const jumpPageInput = document.getElementById('jump-page-input');
const btnConfirmJump = document.getElementById('btn-confirm-jump');

// Calculator DOM Elements
const patientWeightInput = document.getElementById('patient-weight');
const patientAgeTier = document.getElementById('patient-age-tier');
const patientCategoryBadge = document.getElementById('patient-category-badge');

const btnModeFormulary = document.getElementById('btn-mode-formulary');
const btnModeCustom = document.getElementById('btn-mode-custom');

const calcDrugSearch = document.getElementById('calc-drug-search');
const calcDrugCount = document.getElementById('calc-drug-count');
const drugSelect = document.getElementById('drug-select');
const drugSelectGroup = document.getElementById('drug-select-group');
const indicationSelect = document.getElementById('indication-select');
const indicationGroup = document.getElementById('indication-group');
const indicationRouteBadge = document.getElementById('indication-route-badge');
const concentrationSelect = document.getElementById('concentration-select');
const concentrationGroup = document.getElementById('concentration-group');
const manualConcContainer = document.getElementById('manual-conc-container');
const manualConcMg = document.getElementById('manual-conc-mg');
const manualConcMl = document.getElementById('manual-conc-ml');

const customDrugFields = document.getElementById('custom-drug-fields');
const customDoseVal = document.getElementById('custom-dose-val');
const customDoseMode = document.getElementById('custom-dose-mode');
const customFreq = document.getElementById('custom-freq');
const customConcMg = document.getElementById('custom-conc-mg');
const customConcMl = document.getElementById('custom-conc-ml');
const customMaxDose = document.getElementById('custom-max-dose');

const resultDrugTitle = document.getElementById('result-drug-title');
const safetyStatusBadge = document.getElementById('safety-status-badge');
const heroDoseMg = document.getElementById('hero-dose-mg');
const heroDoseUnit = document.getElementById('hero-dose-unit');
const heroSyrupBox = document.getElementById('hero-syrup-box');
const heroVolumeMl = document.getElementById('hero-volume-ml');
const bTotalDaily = document.getElementById('b-total-daily');
const bFrequency = document.getElementById('b-frequency');
const bDuration = document.getElementById('b-duration');
const bMaxCeiling = document.getElementById('b-max-ceiling');
const calcAlertBox = document.getElementById('calc-alert-box');
const calcNotesText = document.getElementById('calc-notes-text');
const btnViewInBook = document.getElementById('btn-view-in-book');
const btnViewBookText = document.getElementById('btn-view-book-text');

// Show Toast Notification
function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// 1. Initialize App Data
async function initApp() {
  try {
    const drugsRes = await fetch('drugs_index.json');
    drugsData = await drugsRes.json();

    const textRes = await fetch('pages_text.json');
    pagesTextData = await textRes.json();

    renderDrugList(drugsData);
    initCalculator();

    // Default drug: Acetaminophen
    selectDrugInCalculator('ACETAMINOPHEN');
  } catch (err) {
    console.error('Initialization error:', err);
    showToast('Failed to load data: ' + err.message);
  }
}

// 2. Navigation & Screen Management
function switchTab(tab) {
  currentTab = tab;
  if (tab === 'book') {
    navBtnBook?.classList.add('active');
    navBtnCalc?.classList.remove('active');
    showScreen('search');
  } else {
    navBtnBook?.classList.remove('active');
    navBtnCalc?.classList.add('active');
    showScreen('calc');
    calculateDose();
  }
}

function showScreen(screen) {
  [searchScreen, pageScreen, calcScreen].forEach(s => s && s.classList.remove('active'));
  if (screen === 'search') {
    searchScreen.classList.add('active');
  } else if (screen === 'page') {
    pageScreen.classList.add('active');
  } else if (screen === 'calc') {
    calcScreen.classList.add('active');
  }
}

// Bottom Navigation Bar
navBtnBook?.addEventListener('click', () => switchTab('book'));
navBtnCalc?.addEventListener('click', () => switchTab('calc'));

// 3. Search & Drug List in Formulary
drugSearchInput.addEventListener('input', (e) => {
  const query = e.target.value.trim().toLowerCase();
  clearSearchBtn.style.display = query ? 'block' : 'none';

  if (!query) {
    renderDrugList(drugsData);
    return;
  }

  const filtered = drugsData.filter(d => 
    (d.name || '').toLowerCase().includes(query) ||
    (d.brand_names || '').toLowerCase().includes(query) ||
    (d.see || '').toLowerCase().includes(query)
  );
  renderDrugList(filtered, query);
});

clearSearchBtn.addEventListener('click', () => {
  drugSearchInput.value = '';
  clearSearchBtn.style.display = 'none';
  renderDrugList(drugsData);
  drugSearchInput.focus();
});

function renderDrugList(drugs, query = '') {
  drugListContainer.innerHTML = '';
  if (drugs.length === 0) {
    drugListContainer.innerHTML = `
      <div style="padding: 40px; text-align: center; color: #64748b;">
        <p style="font-size: 1.1rem; font-weight: 700; margin-bottom: 6px;">No matching drugs found</p>
        <p style="font-size: 0.85rem;">Try searching with another scientific generic name</p>
      </div>`;
    return;
  }

  const fragment = document.createDocumentFragment();
  drugs.forEach(drug => {
    const item = document.createElement('div');
    item.className = 'drug-item';

    item.innerHTML = `
      <div class="drug-info">
        <div class="drug-name">${highlightMatch(drug.name, query)}</div>
      </div>
    `;

    item.addEventListener('click', () => {
      currentDrug = drug;
      goToPage(drug.page_index);
      showScreen('page');
    });

    fragment.appendChild(item);
  });
  drugListContainer.appendChild(fragment);
}

function highlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// 4. Page Viewer
function goToPage(index) {
  currentPageIndex = Math.max(0, Math.min(index, TOTAL_PAGES - 1));
  const bookPage = 840 + currentPageIndex;

  // Title
  if (currentDrug && currentDrug.page_index === currentPageIndex) {
    viewerDrugTitle.textContent = currentDrug.name;
  } else {
    const match = drugsData.find(d => d.page_index === currentPageIndex);
    viewerDrugTitle.textContent = match ? match.name : 'Harriet Lane Formulary';
  }

  viewerPageSubtitle.textContent = `Book P. ${bookPage} (${currentPageIndex + 1}/${TOTAL_PAGES})`;
  navPageIndicator.textContent = `P. ${bookPage} (${currentPageIndex + 1}/${TOTAL_PAGES})`;

  loadPageImage(currentPageIndex);
}

function loadPageImage(index) {
  spinner.style.display = 'flex';
  const imgUrl = `pages/page_${index}.webp`;

  pageImage.onload = () => {
    spinner.style.display = 'none';
  };
  pageImage.onerror = () => {
    // Auto-retry with cache-busting timestamp
    if (!pageImage.dataset.retried) {
      pageImage.dataset.retried = '1';
      pageImage.src = `pages/page_${index}.webp?t=${Date.now()}`;
      return;
    }
    spinner.style.display = 'none';
    pageImage.alt = 'Error loading page. Tap here to reload latest updates.';
    pageImage.style.cursor = 'pointer';
    pageImage.onclick = () => {
      if ('caches' in window) {
        caches.keys().then((names) => Promise.all(names.map((n) => caches.delete(n)))).then(() => {
          window.location.reload(true);
        });
      } else {
        window.location.reload(true);
      }
    };
  };
  pageImage.dataset.retried = '';
  pageImage.src = imgUrl;
}

prevPageBtn.addEventListener('click', () => goToPage(currentPageIndex - 1));
nextPageBtn.addEventListener('click', () => goToPage(currentPageIndex + 1));
backToSearchBtn.addEventListener('click', () => showScreen('search'));
directSearchBtn.addEventListener('click', () => {
  showScreen('search');
  drugSearchInput.focus();
});

// Jump from page viewer directly into calculator
calcDrugBtn.addEventListener('click', () => {
  const currentTitle = viewerDrugTitle.textContent;
  selectDrugInCalculator(currentTitle);
  switchTab('calc');
});

// 5. Jump to Page Modal
searchJumpBtn.addEventListener('click', () => {
  jumpPageInput.value = 840 + currentPageIndex;
  jumpModal.classList.add('show');
  jumpPageInput.focus();
});

pageJumpPill.addEventListener('click', () => {
  jumpPageInput.value = 840 + currentPageIndex;
  jumpModal.classList.add('show');
  jumpPageInput.focus();
});

btnConfirmJump.addEventListener('click', () => {
  const val = parseInt(jumpPageInput.value, 10);
  if (val >= 840 && val <= 1283) {
    jumpModal.classList.remove('show');
    goToPage(val - 840);
    showScreen('page');
  } else {
    alert('Please enter a valid page number between 840 and 1283.');
  }
});

// 6. Copy Page Text Modal
copyTextBtn.addEventListener('click', () => {
  const text = pagesTextData[String(currentPageIndex)] || '';
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Page text copied to clipboard');
    }).catch(() => openTextModal(text));
  } else {
    openTextModal(text);
  }
});

function openTextModal(text) {
  const title = viewerDrugTitle.textContent;
  textModalTitle.textContent = `${title} - P. ${840 + currentPageIndex}`;
  textModalBody.textContent = text || 'No extracted text available for this page.';
  textModal.classList.add('show');
}

btnCopyAll.addEventListener('click', () => {
  const text = textModalBody.textContent;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('All text copied to clipboard');
      textModal.classList.remove('show');
    });
  }
});

// 7. Export / Share Modal
exportPageBtn.addEventListener('click', () => {
  exportModal.classList.add('show');
});

exportImageBtn.addEventListener('click', async () => {
  exportModal.classList.remove('show');
  const bookPage = 840 + currentPageIndex;
  const title = viewerDrugTitle.textContent.replace(/[^A-Za-z0-9]/g, '_');
  const filename = `HarrietLane_P${bookPage}_${title}.webp`;

  try {
    const res = await fetch(pageImage.src);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
    showToast('High-resolution page image downloaded');
  } catch (e) {
    window.open(pageImage.src, '_blank');
  }
});

exportTextBtn.addEventListener('click', async () => {
  exportModal.classList.remove('show');
  const bookPage = 840 + currentPageIndex;
  const title = viewerDrugTitle.textContent;
  const text = pagesTextData[String(currentPageIndex)] || '';

  if (navigator.share) {
    try {
      await navigator.share({
        title: `Harriet Lane - ${title} (P. ${bookPage})`,
        text: text
      });
      return;
    } catch (e) {}
  }

  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
    showToast('Text copied for sharing');
  }
});

// Modal close handlers
document.querySelectorAll('.close-modal-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('show'));
  });
});

// =========================================================================
// 8. SMART PEDIATRIC DOSE CALCULATOR (100% ENGLISH SCIENTIFIC ENGINE)
// =========================================================================

function initCalculator() {
  populateDrugDropdown();

  // Mode Toggle
  btnModeFormulary.addEventListener('click', () => setCalcMode('formulary'));
  btnModeCustom.addEventListener('click', () => setCalcMode('custom'));

  // Weight Input (Strictly kg)
  patientWeightInput.addEventListener('input', calculateDose);

  // Age & Gestation Tier (Linked to Indications)
  patientAgeTier.addEventListener('change', () => {
    updateAgeTierBadge();
    autoMatchIndicationToAge();
    calculateDose();
  });

  // Drug Search
  calcDrugSearch.addEventListener('input', (e) => {
    populateDrugDropdown(e.target.value);
  });

  // Drug Select
  drugSelect.addEventListener('change', () => {
    onDrugSelected();
  });

  // Indication Select
  indicationSelect.addEventListener('change', () => {
    onIndicationSelected();
    calculateDose();
  });

  // Formulation Select
  concentrationSelect.addEventListener('change', () => {
    onFormulationSelected();
    calculateDose();
  });

  // Manual Concentration Inputs
  manualConcMg.addEventListener('input', calculateDose);
  manualConcMl.addEventListener('input', calculateDose);

  // Custom Drug Inputs
  customDoseVal.addEventListener('input', calculateDose);
  customDoseMode.addEventListener('change', calculateDose);
  customFreq.addEventListener('change', calculateDose);
  customConcMg.addEventListener('input', calculateDose);
  customConcMl.addEventListener('input', calculateDose);
  customMaxDose.addEventListener('input', calculateDose);

  // Jump to Book
  btnViewInBook.addEventListener('click', () => {
    const page = parseInt(btnViewInBook.dataset.page || '840', 10);
    const pIdx = Math.max(0, Math.min(page - 840, TOTAL_PAGES - 1));
    switchTab('book');
    goToPage(pIdx);
    showScreen('page');
  });

  updateAgeTierBadge();
}

function setCalcMode(mode) {
  calcMode = mode;
  if (mode === 'formulary') {
    btnModeFormulary.classList.add('active');
    btnModeCustom.classList.remove('active');
    drugSelectGroup.style.display = 'block';
    indicationGroup.style.display = 'block';
    concentrationGroup.style.display = 'block';
    customDrugFields.style.display = 'none';
    onDrugSelected();
  } else {
    btnModeFormulary.classList.remove('active');
    btnModeCustom.classList.add('active');
    drugSelectGroup.style.display = 'none';
    indicationGroup.style.display = 'none';
    concentrationGroup.style.display = 'none';
    manualConcContainer.style.display = 'none';
    customDrugFields.style.display = 'block';
    calcAlertBox.style.display = 'none';
    resultDrugTitle.textContent = 'Custom Pediatric Regimen';
    calcNotesText.textContent = 'Custom mode allows entering any target dose per kg and commercial liquid strength.';
    btnViewBookText.textContent = '📖 Browse Harriet Lane Formulary';
    btnViewInBook.dataset.page = '840';
    calculateDose();
  }
}

function updateAgeTierBadge() {
  const tier = patientAgeTier.value;
  const badgeMap = {
    'neonate_preterm': { label: 'Preterm (<32w)', bg: '#fef3c7', col: '#b45309' },
    'neonate_term': { label: 'Term (0–28d)', bg: '#ffedd5', col: '#c2410c' },
    'infant': { label: 'Infant (1–12mo)', bg: '#e0f2fe', col: '#0369a1' },
    'child': { label: 'Child (1–12yr)', bg: '#dcfce7', col: '#15803d' },
    'adolescent': { label: 'Adolescent (≥12yr)', bg: '#ede9fe', col: '#6d28d9' }
  };
  const b = badgeMap[tier] || badgeMap['child'];
  patientCategoryBadge.textContent = b.label;
  patientCategoryBadge.style.background = b.bg;
  patientCategoryBadge.style.color = b.col;
}

function autoMatchIndicationToAge() {
  const drugId = drugSelect.value;
  const drugs = typeof CALCULATOR_DRUGS !== 'undefined' ? CALCULATOR_DRUGS : [];
  const drug = drugs.find(d => d.id === drugId);
  if (!drug || !drug.indications || drug.indications.length <= 1) return;

  const currentTier = patientAgeTier.value;

  // Try to find an indication matching currentTier
  const matched = drug.indications.find(ind => ind.target_age === currentTier);
  if (matched) {
    indicationSelect.value = matched.id;
    onIndicationSelected();
  }
}

function populateDrugDropdown(query = '') {
  drugSelect.innerHTML = '';
  const drugs = typeof CALCULATOR_DRUGS !== 'undefined' ? CALCULATOR_DRUGS : [];
  let filtered = drugs;

  const q = query.trim().toLowerCase();
  if (q) {
    filtered = filtered.filter(d =>
      (d.name || '').toLowerCase().includes(q) ||
      (d.brand_names || '').toLowerCase().includes(q)
    );
  }

  calcDrugCount.textContent = `${filtered.length} / ${drugs.length} drugs`;

  if (filtered.length === 0) {
    const opt = document.createElement('option');
    opt.value = '';
    opt.textContent = `No drug found matching "${query}"`;
    drugSelect.appendChild(opt);
    return;
  }

  filtered.forEach(drug => {
    const opt = document.createElement('option');
    opt.value = drug.id;
    opt.textContent = drug.name;
    drugSelect.appendChild(opt);
  });

  onDrugSelected();
}

function onDrugSelected() {
  const drugId = drugSelect.value;
  const drugs = typeof CALCULATOR_DRUGS !== 'undefined' ? CALCULATOR_DRUGS : [];
  const drug = drugs.find(d => d.id === drugId);
  if (!drug) return;

  // Populate Indications
  indicationSelect.innerHTML = '';
  drug.indications.forEach(ind => {
    const opt = document.createElement('option');
    opt.value = ind.id;
    opt.textContent = ind.name;
    indicationSelect.appendChild(opt);
  });

  // Automatically match indication with active age tier
  autoMatchIndicationToAge();

  // Populate Formulations
  concentrationSelect.innerHTML = '';
  drug.concentrations.forEach((conc, idx) => {
    const opt = document.createElement('option');
    opt.value = idx.toString();
    opt.textContent = conc.label;
    concentrationSelect.appendChild(opt);
  });

  onIndicationSelected();
  onFormulationSelected();

  btnViewBookText.textContent = `📖 Open ${drug.name.split(' ')[0]} in Harriet Lane (P. ${drug.book_page})`;
  btnViewInBook.dataset.page = drug.book_page.toString();

  calculateDose();
}

function onIndicationSelected() {
  const drugId = drugSelect.value;
  const drugs = typeof CALCULATOR_DRUGS !== 'undefined' ? CALCULATOR_DRUGS : [];
  const drug = drugs.find(d => d.id === drugId);
  if (!drug) return;

  const indId = indicationSelect.value;
  const ind = drug.indications.find(i => i.id === indId) || drug.indications[0];
  if (!ind) return;

  // Update Route Badge
  indicationRouteBadge.textContent = ind.route || 'PO / IV';

  // Update Notes
  calcNotesText.textContent = ind.notes || 'Refer to Harriet Lane Formulary for full clinical pharmacology.';

  // If indication has a specific target age, sync the age dropdown
  if (ind.target_age && ind.target_age !== 'all' && patientAgeTier.value !== ind.target_age) {
    if (['neonate_preterm', 'neonate_term', 'infant', 'child', 'adolescent'].includes(ind.target_age)) {
      patientAgeTier.value = ind.target_age;
      updateAgeTierBadge();
    }
  }
}

function onFormulationSelected() {
  const drugId = drugSelect.value;
  const drugs = typeof CALCULATOR_DRUGS !== 'undefined' ? CALCULATOR_DRUGS : [];
  const drug = drugs.find(d => d.id === drugId);
  if (!drug) return;

  const concIdx = parseInt(concentrationSelect.value, 10);
  const conc = drug.concentrations[concIdx];

  if (conc && conc.is_custom) {
    manualConcContainer.style.display = 'block';
  } else {
    manualConcContainer.style.display = 'none';
  }
}

function selectDrugInCalculator(drugName) {
  const norm = drugName.toUpperCase().trim();
  const drugs = typeof CALCULATOR_DRUGS !== 'undefined' ? CALCULATOR_DRUGS : [];

  let matched = drugs.find(d => d.name.toUpperCase() === norm);
  if (!matched) {
    matched = drugs.find(d => d.name.toUpperCase().startsWith(norm) || norm.startsWith(d.name.toUpperCase()));
  }
  if (!matched) {
    const first = norm.split(' ')[0];
    matched = drugs.find(d => d.name.toUpperCase().includes(first));
  }

  if (matched) {
    setCalcMode('formulary');
    calcDrugSearch.value = '';
    populateDrugDropdown();
    drugSelect.value = matched.id;
    onDrugSelected();
    showToast(`Selected ${matched.name} in calculator`);
  } else {
    setCalcMode('custom');
    showToast('Opened Custom Dose Calculator');
  }
}

// 9. Core Accurate Pediatric Dose Calculation
function calculateDose() {
  const weightKg = parseFloat(patientWeightInput.value);

  if (isNaN(weightKg) || weightKg <= 0) {
    heroDoseMg.textContent = '--';
    heroVolumeMl.textContent = '-- mL';
    bTotalDaily.textContent = '-- mg / day';
    bFrequency.textContent = 'Please enter patient weight (kg)';
    safetyStatusBadge.className = 'safety-badge safe';
    safetyStatusBadge.textContent = 'Pending Weight';
    calcAlertBox.style.display = 'none';
    return;
  }

  let singleDose = 0;
  let totalDailyDose = 0;
  let volumeMl = null;
  let frequencyText = '';
  let durationText = '';
  let ceilingText = '';
  let isCeilingApplied = false;
  let alertMessages = [];

  if (calcMode === 'custom') {
    resultDrugTitle.textContent = 'Custom Pediatric Regimen';
    const doseVal = parseFloat(customDoseVal.value) || 0;
    const mode = customDoseMode.value;
    const freqCount = parseInt(customFreq.value, 10) || 1;
    const concMg = parseFloat(customConcMg.value) || 250;
    const concMl = parseFloat(customConcMl.value) || 5;
    const maxDose = parseFloat(customMaxDose.value);

    if (mode === 'per_dose') {
      singleDose = doseVal * weightKg;
      totalDailyDose = singleDose * freqCount;
    } else {
      totalDailyDose = doseVal * weightKg;
      singleDose = totalDailyDose / freqCount;
    }

    if (!isNaN(maxDose) && maxDose > 0 && totalDailyDose > maxDose) {
      totalDailyDose = maxDose;
      singleDose = totalDailyDose / freqCount;
      isCeilingApplied = true;
      ceilingText = `${maxDose} mg/day (Ceiling Applied)`;
      alertMessages.push(`⚠️ Dose capped at safe maximum ceiling: ${maxDose} mg/day.`);
    }

    if (concMg > 0) {
      volumeMl = (singleDose * concMl) / concMg;
    }

    const freqMap = {
      1: 'Once daily (Daily - Q24H)',
      2: 'Twice daily (q12h - BID)',
      3: 'Three times daily (q8h - TID)',
      4: 'Four times daily (q6h - QID)'
    };
    frequencyText = freqMap[freqCount] || `${freqCount} times / day`;
    durationText = 'As clinically indicated';

  } else {
    const drugId = drugSelect.value;
    const drugs = typeof CALCULATOR_DRUGS !== 'undefined' ? CALCULATOR_DRUGS : [];
    const drug = drugs.find(d => d.id === drugId);
    if (!drug) return;

    resultDrugTitle.textContent = `${drug.name} - Calculated Dose`;

    const indId = indicationSelect.value;
    const indication = drug.indications.find(i => i.id === indId) || drug.indications[0];
    const concIdx = parseInt(concentrationSelect.value, 10) || 0;
    const conc = drug.concentrations[concIdx] || drug.concentrations[0];

    const dPerKg = indication.dose_per_kg;
    const dosesPerDay = indication.doses_per_day || 2;

    if (indication.dose_type === 'per_dose') {
      singleDose = dPerKg * weightKg;
      totalDailyDose = singleDose * dosesPerDay;
    } else {
      totalDailyDose = dPerKg * weightKg;
      singleDose = totalDailyDose / dosesPerDay;
    }

    // Single dose ceiling check
    if (indication.max_single_dose && singleDose > indication.max_single_dose) {
      singleDose = indication.max_single_dose;
      totalDailyDose = singleDose * dosesPerDay;
      isCeilingApplied = true;
      alertMessages.push(`⚠️ Single dose capped at safe ceiling: ${indication.max_single_dose} mg.`);
    }

    // Daily dose ceiling check
    if (indication.max_daily_dose && totalDailyDose > indication.max_daily_dose) {
      totalDailyDose = indication.max_daily_dose;
      singleDose = totalDailyDose / dosesPerDay;
      isCeilingApplied = true;
      alertMessages.push(`⚠️ Daily dose capped at safe ceiling: ${indication.max_daily_dose} mg/day.`);
    }

    // Per-kg ceiling check
    if (indication.max_daily_per_kg) {
      const maxByKg = indication.max_daily_per_kg * weightKg;
      if (totalDailyDose > maxByKg) {
        totalDailyDose = maxByKg;
        singleDose = totalDailyDose / dosesPerDay;
        isCeilingApplied = true;
        alertMessages.push(`⚠️ Daily dose capped by per-kg ceiling (${indication.max_daily_per_kg} mg/kg): ${Math.round(maxByKg)} mg/day.`);
      }
    }

    frequencyText = indication.frequency;
    durationText = indication.duration || 'As clinically indicated';
    ceilingText = indication.max_daily_dose ? `${indication.max_daily_dose} mg/day` : 'Within safe limits';

    // Volume Calculation
    const isOralRoute = indication.route && (
      indication.route.toLowerCase().includes('po') ||
      indication.route.toLowerCase().includes('oral') ||
      indication.route.toLowerCase().includes('enteral')
    );

    const isParenteralOnly = !isOralRoute && indication.route && (
      indication.route.toLowerCase().includes('iv') ||
      indication.route.toLowerCase().includes('im') ||
      indication.route.toLowerCase().includes('infusion') ||
      indication.route.toLowerCase().includes('io') ||
      indication.route.toLowerCase().includes('sc')
    );

    if (isParenteralOnly) {
      volumeMl = null;
    } else if (conc) {
      const isParenteralForm = conc.is_solid ||
        (conc.label && (
          conc.label.toLowerCase().includes('powder') ||
          conc.label.toLowerCase().includes('vial') ||
          conc.label.toLowerCase().includes('injection')
        ));

      if (isParenteralForm) {
        volumeMl = null;
      } else if (conc.is_custom) {
        const mMg = parseFloat(manualConcMg.value) || 250;
        const mMl = parseFloat(manualConcMl.value) || 5;
        if (mMg > 0) {
          volumeMl = (singleDose * mMl) / mMg;
        }
      } else if (!conc.is_solid && conc.mg > 0) {
        volumeMl = (singleDose * conc.ml) / conc.mg;
      } else {
        volumeMl = null; // Solid formulation
      }
    }
  }

  // Display Output
  heroDoseMg.textContent = singleDose >= 10 ? Math.round(singleDose) : singleDose.toFixed(1);
  heroDoseUnit.textContent = 'mg';

  if (volumeMl !== null && volumeMl > 0) {
    heroSyrupBox.style.display = 'inline-flex';
    heroVolumeMl.textContent = `${volumeMl.toFixed(1)} mL`;
  } else {
    heroSyrupBox.style.display = 'none';
  }

  bTotalDaily.textContent = `${Math.round(totalDailyDose)} mg / day`;
  bFrequency.textContent = frequencyText;
  bDuration.textContent = durationText;
  bMaxCeiling.textContent = ceilingText || 'Within safe limits';

  // Safety Status Badge
  if (isCeilingApplied || alertMessages.length > 0) {
    safetyStatusBadge.className = 'safety-badge warning';
    safetyStatusBadge.textContent = isCeilingApplied ? '⚠️ Ceiling Applied' : '⚠️ Clinical Notice';
  } else {
    safetyStatusBadge.className = 'safety-badge safe';
    safetyStatusBadge.textContent = '✅ Safe Pediatric Range';
  }

  updateAlerts(alertMessages);
}

function updateAlerts(messages) {
  if (messages.length === 0) {
    calcAlertBox.style.display = 'none';
    calcAlertBox.innerHTML = '';
    return;
  }
  calcAlertBox.style.display = 'block';
  calcAlertBox.innerHTML = messages.map(m => `<div class="alert-item">${m}</div>`).join('');
}

// Start application
window.addEventListener('DOMContentLoaded', initApp);
