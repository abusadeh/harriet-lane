// Harriet Lane Formulary & Smart Pediatric Dose Calculator Core Engine

const TOTAL_PAGES = 444;
let drugsData = [];
let pagesTextData = {};
let currentPageIndex = 0; // 0-indexed (0 = Book page 840)
let currentDrug = null;
let currentTab = 'book'; // 'book' or 'calc'

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
const unitKgBtn = document.getElementById('unit-kg-btn');
const unitLbsBtn = document.getElementById('unit-lbs-btn');
const weightUnitLabel = document.getElementById('weight-unit-label');

const patientAgeInput = document.getElementById('patient-age');
const patientAgeUnit = document.getElementById('patient-age-unit');
const patientCategoryBadge = document.getElementById('patient-category-badge');

const calcDrugSearch = document.getElementById('calc-drug-search');
const calcDrugCount = document.getElementById('calc-drug-count');
const drugSelect = document.getElementById('drug-select');
const drugSelectGroup = document.getElementById('drug-select-group');
const indicationSelect = document.getElementById('indication-select');
const indicationGroup = document.getElementById('indication-group');
const concentrationSelect = document.getElementById('concentration-select');
const concentrationGroup = document.getElementById('concentration-group');

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

let isWeightLbs = false;
let selectedCategory = 'all';

// Show Toast Notification
function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

// Initialize Application
async function init() {
  try {
    // 1. Load Data
    const [drugsRes, textRes] = await Promise.all([
      fetch('drugs_index.json').then(r => r.json()),
      fetch('pages_text.json').then(r => r.json())
    ]);
    drugsData = drugsRes;
    pagesTextData = textRes;

    // Render initial drug list in book tab
    renderDrugList(drugsData);
    console.log('Indexed drugs loaded:', drugsData.length);

    // 2. Initialize Calculator
    initCalculator();

  } catch (err) {
    console.error('Initialization error:', err);
    showToast('Failed to load data: ' + err.message);
  }
}

// Switch between Main Tabs
function switchTab(tab) {
  currentTab = tab;
  if (tab === 'book') {
    calcScreen.classList.remove('active');
    searchScreen.classList.add('active');
    pageScreen.classList.remove('active');

    // Update Tab Styles
    navBtnBook.classList.add('active');
    navBtnCalc.classList.remove('active');
    searchSegBook.classList.add('active');
    searchSegCalc.classList.remove('active');
    calcSegBook.classList.add('active');
    calcSegCalc.classList.remove('active');
  } else {
    searchScreen.classList.remove('active');
    pageScreen.classList.remove('active');
    calcScreen.classList.add('active');

    // Update Tab Styles
    navBtnBook.classList.remove('active');
    navBtnCalc.classList.add('active');
    searchSegBook.classList.remove('active');
    searchSegCalc.classList.add('active');
    calcSegBook.classList.remove('active');
    calcSegCalc.classList.add('active');

    // Re-run calculation
    calculateDose();
  }
}

// Tab Click Handlers
navBtnBook.addEventListener('click', () => switchTab('book'));
navBtnCalc.addEventListener('click', () => switchTab('calc'));
searchSegBook.addEventListener('click', () => switchTab('book'));
searchSegCalc.addEventListener('click', () => switchTab('calc'));
calcSegBook.addEventListener('click', () => switchTab('book'));
calcSegCalc.addEventListener('click', () => switchTab('calc'));

// Search Algorithm for Book Formulary
function searchDrugs(query) {
  const q = query.trim().toLowerCase();
  if (!q) return drugsData;

  const scored = [];
  for (const drug of drugsData) {
    const name = (drug.name || '').toLowerCase();
    const brands = (drug.brand_names || '').toLowerCase();
    const see = (drug.see || '').toLowerCase();

    let score = 0;
    if (name === q) score = 100;
    else if (name.startsWith(q)) score = 80;
    else if (name.includes(q)) score = 60;
    else if (brands.startsWith(q)) score = 50;
    else if (brands.includes(q)) score = 40;
    else if (see.includes(q)) score = 30;

    if (score > 0) {
      scored.push({ drug, score });
    }
  }

  scored.sort((a, b) => b.score - a.score || a.drug.name.localeCompare(b.drug.name));
  return scored.map(s => s.drug);
}

// Render Drug List in Book Tab
function renderDrugList(list) {
  drugListContainer.innerHTML = '';
  if (!list || list.length === 0) {
    drugListContainer.innerHTML = '<div style="padding: 40px; text-align: center; color: #64748b;">No matching drugs found</div>';
    return;
  }

  const fragment = document.createDocumentFragment();
  const displayList = list.slice(0, 100);

  for (const drug of displayList) {
    const item = document.createElement('div');
    item.className = 'drug-item';

    const sub = drug.see ? drug.see : (drug.brand_names || '');

    item.innerHTML = `
      <div class="drug-info">
        <div class="drug-name">${escapeHtml(drug.name)}</div>
        ${sub ? `<div class="drug-details">${escapeHtml(sub)}</div>` : ''}
      </div>
      <div class="page-badge">P. ${drug.book_page || (840 + drug.page_index)}</div>
    `;

    item.addEventListener('click', () => {
      openDrugPage(drug);
    });

    fragment.appendChild(item);
  }

  drugListContainer.appendChild(fragment);
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

// Search Input Listener
drugSearchInput.addEventListener('input', (e) => {
  const val = e.target.value;
  clearSearchBtn.style.display = val ? 'block' : 'none';
  const results = searchDrugs(val);
  renderDrugList(results);
});

clearSearchBtn.addEventListener('click', () => {
  drugSearchInput.value = '';
  clearSearchBtn.style.display = 'none';
  renderDrugList(drugsData);
  drugSearchInput.focus();
});

// Navigation Functions for Book Pages
function openDrugPage(drug) {
  currentDrug = drug;
  currentPageIndex = drug.page_index;
  showScreen('page');
  loadPageImage(currentPageIndex);
  window.history.pushState({ screen: 'page', pageIndex: currentPageIndex }, '');
}

function goToPage(pageIdx) {
  pageIdx = Math.max(0, Math.min(pageIdx, TOTAL_PAGES - 1));
  currentPageIndex = pageIdx;

  // Match drug for page
  currentDrug = drugsData.find(d => d.page_index === pageIdx) || currentDrug;
  loadPageImage(pageIdx);
}

function showScreen(screen) {
  if (screen === 'page') {
    searchScreen.classList.remove('active');
    calcScreen.classList.remove('active');
    pageScreen.classList.add('active');
  } else if (screen === 'calc') {
    switchTab('calc');
  } else {
    pageScreen.classList.remove('active');
    calcScreen.classList.remove('active');
    searchScreen.classList.add('active');
  }
}

// Page Rendering Engine
function loadPageImage(pageIdx) {
  currentPageIndex = Math.max(0, Math.min(pageIdx, TOTAL_PAGES - 1));
  const bookPage = 840 + currentPageIndex;

  if (!currentDrug || currentDrug.page_index !== currentPageIndex) {
    currentDrug = drugsData.find(d => d.page_index === currentPageIndex) || null;
  }

  const title = currentDrug ? currentDrug.name : `Book Page ${bookPage}`;
  viewerDrugTitle.textContent = title;
  viewerPageSubtitle.textContent = `Book P. ${bookPage} (${currentPageIndex + 1}/${TOTAL_PAGES})`;
  navPageIndicator.textContent = `P. ${bookPage} (${currentPageIndex + 1}/${TOTAL_PAGES})`;

  prevPageBtn.disabled = currentPageIndex <= 0;
  nextPageBtn.disabled = currentPageIndex >= TOTAL_PAGES - 1;

  resetZoom();
  canvasWrapper.scrollTop = 0;
  canvasWrapper.scrollLeft = 0;

  // Load High-Res WebP page image
  pageImage.src = `pages/page_${currentPageIndex}.webp`;

  // Preload next and previous pages for instant responsiveness
  if (currentPageIndex + 1 < TOTAL_PAGES) {
    const nextImg = new Image();
    nextImg.src = `pages/page_${currentPageIndex + 1}.webp`;
  }
  if (currentPageIndex - 1 >= 0) {
    const prevImg = new Image();
    prevImg.src = `pages/page_${currentPageIndex - 1}.webp`;
  }
}

// Pinch to Zoom & Pan Engine for Image
let zoomScale = 1.0;
let initialDistance = 0;

function resetZoom() {
  zoomScale = 1.0;
  pageImage.style.transform = `scale(1.0)`;
}

canvasWrapper.addEventListener('touchstart', (e) => {
  if (e.touches.length === 2) {
    initialDistance = Math.hypot(
      e.touches[0].pageX - e.touches[1].pageX,
      e.touches[0].pageY - e.touches[1].pageY
    );
  }
}, { passive: true });

canvasWrapper.addEventListener('touchmove', (e) => {
  if (e.touches.length === 2 && initialDistance > 0) {
    const currentDist = Math.hypot(
      e.touches[0].pageX - e.touches[1].pageX,
      e.touches[0].pageY - e.touches[1].pageY
    );
    const factor = currentDist / initialDistance;
    zoomScale = Math.min(Math.max(zoomScale * factor, 1.0), 4.0);
    pageImage.style.transform = `scale(${zoomScale})`;
    initialDistance = currentDist;
  }
}, { passive: true });

canvasWrapper.addEventListener('touchend', (e) => {
  if (e.touches.length < 2) {
    initialDistance = 0;
  }
});

// Double tap zoom toggle
let lastTap = 0;
canvasWrapper.addEventListener('click', (e) => {
  const now = Date.now();
  if (now - lastTap < 300) {
    zoomScale = zoomScale > 1.3 ? 1.0 : 2.2;
    pageImage.style.transform = `scale(${zoomScale})`;
  }
  lastTap = now;
});

// Back Navigation (Browser / Gesture)
window.addEventListener('popstate', (e) => {
  if (e.state && e.state.screen === 'page') {
    showScreen('page');
    if (e.state.pageIndex !== undefined) {
      loadPageImage(e.state.pageIndex);
    }
  } else if (e.state && e.state.screen === 'calc') {
    switchTab('calc');
  } else {
    showScreen('search');
  }
});

backToSearchBtn.addEventListener('click', () => {
  window.history.back();
});

directSearchBtn.addEventListener('click', () => {
  window.history.back();
});

// Jump from Page Screen to Calculator with current drug
calcDrugBtn.addEventListener('click', () => {
  if (!currentDrug) return;
  switchTab('calc');
  selectDrugInCalculator(currentDrug.name);
});

// Previous / Next Buttons
prevPageBtn.addEventListener('click', () => {
  if (currentPageIndex > 0) {
    goToPage(currentPageIndex - 1);
  }
});

nextPageBtn.addEventListener('click', () => {
  if (currentPageIndex < TOTAL_PAGES - 1) {
    goToPage(currentPageIndex + 1);
  }
});

// Copy Text Feature
copyTextBtn.addEventListener('click', () => {
  const text = pagesTextData[currentPageIndex.toString()] || '';
  const title = viewerDrugTitle.textContent;
  
  if (text) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Page text copied to clipboard');
    }).catch(() => {
      showToast('Page text opened');
    });
  }

  textModalTitle.textContent = `${title} - P. ${840 + currentPageIndex}`;
  textModalBody.textContent = text || 'No extracted text available for this page.';
  textModal.classList.add('active');
});

btnCopyAll.addEventListener('click', () => {
  const text = textModalBody.textContent;
  navigator.clipboard.writeText(text).then(() => {
    showToast('All text copied to clipboard');
    textModal.classList.remove('active');
  });
});

// Export / Share Feature
exportPageBtn.addEventListener('click', () => {
  exportModal.classList.add('active');
});

exportImageBtn.addEventListener('click', () => {
  exportModal.classList.remove('active');
  const bookPage = 840 + currentPageIndex;
  const drugName = (viewerDrugTitle.textContent || 'Drug').replace(/[^a-zA-Z0-9]/g, '_');

  const canvas = document.createElement('canvas');
  canvas.width = pageImage.naturalWidth || 819;
  canvas.height = pageImage.naturalHeight || 1381;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(pageImage, 0, 0, canvas.width, canvas.height);

  canvas.toBlob(async (blob) => {
    if (!blob) return;
    const file = new File([blob], `HarrietLane_P${bookPage}_${drugName}.png`, { type: 'image/png' });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: `Harriet Lane - Page ${bookPage}`,
          text: `Harriet Lane Handbook - Page ${bookPage} (${drugName})`
        });
      } catch (err) {
        if (err.name !== 'AbortError') console.error(err);
      }
    } else {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `HarrietLane_P${bookPage}_${drugName}.png`;
      a.click();
      showToast('High-resolution page image downloaded');
    }
  }, 'image/png', 1.0);
});

exportTextBtn.addEventListener('click', async () => {
  exportModal.classList.remove('active');
  const text = pagesTextData[currentPageIndex.toString()] || '';
  const bookPage = 840 + currentPageIndex;
  const title = viewerDrugTitle.textContent;

  if (navigator.share) {
    try {
      await navigator.share({
        title: `Harriet Lane - ${title} (P. ${bookPage})`,
        text: text
      });
    } catch (err) {
      if (err.name !== 'AbortError') console.error(err);
    }
  } else {
    navigator.clipboard.writeText(text);
    showToast('Text copied for sharing');
  }
});

// Jump to Page Feature
function openJumpModal() {
  jumpPageInput.value = (840 + currentPageIndex).toString();
  jumpModal.classList.add('active');
  jumpPageInput.focus();
}

pageJumpPill.addEventListener('click', openJumpModal);
searchJumpBtn.addEventListener('click', openJumpModal);

btnConfirmJump.addEventListener('click', () => {
  const p = parseInt(jumpPageInput.value, 10);
  if (!isNaN(p) && p >= 840 && p <= 1283) {
    jumpModal.classList.remove('active');
    goToPage(p - 840);
    showScreen('page');
  } else {
    alert('Please enter a valid page number between 840 and 1283.');
  }
});

jumpPageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    btnConfirmJump.click();
  }
});

// Close Modals
document.querySelectorAll('.close-modal-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  });
});

document.querySelectorAll('.modal-overlay').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});

// ==========================================
// SMART PEDIATRIC DOSE CALCULATOR ENGINE
// ==========================================

function initCalculator() {
  // 1. Populate Drug Dropdown
  populateDrugDropdown('all');

  if (calcDrugSearch) {
    calcDrugSearch.addEventListener('input', () => {
      populateDrugDropdown(selectedCategory, calcDrugSearch.value);
    });
  }

  // 2. Unit Toggles (kg / lbs)
  unitKgBtn.addEventListener('click', () => {
    if (isWeightLbs) {
      isWeightLbs = false;
      unitKgBtn.classList.add('active');
      unitLbsBtn.classList.remove('active');
      weightUnitLabel.textContent = 'kg';
      const val = parseFloat(patientWeightInput.value);
      if (!isNaN(val)) {
        patientWeightInput.value = (val / 2.20462).toFixed(1);
      }
      calculateDose();
    }
  });

  unitLbsBtn.addEventListener('click', () => {
    if (!isWeightLbs) {
      isWeightLbs = true;
      unitLbsBtn.classList.add('active');
      unitKgBtn.classList.remove('active');
      weightUnitLabel.textContent = 'lbs';
      const val = parseFloat(patientWeightInput.value);
      if (!isNaN(val)) {
        patientWeightInput.value = (val * 2.20462).toFixed(1);
      }
      calculateDose();
    }
  });

  // 3. Quick Weight Chips
  document.querySelectorAll('.chip-btn').forEach(chip => {
    chip.addEventListener('click', () => {
      const kg = parseFloat(chip.dataset.weight);
      patientWeightInput.value = isWeightLbs ? (kg * 2.20462).toFixed(1) : kg;
      calculateDose();
    });
  });

  // 4. Age and Category Listener
  patientAgeInput.addEventListener('input', updateAgeCategory);
  patientAgeUnit.addEventListener('change', updateAgeCategory);

  // 5. Category Pills Filter
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedCategory = pill.dataset.cat;
      populateDrugDropdown(selectedCategory);
    });
  });

  // 6. Drug Selection Change
  drugSelect.addEventListener('change', () => {
    onDrugSelected();
  });

  // 7. Indication and Concentration Listeners
  indicationSelect.addEventListener('change', calculateDose);
  concentrationSelect.addEventListener('change', calculateDose);

  // 8. Custom Drug Input Listeners
  customDoseVal.addEventListener('input', calculateDose);
  customDoseMode.addEventListener('change', calculateDose);
  customFreq.addEventListener('change', calculateDose);
  customConcMg.addEventListener('input', calculateDose);
  customConcMl.addEventListener('input', calculateDose);
  customMaxDose.addEventListener('input', calculateDose);

  patientWeightInput.addEventListener('input', calculateDose);

  // 9. Jump to Book from Calculator
  btnViewInBook.addEventListener('click', () => {
    const page = parseInt(btnViewInBook.dataset.page || '840', 10);
    const pIdx = Math.max(0, Math.min(page - 840, TOTAL_PAGES - 1));
    switchTab('book');
    goToPage(pIdx);
    showScreen('page');
  });

  // Default selection: Amoxicillin
  onDrugSelected();
}

function updateAgeCategory() {
  const age = parseFloat(patientAgeInput.value);
  const unit = patientAgeUnit.value;

  if (isNaN(age) || age < 0) {
    patientCategoryBadge.textContent = 'Child';
    calculateDose();
    return;
  }

  let totalMonths = 0;
  if (unit === 'years') totalMonths = age * 12;
  else if (unit === 'months') totalMonths = age;
  else if (unit === 'days') totalMonths = age / 30;

  if (totalMonths <= 1) {
    patientCategoryBadge.textContent = 'Neonate (< 1 mo)';
    patientCategoryBadge.style.background = '#fef3c7';
    patientCategoryBadge.style.color = '#b45309';
  } else if (totalMonths <= 12) {
    patientCategoryBadge.textContent = 'Infant (1-12 mo)';
    patientCategoryBadge.style.background = '#e0f2fe';
    patientCategoryBadge.style.color = '#0369a1';
  } else if (totalMonths < 144) {
    patientCategoryBadge.textContent = 'Child (1-12 yr)';
    patientCategoryBadge.style.background = '#dcfce7';
    patientCategoryBadge.style.color = '#15803d';
  } else {
    patientCategoryBadge.textContent = 'Adolescent (> 12 yr)';
    patientCategoryBadge.style.background = '#ede9fe';
    patientCategoryBadge.style.color = '#6d28d9';
  }

  calculateDose();
}

function populateDrugDropdown(category, query = '') {
  drugSelect.innerHTML = '';

  const drugs = typeof CALCULATOR_DRUGS !== 'undefined' ? CALCULATOR_DRUGS : [];
  let filtered = drugs;

  if (category === 'custom') {
    const opt = document.createElement('option');
    opt.value = 'custom';
    opt.textContent = '⚙️ Custom Calculator (Any Drug)';
    drugSelect.appendChild(opt);
    if (calcDrugCount) calcDrugCount.textContent = 'Custom Mode';
    onDrugSelected();
    return;
  }

  if (category !== 'all') {
    filtered = drugs.filter(d => d.category === category);
  }

  const q = query.trim().toLowerCase();
  if (q) {
    filtered = filtered.filter(d => 
      (d.name || '').toLowerCase().includes(q) ||
      (d.brand_names || '').toLowerCase().includes(q) ||
      (d.arabic_name || '').toLowerCase().includes(q) ||
      (d.see || '').toLowerCase().includes(q)
    );
  }

  if (calcDrugCount) {
    calcDrugCount.textContent = `${filtered.length} / ${drugs.length} drugs`;
  }

  if (filtered.length === 0) {
    const opt = document.createElement('option');
    opt.value = 'custom';
    opt.textContent = `No drug found matching "${query}" - Select for Custom Dose Calculation`;
    drugSelect.appendChild(opt);
    onDrugSelected();
    return;
  }

  filtered.forEach(drug => {
    const opt = document.createElement('option');
    opt.value = drug.id;
    const sub = drug.brand_names ? ` (${drug.brand_names.split(';')[0].trim()})` : '';
    opt.textContent = `${drug.name}${sub} - P. ${drug.book_page}`;
    drugSelect.appendChild(opt);
  });

  // Always add custom option at the bottom
  const customOpt = document.createElement('option');
  customOpt.value = 'custom';
  customOpt.textContent = '⚙️ Custom Calculator for any other drug';
  drugSelect.appendChild(customOpt);

  onDrugSelected();
}

function onDrugSelected() {
  const drugId = drugSelect.value;

  if (drugId === 'custom') {
    customDrugFields.style.display = 'block';
    indicationGroup.style.display = 'none';
    concentrationGroup.style.display = 'none';
    calcAlertBox.style.display = 'none';
    calcNotesText.textContent = 'Custom mode allows calculating any pediatric regimen based on custom dose and available formulation concentration.';
    btnViewBookText.textContent = '📖 Browse Harriet Lane Formulary';
    btnViewInBook.dataset.page = '840';
    calculateDose();
    return;
  }

  customDrugFields.style.display = 'none';
  indicationGroup.style.display = 'block';
  concentrationGroup.style.display = 'block';

  const drug = (typeof CALCULATOR_DRUGS !== 'undefined' ? CALCULATOR_DRUGS : []).find(d => d.id === drugId);
  if (!drug) return;

  // Populate Indications
  indicationSelect.innerHTML = '';
  drug.indications.forEach((ind, idx) => {
    const opt = document.createElement('option');
    opt.value = ind.id;
    opt.textContent = ind.name;
    indicationSelect.appendChild(opt);
  });

  // Populate Concentrations
  concentrationSelect.innerHTML = '';
  drug.concentrations.forEach((conc, idx) => {
    const opt = document.createElement('option');
    opt.value = idx.toString();
    opt.textContent = conc.label;
    concentrationSelect.appendChild(opt);
  });

  // Update Notes and Book Page Link
  calcNotesText.textContent = drug.indications[0]?.notes || 'Refer to Harriet Lane Formulary for full clinical pharmacology.';
  btnViewBookText.textContent = `📖 Open Harriet Lane P.  ${drug.name.split(' ')[0]} (P. ${drug.book_page})`;
  btnViewInBook.dataset.page = drug.book_page.toString();

  calculateDose();
}

function selectDrugInCalculator(drugName) {
  const norm = drugName.toUpperCase();
  const drugs = typeof CALCULATOR_DRUGS !== 'undefined' ? CALCULATOR_DRUGS : [];
  
  // Try exact match
  let matched = drugs.find(d => norm.includes(d.id.toUpperCase()) || d.name.toUpperCase().includes(norm));
  if (!matched) {
    // Try matching words
    const words = norm.split(' ');
    matched = drugs.find(d => words.some(w => w.length > 3 && d.name.toUpperCase().includes(w)));
  }

  if (matched) {
    selectedCategory = 'all';
    document.querySelectorAll('.cat-pill').forEach(p => p.classList.toggle('active', p.dataset.cat === 'all'));
    if (calcDrugSearch) calcDrugSearch.value = '';
    populateDrugDropdown('all');
    drugSelect.value = matched.id;
    onDrugSelected();
    showToast(`Selected ${matched.name} in dose calculator`);
  } else {
    // Switch to custom mode with drug name
    selectedCategory = 'custom';
    document.querySelectorAll('.cat-pill').forEach(p => p.classList.toggle('active', p.dataset.cat === 'custom'));
    populateDrugDropdown('custom');
    showToast('Opened Custom Dose Calculator');
  }
}

// Perform Accurate Dose Calculation
function calculateDose() {
  let rawWeight = parseFloat(patientWeightInput.value);
  if (isNaN(rawWeight) || rawWeight <= 0) {
    heroDoseMg.textContent = '--';
    heroVolumeMl.textContent = '-- mL';
    bTotalDaily.textContent = '-- mg / day';
    bFrequency.textContent = 'Please enter patient weight';
    safetyStatusBadge.className = 'safety-badge safe';
    safetyStatusBadge.textContent = 'Pending Weight';
    calcAlertBox.style.display = 'none';
    return;
  }

  const weightKg = isWeightLbs ? (rawWeight / 2.20462) : rawWeight;
  const drugId = drugSelect.value;

  // Age calculations
  const rawAge = parseFloat(patientAgeInput.value);
  const ageUnit = patientAgeUnit.value;
  let ageMonths = 24; // default 2 years if unstated
  if (!isNaN(rawAge)) {
    if (ageUnit === 'years') ageMonths = rawAge * 12;
    else if (ageUnit === 'months') ageMonths = rawAge;
    else if (ageUnit === 'days') ageMonths = rawAge / 30;
  }

  let singleDose = 0;
  let totalDailyDose = 0;
  let volumeMl = null;
  let frequencyText = '';
  let durationText = '';
  let ceilingText = '';
  let isCeilingApplied = false;
  let alertMessages = [];

  if (drugId === 'custom') {
    // Custom calculation mode
    const doseVal = parseFloat(customDoseVal.value) || 0;
    const mode = customDoseMode.value; // 'per_dose' or 'per_day'
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
      1: 'Once daily (Daily)',
      2: 'Twice daily (q12h - BID)',
      3: 'Three times daily (q8h - TID)',
      4: 'Four times daily (q6h - QID)'
    };
    frequencyText = freqMap[freqCount] || `${freqCount} times / day`;
    durationText = 'As clinically indicated';

  } else {
    // Pre-configured Pediatric Drugs
    const drug = (typeof CALCULATOR_DRUGS !== 'undefined' ? CALCULATOR_DRUGS : []).find(d => d.id === drugId);
    if (!drug) return;

    const indId = indicationSelect.value;
    const indication = drug.indications.find(i => i.id === indId) || drug.indications[0];
    const concIdx = parseInt(concentrationSelect.value, 10) || 0;
    const concentration = drug.concentrations[concIdx] || drug.concentrations[0];

    // Check Age warnings
    if (drug.min_age_months !== undefined && ageMonths < drug.min_age_months) {
      if (drug.age_warning) {
        alertMessages.push(drug.age_warning);
      }
    }

    // Direct Volume Fluids (Normal Saline, D10W)
    if (indication.is_volume_direct) {
      const volPerKg = indication.dose_per_kg;
      volumeMl = volPerKg * weightKg;
      if (indication.max_single_dose && volumeMl > indication.max_single_dose) {
        volumeMl = indication.max_single_dose;
        isCeilingApplied = true;
        alertMessages.push(`⚠️ Capped at maximum safe single bolus: ${indication.max_single_dose} mL.`);
      }
      singleDose = volumeMl; // display in mL
      heroDoseUnit.textContent = 'mL';
      heroSyrupBox.style.display = 'none';
      bTotalDaily.textContent = `${volumeMl.toFixed(0)} mL / bolus`;
      bFrequency.textContent = indication.frequency_ar;
      bDuration.textContent = 'Titrate according to hemodynamic response';
      bMaxCeiling.textContent = indication.max_single_dose ? `${indication.max_single_dose} mL` : 'Not capped';

      heroDoseMg.textContent = volumeMl.toFixed(0);
      safetyStatusBadge.className = isCeilingApplied ? 'safety-badge warning' : 'safety-badge safe';
      safetyStatusBadge.textContent = isCeilingApplied ? '⚠️ Max Ceiling' : '✅ Safe Range';
      updateAlerts(alertMessages);
      return;
    }

    heroDoseUnit.textContent = 'mg';
    heroSyrupBox.style.display = 'inline-flex';

    // Weight-tiered drugs (e.g. Ondansetron)
    if (indication.dose_type === 'weight_tiered' && indication.weight_rules) {
      let matchedDose = 4;
      for (const rule of indication.weight_rules) {
        if (rule.max_kg && weightKg <= rule.max_kg) {
          matchedDose = rule.dose_mg;
          break;
        } else if (rule.min_kg && !rule.max_kg && weightKg > rule.min_kg) {
          matchedDose = rule.dose_mg;
          break;
        } else if (rule.min_kg && rule.max_kg && weightKg > rule.min_kg && weightKg <= rule.max_kg) {
          matchedDose = rule.dose_mg;
          break;
        }
      }
      singleDose = matchedDose;
      totalDailyDose = singleDose * (indication.doses_per_day || 1);
    } else if (indication.dose_type === 'per_dose') {
      singleDose = indication.dose_per_kg * weightKg;
      totalDailyDose = singleDose * (indication.doses_per_day || 1);
    } else if (indication.dose_type === 'per_day') {
      totalDailyDose = indication.dose_per_kg * weightKg;
      singleDose = totalDailyDose / (indication.doses_per_day || 1);
    } else if (indication.dose_type === 'fixed_age') {
      // Fixed doses
      singleDose = indication.dose_per_kg ? indication.dose_per_kg * weightKg : 2.5;
      totalDailyDose = singleDose * (indication.doses_per_day || 1);
    }

    // Safety Limits and Ceilings
    if (indication.max_single_dose && singleDose > indication.max_single_dose) {
      singleDose = indication.max_single_dose;
      isCeilingApplied = true;
      alertMessages.push(`⚠️ Single dose capped at maximum safe ceiling: ${indication.max_single_dose} mg.`);
    }

    if (indication.max_daily_dose && totalDailyDose > indication.max_daily_dose) {
      totalDailyDose = indication.max_daily_dose;
      singleDose = totalDailyDose / (indication.doses_per_day || 1);
      isCeilingApplied = true;
      alertMessages.push(`⚠️ Total daily dose capped at maximum safe ceiling: ${indication.max_daily_dose} mg/day.`);
    }

    if (indication.max_daily_per_kg) {
      const maxByKg = indication.max_daily_per_kg * weightKg;
      if (totalDailyDose > maxByKg) {
        totalDailyDose = maxByKg;
        singleDose = totalDailyDose / (indication.doses_per_day || 1);
        isCeilingApplied = true;
        alertMessages.push(`⚠️ Total daily dose capped by per-kg ceiling (${indication.max_daily_per_kg} mg/kg): ${maxByKg.toFixed(0)} mg.`);
      }
    }

    // Calculate Volume in mL for Liquid Suspension
    if (concentration && !concentration.is_solid && concentration.mg > 0) {
      volumeMl = (singleDose * concentration.ml) / concentration.mg;
    }

    frequencyText = indication.frequency_ar;
    durationText = indication.duration || 'As clinically indicated';
    ceilingText = indication.max_daily_dose ? `${indication.max_daily_dose} mg/day` : 'Per Harriet Lane guidelines';

    calcNotesText.textContent = indication.notes || drug.indications[0]?.notes || '';
  }

  // Display Output
  heroDoseMg.textContent = singleDose >= 10 ? Math.round(singleDose) : singleDose.toFixed(1);

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
    safetyStatusBadge.textContent = '✅ Within Safe Pediatric Limits';
  }

  updateAlerts(alertMessages);
}

function updateAlerts(messages) {
  if (messages && messages.length > 0) {
    calcAlertBox.style.display = 'block';
    calcAlertBox.innerHTML = messages.map(m => `<div>${m}</div>`).join('');
  } else {
    calcAlertBox.style.display = 'none';
    calcAlertBox.innerHTML = '';
  }
}

// Start Application
init();
