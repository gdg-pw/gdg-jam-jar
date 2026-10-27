# Motywy Pracy

Generator motywów pracy + galeria prac. Czysty HTML/CSS/JS, bez buildów. Styl GDG On Campus PW.

## Uruchomienie
Otwórz `index.html` w przeglądarce (albo VS Code -> Live Server).

## Gdzie co zmieniać
| Co                                   | Plik                  |
|--------------------------------------|-----------------------|
| Kolory, czcionki, zaokrąglenia       | `css/variables.css`   |
| Motywy, prace, link do forms         | `js/data.js`          |
| Teksty, terminal, socials            | `index.html`          |
| Symbole w tle, easter eggi           | `js/effects.js`       |
| Logo, favicon, corgi, ikony          | `assets/`             |
| Logika losowania                     | `js/generator.js`     |
| Przyciski, karty                     | `css/components.css`  |
| Terminal, tło, logo, corgi           | `css/effects.css`     |

## Czcionka
Google Sans Code z Google Fonts. Żeby zmienić: link w `index.html` + `--font-sans` / `--font-mono` w `css/variables.css`.

## Easter eggi
- Kliknij duże logo 5x
- Konami code: ↑ ↑ ↓ ↓ ← → ← → B A

## Deploy
GitHub Pages: Settings -> Pages -> branch `main`, folder `/root`.
