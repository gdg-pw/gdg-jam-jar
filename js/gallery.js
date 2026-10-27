// Galeria prac – karty generowane z SUBMISSIONS (js/data.js)

function initGallery() {
  const grid = document.getElementById("gallery-grid");

  // tylko linki https://, reszta (np. javascript:) odpada
  const works = SUBMISSIONS.filter(s => /^https:\/\//i.test(s.url));

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
