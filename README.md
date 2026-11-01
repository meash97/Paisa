# Paisa — Money Manager

Private, offline-first personal money manager (accounts, income/expenses, transfers, budgets, credit-card cycles).

- Live app: https://meash97.github.io/paisa/
- Source: `src/` (part1.html = CSS/shell, part2.js = core/engine/charts, part3.js = main screens, part4.js = editors/settings).
- Build: `./build.sh` → regenerates `index.html` and `sw.js` (with a new cache version). Commit and push; the installed app picks up the update on next open.
- Data lives in the user's browser (localStorage) — never in this repo.
