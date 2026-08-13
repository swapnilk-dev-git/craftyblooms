# Crafty Blooms — v3 Plan: Cart, WhatsApp Orders & Admin Dashboard

## Top-Level Overview

Three major upgrades to the existing plain HTML/CSS/JS catalog.

**Confirmed decisions:**
- Per-card WhatsApp button REMOVED — all orders go through the cart (cleaner UX).
- Admin PIN: simple hardcoded PIN in `admin.js` (no backend, same device/browser).
- Before opening WhatsApp, show a mini-form (Name + optional note) so the WA message includes the customer's name.

Three upgrades:

1. **Fix live-site deployment issue** — verify the CSS fix for `qv-playpause` actually went live; diagnose and re-push if needed.
2. **Shopping Cart + WhatsApp Multi-Item Order** — persistent cart drawer, quantity controls, order summary, formatted WhatsApp message with all items.
3. **Admin Order Dashboard** — separate `admin.html` page, password-protected, receives and tracks orders, accept/reject per order, persisted in `localStorage` (or optionally a free Airtable/Supabase backend).

Reference sites studied: happinesshandmadegifts.in, theindiacrafthouse.com, zwende.com

---

## Sub-Tasks

---

### Sub-Task 1 — Fix & Verify Live Site Deployment
**Status:** [ ] pending

**Intent:** The `qv-playpause` CSS fix was committed and push output showed `5ec8fef..9f8234a craftyblooms-deploy -> main`, but the user cannot see it live. Likely cause: GitHub Pages cache, browser cache, or the push actually targeted a wrong branch/ref.

**Expected Outcomes:**
- Live site at https://swapnilk-dev-git.github.io/craftyblooms reflects latest `styles.css` with `.qv-playpause` rule.
- Play/pause button visible in Quick View modal when product has multiple images.
- WhatsApp single-item link from Quick View opens a pre-filled chat correctly.

**Todo List:**
1. Run `git log --oneline -5` to confirm the fix commit is on BOB `main`.
2. Run `git remote get-url craftyblooms` to confirm the remote is `https://github.com/swapnilk-dev-git/craftyblooms.git`.
3. Re-run subtree split + force push to craftyblooms `main`.
4. Verify locally by opening `Website/index.html` in browser (file://) and confirming the ⏸ button appears in Quick View.
5. Add a cache-bust comment to `styles.css` (`/* v3 */`) so GitHub Pages serves fresh CSS.

**Relevant Context:**
- Push command: `git subtree split --prefix=Website -b craftyblooms-deploy && git push craftyblooms craftyblooms-deploy:main --force && git branch -D craftyblooms-deploy`
- GitHub Pages serves from `craftyblooms` repo `main` branch root.

---

### Sub-Task 2 — Shopping Cart Drawer
**Status:** [ ] pending

**Intent:** Allow users to add multiple products to a cart before placing a single WhatsApp order. Replaces the per-product "Order on WhatsApp" with "Add to Cart" + a floating cart icon in the header that opens a slide-in drawer.

**Expected Outcomes:**
- Every product card has an **"Add to Cart"** button (replaces "Choose options" / CTA button).
- Quick View modal has an **"Add to Cart"** button alongside (or replacing) the per-product WhatsApp button.
- Floating cart icon (top-right header) shows a red badge with item count.
- Cart drawer slides in from the right with: product thumbnail, name, quantity stepper (−/+), unit price, line total, remove (×) button.
- Cart footer shows: subtotal, "Clear Cart" link, **"Order via WhatsApp"** primary button.
- Cart persists in `localStorage` key `craftyblooms_cart_v1`.
- Adding the same product twice increments quantity (does not duplicate).

**Todo List:**
1. Add cart state (`cart = []`) and helpers (`addToCart`, `removeFromCart`, `updateQty`, `getCartCount`, `getCartSubtotal`, `saveCart`, `loadCart`) to `catalog.js`.
2. Add cart drawer HTML to `index.html` (slide-in panel, overlay).
3. Style cart drawer in `styles.css` (right-side slide, item row, stepper, totals, WA button).
4. Replace CTA button in `buildCardHTML` with "Add to Cart" button; keep the small WA mini-button for direct single-item order.
5. Add "Add to Cart" button inside Quick View modal details panel.
6. Add floating cart icon to header `header-right` div with badge counter.
7. Wire `openCart` / `closeCart` functions; render cart items dynamically on open.
8. Build the WhatsApp order message: multi-line format listing each item (name, qty, price), subtotal, and a closing request line.
9. Persist cart on every mutation; load cart on `DOMContentLoaded`.

**Relevant Context:**
- `buildCardHTML` is in `catalog.js` line 132 — modify the CTA button HTML there.
- `openQuickView` is at line 354 — add "Add to Cart" button in the `qv-details` HTML.
- Header right div is in `index.html` line 39 — add cart icon there.
- WhatsApp number: `917030261766`.
- WA message format example:
  ```
  Hi! I'd like to order from Crafty Blooms:

  1. Rose Bouquet (SKU: FL-001) × 2 — ₹498
  2. Bunny Toy (SKU: TY-003) × 1 — ₹249

  Total: ₹747

  Please confirm availability and share payment details. Thank you!
  ```

---

### Sub-Task 3 — Admin Order Dashboard (`admin.html`)
**Status:** [ ] pending

**Intent:** A separate page where the admin (shop owner) can see all orders placed via WhatsApp link, mark them accepted/rejected, add notes, and track status. Since there is no backend, orders are stored in `localStorage` — but the WhatsApp flow means the admin manually enters/confirms orders after receiving the WhatsApp message. Orders can also be auto-logged if the customer clicks the WA button (we inject an order record into `localStorage` at click time).

**Expected Outcomes:**
- `Website/admin.html` exists as a standalone page.
- Password gate: simple PIN (hardcoded `1234` — owner can change in JS). Shows a lock screen first.
- Order list view: table/card list showing Order ID, date/time, customer message snippet, items, total, status badge (Pending / Accepted / Rejected).
- Per-order actions: Accept (green), Reject (red), Add Note (text input), Delete.
- Stats row at top: total orders, pending count, accepted count, total revenue (accepted orders).
- Orders auto-logged when customer clicks "Order via WhatsApp" — a record is written to `localStorage` key `craftyblooms_orders_v1` with a unique order ID, timestamp, cart snapshot, and status `"pending"`.
- Admin page reads the same `localStorage` key, renders orders, lets admin update status.
- "Clear All" button (with confirmation) to wipe old orders.
- Print / export orders as CSV button.
- Link in `index.html` footer: "Admin" small link (hidden, low-profile).

**Todo List:**
1. Create `Website/admin.html` with full structure: PIN lock screen + dashboard view.
2. Create `Website/admin.css` for dashboard styles (clean table layout, status badge colours, stat cards).
3. Create `Website/admin.js` with: PIN auth, `loadOrders`, `saveOrders`, `renderOrders`, `acceptOrder`, `rejectOrder`, `addNote`, `deleteOrder`, `exportCSV`.
4. In `catalog.js`, on WhatsApp order button click, write an order record to `localStorage` before opening the WA link.
5. Order record schema:
   ```json
   {
     "id": "ORD-20250601-001",
     "timestamp": "2025-06-01T14:32:00Z",
     "items": [{ "id": "FL-001", "name": "Rose Bouquet", "price": 249, "qty": 2 }],
     "subtotal": 498,
     "status": "pending",
     "note": ""
   }
   ```
6. Add subtle "Admin ↗" link in site footer (small, muted colour).
7. Style: use same CSS tokens (Jost font, `--red`, `--ink-*`) for visual consistency.

**Relevant Context:**
- `localStorage` is already used for products (`craftyblooms_products_v2`) and cart (`craftyblooms_cart_v1`).
- Admin page is a separate file — no shared JS module system, so admin.js is standalone.
- PIN auth: just `localStorage.setItem('cb_admin_auth', '1')` on success; check on page load.

---

### Sub-Task 4 — UI Polish & Mobile Responsiveness Pass
**Status:** [ ] pending

**Intent:** After cart and admin are built, do a polish pass: ensure cart drawer works on mobile, admin table is responsive, and the overall site feels premium like zwende.com / theindiacrafthouse.com.

**Expected Outcomes:**
- Cart drawer is full-width on mobile (<600px), slides in smoothly.
- Admin order table collapses to card layout on mobile.
- Product cards show "Added ✓" flash feedback when item is added to cart.
- Cart icon badge animates (bounce/pulse) on add.
- Empty cart state shows an illustration/message ("Your cart is empty — start browsing!").
- Sticky "View Cart (N items)" bar appears at bottom of screen when cart has items (mobile only).

**Todo List:**
1. Add mobile media queries for cart drawer to `styles.css`.
2. Add `@media` block to `admin.css` for card layout on small screens.
3. Add "added" flash animation (CSS keyframe) on cart button click.
4. Add badge bounce animation to cart icon.
5. Add empty cart illustration (SVG inline) + message.
6. Add sticky mobile cart bar (fixed bottom, shows count + "View Cart" + total).

**Relevant Context:**
- Existing mobile breakpoints in `styles.css` use `@media (max-width: 860px)` and `@media (max-width: 600px)`.
- Keep consistent with existing `--ease: 0.16s ease` transition token.

---

### Sub-Task 5 — Final Deployment & Testing
**Status:** [ ] pending

**Intent:** Push all new files (`admin.html`, `admin.css`, `admin.js`, updated `index.html`, `styles.css`, `catalog.js`) to the live GitHub Pages site and verify everything works end-to-end.

**Expected Outcomes:**
- Live site has working cart, WhatsApp multi-item order, admin dashboard.
- `git log --oneline` shows a clean commit history.
- No console errors on live site.

**Todo List:**
1. Commit all changed files with message: `feat: cart drawer, WhatsApp multi-order, admin dashboard`.
2. Run subtree split + force push to `craftyblooms` repo.
3. Verify live site: add 2 items to cart, click Order via WhatsApp — confirm WA message format.
4. Visit `/admin.html` on live site, enter PIN, confirm orders appear.
5. Test on mobile viewport (Chrome DevTools).

---

## Architecture Overview

```
Website/
├── index.html       ← Catalog + Cart Drawer (updated)
├── styles.css       ← All catalog + cart styles (updated)
├── catalog.js       ← Products + Cart state + Order logging (updated)
├── admin.html       ← NEW: Admin order dashboard
├── admin.css        ← NEW: Admin styles
├── admin.js         ← NEW: Admin logic (PIN, order CRUD, CSV export)
└── Images/          ← Product images (unchanged)
```

## Data Flow

Customer Journey:
  Browse catalog → Add to Cart → Cart Drawer → Order via WhatsApp
       ↓ (localStorage write: craftyblooms_orders_v1)
  WA message sent to +91-7030261766

Admin Journey:
  Open /admin.html → Enter PIN → See order list → Accept / Reject / Note

## Key Design Decisions

- **No backend required** — all state in `localStorage`. Works on GitHub Pages (static hosting).
- **Order logging on WA click** — the order is written to localStorage the moment the customer clicks "Order via WhatsApp". This means admin sees all *intended* orders, not just completed ones.
- **PIN = 1234** (hardcoded, changeable in `admin.js`). Not cryptographically secure — suitable for a small personal shop.
- **Cart persists across sessions** — `localStorage` key `craftyblooms_cart_v1`.
- **Same file:// compatibility** — no fetch/API calls; works by double-clicking `index.html`.
