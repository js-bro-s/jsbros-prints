# JS Bros Prints

> Small 3D printed fidgets and collectibles designed and sold by JS Bros.

We design, print, and sell items to classmates and friends. Every item in this repo is something we actually made — from idea to final print.

---

## What We Sell

| # | Item | Price | Category |
|---|------|-------|----------|
| 1 | Fidget Cube | $2.00 | Fidget |
| 2 | Spinning Top | $1.00 | Toy |
| 3 | Mini Sword Keychain | $2.00 | Collectible |
| 4 | Roblox Character Figure | $3.00 | Collectible |
| 5 | Click Button Fidget | $1.50 | Fidget |
| 6 | Phone Stand | $2.50 | Practical |
| 7 | Dice Set (D6 + D20) | $3.00 | Game |
| 8 | Name Tag Badge | $2.00 | Custom |
| 9 | Articulated Dragon | $4.00 | Collectible |
| 10 | Gear Spinner | $2.00 | Fidget |

Full details → [`catalog/catalog.md`](catalog/catalog.md)

---

## Repo Structure

```
jsbros-prints/
├── catalog/        # Product pages for each item + index
├── designs/        # Design notes, sketches, Tinkercad links
├── stls/           # Ready-to-print STL files
└── print-settings/ # Slicer settings for each item
```

---

## How to Add a New Design

1. Sketch the idea (paper or Tinkercad)
2. Export the `.stl` file → drop it in `stls/`
3. Note the print settings → add to `print-settings/`
4. Create a catalog page → add to `catalog/`
5. Update the catalog index → `catalog/catalog.md`
6. Commit: `add spinning-top stl and settings`

---

## Print Setup

- **Printer:** Bambu Lab
- **Material:** PLA
- **Slicer:** Bambu Studio
- **Default layer height:** 0.2mm
- **Default infill:** 15%

---

## Rules

- Every design we sell must be **our own** — no copying others' work
- Test print before listing in catalog
- If it breaks in under a week, fix the design before selling again
