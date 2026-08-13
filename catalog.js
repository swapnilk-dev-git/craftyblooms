/* ============================================================
   Crafty Blooms — Catalog JS  v3
   Handcrafted with Love | +91-7030261766 | @craftyblooms
   ============================================================ */

// ── 1. DEFAULT PRODUCT DATA ───────────────────────────────────
const DEFAULT_PRODUCTS = [
  // ── FLOWERS (27) ──
  { id:'FL-001', files:['Images/Flower.jpeg'],       name:'Pearl Bloom Pot',          category:'flowers', price:349, mrp:499, description:'Handcrafted chenille bloom in a decorative green pot with pearl accents.', featured:true,  cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-002', files:['Images/Flower (1).jpeg'],   name:'Tulip Bouquet in Vase',    category:'flowers', price:449, mrp:649, description:'Vibrant pink & purple tulip bouquet in a ceramic white vase.',            featured:true,  cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-003', files:['Images/Flower (2).jpeg'],   name:'Chenille Stem Flowers',    category:'flowers', price:249, mrp:399, description:'Delicate handcrafted chenille stem flowers for gifting or décor.',        featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-004', files:['Images/Flower (3).jpeg'],   name:'Pastel Bloom Arrangement', category:'flowers', price:299, mrp:449, description:'Soft pastel chenille blooms arranged beautifully for home décor.',        featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-005', files:['Images/Flower (4).jpeg'],   name:'Handmade Flower Bunch',    category:'flowers', price:249, mrp:399, description:'A cheerful bunch of handmade chenille flowers, perfect for gifting.',    featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-006', files:['Images/Flower (5).jpeg'],   name:'Mini Floral Display',      category:'flowers', price:199, mrp:299, description:'Tiny handcrafted floral display with vivid chenille petals.',            featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-007', files:['Images/Flower (6).jpeg'],   name:'Stem Flower Trio',         category:'flowers', price:299, mrp:449, description:'Three elegant chenille stem flowers for vase or gifting.',              featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-008', files:['Images/Flower (7).jpeg'],   name:'Bloom Bouquet',            category:'flowers', price:349, mrp:499, description:'Rich bouquet of handmade chenille blooms in warm tones.',                featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-009', files:['Images/Flower (8).jpeg'],   name:'Delicate Rose Stem',       category:'flowers', price:249, mrp:399, description:'A single elegant chenille rose stem — timeless and handcrafted.',        featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-010', files:['Images/Flower (9).jpeg'],   name:'Colourful Petal Bunch',    category:'flowers', price:299, mrp:449, description:'Bright multi-colour chenille petal bunch for festive occasions.',        featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-011', files:['Images/Flower (10).jpeg'],  name:'Lavender Lily Stems',      category:'flowers', price:299, mrp:449, description:'Graceful lavender lily stems crafted with soft chenille.',               featured:true,  cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-012', files:['Images/Flower (11).jpeg'],  name:'Spring Flower Set',        category:'flowers', price:349, mrp:499, description:'A full spring-inspired set of handcrafted chenille flowers.',            featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-013', files:['Images/Flower (12).jpeg'],  name:'Peach Blossom Stem',       category:'flowers', price:249, mrp:399, description:'Soft peach blossom stem — ideal for desk or gifting.',                  featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-014', files:['Images/Flower (13).jpeg'],  name:'Pink Dahlia Bunch',        category:'flowers', price:299, mrp:449, description:'Full pink dahlia bunch crafted from premium chenille stems.',            featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-015', files:['Images/Flower (14).jpeg'],  name:'White & Green Bloom',      category:'flowers', price:249, mrp:399, description:'Clean white and green chenille bloom for minimalist décor.',             featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-016', files:['Images/Flower (15).jpeg'],  name:'Sunflower Stem',           category:'flowers', price:299, mrp:449, description:'Cheerful handmade sunflower stem — brings warmth to any space.',        featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-017', files:['Images/Flower (16).jpeg'],  name:'Violet Bloom Cluster',     category:'flowers', price:349, mrp:499, description:'Violet and purple chenille blooms clustered beautifully.',              featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-018', files:['Images/Flower (17).jpeg'],  name:'Festive Floral Decor',     category:'flowers', price:399, mrp:599, description:'Premium festive floral arrangement — perfect for gifting.',             featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-019', files:['Images/Flower (18).jpeg'],  name:'Blush Rose Bouquet',       category:'flowers', price:449, mrp:649, description:'Romantic blush rose bouquet handcrafted with chenille stems.',          featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-020', files:['Images/Flower (19).jpeg'],  name:'Coral Flower Spray',       category:'flowers', price:299, mrp:449, description:'Lively coral flower spray — vibrant and long-lasting.',                 featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-021', files:['Images/Flower (20).jpeg'],  name:'Crimson Hibiscus Stem',    category:'flowers', price:349, mrp:499, description:'Deep crimson hibiscus stem with green leaves — striking and elegant.',  featured:true,  cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-022', files:['Images/Flower (21).jpeg'],  name:'Mixed Bloom Vase',         category:'flowers', price:499, mrp:749, description:'Gorgeous mixed chenille bloom arrangement set in a vase.',              featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-023', files:['Images/Flower (22).jpeg'],  name:'Yellow Petal Stem',        category:'flowers', price:249, mrp:399, description:'Bright yellow chenille petal stem — simple and cheerful.',              featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-024', files:['Images/Flower (23).jpeg'],  name:'Purple Bouquet',           category:'flowers', price:349, mrp:499, description:'Lush purple chenille bouquet for home or event décor.',                 featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-025', files:['Images/Flower (24).jpeg'],  name:'Fairy Garden Flowers',     category:'flowers', price:399, mrp:599, description:'Whimsical fairy garden flower set, handcrafted with love.',             featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-026', files:['Images/Flower (25).jpeg'],  name:'Magnolia Stem',            category:'flowers', price:299, mrp:449, description:'Soft magnolia stem in cream and pink chenille.',                        featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'FL-027', files:['Images/Flower (26).jpeg'],  name:'Garden Bloom Bundle',      category:'flowers', price:549, mrp:799, description:'Full garden bloom bundle — a premium gifting choice.',                  featured:false, cropX:null,cropY:null,cropW:null,cropH:null },

  // ── TOYS & ANIMALS (19) ──
  { id:'TY-001', files:['Images/Toys (1).jpeg'],     name:'Elephant Duo',             category:'toys', price:299, mrp:449, description:'Adorable brown & pink chenille elephants — a perfect pair.',          featured:true,  cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-002', files:['Images/Toys (2).jpeg'],     name:'Handmade Animal Figure',   category:'toys', price:199, mrp:299, description:'Cute handcrafted chenille animal figurine for kids and gifting.',     featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-003', files:['Images/Toys (3).jpeg'],     name:'Fluffy Creature',          category:'toys', price:199, mrp:299, description:'Soft fluffy chenille creature — handmade with care.',                  featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-004', files:['Images/Toys (4).jpeg'],     name:'Mini Animal Charm',        category:'toys', price:149, mrp:249, description:'Tiny chenille animal charm, great as a keychain or décor piece.',     featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-005', files:['Images/Toys (5).jpeg'],     name:'Playful Puppy',            category:'toys', price:249, mrp:399, description:'Playful chenille puppy figurine with lifelike detail.',               featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-006', files:['Images/Toys (6).jpeg'],     name:'Bunny Figurine',           category:'toys', price:249, mrp:399, description:'Handcrafted bunny figurine in soft pastel chenille.',                  featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-007', files:['Images/Toys (7).jpeg'],     name:'Woodland Animal Set',      category:'toys', price:399, mrp:599, description:'Set of woodland animals, all handcrafted from chenille stems.',       featured:true,  cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-008', files:['Images/Toys (8).jpeg'],     name:'Chick Pair',               category:'toys', price:199, mrp:299, description:'Sweet yellow chick pair with tiny beaks and feet.',                   featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-009', files:['Images/Toys (9).jpeg'],     name:'Colourful Bird',           category:'toys', price:249, mrp:399, description:'Bright handcrafted bird in vivid chenille colours.',                  featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-010', files:['Images/Toys (10).jpeg'],    name:'Baby Chick Duo',           category:'toys', price:199, mrp:299, description:'Two adorable baby chicks in bright yellow chenille.',                  featured:true,  cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-011', files:['Images/Toys (11).jpeg'],    name:'Fantasy Animal',           category:'toys', price:249, mrp:399, description:'Imaginative fantasy animal figurine — unique and handmade.',          featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-012', files:['Images/Toys (12).jpeg'],    name:'Cute Caterpillar',         category:'toys', price:199, mrp:299, description:'Colourful chenille caterpillar — a favourite with children.',          featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-013', files:['Images/Toys (13).jpeg'],    name:'Miniature Bear',           category:'toys', price:299, mrp:449, description:'Tiny handmade chenille bear with expressive features.',                featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-014', files:['Images/Toys (14).jpeg'],    name:'Rainbow Animal',           category:'toys', price:249, mrp:399, description:'Rainbow-coloured chenille animal — vibrant and joyful.',              featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-015', files:['Images/Toys (15).jpeg'],    name:'Fluffy Duckling',          category:'toys', price:199, mrp:299, description:'Soft and fluffy chenille duckling — sweet gift for all ages.',         featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-016', files:['Images/Toys (16).jpeg'],    name:'Whimsical Creature',       category:'toys', price:249, mrp:399, description:'One-of-a-kind whimsical chenille creature, fully handmade.',          featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-017', files:['Images/Toys (17).jpeg'],    name:'Animal Keychain',          category:'toys', price:149, mrp:249, description:'Adorable chenille animal keychain — perfect as a small gift.',         featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-018', files:['Images/Toys (18).jpeg'],    name:'Hedgehog Figurine',        category:'toys', price:249, mrp:399, description:'Charming hedgehog figurine crafted with precision and love.',          featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
  { id:'TY-019', files:['Images/Toys (19).jpeg'],    name:'Animal Friends Set',       category:'toys', price:499, mrp:749, description:'A delightful set of chenille animal friends — premium gifting.',       featured:false, cropX:null,cropY:null,cropW:null,cropH:null },
];

// ── 2. PRODUCTS DATA LAYER ────────────────────────────────────

const STORAGE_KEY = 'craftyblooms_products_v2';

function migrateProduct(p) {
  if (!p.files) p.files = p.file ? [p.file] : [];
  delete p.file;
  return p;
}

function loadProducts() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
    return JSON.parse(saved).map(migrateProduct);
  } catch (e) {
    return JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  }
}

function saveProducts(prods) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prods));
}

function resetProducts() {
  localStorage.removeItem(STORAGE_KEY);
  products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  activeFilter = 'all'; activeSearch = ''; activeSort = 'default';
  syncSearchUI();
  renderCatalog();
}

let products = loadProducts();

// ── 3. CART DATA LAYER ────────────────────────────────────────

const CART_KEY   = 'craftyblooms_cart_v1';
const ORDERS_KEY = 'craftyblooms_orders_v1';

function loadCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch(e) { return []; }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCartCount() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

function getCartSubtotal() {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function addToCart(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: p.id, name: p.name, price: p.price, thumb: heroFile(p), qty: 1 });
  }
  saveCart();
  updateCartBadge();
  flashCartBtn(productId);
  if (typeof showToast === 'function') showToast(`✓ Added to cart`);
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartItems();
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartBadge();
  renderCartItems();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartBadge();
  renderCartItems();
}

function updateCartBadge() {
  const count = getCartCount();
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
  // animate
  badge.classList.remove('cart-badge--pop');
  void badge.offsetWidth;
  if (count > 0) badge.classList.add('cart-badge--pop');
  // mobile bar
  updateMobileCartBar();
}

function updateMobileCartBar() {
  const bar   = document.getElementById('mobile-cart-bar');
  const label = document.getElementById('mobile-cart-label');
  if (!bar) return;
  const count = getCartCount();
  const sub   = getCartSubtotal();
  if (count > 0) {
    label.textContent = `View Cart (${count} item${count > 1 ? 's' : ''}) — ₹${sub}`;
    bar.style.display = 'flex';
  } else {
    bar.style.display = 'none';
  }
}

function flashCartBtn(productId) {
  const btn = document.querySelector(`.product-card__cta[data-id="${productId}"]`);
  if (!btn) return;
  btn.classList.add('cart-btn--added');
  btn.textContent = '✓ Added';
  setTimeout(() => {
    btn.classList.remove('cart-btn--added');
    btn.textContent = 'Add to Cart';
  }, 1400);
}

let cart = loadCart();

// ── 4. CART UI ────────────────────────────────────────────────

function openCart() {
  renderCartItems();
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-overlay').style.display = 'block';
  document.body.style.overflow = 'hidden';
  activeModal = 'cart';
}

function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-overlay').style.display = 'none';
  document.body.style.overflow = '';
  if (activeModal === 'cart') activeModal = null;
}

function renderCartItems() {
  const list    = document.getElementById('cart-items-list');
  const footer  = document.getElementById('cart-footer');
  const empty   = document.getElementById('cart-empty');
  const subtotalEl = document.getElementById('cart-subtotal');
  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML  = '';
    if (empty)  empty.style.display  = 'flex';
    if (footer) footer.style.display = 'none';
    return;
  }
  if (empty)  empty.style.display  = 'none';
  if (footer) footer.style.display = 'flex';

  list.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item__img">
        <img src="${item.thumb || PLACEHOLDER}" alt="${item.name}" onerror="this.src='${PLACEHOLDER}'">
      </div>
      <div class="cart-item__info">
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__sku">${item.id}</div>
        <div class="cart-item__price-row">
          <div class="cart-item__stepper">
            <button onclick="updateCartQty('${item.id}',-1)" aria-label="Decrease">−</button>
            <span>${item.qty}</span>
            <button onclick="updateCartQty('${item.id}',1)"  aria-label="Increase">+</button>
          </div>
          <span class="cart-item__line-total">₹${item.price * item.qty}</span>
        </div>
      </div>
      <button class="cart-item__remove" onclick="removeFromCart('${item.id}')" aria-label="Remove">✕</button>
    </div>`).join('');

  if (subtotalEl) subtotalEl.textContent = `₹${getCartSubtotal()}`;
}

// ── 5. ORDER CHECKOUT (name form → WA) ───────────────────────

const WA_NUMBER = '918951436242'; // TEST number — change to 917030261766 for production

function generateOrderId() {
  try {
    const orders  = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]');
    const today   = new Date();
    const datePart = today.getFullYear().toString()
                   + String(today.getMonth() + 1).padStart(2, '0')
                   + String(today.getDate()).padStart(2, '0');
    const prefix  = 'ORD-' + datePart + '-';
    const count   = orders.filter(o => o.id && o.id.startsWith(prefix)).length;
    return prefix + String(count + 1).padStart(3, '0');
  } catch(e) {
    return 'ORD-' + Date.now();
  }
}

function openOrderForm() {
  if (cart.length === 0) { showToast('Your cart is empty!'); return; }
  document.getElementById('order-name-input').value = '';
  document.getElementById('order-note-input').value  = '';

  // Populate cart summary in the modal
  const summaryEl = document.getElementById('order-cart-summary');
  if (summaryEl) {
    const rows = cart.map(item =>
      `<div class="ofc-row">
        <span class="ofc-row__name">${item.name} <span class="ofc-row__qty">× ${item.qty}</span></span>
        <span class="ofc-row__price">₹${item.price * item.qty}</span>
      </div>`
    ).join('');
    summaryEl.innerHTML = `
      <div class="ofc-title">Order Summary</div>
      ${rows}
      <div class="ofc-total">
        <span>Total</span>
        <span>₹${getCartSubtotal()}</span>
      </div>`;
  }

  document.getElementById('order-form-modal').style.display = 'flex';
  activeModal = 'order';
  setTimeout(() => document.getElementById('order-name-input').focus(), 80);
}

function closeOrderForm() {
  document.getElementById('order-form-modal').style.display = 'none';
  if (activeModal === 'order') activeModal = null;
}

function submitOrder() {
  const name = document.getElementById('order-name-input').value.trim();
  const note = document.getElementById('order-note-input').value.trim();
  if (!name) {
    const inp = document.getElementById('order-name-input');
    inp.focus();
    inp.style.borderColor = '#C8102E';
    setTimeout(() => { inp.style.borderColor = ''; }, 1800);
    return;
  }

  const orderId   = generateOrderId();
  const subtotal  = getCartSubtotal();
  const snapshot  = cart.map(i => ({ id: i.id, name: i.name, price: i.price, qty: i.qty }));

  // Build WA message — includes order ID so admin can match it
  const lines = snapshot.map((item, i) =>
    `${i + 1}. ${item.name} (${item.id}) \u00d7 ${item.qty} \u2014 \u20b9${item.price * item.qty}`
  );
  let msg = `Hi! I'm ${name}.\nOrder ID: *${orderId}*\n\nItems:\n`;
  msg += lines.join('\n');
  msg += `\n\nSubtotal: \u20b9${subtotal}`;
  if (note) msg += `\n\nNote: ${note}`;
  msg += `\n\nPlease confirm availability and share payment details. Thank you!`;

  // Log to localStorage BEFORE clearing cart (cart still populated here)
  logOrder(orderId, name, note, snapshot, subtotal);

  // Open WhatsApp
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');

  // Clear cart AFTER logging
  clearCart();
  closeOrderForm();
  closeCart();
  if (typeof showToast === 'function') showToast(`\u2713 Order ${orderId} placed!`);
}

function logOrder(orderId, customerName, note, itemsSnapshot, subtotal) {
  try {
    const orders = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]');
    orders.unshift({
      id: orderId,
      timestamp: new Date().toISOString(),
      customerName,
      items: itemsSnapshot,
      subtotal,
      note: note || '',
      adminNote: '',
      status: 'pending'
    });
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  } catch(e) { console.warn('Order logging failed:', e); }
}

// ── 6. STATE ─────────────────────────────────────────────────

let editMode     = false;
let activeModal  = null; // 'crop' | 'editor' | 'quickview' | 'cart' | 'order'
let activeFilter = 'all';
let activeSearch = '';
let activeSort   = 'default';

const slideshowTimers = {};

// ── 7. HELPERS ────────────────────────────────────────────────

function getDiscountPct(p) {
  if (!p.mrp || p.mrp <= p.price) return 0;
  return Math.round(((p.mrp - p.price) / p.mrp) * 100);
}

function heroFile(p) {
  return (p.files && p.files.length) ? p.files[0] : '';
}

function buildImageStyle(p) {
  if (p.cropX !== null && p.cropY !== null && p.cropW !== null && p.cropH !== null) {
    const posX = (p.cropX + p.cropW / 2).toFixed(1);
    const posY = (p.cropY + p.cropH / 2).toFixed(1);
    return `object-position:${posX}% ${posY}%;`;
  }
  return 'object-position:center center;';
}

const PLACEHOLDER = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><rect fill='%23f7f5f2' width='400' height='400'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%238a8a8a' font-size='14'>No Image</text></svg>`;

// ── 8. CARD HTML ──────────────────────────────────────────────

function buildCardHTML(p) {
  const disc     = getDiscountPct(p);
  const imgStyle = buildImageStyle(p);
  const files    = p.files && p.files.length ? p.files : [''];
  const multi    = files.length > 1;

  const imgSlides = files.map((src, i) => `
    <img class="card-slide${i === 0 ? ' card-slide--active' : ''}"
         src="${src || PLACEHOLDER}"
         alt="${p.name}${multi ? ' — view ' + (i+1) : ''}"
         style="${i === 0 ? imgStyle : ''}"
         loading="lazy"
         onerror="this.src='${PLACEHOLDER}'">`
  ).join('');

  const dots = multi ? `
    <div class="card-dots">
      ${files.map((_, i) => `<span class="card-dot${i === 0 ? ' card-dot--active' : ''}" data-idx="${i}"></span>`).join('')}
    </div>` : '';

  return `
    <article class="product-card card-fade-in${p.featured ? ' product-card--featured' : ''}"
             data-id="${p.id}"
             onclick="onCardClick(event, '${p.id}')">
      <div class="product-card__image-wrap"
           data-id="${p.id}"
           onmouseenter="startSlideshow('${p.id}')"
           onmouseleave="stopSlideshow('${p.id}')">
        ${imgSlides}
        ${disc > 0 ? `<span class="badge badge--discount">${disc}% OFF</span>` : ''}
        ${p.featured ? `<span class="badge badge--featured">★ Featured</span>` : ''}
        ${dots}
        ${editMode ? `
          <div class="card-edit-overlay">
            <button class="card-btn" onclick="event.stopPropagation();openCropModal('${p.id}')" title="Adjust Crop">✂ Crop</button>
            <button class="card-btn" onclick="event.stopPropagation();openProductEditor('${p.id}')" title="Edit Product">✏ Edit</button>
          </div>` : ''}
      </div>
      <div class="product-card__body">
        <h3 class="product-card__name">${p.name}</h3>
        ${p.description ? `<p class="product-card__desc">${p.description}</p>` : ''}
        <div class="product-card__pricing">
          ${p.mrp && p.mrp > p.price ? `<span class="product-card__mrp">₹${p.mrp}</span>` : ''}
          <span class="product-card__price">₹${p.price}</span>
        </div>
        <button class="product-card__cta" data-id="${p.id}"
                onclick="event.stopPropagation();addToCart('${p.id}')">
          Add to Cart
        </button>
        <div class="product-card__footer">
          <span class="product-card__sku">${p.id}</span>
          <button class="card-qv-btn" onclick="event.stopPropagation();openQuickView('${p.id}')" title="Quick View">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" width="13" height="13"><circle cx="10" cy="10" r="4"/><path d="M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z"/></svg>
            View
          </button>
        </div>
      </div>
    </article>`;
}

// ── 9. SLIDESHOW ──────────────────────────────────────────────

function startSlideshow(productId) {
  if (editMode) return;
  const p = products.find(x => x.id === productId);
  if (!p || !p.files || p.files.length < 2) return;

  const wrap = document.querySelector(`.product-card__image-wrap[data-id="${productId}"]`);
  if (!wrap) return;

  let idx = 0;
  function advance() {
    const slides = wrap.querySelectorAll('.card-slide');
    const dots   = wrap.querySelectorAll('.card-dot');
    slides[idx].classList.remove('card-slide--active');
    if (dots[idx]) dots[idx].classList.remove('card-dot--active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('card-slide--active');
    if (dots[idx]) dots[idx].classList.add('card-dot--active');
  }

  slideshowTimers[productId] = setInterval(advance, 1200);
}

function stopSlideshow(productId) {
  clearInterval(slideshowTimers[productId]);
  delete slideshowTimers[productId];

  const wrap = document.querySelector(`.product-card__image-wrap[data-id="${productId}"]`);
  if (!wrap) return;
  const slides = wrap.querySelectorAll('.card-slide');
  const dots   = wrap.querySelectorAll('.card-dot');
  slides.forEach((s, i) => s.classList.toggle('card-slide--active', i === 0));
  dots.forEach((d, i)   => d.classList.toggle('card-dot--active',   i === 0));
}

// ── 10. RENDER ────────────────────────────────────────────────

function getFilteredProducts() {
  let list = [...products];
  if (activeFilter !== 'all') list = list.filter(p => p.category === activeFilter);
  if (activeSearch.trim()) {
    const q = activeSearch.trim().toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q)
    );
  }
  if (activeSort === 'asc')  list.sort((a, b) => a.price - b.price);
  if (activeSort === 'desc') list.sort((a, b) => b.price - a.price);
  return list;
}

function renderCatalog() {
  const filtered  = getFilteredProducts();
  const flowers   = filtered.filter(p => p.category === 'flowers');
  const toys      = filtered.filter(p => p.category === 'toys');

  const flowerGrid    = document.getElementById('flowers-grid');
  const toysGrid      = document.getElementById('toys-grid');
  const flowerSection = document.getElementById('section-flowers');
  const toysSection   = document.getElementById('section-toys');

  flowerGrid.innerHTML = flowers.map(buildCardHTML).join('');
  toysGrid.innerHTML   = toys.map(buildCardHTML).join('');

  flowerSection.style.display = flowers.length ? '' : 'none';
  toysSection.style.display   = toys.length   ? '' : 'none';

  const flowerMin = flowers.length ? Math.min(...flowers.map(p => p.price)) : 0;
  const toysMin   = toys.length    ? Math.min(...toys.map(p => p.price))    : 0;
  document.getElementById('flowers-count').textContent = `${flowers.length} product${flowers.length !== 1 ? 's' : ''}`;
  document.getElementById('toys-count').textContent    = `${toys.length} product${toys.length !== 1 ? 's' : ''}`;
  document.getElementById('flowers-from').textContent  = flowers.length ? `from ₹${flowerMin}` : '';
  document.getElementById('toys-from').textContent     = toys.length    ? `from ₹${toysMin}`   : '';

  const totalShown = flowers.length + toys.length;
  const resultEl   = document.getElementById('search-results-count');
  if (resultEl) resultEl.textContent = (activeSearch || activeFilter !== 'all') ? `${totalShown} result${totalShown !== 1 ? 's' : ''}` : '';

  const editBtn = document.getElementById('edit-mode-btn');
  if (editBtn) {
    // Only show if admin is authed
    editBtn.style.display = isAdminAuthed() ? '' : 'none';
    editBtn.classList.toggle('active', editMode);
    editBtn.title = editMode ? 'Edit Mode (active)' : 'Edit Mode';
  }
  const addBtn = document.getElementById('add-product-btn');
  if (addBtn) addBtn.style.display = (isAdminAuthed() && editMode) ? 'flex' : 'none';

  initFadeIn();
}

// ── 11. EDIT MODE ─────────────────────────────────────────────

// ── AUTH GATE ─────────────────────────────────────────────────
// Edit mode only available after authenticating via admin.html
// (which sets localStorage key cb_admin_auth_v1 = '1').

const ADMIN_AUTH_KEY = 'cb_admin_auth_v1';

function isAdminAuthed() {
  return localStorage.getItem(ADMIN_AUTH_KEY) === '1';
}

function toggleEditMode() {
  if (!isAdminAuthed()) return; // no-op for regular visitors
  editMode = !editMode;
  document.body.classList.toggle('edit-mode-on', editMode);
  const exitBtn = document.getElementById('exit-edit-btn');
  if (exitBtn) exitBtn.style.display = editMode ? 'inline-flex' : 'none';
  renderCatalog();
}

function exitEditMode() {
  editMode = false;
  document.body.classList.remove('edit-mode-on');
  const exitBtn = document.getElementById('exit-edit-btn');
  if (exitBtn) exitBtn.style.display = 'none';
  renderCatalog();
}

// ── 12. SEARCH & FILTER ───────────────────────────────────────

function onSearchInput(e) {
  activeSearch = e.target.value;
  renderCatalog();
}

function setFilter(cat) {
  activeFilter = cat;
  document.querySelectorAll('.filter-pill').forEach(el => {
    el.classList.toggle('filter-pill--active', el.dataset.cat === cat);
  });
  renderCatalog();
}

function onSortChange(e) {
  activeSort = e.target.value;
  renderCatalog();
}

function syncSearchUI() {
  const inp = document.getElementById('search-input');
  if (inp) inp.value = activeSearch;
  document.querySelectorAll('.filter-pill').forEach(el => {
    el.classList.toggle('filter-pill--active', el.dataset.cat === activeFilter);
  });
  const sortEl = document.getElementById('sort-select');
  if (sortEl) sortEl.value = activeSort;
}

// ── 13. QUICK VIEW MODAL ──────────────────────────────────────

let qvProductId   = null;
let qvImageIndex  = 0;
let qvAutoTimer   = null;
const QV_INTERVAL = 2000;

function onCardClick(e, productId) {
  if (editMode) return;
  if (e.target.closest('a, button')) return;
  openQuickView(productId);
}

function openQuickView(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  qvProductId  = productId;
  qvImageIndex = 0;

  const disc  = getDiscountPct(p);
  const files = p.files && p.files.length ? p.files : [PLACEHOLDER];
  const multi = files.length > 1;

  const imgEl = document.getElementById('qv-img');
  imgEl.src = files[0] || PLACEHOLDER;
  imgEl.alt = p.name;

  document.getElementById('qv-thumbs').innerHTML = files.map((src, i) => `
    <button class="qv-thumb${i === 0 ? ' qv-thumb--active' : ''}"
            onclick="qvGoTo(${i});qvStopAuto()" type="button">
      <img src="${src || PLACEHOLDER}" alt="${p.name} view ${i+1}">
    </button>`).join('');

  document.getElementById('qv-counter').textContent = multi ? `1 / ${files.length}` : '';
  document.getElementById('qv-prev').style.display  = multi ? '' : 'none';
  document.getElementById('qv-next').style.display  = multi ? '' : 'none';

  const ppBtn = document.getElementById('qv-playpause');
  if (ppBtn) ppBtn.style.display = multi ? 'flex' : 'none';

  document.getElementById('qv-name').textContent = p.name;
  document.getElementById('qv-desc').textContent = p.description || '';
  document.getElementById('qv-sku').textContent  = p.id;
  document.getElementById('qv-cat').textContent  = p.category === 'flowers' ? 'Pipe Cleaner Flowers' : 'Toys & Animals';

  document.getElementById('qv-price-row').innerHTML = `
    ${p.mrp && p.mrp > p.price ? `<span class="qv-mrp">₹${p.mrp}</span>` : ''}
    <span class="qv-price">₹${p.price}</span>
    ${disc > 0 ? `<span class="badge badge--discount" style="position:static;font-size:10px;">${disc}% OFF</span>` : ''}`;

  document.getElementById('quickview-modal').style.display = 'flex';
  activeModal = 'quickview';
  document.body.style.overflow = 'hidden';

  qvStopAuto();
  if (multi) qvStartAuto();
}

function closeQuickView() {
  qvStopAuto();
  document.getElementById('quickview-modal').style.display = 'none';
  activeModal = null;
  document.body.style.overflow = '';
  qvProductId = null;
}

function qvStartAuto() {
  qvStopAuto();
  const ppBtn = document.getElementById('qv-playpause');
  if (ppBtn) { ppBtn.innerHTML = '⏸'; ppBtn.title = 'Pause'; }
  qvAutoTimer = setInterval(() => qvGoTo(qvImageIndex + 1), QV_INTERVAL);
}

function qvStopAuto() {
  if (qvAutoTimer) { clearInterval(qvAutoTimer); qvAutoTimer = null; }
  const ppBtn = document.getElementById('qv-playpause');
  if (ppBtn) { ppBtn.innerHTML = '▶'; ppBtn.title = 'Play'; }
}

function qvToggleAuto() {
  qvAutoTimer ? qvStopAuto() : qvStartAuto();
}

function qvGoTo(idx) {
  const p = products.find(x => x.id === qvProductId);
  if (!p) return;
  const files = p.files && p.files.length ? p.files : [PLACEHOLDER];
  qvImageIndex = (idx + files.length) % files.length;

  const img = document.getElementById('qv-img');
  img.classList.add('qv-img--fade');
  setTimeout(() => {
    img.src = files[qvImageIndex] || PLACEHOLDER;
    img.classList.remove('qv-img--fade');
  }, 140);

  document.getElementById('qv-counter').textContent = files.length > 1 ? `${qvImageIndex + 1} / ${files.length}` : '';
  document.querySelectorAll('.qv-thumb').forEach((el, i) => el.classList.toggle('qv-thumb--active', i === qvImageIndex));
}

function qvPrev() { qvStopAuto(); qvGoTo(qvImageIndex - 1); }
function qvNext() { qvStopAuto(); qvGoTo(qvImageIndex + 1); }

function qvAddToCart() {
  if (qvProductId) {
    addToCart(qvProductId);
    closeQuickView();
  }
}

// ── 14. SCROLL FADE-IN ────────────────────────────────────────

function initFadeIn() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('card-fade-in--visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.card-fade-in:not(.card-fade-in--visible)').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 80}ms`;
    obs.observe(el);
  });
}

// ── 15. IMAGE ZOOM ────────────────────────────────────────────

let magnifier = null;

function initMagnifier() {
  if (window.innerWidth < 900) return;

  magnifier = document.createElement('div');
  magnifier.id = 'img-magnifier';
  document.body.appendChild(magnifier);

  const main = document.getElementById('catalog-main');
  main.addEventListener('mousemove', onMagnifierMove);
  main.addEventListener('mouseleave', hideMagnifier);
}

function onMagnifierMove(e) {
  if (editMode || window.innerWidth < 900) return hideMagnifier();
  const wrap = e.target.closest('.product-card__image-wrap');
  if (!wrap) return hideMagnifier();

  const activeSlide = wrap.querySelector('.card-slide--active');
  if (!activeSlide || !activeSlide.src) return hideMagnifier();

  const rect   = wrap.getBoundingClientRect();
  const xPct   = ((e.clientX - rect.left) / rect.width)  * 100;
  const yPct   = ((e.clientY - rect.top)  / rect.height) * 100;
  const zoom   = 2.5;
  const lensW  = 160;
  const lensH  = 160;

  const lensX = e.clientX + 18;
  const lensY = e.clientY - lensH / 2;

  magnifier.style.cssText = `
    display:block;position:fixed;
    left:${Math.min(lensX, window.innerWidth - lensW - 8)}px;
    top:${Math.max(8, Math.min(lensY, window.innerHeight - lensH - 8))}px;
    width:${lensW}px;height:${lensH}px;border-radius:50%;
    border:2px solid rgba(255,255,255,0.9);
    box-shadow:0 4px 24px rgba(0,0,0,0.22);
    background-image:url('${activeSlide.src}');
    background-size:${zoom * 100}%;
    background-position:${xPct}% ${yPct}%;
    background-repeat:no-repeat;pointer-events:none;z-index:500;overflow:hidden;`;
}

function hideMagnifier() {
  if (magnifier) magnifier.style.display = 'none';
}

// ── 16. CROP MODAL ────────────────────────────────────────────

let cropProduct = null;
let cropBox     = { x:10, y:10, w:80, h:80 };
let isDragging  = false;
let isResizing  = false;
let resizeHandle= null;
let dragStartX  = 0;
let dragStartY  = 0;
let dragStartBox= {};

function openCropModal(productId) {
  cropProduct = products.find(p => p.id === productId);
  if (!cropProduct) return;

  cropBox = (cropProduct.cropX !== null)
    ? { x:cropProduct.cropX, y:cropProduct.cropY, w:cropProduct.cropW, h:cropProduct.cropH }
    : { x:10, y:10, w:80, h:80 };

  const modal = document.getElementById('crop-modal');
  const img   = document.getElementById('crop-img');
  img.src     = heroFile(cropProduct);
  img.onload  = () => updateCropOverlay();

  modal.style.display = 'flex';
  activeModal = 'crop';
  document.getElementById('crop-modal-title').textContent = `Crop: ${cropProduct.name}`;
}

function closeCropModal() {
  document.getElementById('crop-modal').style.display = 'none';
  activeModal = null;
  cropProduct = null;
}

function updateCropOverlay() {
  const o = document.getElementById('crop-overlay');
  o.style.left=cropBox.x+'%'; o.style.top=cropBox.y+'%';
  o.style.width=cropBox.w+'%'; o.style.height=cropBox.h+'%';
}

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

function getCropPos(e) {
  const c = document.getElementById('crop-container');
  const r = c.getBoundingClientRect();
  const cx = e.touches ? e.touches[0].clientX : e.clientX;
  const cy = e.touches ? e.touches[0].clientY : e.clientY;
  return { x: clamp(((cx-r.left)/r.width)*100,0,100), y: clamp(((cy-r.top)/r.height)*100,0,100) };
}

function onCropMouseDown(e) {
  if (e.target.classList.contains('crop-handle')) { isResizing=true; resizeHandle=e.target.dataset.handle; }
  else if (e.target.id==='crop-overlay') isDragging=true;
  else return;
  const pos=getCropPos(e); dragStartX=pos.x; dragStartY=pos.y; dragStartBox={...cropBox}; e.preventDefault();
}

function onCropMouseMove(e) {
  if (!isDragging && !isResizing) return;
  const pos=getCropPos(e); const dx=pos.x-dragStartX; const dy=pos.y-dragStartY;
  if (isDragging) { cropBox.x=clamp(dragStartBox.x+dx,0,100-cropBox.w); cropBox.y=clamp(dragStartBox.y+dy,0,100-cropBox.h); }
  else if (isResizing) {
    let {x,y,w,h}=dragStartBox;
    if(resizeHandle.includes('e')) w=clamp(w+dx,10,100-x);
    if(resizeHandle.includes('s')) h=clamp(h+dy,10,100-y);
    if(resizeHandle.includes('w')){const nx=clamp(x+dx,0,x+w-10);w=w-(nx-x);x=nx;}
    if(resizeHandle.includes('n')){const ny=clamp(y+dy,0,y+h-10);h=h-(ny-y);y=ny;}
    cropBox={x,y,w,h};
  }
  updateCropOverlay(); e.preventDefault();
}

function onCropMouseUp() { isDragging=false; isResizing=false; resizeHandle=null; }

function saveCrop() {
  if (!cropProduct) return;
  const p = products.find(p => p.id === cropProduct.id);
  if (p) {
    p.cropX=Math.round(cropBox.x*10)/10; p.cropY=Math.round(cropBox.y*10)/10;
    p.cropW=Math.round(cropBox.w*10)/10; p.cropH=Math.round(cropBox.h*10)/10;
    saveProducts(products); renderCatalog();
  }
  closeCropModal();
  if (typeof showToast==='function') showToast('✓ Crop saved');
}

function resetCrop() {
  if (!cropProduct) return;
  const p = products.find(p => p.id === cropProduct.id);
  if (p) { p.cropX=p.cropY=p.cropW=p.cropH=null; saveProducts(products); renderCatalog(); }
  cropBox={x:10,y:10,w:80,h:80}; updateCropOverlay(); closeCropModal();
}

function handleCropImageUpload(e) {
  const file=e.target.files[0]; if(!file||!cropProduct) return;
  const reader=new FileReader();
  reader.onload=(ev)=>{
    const p=products.find(p=>p.id===cropProduct.id);
    if(p){ p.files[0]=ev.target.result; p.cropX=p.cropY=p.cropW=p.cropH=null; saveProducts(products); document.getElementById('crop-img').src=p.files[0]; cropBox={x:10,y:10,w:80,h:80}; updateCropOverlay(); }
  };
  reader.readAsDataURL(file);
}

// ── 17. PRODUCT EDITOR DRAWER ─────────────────────────────────

let editingProductId = null;

function openProductEditor(productId) {
  const p = productId ? products.find(p => p.id === productId) : null;
  editingProductId = productId || null;
  window._pendingImageDataUrl = null;

  document.getElementById('editor-title').textContent    = p ? 'Edit Product' : 'Add New Product';
  document.getElementById('editor-id').value             = p ? p.id           : generateId(p ? p.category : 'flowers');
  document.getElementById('editor-name').value           = p ? p.name         : '';
  document.getElementById('editor-category').value       = p ? p.category     : 'flowers';
  document.getElementById('editor-price').value          = p ? p.price        : 249;
  document.getElementById('editor-mrp').value            = p ? (p.mrp||'')    : 399;
  document.getElementById('editor-desc').value           = p ? (p.description||'') : '';
  document.getElementById('editor-featured').checked     = p ? !!p.featured   : false;
  document.getElementById('editor-delete-btn').style.display = p ? 'inline-flex' : 'none';

  renderEditorImageList(p ? p.files : []);

  document.getElementById('editor-drawer').classList.add('open');
  activeModal = 'editor';
}

function renderEditorImageList(files) {
  const list = document.getElementById('editor-image-list');
  if (!list) return;
  list.innerHTML = (files||[]).map((src, i) => `
    <div class="editor-img-item" data-idx="${i}">
      <img src="${src||PLACEHOLDER}" alt="Image ${i+1}">
      <span class="editor-img-label">${i===0 ? 'Hero' : `#${i+1}`}</span>
      ${i>0 ? `<button class="editor-img-remove" onclick="removeEditorImage(${i})" type="button">✕</button>` : ''}
    </div>`).join('');
}

function removeEditorImage(idx) {
  const p = products.find(p => p.id === editingProductId);
  if (!p) return;
  p.files.splice(idx, 1);
  saveProducts(products);
  renderEditorImageList(p.files);
  renderCatalog();
}

function handleEditorMoreImages(e) {
  const fileList = Array.from(e.target.files);
  if (!fileList.length) return;
  let loaded = 0;
  fileList.forEach(file => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const p = editingProductId ? products.find(p => p.id === editingProductId) : null;
      if (p) {
        p.files.push(ev.target.result);
        loaded++;
        if (loaded === fileList.length) { saveProducts(products); renderEditorImageList(p.files); renderCatalog(); }
      } else {
        if (!window._pendingExtraImages) window._pendingExtraImages = [];
        window._pendingExtraImages.push(ev.target.result);
      }
    };
    reader.readAsDataURL(file);
  });
}

function handleEditorHeroUpload(e) {
  const file=e.target.files[0]; if(!file) return;
  const reader=new FileReader();
  reader.onload=(ev)=>{
    const p=editingProductId ? products.find(p=>p.id===editingProductId) : null;
    if(p){ if(!p.files) p.files=[]; p.files[0]=ev.target.result; saveProducts(products); renderEditorImageList(p.files); renderCatalog(); }
    else window._pendingImageDataUrl=ev.target.result;
  };
  reader.readAsDataURL(file);
}

function openNewProductForm() { openProductEditor(null); }

function closeProductEditor() {
  document.getElementById('editor-drawer').classList.remove('open');
  activeModal = null;
  editingProductId = null;
}

function generateId(category) {
  const cat=category||'flowers';
  const prefix=cat==='flowers'?'FL':'TY';
  const nums=products.filter(p=>p.category===cat).map(p=>parseInt(p.id.split('-')[1])||0);
  const next=(nums.length?Math.max(...nums):0)+1;
  return `${prefix}-${String(next).padStart(3,'0')}`;
}

function saveProductForm() {
  const id       = document.getElementById('editor-id').value.trim();
  const name     = document.getElementById('editor-name').value.trim();
  const category = document.getElementById('editor-category').value;
  const price    = parseInt(document.getElementById('editor-price').value)||0;
  const mrp      = parseInt(document.getElementById('editor-mrp').value)||0;
  const desc     = document.getElementById('editor-desc').value.trim();
  const featured = document.getElementById('editor-featured').checked;

  if (!name)  { alert('Please enter a product name.'); return; }
  if (!price) { alert('Please enter a price.'); return; }

  const existing = products.find(p => p.id === editingProductId);
  if (existing) {
    Object.assign(existing, { name, category, price, mrp, description:desc, featured });
  } else {
    const imgs = [window._pendingImageDataUrl, ...(window._pendingExtraImages||[])].filter(Boolean);
    window._pendingImageDataUrl = null;
    window._pendingExtraImages  = null;
    products.push({ id, files:imgs, name, category, price, mrp, description:desc, featured, cropX:null,cropY:null,cropW:null,cropH:null });
  }
  saveProducts(products);
  renderCatalog();
  closeProductEditor();
  if (typeof showToast==='function') showToast('✓ Product saved');
}

function deleteProduct(productId) {
  const p=products.find(p=>p.id===productId);
  if(!p) return;
  if(!confirm(`Delete "${p.name}"? This cannot be undone.`)) return;
  products=products.filter(p=>p.id!==productId);
  saveProducts(products); renderCatalog(); closeProductEditor();
  if(typeof showToast==='function') showToast('Product deleted');
}

// ── 18. PDF EXPORT ────────────────────────────────────────────

async function exportPDF() {
  const btn=document.getElementById('pdf-btn');
  btn.disabled=true; btn.textContent='⏳ Generating PDF…';
  const wasEditMode=editMode; editMode=false; renderCatalog();
  await sleep(200);
  try {
    const {jsPDF}=window.jspdf;
    const doc=new jsPDF({orientation:'portrait',unit:'mm',format:'a4'});
    const A4W=210,A4H=297;

    const cover=buildCoverElement();
    document.body.appendChild(cover); await sleep(100);
    const cc=await html2canvas(cover,{scale:2,useCORS:true,allowTaint:true,backgroundColor:'#ffffff'});
    document.body.removeChild(cover);
    doc.addImage(cc.toDataURL('image/jpeg',0.92),'JPEG',0,0,A4W,A4H);

    const sections=[
      {label:'Pipe Cleaner Flowers', items:products.filter(p=>p.category==='flowers')},
      {label:'Toys & Animals',       items:products.filter(p=>p.category==='toys')},
    ];
    for(const section of sections){
      doc.addPage();
      const div=buildSectionDividerElement(section.label,section.items.length);
      document.body.appendChild(div); await sleep(80);
      const dc=await html2canvas(div,{scale:2,useCORS:true,allowTaint:true,backgroundColor:'#ffffff'});
      document.body.removeChild(div);
      doc.addImage(dc.toDataURL('image/jpeg',0.92),'JPEG',0,0,A4W,A4H);

      for(const chunk of chunkArray(section.items,6)){
        doc.addPage();
        const gEl=buildGridPageElement(chunk,section.label);
        document.body.appendChild(gEl); await sleep(150);
        const gc=await html2canvas(gEl,{scale:2,useCORS:true,allowTaint:true,backgroundColor:'#ffffff'});
        document.body.removeChild(gEl);
        doc.addImage(gc.toDataURL('image/jpeg',0.92),'JPEG',0,0,A4W,A4H);
      }
    }

    doc.addPage();
    const back=buildBackCoverElement();
    document.body.appendChild(back); await sleep(100);
    const bc=await html2canvas(back,{scale:2,useCORS:true,allowTaint:true,backgroundColor:'#1a1a1a'});
    document.body.removeChild(back);
    doc.addImage(bc.toDataURL('image/jpeg',0.92),'JPEG',0,0,A4W,A4H);

    doc.save('CraftyBlooms_Catalog.pdf');
  } catch(err) {
    alert('PDF export failed.\n'+err.message); console.error(err);
  } finally {
    editMode=wasEditMode; renderCatalog();
    btn.disabled=false; btn.textContent='⬇ Catalog PDF';
  }
}

function sleep(ms){return new Promise(r=>setTimeout(r,ms));}
function chunkArray(arr,size){const out=[];for(let i=0;i<arr.length;i+=size)out.push(arr.slice(i,i+size));return out;}

function buildCoverElement(){
  const featured=products.filter(p=>p.featured).slice(0,4);
  const el=document.createElement('div');
  el.style.cssText=`position:fixed;left:-9999px;top:0;width:794px;height:1123px;background:#fff;font-family:'Jost',sans-serif;overflow:hidden;box-sizing:border-box;padding:60px 56px;`;
  el.innerHTML=`
    <div style="border-bottom:1px solid #dcdcdc;padding-bottom:20px;margin-bottom:32px;">
      <div style="font-size:44px;font-weight:700;letter-spacing:-1px;color:#1a1a1a;line-height:1;">crafty blooms</div>
      <div style="font-size:10px;font-weight:400;letter-spacing:3px;color:#8a8a8a;text-transform:uppercase;margin-top:6px;">handcrafted with love</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:32px;">
      ${featured.map(p=>`
        <div style="position:relative;aspect-ratio:1;overflow:hidden;background:#f7f5f2;">
          <img src="${heroFile(p)}" style="width:100%;height:100%;object-fit:cover;" crossorigin="anonymous">
          <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(26,26,26,0.55);padding:10px 12px;">
            <div style="color:#fff;font-size:12px;font-weight:500;">${p.name}</div>
            <div style="color:#fff;font-size:13px;font-weight:700;">₹${p.price}</div>
          </div>
        </div>`).join('')}
    </div>
    <div style="text-align:center;padding:24px 0;border-top:1px solid #dcdcdc;border-bottom:1px solid #dcdcdc;margin-bottom:32px;">
      <div style="font-size:13px;color:#4a4a4a;line-height:1.8;">Handmade Pipe Cleaner &amp; Chenille Stem Products<br>Flowers · Toys · Décor · Custom Orders Welcome</div>
    </div>
    <div style="display:flex;justify-content:center;gap:40px;">
      <div style="text-align:center;"><div style="font-size:9px;letter-spacing:2px;color:#8a8a8a;text-transform:uppercase;margin-bottom:4px;">WhatsApp</div><div style="font-size:13px;font-weight:500;color:#1a1a1a;">+91-7030261766</div></div>
      <div style="width:1px;background:#dcdcdc;"></div>
      <div style="text-align:center;"><div style="font-size:9px;letter-spacing:2px;color:#8a8a8a;text-transform:uppercase;margin-bottom:4px;">Instagram</div><div style="font-size:13px;font-weight:500;color:#1a1a1a;">@craftyblooms</div></div>
    </div>`;
  return el;
}

function buildSectionDividerElement(label,count){
  const el=document.createElement('div');
  el.style.cssText=`position:fixed;left:-9999px;top:0;width:794px;height:1123px;background:#f7f5f2;font-family:'Jost',sans-serif;overflow:hidden;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:center;`;
  el.innerHTML=`<div style="font-size:10px;letter-spacing:3px;color:#8a8a8a;text-transform:uppercase;margin-bottom:16px;">crafty blooms</div><div style="font-size:42px;font-weight:700;color:#1a1a1a;text-align:center;line-height:1.15;">${label}</div><div style="width:48px;height:2px;background:#c8102e;margin:20px auto;"></div><div style="font-size:13px;color:#4a4a4a;">${count} handcrafted products</div>`;
  return el;
}

function buildGridPageElement(items,sectionLabel){
  const el=document.createElement('div');
  el.style.cssText=`position:fixed;left:-9999px;top:0;width:794px;height:1123px;background:#fff;font-family:'Jost',sans-serif;overflow:hidden;box-sizing:border-box;padding:32px 36px;`;
  const cards=items.map(p=>{
    const disc=getDiscountPct(p);
    return `<div style="display:flex;flex-direction:column;background:#fff;border:1px solid #dcdcdc;">
      <div style="position:relative;width:100%;aspect-ratio:1;overflow:hidden;background:#f7f5f2;">
        <img src="${heroFile(p)}" style="width:100%;height:100%;object-fit:cover;object-position:center;" crossorigin="anonymous">
        ${disc>0?`<div style="position:absolute;bottom:8px;left:8px;background:#c8102e;color:#fff;font-size:9px;font-weight:700;letter-spacing:1px;padding:3px 7px;border-radius:2px;">${disc}% OFF</div>`:''}
      </div>
      <div style="padding:10px 10px 12px;">
        <div style="font-size:11px;font-weight:500;color:#1a1a1a;line-height:1.3;margin-bottom:4px;">${p.name}</div>
        <div style="display:flex;align-items:center;gap:6px;">
          ${p.mrp&&p.mrp>p.price?`<span style="font-size:9px;color:#8a8a8a;text-decoration:line-through;">₹${p.mrp}</span>`:''}
          <span style="font-size:12px;font-weight:700;color:#1a1a1a;">₹${p.price}</span>
        </div>
        <div style="font-size:8px;color:#8a8a8a;margin-top:3px;">${p.id}</div>
      </div>
    </div>`;
  }).join('');
  el.innerHTML=`
    <div style="border-bottom:1px solid #dcdcdc;padding-bottom:10px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:baseline;">
      <span style="font-size:9px;letter-spacing:2px;color:#8a8a8a;text-transform:uppercase;">crafty blooms — ${sectionLabel}</span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;">${cards}</div>
    <div style="border-top:1px solid #dcdcdc;margin-top:16px;padding-top:8px;text-align:center;font-size:8px;color:#8a8a8a;">+91-7030261766 · @craftyblooms · Handcrafted with Love</div>`;
  return el;
}

function buildBackCoverElement(){
  const el=document.createElement('div');
  el.style.cssText=`position:fixed;left:-9999px;top:0;width:794px;height:1123px;background:#1a1a1a;font-family:'Jost',sans-serif;overflow:hidden;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#fff;`;
  el.innerHTML=`<div style="font-size:42px;font-weight:700;letter-spacing:-1px;margin-bottom:8px;">crafty blooms</div><div style="font-size:10px;letter-spacing:4px;color:#8a8a8a;text-transform:uppercase;margin-bottom:48px;">handcrafted with love</div><div style="width:48px;height:2px;background:#c8102e;margin-bottom:48px;"></div><div style="display:flex;gap:60px;margin-bottom:48px;"><div style="text-align:center;"><div style="font-size:9px;letter-spacing:2px;color:#8a8a8a;text-transform:uppercase;margin-bottom:6px;">WhatsApp</div><div style="font-size:15px;font-weight:500;">+91-7030261766</div></div><div style="width:1px;background:#333;"></div><div style="text-align:center;"><div style="font-size:9px;letter-spacing:2px;color:#8a8a8a;text-transform:uppercase;margin-bottom:6px;">Instagram</div><div style="font-size:15px;font-weight:500;">@craftyblooms</div></div></div><div style="font-size:11px;color:#4a4a4a;text-align:center;line-height:2;max-width:360px;">Custom orders welcome · Bulk pricing available<br>Flowers · Toys · Décor · Gifting</div>`;
  return el;
}

// ── 19. EVENT WIRING ──────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Show edit button only for authed admin
  const editBtn = document.getElementById('edit-mode-btn');
  if (editBtn) editBtn.style.display = isAdminAuthed() ? '' : 'none';

  // Auto-enter edit mode when arriving from admin.html with ?edit=1
  if (isAdminAuthed() && new URLSearchParams(window.location.search).get('edit') === '1') {
    editMode = true;
    document.body.classList.add('edit-mode-on');
    const exitBtn = document.getElementById('exit-edit-btn');
    if (exitBtn) exitBtn.style.display = 'inline-flex';
    history.replaceState(null, '', window.location.pathname);
  }

  renderCatalog();
  initMagnifier();
  updateCartBadge();

  // Crop modal drag
  const container=document.getElementById('crop-container');
  if(container){
    container.addEventListener('mousedown',onCropMouseDown);
    container.addEventListener('mousemove',onCropMouseMove);
    container.addEventListener('mouseup',onCropMouseUp);
    container.addEventListener('mouseleave',onCropMouseUp);
    container.addEventListener('touchstart',onCropMouseDown,{passive:false});
    container.addEventListener('touchmove',onCropMouseMove,{passive:false});
    container.addEventListener('touchend',onCropMouseUp);
  }

  // Backdrop clicks
  document.getElementById('crop-modal').addEventListener('click', e => { if(e.target.id==='crop-modal') closeCropModal(); });
  document.getElementById('quickview-modal').addEventListener('click', e => { if(e.target.id==='quickview-modal') closeQuickView(); });
  document.getElementById('editor-overlay').addEventListener('click', closeProductEditor);
  document.getElementById('cart-overlay').addEventListener('click', closeCart);
  document.getElementById('order-form-modal').addEventListener('click', e => { if(e.target.id==='order-form-modal') closeOrderForm(); });

  // Keyboard nav
  document.addEventListener('keydown', e => {
    if(e.key==='Escape'){
      if(activeModal==='crop')      closeCropModal();
      if(activeModal==='editor')    closeProductEditor();
      if(activeModal==='quickview') closeQuickView();
      if(activeModal==='cart')      closeCart();
      if(activeModal==='order')     closeOrderForm();
    }
    if(activeModal==='quickview'){
      if(e.key==='ArrowLeft')  qvPrev();
      if(e.key==='ArrowRight') qvNext();
    }
  });

  // Order form — Enter key on name field
  const nameInput = document.getElementById('order-name-input');
  if (nameInput) nameInput.addEventListener('keydown', e => { if(e.key==='Enter') submitOrder(); });
});
