// Małe funkcje pomocnicze

// Losowy element z tablicy
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Zamiana znaków specjalnych na encje HTML (bezpieczne wstawianie tekstu z formsa)
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

// Prosty parser CSV (pola w cudzysłowach, przecinki i nowe linie w środku pola)
function parseCsv(text) {
  const rows = [[]];
  let field = "", quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    }
    else if (c === '"') quoted = true;
    else if (c === ",") { rows.at(-1).push(field); field = ""; }
    else if (c === "\n") { rows.at(-1).push(field); field = ""; rows.push([]); }
    else if (c !== "\r") field += c;
  }
  rows.at(-1).push(field);
  return rows.filter(r => r.some(f => f !== ""));
}

// Kopiuj do schowka
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
