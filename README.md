# Mycopunk Weapon, Resource & Upgrade-Grid Reference

Static site (`index.html` + `data.js`) for a Mycopunk player mid mission-select who wants, fast: how a weapon unlocks, where a resource comes from, and how big an upgrade piece is on the grid.

## Sections

1. **Weapons** — all 17 weapons (13 primary + 4 heavy), filterable by slot, searchable by name/type/unlock. Source: https://bloxodes.com/wiki/mycopunk/weapons (updated 2026-11-01).
2. **Resources** — all 7 resources with rarity, description, and how-to-get. Source: https://deltiasgaming.com/?p=282308, dated 2025-07-11 — **before Mycopunk's 1.0 release**. Flagged in the UI and here: numbers/descriptions may have changed since 1.0.
3. **Upgrade Grid** — rarity-to-cell-size table (Standard = smaller slots/not published, Rare = 2 cells, Epic = 3 cells, Exotic = 4 cells), the no-stacking-identical-upgrades rule, grid-expansion via Oddity/Contraband pieces, and the Diffraction Driver's own facts (unlock at Player Level 10, 29 unique upgrades, 3 build archetypes). Source: https://powerupgaming.co.uk/2026/10/21/mycopunk-diffraction-driver-guide-best-upgrades-tips/ (dated 2026-10-21, post-1.0).

No wiki.gg/Fandom page and no existing web calculator cover Mycopunk at time of writing (confirmed by the orchestrator at Gate 2) — this reference is the first one assembled from the three sources above.

## Data provenance

All three sources were re-fetched directly on 2026-11-12 with:
```
curl -sL -A "Mozilla/5.0 (Macintosh) Chrome/120 Safari/537.36" "<url>"
```
(all three returned HTTP 200 — no WebFetch 405s, no archive.org fallback needed), then stripped of HTML and read in full before any row was written to `data.js`. Every row in every section carries its source URL. No numbers are invented; any unstated value is shown as `"not published"` (see the Standard-rarity cell size).

## Running / testing

```
node test.js                     # 11/11 known-answer + row-count tests
python3 -m http.server 8000      # serve the folder, then open http://localhost:8000/
```
