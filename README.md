<div align="center">
  <img src="assets/logo.webp" alt="GDG on Campus PW" width="140" />

  <h1>GDG Jam Jar</h1>
  <p>Dwie godziny, jeden wylosowany motyw i działająca strona na koniec.</p>

  <a href="https://jamjar.gdgpw.pl">
    <img src="https://img.shields.io/badge/%E2%96%B6%20Otw%C3%B3rz%20stron%C4%99-jamjar.gdgpw.pl-34A853?style=for-the-badge&labelColor=181818" alt="Otwórz stronę" />
  </a>

  <br/><br/>

  <img src="https://img.shields.io/badge/Flavor%20%231-Portfolio-FBBC04?style=flat-square&labelColor=181818" alt="Flavor #1: Portfolio" />
  <img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white&labelColor=181818" alt="HTML" />
  <img src="https://img.shields.io/badge/CSS-663399?style=flat-square&logo=css&logoColor=white&labelColor=181818" alt="CSS" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black&labelColor=181818" alt="JavaScript" />
  <img src="https://img.shields.io/badge/nginx-009639?style=flat-square&logo=nginx&logoColor=white&labelColor=181818" alt="nginx" />
</div>

---

<div align="center">
  <img src=".github/readme/hero.webp" alt="Strona GDG Jam Jar" width="900" />
</div>
<br/>

**GDG Jam Jar** to seria krótkich spotkań [GDG on Campus PW](https://gdg.community.dev/gdg-on-campus-politechnika-warszawska-warsaw-poland/). Nikt nie prowadzi zajęć krok po kroku: każdy robi swój projekt, podgląda innych i wychodzi z gotową rzeczą. Każda edycja ma swój „flavor”, czyli temat.

---

## 🎲 Flavor #1: Portfolio

<div align="center">
  <img src=".github/readme/generator.webp" alt="Losowanie motywu" width="800" />
</div>

<p align="center"><sub>29 października 2026 · Stara Kotłownia PW</sub></p>

| | |
|--|--|
| 🎲 | Losujesz motyw z 41: od Windows 95 i pixel artu po dark academia |
| 🎨 | Robisz w nim swoje portfolio, sam albo z pomocą AI |
| 🚀 | Wrzucasz je na GitHub Pages według poradnika na stronie |
| 🖼️ | Dodajesz link przez formularz i Twoja praca ląduje w galerii |

---

## 🖼️ Galeria na żywo

Zgłoszenia z Google Forms trafiają do arkusza. Po akceptacji praca pojawia się w galerii na stronie, a strona sprawdza arkusz co minutę, więc na rzutniku nowe prace wskakują bez odświeżania.

---

## 📱 Na telefonie

<table>
  <tr>
    <td align="center"><img src=".github/readme/mobile.webp" alt="Start na telefonie" width="260" /></td>
    <td align="center"><img src=".github/readme/mobile-generator.webp" alt="Generator na telefonie" width="260" /></td>
  </tr>
</table>

---

## 🐕 Easter eggi

<div align="center">
  <img src=".github/readme/corgi.webp" alt="Corgi wyskakuje zza terminala" width="700" />
</div>

Kliknij duże logo 5 razy albo wpisz `↑ ↑ ↓ ↓ ← → ← → B A`.

---

## Pod maską

- Czysty HTML, CSS i JS. Bez buildów i zależności.
- Motywy, linki i arkusz galerii są w `js/data.js`, a kolory i czcionki w `css/variables.css`.
- Galeria pokazuje zgłoszenia, które ktoś zaakceptował w kolumnie `OK` arkusza. Dane z formularza są escapowane, a przechodzą tylko linki `https://`.
- Lokalnie: `python3 -m http.server` albo `docker compose up --build` i http://localhost:8092.
- Push na `main` to deploy na jamjar.gdgpw.pl w ok. 2 minuty. Portu i montowań w `docker-compose.yml` nie zmieniaj, bo serwer odrzuci taki deploy.

---

<div align="center">
  <sub>Strona: <a href="https://github.com/lawarance">Lawarance Chettiar</a> &nbsp;·&nbsp; Organizuje <a href="https://gdg.community.dev/gdg-on-campus-politechnika-warszawska-warsaw-poland/">GDG on Campus PW</a> &nbsp;·&nbsp; <a href="https://jamjar.gdgpw.pl">jamjar.gdgpw.pl</a></sub>
</div>
