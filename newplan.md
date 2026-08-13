# plan.md — Handmade Pipe Cleaner (Chenille Stem) Product Catalog

**Owner:** <your name>
**Version:** 0.1
**Goal:** Turn a folder of product photos into a professionally designed, print-ready PDF
catalog with editable pricing — where the design is approved *before* the PDF is built.

---

## 1. Objectives

| # | Objective | Success Criteria |
|---|-----------|------------------|
| 1 | Auto-collect all product images from a single folder | Every valid image appears exactly once in `items.csv` |
| 2 | Pricing lives in one editable file | Change a number → rebuild → new PDF, zero design edits |
| 3 | AI proposes catalog design first | 2–3 visual concepts delivered as PNG/PDF mockups |
| 4 | Human approval gate | Nothing is exported until design is signed off in §7 |
| 5 | Single deliverable | One PDF, all pages, embedded images/fonts, print + web versions |

---

## 2. Inputs & Assumptions

- **Source folder:** `./assets/products/` (all product photos live here)
- **Accepted formats:** `.jpg`, `.jpeg`, `.png`, `.webp`, `.heic`
- **Products:** handcrafted pipe cleaner / chenille stem items
  (e.g., animals, flowers, keychains, bookmarks, ornaments, bouquets, dolls)
- **Currency:** `INR` (configurable — change in `config.yaml`)
- **Output:** A4 portrait PDF (also produce US Letter variant if needed)
- **Audience:** retail buyers / craft fairs / online store / gifting

---

## 3. Project Structure

```
catalog/
├── plan.md                     <- this file
├── config.yaml                 <- global settings (brand, currency, page size)
├── pricing.csv                 <- EDITABLE prices (single source of truth)
├── items.csv                   <- auto-generated inventory (from image scan)
├── assets/
│   ├── products/               <- DROP ALL PRODUCT PHOTOS HERE
│   ├── brand/                  <- logo, watermark, signature
│   └── fonts/                  <- licensed fonts
├── build/
│   ├── images_optimized/       <- resized/cropped web+print versions
│   ├── mockups/                <- design concepts for approval
│   └── final/                  <- Catalog_v1_print.pdf, Catalog_v1_web.pdf
├── templates/
│   ├── concept_a/  concept_b/  concept_c/
│   │   ├── catalog.html
│   │   └── styles.css
└── scripts/
    ├── 01_scan_images.py       <- folder -> items.csv
    ├── 02_optimize_images.py   <- resize, crop, white-balance, bg cleanup
    ├── 03_merge_pricing.py     <- items.csv + pricing.csv -> catalog_data.json
    ├── 04_render_mockups.py    <- build 1-page sample per concept
    └── 05_build_pdf.py         <- full catalog -> single PDF
```

---

## 4. Phase 0 — Intake & Inventory (automated)

### 4.1 Image naming convention (recommended)
Rename source files as:

```
<category>__<product-name>__<variant>__<seq>.jpg
flowers__sunflower-bouquet__5-stem__01.jpg
animals__peacock-showpiece__blue__01.jpg
keychains__butterfly-keychain__pink__02.jpg
```

The scanner parses this into Category / Name / Variant automatically.
Un-named files still get imported with `TODO` fields for manual fill-in.

### 4.2 `items.csv` schema (auto-generated, then human-edited)

| column | type | notes |
|--------|------|-------|
| `sku` | text | auto: `PC-FLW-001` (Pipe Cleaner–Category–seq) |
| `image_files` | text | pipe-separated; first = hero shot |
| `product_name` | text | display title |
| `category` | text | groups pages/sections |
| `short_desc` | text | 8–15 words |
| `long_desc` | text | 25–40 words (optional, used in full-page layouts) |
| `size_cm` | text | e.g. `12 × 8 × 5` |
| `colors` | text | `pink, white, gold` |
| `stems_used` | int | material count → feeds cost calc |
| `make_time_min` | int | labour minutes → feeds cost calc |
| `stock_qty` | int | optional, shows "Made to order" if 0 |
| `is_featured` | bool | featured items get larger cards |
| `status` | enum | `active` / `draft` / `retired` (only `active` prints) |

### 4.3 Image QA rules
- Minimum 1200 px on the short edge for print (flag anything smaller)
- Square (1:1) crop for grid cards; 4:5 for feature pages
- Consistent background: clean white or one fixed pastel per category
- Auto-flag: blurry, tilted, harsh shadows, mixed backgrounds

---

## 5. Phase 1 — Pricing (fully adjustable)

### 5.1 `pricing.csv` — you edit only this file

| column | example | purpose |
|--------|---------|---------|
| `sku` | `PC-FLW-001` | join key |
| `price_manual` | `249` | **wins over everything if filled** |
| `cost_material` | `38` | auto-calc if blank |
| `cost_labour` | `60` | auto-calc if blank |
| `markup_pct` | `120` | profit margin |
| `mrp_strike` | `399` | crossed-out "was" price |
| `discount_pct` | `10` | shows sale badge |
| `bundle_qty` | `3` | "3 for ₹649" offer |
| `bundle_price` | `649` | |
| `price_wholesale` | `165` | printed only in wholesale edition |
| `notes` | `festival pricing` | internal only, not printed |

### 5.2 Global knobs in `config.yaml`
```yaml
currency: "INR"
symbol: "₹"
rate_per_stem: 4.50        # material cost per chenille stem
rate_per_hour: 180         # your labour rate
default_markup_pct: 120
rounding: 9                # round to nearest ...9 (249, 349)
tax_mode: "inclusive"      # inclusive | exclusive | hide
show_wholesale: false      # toggle retail vs wholesale edition
```

### 5.3 Price formula (used when `price_manual` is empty)
```
material = stems_used × rate_per_stem
labour   = (make_time_min / 60) × rate_per_hour
base     = material + labour
price    = round_to_9( base × (1 + markup_pct/100) )
final    = price × (1 - discount_pct/100)
```

### 5.4 Re-pricing workflow (the key requirement)
1. Open `pricing.csv` in Excel / Google Sheets / Numbers
2. Change any number → save
3. Run `python scripts/05_build_pdf.py --concept a --bump-version`
4. New PDF in `build/final/` — **design untouched, prices updated**

> Optionally generate a `PRICE_CHANGELOG.md` diff so you can see what moved.

---

## 6. Phase 2 — AI Design Concepts (BEFORE any PDF export)

Deliver **3 concepts**, each as a 3-page mockup (cover + one grid spread + one feature page):

| Concept | Mood | Layout | Palette | Best for |
|---------|------|--------|---------|----------|
| **A — Soft Pastel Craft** | warm, handmade, cosy | 2×3 grid cards, rounded corners, hand-drawn doodles | blush, cream, sage, terracotta | gifting / Instagram audience |
| **B — Clean Boutique** | premium, minimal | 2×2 large cards, generous whitespace, thin rules | white, charcoal, one accent | wholesale / retail buyers |
| **C — Playful Kids & Party** | bright, fun | 3×3 dense grid, colour-blocked category bands | primary + neon pastels | school fairs / party decor |

### 6.1 Page architecture (same for all concepts)
1. **Cover** — brand name, tagline, hero collage, year
2. **Inside cover** — "Handmade with love" story, your photo/signature (optional)
3. **How to use this catalog** — SKU explanation, size guide, custom-order note
4. **Category index / TOC** with thumbnails + page numbers
5. **Category divider** page (one per category, with a large hero image)
6. **Product grid pages** — repeating, auto-paginated
7. **Featured / Bestsellers** — full-bleed single product pages
8. **Custom orders & bulk pricing** page
9. **Care instructions** (dusting, avoid water, storage)
10. **Shipping, packaging & returns**
11. **Order form** — table: SKU / Item / Qty / Price / Total (fillable fields in web PDF)
12. **Back cover** — contact, WhatsApp, Instagram, QR code to store

### 6.2 Product card anatomy
```
┌───────────────────────────┐
│      [ square image ]     │
│                           │
│ Sunflower Bouquet     ★   │  ← ★ = featured badge
│ 5-stem · 12×8 cm          │
│ Handmade chenille bloom…  │
│ ₹399  ₹249   [10% OFF]    │  ← strike-through + sale badge
│ SKU PC-FLW-001            │
└───────────────────────────┘
```

### 6.3 Design spec locked at approval
- Fonts: 1 display +