// Harriet Lane Formulary PWA Core Engine (High-Fidelity Engine)

const TOTAL_PAGES = 444;
let drugsData = [];
let pagesTextData = {};
let currentPageIndex = 0; // 0-indexed (0 = Book page 840)
let currentDrug = null;

// DOM Elements
const searchScreen = document.getElementById('search-screen');
const pageScreen = document.getElementById('page-screen');
const drugSearchInput = document.getElementById('drug-search-input');
const clearSearchBtn = document.getElementById('clear-search-btn');
const drugListContainer = document.getElementById('drug-list');

const backToSearchBtn = document.getElementById('back-to-search-btn');
const directSearchBtn = document.getElementById('direct-search-btn');
const copyTextBtn = document.getElementById('copy-text-btn');
const exportPageBtn = document.getElementById('export-page-btn');

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

// Show Toast
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
    // Load Data
    const [drugsRes, textRes] = await Promise.all([
      fetch('drugs_index.json').then(r => r.json()),
      fetch('pages_text.json').then(r => r.json())
    ]);
    drugsData = drugsRes;
    pagesTextData = textRes;

    // Render initial drug list
    renderDrugList(drugsData);
    console.log('Indexed drugs loaded:', drugsData.length);

  } catch (err) {
    console.error('Initialization error:', err);
    showToast('خطأ في تحميل البيانات: ' + err.message);
  }
}

// Search Algorithm
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

// Render Drug List
function renderDrugList(list) {
  drugListContainer.innerHTML = '';
  if (!list || list.length === 0) {
    drugListContainer.innerHTML = '<div style="padding: 40px; text-align: center; color: #64748b;">لم يتم العثور على أدوية مطابقة</div>';
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
      <div class="page-badge">ص ${drug.book_page || (840 + drug.page_index)}</div>
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

// Navigation Functions
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
    pageScreen.classList.add('active');
  } else {
    pageScreen.classList.remove('active');
    searchScreen.classList.add('active');
  }
}

// Page Rendering Engine
function loadPageImage(pageIdx) {
  currentPageIndex = Math.max(0, Math.min(pageIdx, TOTAL_PAGES - 1));
  const bookPage = 840 + currentPageIndex;

  // Find drug on page if not already matching
  if (!currentDrug || currentDrug.page_index !== currentPageIndex) {
    currentDrug = drugsData.find(d => d.page_index === currentPageIndex) || null;
  }

  const title = currentDrug ? currentDrug.name : `Book Page ${bookPage}`;
  viewerDrugTitle.textContent = title;
  viewerPageSubtitle.textContent = `Book P. ${bookPage} (${currentPageIndex + 1}/${TOTAL_PAGES})`;
  navPageIndicator.textContent = `ص ${bookPage} (${currentPageIndex + 1}/${TOTAL_PAGES})`;

  prevPageBtn.disabled = currentPageIndex <= 0;
  nextPageBtn.disabled = currentPageIndex >= TOTAL_PAGES - 1;

  resetZoom();
  canvasWrapper.scrollTop = 0;
  canvasWrapper.scrollLeft = 0;

  // Display page image
  pageImage.src = `pages/page_${currentPageIndex}.webp`;

  // Preload next and previous pages for instant response
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
      showToast('تم نسخ نص الصفحة إلى الحافظة');
    }).catch(() => {
      showToast('تم فتح نافذة النص');
    });
  }

  textModalTitle.textContent = `${title} - ص ${840 + currentPageIndex}`;
  textModalBody.textContent = text || 'لا يوجد نص مستخرج لهذه الصفحة.';
  textModal.classList.add('active');
});

btnCopyAll.addEventListener('click', () => {
  const text = textModalBody.textContent;
  navigator.clipboard.writeText(text).then(() => {
    showToast('تم نسخ النص بالكامل');
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

  // Render high-res image to canvas for export
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
      showToast('تم تنزيل صورة الصفحة عالية الدقة');
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
        title: `Harriet Lane - ${title} (ص ${bookPage})`,
        text: text
      });
    } catch (err) {
      if (err.name !== 'AbortError') console.error(err);
    }
  } else {
    navigator.clipboard.writeText(text);
    showToast('تم نسخ النص للمشاركة');
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
    alert('يرجى إدخال رقم صفحة بين 840 و 1283');
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

// Start app
init();
