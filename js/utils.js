// Małe funkcje pomocnicze

// Losowy element z tablicy
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Zamiana znaków specjalnych na encje HTML (bezpieczne wstawianie tekstu z formsa)
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
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
