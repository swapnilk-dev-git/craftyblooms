# Crafty Blooms — v2 Premium Upgrade Plan

**Scope:** Enhance the existing catalog website with multi-image hover slideshow,
Quick View modal, WhatsApp order button, search/filter bar, scroll animations,
and image zoom. All changes are additive — no existing functionality is removed.

---

## Sub-Tasks

---

### Sub-Task 1 — Multi-image data model + hover slideshow

**Intent:** Each product gets a `files` array instead of a single `file` string.
On card hover, images cycle automatically every 1.2s with a smooth crossfade.
Dot indicators show which image is active. Edit Mode gets an "Add More Images"
button in the product editor drawer.

**Expected Outcomes:**
- `files: ['Images/Flower.jpeg']` replaces `file: 'Images/Flower.jpeg'` in every product entry.
- `buildCardHTML` renders all images stacked absolutely, opacity-0 except the active one.
- JS `startSlideshow(cardEl, files)` / `stopSlideshow(cardEl)` tied to mouseenter/mouseleave.
- Dot indicators appear bottom-centre of the image wrap, one dot per image, active dot is white filled.
- Product editor drawer: "＋ Add More Images" opens a file picker (multi-select), appends data-URLs to `files`.
- "Remove" button per extra image in the drawer's image list.
- `saveCrop` / `buildImageStyle` operates on `files[0]` (hero image) only.

**Relevant context:** `buildCardHTML` in `catalog.js:100`, `openProductEditor` in
`catalog.js:327`, `DEFAULT_PRODUCTS` array `catalog.js:8–55`.

**Status:** [ ] pending

---

### Sub-Task 2 — Quick View modal

**Intent:** Clicking anywhere on a product card (outside Edit Mode) opens a
full-screen modal with a large image gallery (prev/next arrows + dots), all
product details, and a WhatsApp Order button.

**Expected Outcomes:**
- Click on card body → opens `#quickview-modal`.
- Left panel: large image (selected from `files` array), prev/next arrows, dot nav, image counter `1 / 3`.
- Right panel: product name, description, price row (MRP struck + sale price + % OFF badge), SKU, category tag.
- WhatsApp button: opens `https://wa.me/917030261766?text=Hi! I'm interested in [name] (SKU: [id]) priced at ₹[price]` in a new tab.
- Close on backdrop click, ✕ button, or Escape key.
- Keyboard left/right arrows navigate gallery images.
- Modal is not shown in Edit Mode (edit overlay takes precedence).

**Relevant context:** Existing crop modal pattern in `index.html:140–175` for
modal structure. WhatsApp number: `+91-7030261766`.

**Status:** [ ] pending

---

### Sub-Task 3 — Search & Filter bar

**Intent:** A sticky bar below the hero banner lets visitors search by name and
filter by category, and sort by price (low→high, high→low) or default order.

**Expected Outcomes:**
- Bar appears between hero banner and the first filter-strip.
- Elements: search input (🔍 placeholder "Search products…"), category pills
  (All · Flowers · Toys), sort dropdown (Default · Price: Low to High · Price: High to Low).
- Typing filters cards in real-time (no page reload).
- Category pills highlight active selection with `--ink-900` background.
- "N results" count updates live.
- Clearing search / selecting "All" restores full catalog.
- Both section containers re-render with only matching products;
  if a section has 0 results its entire block (filter-strip + grid) is hidden.

**Relevant context:** `renderCatalog()` in `catalog.js:139`. Filter state is
in-memory only — not persisted to localStorage.

**Status:** [ ] pending

---

### Sub-Task 4 — Scroll fade-in animations

**Intent:** Product cards and section headers animate in as they enter the
viewport — a subtle upward fade — giving the page a premium editorial feel.

**Expected Outcomes:**
- Cards start `opacity: 0; transform: translateY(20px)` and transition to
  `opacity: 1; transform: translateY(0)` when they enter the viewport.
- Uses `IntersectionObserver` (no library, no jQuery).
- Staggered delay: cards in the same row animate 0ms / 80ms / 160ms apart.
- Section filter-strips also fade in from the left.
- Animation plays once per element (observer disconnects after trigger).
- No animation if `prefers-reduced-motion` is set.

**Relevant context:** CSS in `styles.css`, card HTML in `buildCardHTML` in
`catalog.js:100`. Observer wired in `DOMContentLoaded` in `catalog.js:590`.

**Status:** [ ] pending

---

### Sub-Task 5 — Image zoom on hover

**Intent:** When the user hovers over the active card image, a magnifier circle
follows the cursor showing a 2× zoomed portion of the image — like luxury
e-commerce sites (Farfetch, Net-a-Porter).

**Expected Outcomes:**
- A circular magnifier lens (180px diameter) appears on `mousemove` over the
  `.product-card__image-wrap`, follows the cursor.
- Magnifier shows the hovered region at 2.5× zoom using a `background-image`
  + `background-position` technique (no canvas needed).
- Magnifier hides on `mouseleave` and is never shown in Edit Mode.
- Only active on screens ≥ 900px (desktop only — not on touch).
- Magnifier has a thin white ring border + subtle drop-shadow.

**Relevant context:** `.product-card__image-wrap` in `styles.css:243`.
Image zoom must work alongside the slideshow (uses the currently active slide's src).

**Status:** [ ] pending

---

## Implementation Notes

- `file` (string) → `files` (array) migration: `loadProducts()` must handle
  old localStorage data that still has `file` — convert on read.
- WhatsApp button appears in both Quick View modal (Sub-Task 2) AND as a small
  icon on each card footer (Sub-Task 2).
- All new CSS goes into `styles.css`; all new JS into `catalog.js`.
- No new files or external libraries beyond what is already loaded.
