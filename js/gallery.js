// Galeria prac: karty z SUBMISSIONS (js/data.js) + zgłoszenia z Google Sheets (GALLERY_CSV_URL)

function initGallery() {
  renderGallery(SUBMISSIONS);
  if (!GALLERY_CSV_URL) return;
  loadSheet();
  setInterval(loadSheet, 60 * 1000);   // nowe zgłoszenia bez odświeżania strony (np. na rzutniku)
}

// Opublikowana zakładka "galeria": nagłówki title, author, url
async function loadSheet() {
  try {
    const res = await fetch(GALLERY_CSV_URL, { cache: "no-store" });
    if (!res.ok) return;
    const [header, ...rows] = parseCsv(await res.text());
    const keys = header.map(h => h.trim().toLowerCase());
    const works = rows.map(r => Object.fromEntries(keys.map((k, i) => [k, (r[i] || "").trim()])));
    renderGallery([...SUBMISSIONS, ...works]);
  } catch {
    // arkusz nie odpowiada: zostaje to, co już jest
  }
}

function renderGallery(list) {
  const grid = document.getElementById("gallery-grid");

  // tylko linki https://, reszta (np. javascript:) odpada
  const works = list.filter(s => /^https:\/\//i.test(s.url));

  if (!works.length) {
    grid.innerHTML = `<p class="muted">Jeszcze nic tu nie ma. Wrzuć pierwszą pracę!</p>`;
    return;
  }

  grid.innerHTML = works.map(s => `
    <a class="card" href="${escapeHtml(s.url)}" target="_blank" rel="noopener">
      <h3>${escapeHtml(s.title)}</h3>
      <p class="author">by ${escapeHtml(s.author)}</p>
    </a>
  `).join("");
}
