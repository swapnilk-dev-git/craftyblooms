# design.md — Visual Design Specification
## Handmade Pipe Cleaner (Chenille Stem) Product Catalog

**Companion to:** `plan.md`
**Version:** 0.2 (DRAFT — awaiting approval per `plan.md` §7)
**Design reference:** https://afzaai.in/collections/single-pipe-cleaner-flowers
**Reference evidence:** annotated screenshot of the collection grid + site copy/markup

> `⚠ VERIFY` = estimated from a screenshot, NOT read from the stylesheet.
> Confirm with DevTools / colour-picker before locking.

---

## 1. Design Intent

Translate the reference site's **collection-grid experience into print**.
The brand's own mission is to "enhance the ordinary… preserving your flowers into
jewellery, keepsakes and offering DIY kits… designed for gifting, creativity and
mindful living" — and the tagline under the wordmark is literally
*"enhancing the ordinary."*

So the catalog must read **calm, gift-worthy, handmade-premium** — with one loud
exception: **price/discount is allowed to shout.** The reference does exactly
this: an otherwise near-monochrome, whitespace-heavy page punctuated by bright
red discount pills.

**Keywords:** airy · white · soft-neutral photography · one hot accent · giftable
**Anti-goals:** no dark page backgrounds, no drop shadows, no gradients, no more
than 2 type families, no decorative borders around images, no clip-art.

---

## 2. Reference Teardown (what we copy, literally)

### 2.1 Header
| Element | Observed | Print translation |
|---|---|---|
| Wordmark | lowercase bold `afzaai`, black, left-aligned | Same position on cover + running header |
| Tagline | tiny letterspaced caps `enhancing the ordinary` under wordmark | Keep — cover + back cover only |
| Nav | 6 items, Title Case: Pipe Cleaner Supplies · Ready Bouquets · DIY Flower Kits · Desk Decor · Events · Contact | Becomes the **6 catalog sections** + TOC |
| Active state | current section in **red** | Running footer highlights current section in red |
| Right icons | search · account · cart | Replaced in print by page number + QR |
| Divider | 1px hairline under header | 0.5 pt rule, `--rule` |

### 2.2 Utility bar (above the grid)
`Filter: Price ▾  Availability ▾  Category ▾` on the left,
`Sort by: Best selling ▾` and `5 products` on the right.
Facets confirmed in markup: **Price** (max Rs. 999.00), **Availability**
(In stock / Out of stock), **Category** (Artificial Flora, Arts & Crafts,
Craft Pipe Cleaners, Dried Flowers) [2].

**Print translation:** each section opens with a "filter bar" strip —
`Section name` left; `N products · from ₹X` right. Small caps, hairline above
and below. This gives the catalog the same scannable rhythm.

### 2.3 Product card (the core unit)
Observed stack, top to bottom:
1. Square image, flush, negligible corner radius, **no border**
2. **Red pill badge, bottom-left, INSIDE the image**, white uppercase text: `40% OFF`
3. Product name, 1–2 lines, Title Case, near-black
4. Price row: struck grey `Rs. 499.00` then bold black `Rs. 299.00`
5. Full-width **outlined** button: `Choose options` (variants) or `Add to cart` (single)

Cards with no discount show **no badge** (e.g. *Grande Rose | DIY Kit* shows a
badge, while some items show price only). Sold-out items carry an
**`Out of Stock`** label [1][2].

### 2.4 Product page blocks (for feature pages)
Reference product pages use: a **media gallery** (`1 / of 2`), a bullet spec list
(`Material: Thin wire covered soft fibre and cotton`, `Color: Yellow`,
`Dimensions: 30 cms long & 8 mm wide`, `Best to use for:`), then **Backstory**,
then **Handle With Care** [3]. Also present: trust strip —
*Women-run Business · Customise Your Own · Quality Guaranteed · Partial COD
Available* [1], and *All Material Included · Detailed Tutorial · Beginner
Friendly* on kits [1].

**We reuse these exact block names.** Do not invent new ones.

---

## 3. Colour Palette

### 3.1 Tokens
| Token | Hex | Role |
|---|---|---|
| `--bg-page` | `#FFFFFF` | page base ⚠ VERIFY |
| `--bg-soft` | `#F7F5F2` | section dividers, filter strip ⚠ VERIFY |
| `--ink-900` | `#1A1A1A` | headings, product name, sale price ⚠ VERIFY |
| `--ink-600` | `#4A4A4A` | body copy, nav inactive ⚠ VERIFY |
| `--ink-400` | `#8A8A8A` | struck price, SKU, meta ⚠ VERIFY |
| `--rule` | `#DCDCDC` | hairlines, button outline ⚠ VERIFY |
| `--accent-red` | `#C8102E` | discount pill, active nav, section marker ⚠ VERIFY |
| `--oos` | `#6E6E6E` | "Out of Stock" label |

**Ratio discipline:** ≥ 90 % white/neutral, ≤ 10 % red. Red appears **only** in
discount pills, the active-section marker, and one CTA per page. Nowhere else.

### 3.2 Photography palette (this is where the colour lives)
The reference photographs against soft neutrals — warm grey, cream, off-white
linen, plus a pale gingham prop. Colour comes from the **flowers**, never the layout.

**Shoot rules:**
- Backgrounds: warm grey / cream / off-white only. One per section, max two overall.
- Props allowed: linen fold, plain envelope, ring, kraft tag, a hand holding the stem
- Hand-held shots are on-brand — use for scale (see the tulip and rose cards)
- Never: patterned tablecloths, coloured card stock, mixed props in one grid

### 3.3 Colour naming in copy
The brand names colours plainly — e.g. *"Color Used: Mustard Yellow & Stem
Green"*. Use that voice: `Mustard Yellow`, `Stem Green`, `Soft Pink`. Never hex
codes, never vendor codes in customer-facing text.

### 3.4 Section accent tints (optional, dividers only, 6–10 % tint)
Single Flowers `#F7E7EA` · Ready Bouquets `#EFE9F5` · DIY Kits `#E9F1EA` ·
Desk Decor `#FDF3E2` · Supplies `#EAF0F5` · Workshops `#F3EFE9`
Never behind a product card — cards always sit on pure white.

---

## 4. Typography

The reference uses a single **geometric / rounded humanist sans** throughout —
no serif anywhere. Candidates: Poppins, Jost, Questrial, Museo Sans `⚠ VERIFY`.

**Decision: one sans family only, weights 400 / 500 / 700.**
This deviates from the earlier "display serif + sans" idea because the reference
is monotype. Fidelity wins.

| Role | Size (A4) | Weight | Tracking | Case |
|---|---|---|---|---|
| Cover wordmark | 54 pt | 700 | −1 % | **lowercase** |
| Cover tagline | 8 pt | 400 | +18 % | lowercase |
| Section title | 26 pt | 500 | 0 | Title Case |
| Filter-strip label | 8 pt | 500 | +8 % | UPPERCASE |
| Product name | 11.5 pt / 15 pt lead | 500 | 0 | Title Case |
| Sale price | 12 pt | 700 | 0 | — |
| Struck price | 10 pt | 400 | 0 | strikethrough, `--ink-400` |
| Badge | 7 pt | 700 | +6 % | UPPERCASE |
| Bullet specs | 9 pt / 13 pt | 400 | 0 | Sentence |