# FarmSewa – App legal pages

Public privacy policies, terms and support pages for FarmSewa apps, hosted with GitHub Pages.

Base URL: `https://<github-user>.github.io/farmsewa-legal/`

| App | Privacy Policy | Terms & Conditions | Support |
|---|---|---|---|
| 2048 | `2048/privacy-policy.html` | `2048/terms-and-conditions.html` | `2048/support.html` |

## Add a new app

1. Copy the `2048/` folder and rename it, e.g. `my-new-app/`.
2. Edit the text in each file (app name, what data the app uses, dates).
3. Add the app to `index.html` and to the table above.
4. Commit and push. The pages go live in 1–2 minutes.

## Styling

All pages use `assets/style.css`, which matches the app UI (colors, cards, rows).
The app opens pages with `?embed=1&theme=light|dark`; `assets/site.js` then hides
the page's own top bar and follows the in-app appearance setting.
