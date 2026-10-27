/* ==========================================================
   DANE – tu dodajesz motywy i prace. Nie trzeba ruszać reszty.
   ========================================================== */

// Link do Google Forms (wklej swój)
const FORM_URL = "https://forms.cloud.microsoft/e/Rt7JtNzaHC";

// Motywy pracy: jeden motyw = jedna linia
const THEMES = [
  "Portfolio w stylu cyberpunkowym",
  "Portfolio w stylu pastelowym",
  "Portfolio w stylu minimalistycznym",
  "Portfolio w stylu terminala Linux",
  "Portfolio w stylu retro lat 80.",
  "Portfolio w stylu Windows 98",
  "Portfolio w stylu vaporwave",
  "Portfolio w stylu synthwave",
  "Portfolio w stylu brutalistycznym",
  "Portfolio w stylu cozy",
  "Portfolio w stylu dark mode",
  "Portfolio w stylu glassmorphism",
  "Portfolio w stylu neumorphism",
  "Portfolio w stylu Y2K",
  "Portfolio w stylu pixel art",
  "Portfolio w stylu retro arcade",
  "Portfolio w stylu anime",
  "Portfolio w stylu fantasy",
  "Portfolio w stylu dark academia",
  "Portfolio w stylu cottagecore",
  "Portfolio w stylu nature i organic",
  "Portfolio w stylu skandynawskim",
  "Portfolio w stylu luksusowym",
  "Portfolio w stylu editorial",
  "Portfolio w stylu monochromatycznym",
  "Portfolio w stylu skeuomorficznym",
  "Portfolio w stylu industrialnym",
  "Portfolio w stylu futurystycznym",
  "Portfolio w stylu space i sci-fi",
  "Portfolio w stylu hand-drawn",
  "Portfolio w stylu old money",
  "Portfolio w stylu Memphis Design",
  "Portfolio w stylu low-poly 3D",
  "Portfolio w stylu gradientów i aurora",
  "Portfolio w stylu cybercore",
  "Portfolio w stylu retrofuturystycznym",
  "Portfolio w stylu blueprint",
  "Portfolio w stylu skejtowym i streetwear",
  "Portfolio w stylu kawaii",
  "Portfolio w stylu gothic"
];


// Prace z formsa – wklejasz ręcznie: { title, author, url }
const SUBMISSIONS = [
  // { title: "Tytuł", author: "Imię Nazwisko", url: "https://nick.github.io/projekt/" },
];

// Ile ostatnich losowań pokazywać w historii
const HISTORY_LIMIT = 3;
