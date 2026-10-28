/* ==========================================================
   DANE – tu dodajesz motywy i prace. Nie trzeba ruszać reszty.
   ========================================================== */

// Link do Google Forms (wklej swój)
const FORM_URL = "https://forms.gle/LEERmQVihVWd31N26";

// Anonimowa ankieta po wydarzeniu
const SURVEY_URL = "https://forms.gle/uBbXiqTCvbjWLi7q8";

// Motywy (Flavor #1: Portfolio): { name, desc }. Opis krótki (~30 znaków), musi się zmieścić w jednej linii na telefonie
const THEMES = [
  { name: "Cyberpunk",           desc: "neony, ciemne miasto, glitch" },
  { name: "Pastele",             desc: "jasne, miękkie kolory" },
  { name: "Minimalizm",          desc: "dużo pustej przestrzeni" },
  { name: "Terminal Linux",      desc: "czarne tło, zielony tekst" },
  { name: "Retro lata 80.",      desc: "neon, kasety, VHS" },
  { name: "Windows 95",          desc: "szare okna i pasek Start" },
  { name: "Vaporwave",           desc: "róż, turkus, posągi, lata 90." },
  { name: "Synthwave",           desc: "zachód słońca, siatka, neon" },
  { name: "Brutalizm",           desc: "surowo, grube ramki, bez ozdób" },
  { name: "Cozy",                desc: "ciepło, kawa, koc i lampka" },
  { name: "Glassmorphism",       desc: "matowe szkło i rozmycie" },
  { name: "Neumorphism",         desc: "miękkie, wypukłe przyciski" },
  { name: "Y2K",                 desc: "chrom, błysk, rok 2000" },
  { name: "Pixel art",           desc: "grafika z pikseli, 8-bit" },
  { name: "Retro arcade",        desc: "automaty, punkty, Insert Coin" },
  { name: "Anime",               desc: "kreska japońskiej animacji" },
  { name: "Fantasy",             desc: "smoki, magia, pergamin" },
  { name: "Dark academia",       desc: "stare książki, biblioteka" },
  { name: "Cottagecore",         desc: "wieś, kwiaty, domowy chleb" },
  { name: "Nature i organic",    desc: "liście, drewno, zieleń" },
  { name: "Styl skandynawski",   desc: "jasne drewno, biel, prosto" },
  { name: "Luksus",              desc: "czerń, złoto, elegancja" },
  { name: "Editorial",           desc: "układ jak w magazynie" },
  { name: "Monochrom",           desc: "jeden kolor, wiele odcieni" },
  { name: "Skeuomorfizm",        desc: "jak prawdziwe przedmioty" },
  { name: "Industrial",          desc: "beton, stal, rury" },
  { name: "Futuryzm",            desc: "świat za 100 lat" },
  { name: "Kosmos i sci-fi",     desc: "gwiazdy, planety, statki" },
  { name: "Hand-drawn",          desc: "szkic długopisem w zeszycie" },
  { name: "Old money",           desc: "klasyka, tweed, dyskretny luksus" },
  { name: "Memphis Design",      desc: "kolorowe kształty, lata 80." },
  { name: "Gradienty i aurora",  desc: "płynne przejścia kolorów" },
  { name: "Retrofuturyzm",       desc: "przyszłość widziana z lat 60." },
  { name: "Blueprint",           desc: "niebieski plan techniczny" },
  { name: "Skate i streetwear",  desc: "graffiti, naklejki, ulica" },
  { name: "Kawaii",              desc: "słodkie, różowe, uśmiechnięte" },
  { name: "Gothic",              desc: "czerń, świece, gotyckie litery" },
  { name: "Komiks",              desc: "kadry, dymki, kropki rastra" },
  { name: "Mapa skarbów",        desc: "pergamin, piraci, krzyżyk X" },
  { name: "Tablica kredowa",     desc: "kreda na zielonej tablicy" },
  { name: "Bauhaus",             desc: "koła, kwadraty, czyste kolory" }
];


// Galeria z Google Sheets: link CSV do opublikowanej zakładki "galeria"
// (Plik → Udostępnij → Opublikuj w internecie → galeria, CSV). Pusty = tylko SUBMISSIONS poniżej
const GALLERY_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQFlTK3UaE_AJfqu4IM5vTGOKxBfVBy7AXIGFWWPq8Jf110Gvzwjn2FZ-QLjYjaCJGTvIHC_okKuNwU/pub?gid=0&single=true&output=csv";

// Prace wpisane ręcznie (pokazują się zawsze, przed tymi z arkusza): { title, author, url }
const SUBMISSIONS = [
  // { title: "Tytuł", author: "Imię Nazwisko", url: "https://nick.github.io/projekt/" },
];

// Ile ostatnich losowań pokazywać w historii
const HISTORY_LIMIT = 3;
