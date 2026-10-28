# GDG Jam Jar

GDG Jam Jar to seria krótkich spotkań [GDG on Campus Politechnika Warszawska](https://gdg.community.dev/gdg-on-campus-politechnika-warszawska-warsaw-poland/). Spotykamy się na około dwie godziny i każdy wychodzi z gotową, działającą rzeczą.

To nie są warsztaty krok po kroku i nikt nie prowadzi zajęć. To luźny jam: każdy robi swój projekt, a przy okazji podgląda innych i wymienia się uwagami. Każda edycja ma inny „flavor", czyli temat. Zaczynamy od prostych, a jeśli format się przyjmie, kolejne będą ambitniejsze.

## Flavor #1: Portfolio

Pierwsza edycja: 29 października 2026, Stara Kotłownia PW.

1. Losujesz motyw, np. pixel art, cyberpunk albo Windows 95.
2. Robisz w nim swoją stronę portfolio. Kod piszesz sam albo z pomocą AI.
3. Wrzucasz ją na GitHub Pages, więc wychodzisz z działającym linkiem.
4. Na koniec każdy pokazuje, co mu wyszło.

Technologia jest dowolna, byle strona działała na GitHub Pages jako zwykłe pliki statyczne.

## Co jest w tym repo

Strona, z której korzystamy na wydarzeniu: generator motywów z krótkim opisem każdego, poradnik wrzucania strony na GitHub Pages i galeria prac uczestników zasilana z Google Forms. Czysty HTML, CSS i JS, bez buildów i zależności.

## Uruchomienie

Otwórz `index.html` w przeglądarce albo postaw prosty serwer:

```bash
python3 -m http.server 8000
```

i wejdź na http://localhost:8000. Galeria z Google Sheets działa tylko przez serwer, bo przeglądarka blokuje pobieranie arkusza ze strony otwartej jako plik.

## Gdzie co zmieniać

| Co                                                     | Plik                 |
|--------------------------------------------------------|----------------------|
| Motywy i ich opisy, link do formularza, arkusz galerii | `js/data.js`         |
| Teksty, terminal, poradnik, socials, OG tagi           | `index.html`         |
| Kolory, czcionki, zaokrąglenia                         | `css/variables.css`  |
| Przyciski, karty, generator, poradnik                  | `css/components.css` |
| Terminal, tło, logo, corgi                             | `css/effects.css`    |
| Logika losowania                                       | `js/generator.js`    |
| Galeria                                                | `js/gallery.js`      |
| Symbole w tle, easter eggi                             | `js/effects.js`      |
| Logo, favicon, corgi, obrazek do podglądu linku        | `assets/`            |

Czcionki to Google Sans Flex (tekst) i Google Sans Code (terminal) z Google Fonts.

## Galeria z Google Forms

Zgłoszenia trafiają z formularza do arkusza Google. Do galerii idą tylko te, które ktoś zaakceptuje, wpisując cokolwiek w kolumnie `OK`. Zakładka `galeria` zbiera zaakceptowane wiersze i jest opublikowana jako CSV. Jej adres siedzi w `GALLERY_CSV_URL` w `js/data.js`, a strona sprawdza arkusz co minutę.

Dane z formularza traktujemy jak niezaufane: wszystko jest escapowane, a do galerii przechodzą tylko linki `https://`.

## Easter eggi

- Kliknij duże logo 5 razy.
- Konami code: ↑ ↑ ↓ ↓ ← → ← → B A

## Deploy

Strona stoi na https://jamjar.gdgpw.pl i wdraża się sama. Wystarczy push na `main`: w ciągu ok. 2 minut serwer GDG buduje obraz z `Dockerfile`, sprawdza nową wersję obok starej i dopiero wtedy ją podmienia. Jak coś się wysypie, zostaje poprzednia wersja.

Każdy nowy plik w repo trafia na stronę, chyba że jest wpisany w `.dockerignore`. Portu i montowań w `docker-compose.yml` nie zmieniaj, serwer odrzuci taki deploy.

Lokalnie tak samo jak na serwerze: `docker compose up --build` i http://localhost:8092.

## Autor

Strona: Lawarance Chettiar ([@lawarance](https://github.com/lawarance)). Wydarzenie organizuje GDG on Campus PW.
