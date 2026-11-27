let protocolsData = [];
let drugsData = [];
let currentPage = 1;
const totalPages = 420;
let currentCategory = "All";

document.addEventListener("DOMContentLoaded", async () => {
  setupTabs();
  setupCalculators();
  await loadData();
  renderCategoryChips();
  renderProtocols();
  renderEmergencyCards();
  renderDrugsList();
  updatePdfView();
});

function setupTabs() {
  const tabs = [
    { btn: "tab-btn-protocols", screen: "screen-protocols" },
    { btn: "tab-btn-calc", screen: "screen-calculators" },
    { btn: "tab-btn-emergency", screen: "screen-emergency" },
    { btn: "tab-btn-pdf", screen: "screen-pdf" }
  ];

  tabs.forEach(t => {
    document.getElementById(t.btn).addEventListener("click", () => {
      tabs.forEach(x => {
        document.getElementById(x.btn).classList.remove("active");
        document.getElementById(x.screen).classList.remove("active");
      });
      document.getElementById(t.btn).classList.add("active");
      document.getElementById(t.screen).classList.add("active");
    });
  });

  // Search input event
  const searchInput = document.getElementById("protocol-search-input");
  const clearBtn = document.getElementById("clear-search-btn");

  searchInput.addEventListener("input", (e) => {
    const val = e.target.value.trim();
    clearBtn.style.display = val ? "block" : "none";
    renderProtocols(val);
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    renderProtocols("");
  });

  // PDF controls
  document.getElementById("pdf-prev-btn").addEventListener("click", () => {
    if (currentPage > 1) {
      openPdfPage(currentPage - 1);
    }
  });

  document.getElementById("pdf-next-btn").addEventListener("click", () => {
    if (currentPage < totalPages) {
      openPdfPage(currentPage + 1);
    }
  });

  document.getElementById("pdf-jump-btn").addEventListener("click", () => {
    const target = prompt(`Enter PDF Page Number (1 to ${totalPages}):`, currentPage);
    if (target) {
      const p = parseInt(target, 10);
      if (!isNaN(p) && p >= 1 && p <= totalPages) {
        openPdfPage(p);
      }
    }
  });
}

async function loadData() {
  try {
    const pRes = await fetch("protocols.json");
    protocolsData = await pRes.json();
  } catch (e) {
    console.error("Failed to load protocols.json", e);
  }

  try {
    const dRes = await fetch("neonatal_drugs.json");
    drugsData = await dRes.json();
  } catch (e) {
    console.error("Failed to load neonatal_drugs.json", e);
  }
}

function renderCategoryChips() {
  const categories = ["All", "Labor Ward", "Normal Nursery", "NICU", "Respiratory", "Cardiovascular", "GI & Nutrition", "Neurology", "Nursing"];
  const container = document.getElementById("category-chips");
  container.innerHTML = "";

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `chip-btn ${cat === currentCategory ? 'active' : ''}`;
    btn.innerText = cat;
    btn.addEventListener("click", () => {
      currentCategory = cat;
      renderCategoryChips();
      renderProtocols(document.getElementById("protocol-search-input").value.trim());
    });
    container.appendChild(btn);
  });
}

function renderProtocols(searchQuery = "") {
  const container = document.getElementById("protocols-content-list");
  container.innerHTML = "";

  if (searchQuery) {
    const matches = [];
    const q = searchQuery.toLowerCase();

    protocolsData.forEach(sec => {
      sec.topics.forEach(t => {
        const titleMatch = t.title.toLowerCase().includes(q);
        const kwMatch = t.keywords && t.keywords.some(k => k.toLowerCase().includes(q));
        if (titleMatch || kwMatch) {
          matches.push({ title: t.title, secName: sec.title, page: t.page });
        }
      });
    });

    if (matches.length === 0) {
      container.innerHTML = `<div style="padding: 20px; text-align: center; color: #64748b;">No protocol matches found for "${searchQuery}". Try searching for RDS, Sepsis, Cooling...</div>`;
      return;
    }

    matches.forEach(m => {
      const card = document.createElement("div");
      card.className = "section-card";
      card.innerHTML = `
        <div class="sec-header">
          <div>
            <div class="sec-title">${m.title}</div>
            <div class="sec-meta">${m.secName}</div>
          </div>
          <button class="page-badge">PDF p.${m.page}</button>
        </div>
      `;
      card.querySelector(".page-badge").addEventListener("click", () => openPdfPage(m.page));
      container.appendChild(card);
    });
    return;
  }

  // Filter sections by category
  let list = protocolsData;
  if (currentCategory !== "All") {
    list = protocolsData.filter(s => s.category.toLowerCase().includes(currentCategory.toLowerCase()) || s.title.toLowerCase().includes(currentCategory.toLowerCase()));
  }

  list.forEach(sec => {
    const card = document.createElement("div");
    card.className = "section-card";

    let topicsHtml = "";
    sec.topics.forEach(t => {
      topicsHtml += `
        <div class="topic-item" data-page="${t.page}">
          <span class="topic-title">• ${t.title}</span>
          <span class="topic-page-link">PDF p.${t.page}</span>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="sec-header">
        <div>
          <div class="sec-meta" style="color:#059669; font-weight:700;">${sec.category.toUpperCase()}</div>
          <div class="sec-title">${sec.title}</div>
          <div class="sec-meta">PDF Pages ${sec.pageStart} – ${sec.pageEnd} • ${sec.topics.length} Topics</div>
        </div>
        <button class="page-badge btn-read-sec">Read Section</button>
      </div>
      <div class="topic-list">
        ${topicsHtml}
      </div>
    `;

    card.querySelector(".btn-read-sec").addEventListener("click", () => openPdfPage(sec.pageStart));
    card.querySelectorAll(".topic-item").forEach(item => {
      item.addEventListener("click", () => {
        const p = parseInt(item.getAttribute("data-page"), 10);
        openPdfPage(p);
      });
    });

    container.appendChild(card);
  });
}

function openPdfPage(pageNum) {
  currentPage = Math.max(1, Math.min(totalPages, pageNum));
  updatePdfView();

  // Switch to PDF tab
  document.querySelectorAll(".nav-pill").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".screen-view").forEach(s => s.classList.remove("active"));
  document.getElementById("tab-btn-pdf").classList.add("active");
  document.getElementById("screen-pdf").classList.add("active");
}

function updatePdfView() {
  document.getElementById("pdf-page-indicator").innerText = `PDF Page ${currentPage} of ${totalPages}`;
  document.getElementById("pdf-page-img").src = `pages/page_${currentPage - 1}.webp`;
}

function setupCalculators() {
  const weightInput = document.getElementById("patient-weight");
  const rateInput = document.getElementById("fluid-rate");
  const concSelect = document.getElementById("fluid-type");

  function recalculate() {
    const w = parseFloat(weightInput.value) || 2.5;
    const r = parseFloat(rateInput.value) || 7.5;
    const conc = parseFloat(concSelect.value) || 10.0;

    // GIR = (Conc * Rate) / (6 * Weight)
    const gir = (conc * r) / (6.0 * w);
    const dailyFluid = (r * 24.0) / w;

    document.getElementById("res-gir-val").innerText = `${gir.toFixed(2)} mg/kg/min`;
    document.getElementById("res-fluid-val").innerText = `${dailyFluid.toFixed(1)} mL/kg/day`;

    // Lines Depth
    const uac = (w * 3.0) + 9.0;
    const uvc = (w * 1.5) + 5.5;

    document.getElementById("res-uac-depth").innerText = `${uac.toFixed(1)} cm`;
    document.getElementById("res-uvc-depth").innerText = `${uvc.toFixed(1)} cm`;

    renderDrugsList();
  }

  weightInput.addEventListener("input", recalculate);
  rateInput.addEventListener("input", recalculate);
  concSelect.addEventListener("change", recalculate);
}

function renderDrugsList() {
  const container = document.getElementById("drugs-calc-list");
  if (!container || drugsData.length === 0) return;
  container.innerHTML = "";

  const w = parseFloat(document.getElementById("patient-weight").value) || 2.5;

  drugsData.forEach(d => {
    const dose = (d.defaultDose * w).toFixed(2);
    const card = document.createElement("div");
    card.className = "section-card";
    card.style.marginTop = "10px";
    card.innerHTML = `
      <div class="sec-header">
        <div>
          <div class="sec-title">${d.name}</div>
          <div class="sec-meta" style="color:#0284c7; font-weight:600;">${d.category}</div>
        </div>
        <button class="page-badge">${dose} ${d.unit.replace('/kg','')}</button>
      </div>
      <div style="font-size:12px; color:#475569; margin-top:6px;"><strong>Indication:</strong> ${d.indication}</div>
      <div style="font-size:12px; color:#0f172a; margin-top:4px;"><strong>Rule:</strong> ${d.recipeRule}</div>
      <button class="btn-pdf-jump" style="margin-top:8px;">Protocol Page ${d.protocolPage}</button>
    `;
    card.querySelector(".btn-pdf-jump").addEventListener("click", () => openPdfPage(d.protocolPage));
    container.appendChild(card);
  });
}

function renderEmergencyCards() {
  const emergencyData = [
    { title: "1. Neonatal Resuscitation (NRP 2020)", page: 18, border: "red-border", text: "• Golden First Minute: Warm, dry, stimulate, position airway.\n• Apnea or HR < 100: PPV immediately with room air (21% O2).\n• MR. SOPA: Mask adjust, Reposition, Suction, Open mouth, Pressure increase, Alternative airway.\n• HR < 60 after 30s PPV: Start chest compressions (3:1 ratio).\n• Epinephrine 1:10,000 IV: 0.02 mg/kg (0.2 mL/kg) via UVC or IO." },
    { title: "2. Golden Hour Bundle (<32 Weeks)", page: 124, border: "navy-border", text: "• Thermal Care: Polyethylene wrap without drying, radiant warmer, cap.\n• Respiratory: Early CPAP 6-8 cmH2O. Avoid intubation unless apneic.\n• Delayed Cord Clamping: 60 seconds if vigorous.\n• SpO2 Targets: 1 min 60-65%, 5 min 80-85%, 10 min 88-95%." },
    { title: "3. HIE & Therapeutic Hypothermia", page: 253, border: "blue-border", text: "• Inclusion: ≥36w GA, BW ≥1800g, APGAR ≤5 at 10 min, pH <7.0.\n• Initiate within 6 HOURS of birth.\n• Cool core temp to 33.5°C ± 0.5°C for 72 hours." },
    { title: "4. Septic Shock & Inotrope Infusions", page: 198, border: "red-border", text: "• Fluid Bolus: 10 mL/kg NS over 20-30 min.\n• Dopamine continuous IV infusion 5-10 mcg/kg/min.\n• Add Dobutamine 5-15 mcg/kg/min for myocardial dysfunction." },
    { title: "5. Hypoglycemia Emergency Protocol", page: 80, border: "blue-border", text: "• Definition: Blood glucose <40 mg/dL (<2.2 mmol/L).\n• Symptomatic / Glucose <25 mg/dL: Give 2 mL/kg D10W bolus IV over 5 min.\n• Continuous Infusion: Maintain D10W IV at 80 mL/kg/day (GIR 5.5 mg/kg/min)." }
  ];

  const container = document.getElementById("emergency-cards-list");
  container.innerHTML = "";

  emergencyData.forEach(e => {
    const card = document.createElement("div");
    card.className = `emergency-card ${e.border}`;
    card.innerHTML = `
      <div class="emergency-title">
        <span>${e.title}</span>
        <button class="btn-pdf-jump">PDF p.${e.page}</button>
      </div>
      <div class="emergency-text">${e.text}</div>
    `;
    card.querySelector(".btn-pdf-jump").addEventListener("click", () => openPdfPage(e.page));
    container.appendChild(card);
  });
}
