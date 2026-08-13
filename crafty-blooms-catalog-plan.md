# Crafty Blooms — Product Catalog Website & PDF Export Plan

**Brand:** Crafty Blooms
**Tagline:** Handcrafted with Love
**WhatsApp:** +91-7030261766
**Instagram:** @craftyblooms
**Currency:** INR (₹) — e.g. ₹249 with ₹399 strike-through + % OFF badge
**Version:** 1.0
**Goal:** Build a self-contained catalog website from the existing Images folder,
styled after afzaai.in (newdesign.md), with an Edit Mode toggle for managing
products/images, and a "Download PDF" button for a print-ready A4 catalog.

---

## Scope

- **In:** HTML/CSS/JS website, two product sections (Flowers + Toys & Animals),
  image crop tool, product editor panel, PDF export via jsPDF + html2canvas.
- **Out:** Backend server, database, payment gateway, user accounts.
- **Images:** `Website/Images/` — 27 Flower images + 19 Toys images, served locally.
- **Data persistence:** `localStorage` (edits survive page refresh in same browser).

---

## File Structure (to be created under `Website/`)

```
Website/
├── index.html          ← single entry point, entire catalog + admin UI
├── styles.css          ← design tokens from newdesign.md (afzaai.in style)
├── catalog.js          ← product data, edit mode logic, PDF export
└── Images/             ← existing, untouched source images
```

---

## Sub-Tasks

---

### Sub-Task 1 — Product Data Seed (`catalog.js` initial data)

**Intent:** Map all 46 source images to structured product entries so the catalog
has real content from the first load. No image renaming — keep original filenames.

**Expected Outcomes:**
- A `PRODUCTS` array in `catalog.js` with one entry per image.
- Each entry has: `id`, `file` (relative path), `name`, `category`
  (`flowers` or `toys`), `price`, `mrp`, `discountPct`, `description`,
  `featured` (bool), `cropX`, `cropY`, `cropW`, `cropH` (null = full image).
- Flowers section: 27 products. Toys section: 19 products.
- Default prices: Flowers ₹249 MRP ₹399 (37% OFF). Toys ₹199 MRP ₹299 (33% OFF).
- 3 featured products pre-marked (one hero per section + one cross-section pick).

**Todo:**
1. Define the `PRODUCTS` array with all 46 entries (flowers first, then toys).
2. Write `loadProducts()` — merges saved `localStorage` edits over the defaults.
3. Write `saveProducts()` — persists the current state to `localStorage`.

**Relevant context:** `Website/Images/` listing (27 Flower*.jpeg + 19 Toys*.jpeg).
`plan.md §4.2` items.csv schema is the reference for field names.

**Status:** [ ] pending

---

### Sub-Task 2 — Catalog Grid View (`index.html` + `styles.css`)

**Intent:** Render the full afzaai.in-style catalog — two category sections,
filter strip per section, responsive 2–3 column product card grid, red discount
pills, strike-through MRP, featured badge.

**Expected Outcomes:**
- Page header: lowercase bold `crafty blooms` wordmark + tagline `handcrafted with love`.
- Two sections: **Pipe Cleaner Flowers** and **Toys & Animals**, each with a
  filter strip showing `N products · from ₹X`.
- Product card stack (per newdesign.md §2.3):
  1. Square image (CSS `object-fit: cover`, center crop by default).
  2. Red pill badge bottom-left inside image — `XX% OFF` — only when discount > 0.
  3. Product name (Title Case, weight 500).
  4. Price row: struck grey MRP then bold black sale price.
  5. "Featured" star badge top-right when `featured: true`.
- Design tokens from newdesign.md §3.1: `--bg-page #FFFFFF`, `--bg-soft #F7F5F2`,
  `--ink-900 #1A1A1A`, `--ink-400 #8A8A8A`, `--rule #DCDCDC`,
  `--accent-red #C8102E`.
- Font: Poppins (Google Fonts CDN), weights 400/500/700.
- Footer: WhatsApp +91-7030261766 · Instagram @craftyblooms.
- Fully responsive: 3-col ≥900px, 2-col ≥540px, 1-col mobile.

**Todo:**
1. Write `index.html` skeleton: head (meta, font link, CSS link), header,
   two `<section>` placeholders, footer, script tags.
2. Write `styles.css` with all CSS custom properties and component styles
   (header, filter-strip, product-grid, product-card, badges, footer).
3. Write `renderCatalog()` in `catalog.js` — loops `PRODUCTS`, builds card HTML,
   injects into the two section containers.
4. Apply square crop via CSS `object-fit: cover` + `object-position: center`
   on card images; honour saved `cropX/Y/W/H` as `object-position` percentages.

**Relevant context:** `newdesign.md` §2, §3, §4 for exact tokens, type scale,
card anatomy. Reference: https://afzaai.in/collections/single-pipe-cleaner-flowers

**Status:** [ ] pending

---

### Sub-Task 3 — Admin Image Manager (crop tool)

**Intent:** Let the user adjust the visible crop area for any product image
without touching the source file. Crop coordinates are saved to `localStorage`.

**Expected Outcomes:**
- "Edit Mode" toggle button fixed top-right. When ON: each card gets an
  **✏ Edit** overlay button.
- Clicking ✏ Edit opens a modal with:
  - The full source image displayed.
  - A draggable/resizable square crop box overlay (pure CSS + JS, no library).
  - "Save Crop" button — stores `cropX, cropY, cropW, cropH` as percentages
    in the product entry and re-renders that card.
  - "Reset Crop" button — clears to null (full image).
  - "Upload New Image" button — `<input type=file accept="image/*">` that reads
    the file as a `data:` URL and replaces `file` in the product entry.
- Modal closes on backdrop click or Escape key.

**Todo:**
1. Add Edit Mode toggle button to `index.html` header area.
2. Write modal HTML template (hidden by default) in `index.html`.
3. Write `openCropModal(productId)` in `catalog.js`.
4. Implement drag-to-move + corner-drag-to-resize crop box in vanilla JS.
5. Write `saveCrop(productId, x, y, w, h)` — updates product + calls `saveProducts()`.
6. Write `handleImageUpload(productId, file)` — FileReader → data URL → saves.
7. Apply saved crop to card image render (CSS `object-fit/position` or
   `clip-path` approach).

**Relevant context:** Sub-Task 2 card render must leave hooks for crop overlay.
No external image-editing library — keep it self-contained.

**Status:** [ ] pending

---

### Sub-Task 4 — Product Editor Panel

**Intent:** Allow editing all product metadata (name, price, MRP, description,
featured flag, category) directly in the browser without touching any file.

**Expected Outcomes:**
- In Edit Mode, each card also shows a **📝** metadata-edit button (alongside ✏).
- Clicking 📝 opens a side-drawer (slides in from right) with a form:
  - Product Name (text input)
  - Category (select: Flowers / Toys & Animals)
  - Price ₹ (number input)
  - MRP ₹ (number input, optional — leave blank = no strike-through)
  - Description (textarea, 1–2 lines shown under name on card)
  - Featured (checkbox — adds ★ badge)
- "Save" button — updates product in memory + `localStorage` + re-renders card.
- "Delete Product" button (red, confirmation required) — removes from list.
- "Add New Product" button in the page header (Edit Mode only) — opens same
  drawer pre-filled with blank defaults + image upload.

**Todo:**
1. Add side-drawer HTML to `index.html` (hidden by default, `transform: translateX(100%)`).
2. Write `openProductEditor(productId)` and `openNewProductForm()` in `catalog.js`.
3. Wire form submit → `saveProduct(data)` → `saveProducts()` → `renderCatalog()`.
4. Wire delete → `deleteProduct(id)` with `confirm()` dialog → re-render.
5. Show/hide the 📝 and ✏ overlay buttons based on Edit Mode state.

**Relevant context:** Sub-Task 3 modal and Sub-Task 4 drawer must not conflict —
only one can be open at a time. Close any open modal/drawer before opening another.

**Status:** [ ] pending

---

### Sub-Task 5 — PDF Export

**Intent:** Render the visible catalog as a print-ready A4 PDF with one click.
Uses `html2canvas` to capture each section page-by-page and `jsPDF` to stitch them.

**Expected Outcomes:**
- "Download Catalog PDF" button visible at all times (not just Edit Mode), fixed
  bottom-right or in the page header.
- Clicking it:
  1. Temporarily hides all Edit Mode UI (buttons, overlays).
  2. Renders the catalog grid section-by-section into A4 canvas snapshots
     (210mm × 297mm at 150 DPI).
  3. Adds a cover page: `crafty blooms` wordmark + tagline + hero image collage
     (first 4 featured products).
  4. Adds a back page: WhatsApp, Instagram, tagline.
  5. Stitches pages into a single PDF named `CraftyBlooms_Catalog.pdf`.
  6. Triggers browser download.
- Edit Mode UI reappears after export.

**Todo:**
1. Add `html2canvas` and `jsPDF` via CDN in `index.html`.
2. Write `exportPDF()` in `catalog.js`.
3. Build cover page DOM node (not in the visible catalog — created in-memory,
   appended to body off-screen, captured, then removed).
4. Build back-page DOM node the same way.
5. Paginate grid: split products into groups of 6 (2×3) per page, capture each.
6. Assemble all canvases into jsPDF doc and call `doc.save(...)`.

**Relevant context:** `html2canvas` has known issues with `object-fit: cover` —
may need to pre-draw images onto an off-screen `<canvas>` for accurate crop
before handing to html2canvas. Plan for this fallback in implementation.

**Status:** [ ] pending

---

## Design Tokens (locked — from newdesign.md)

```css
--bg-page:    #FFFFFF;
--bg-soft:    #F7F5F2;
--ink-900:    #1A1A1A;
--ink-600:    #4A4A4A;
--ink-400:    #8A8A8A;
--rule:       #DCDCDC;
--accent-red: #C8102E;
--font:       'Poppins', sans-serif;
```

---

## Constraints

- Zero build tools — plain HTML/CSS/JS, opens by double-clicking `index.html`.
- Images served from relative path `Images/filename.jpeg` — no server needed.
- All external dependencies (Poppins font, jsPDF, html2canvas) loaded via CDN;
  app must degrade gracefully if offline (PDF export disabled, font falls back).
- No image files are modified — crop is purely CSS/coordinate-based.
- Edit Mode is unlocked, no password. A simple boolean toggle in memory.

---

## Approval Checkpoint

Before implementation begins, confirm:
- [ ] Brand name "Crafty Blooms" and tagline "Handcrafted with Love" are correct.
- [ ] WhatsApp +91-7030261766 and Instagram @craftyblooms are correct.
- [ ] Two categories (Flowers + Toys & Animals) cover all current images.
- [ ] Default pricing (Flowers ₹249/₹399, Toys ₹199/₹299) is acceptable as a starting point.
- [ ] Single HTML file approach (no server) is acceptable.
