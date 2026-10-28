// Logika generatora motywów

const els = {
  result:   document.getElementById("result"),
  roll:     document.getElementById("btn-roll"),
  copy:     document.getElementById("btn-copy"),
  history:  document.getElementById("history"),
};

let current = null;   // aktualnie wylosowany motyw
let rolls = [];       // ostatnie losowania

// Losuj
function roll() {
  const pool = THEMES;            // wszystkie motywy z js/data.js
  if (!pool.length) return;

  // unikaj powtórki tego samego motywu pod rząd
  let next;
  do { next = pickRandom(pool); } while (pool.length > 1 && next === current);

  current = next;
  showResult();
  addToHistory(next.name);
}

function showResult() {
  els.result.innerHTML = `<span>${current.name}</span><span class="result-desc">${current.desc}</span>`;
  els.result.classList.remove("active");
  void els.result.offsetWidth;            // restart animacji
  els.result.classList.add("active");
}

function addToHistory(text) {
  rolls.unshift(text);
  rolls = rolls.slice(0, HISTORY_LIMIT);
  els.history.innerHTML = rolls.map(h => `<li>${h}</li>`).join("");
}

async function copyCurrent() {
  if (!current) return;
  const ok = await copyText(current.name);
  els.copy.textContent = ok ? "Skopiowano ✓" : "Błąd";
  setTimeout(() => (els.copy.textContent = "Kopiuj"), 1200);
}

function initGenerator() {
  els.roll.addEventListener("click", roll);
  els.copy.addEventListener("click", copyCurrent);
}
