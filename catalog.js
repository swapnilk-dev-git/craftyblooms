/* ============================================================
   Crafty Blooms — Catalog JS
   Handcrafted with Love | +91-7030261766 | @craftyblooms
   ============================================================ */

// ── 1. DEFAULT PRODUCT DATA ───────────────────────────────────

const DEFAULT_PRODUCTS = [
  // ── FLOWERS (27) ──
  { id: 'FL-001', file: 'Images/Flower.jpeg',      name: 'Pearl Bloom Pot',           category: 'flowers', price: 349, mrp: 499, description: 'Handcrafted chenille bloom in a decorative green pot with pearl accents.', featured: true,  cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-002', file: 'Images/Flower (1).jpeg',  name: 'Tulip Bouquet in Vase',     category: 'flowers', price: 449, mrp: 649, description: 'Vibrant pink & purple tulip bouquet in a ceramic white vase.', featured: true,  cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-003', file: 'Images/Flower (2).jpeg',  name: 'Chenille Stem Flowers',     category: 'flowers', price: 249, mrp: 399, description: 'Delicate handcrafted chenille stem flowers for gifting or décor.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-004', file: 'Images/Flower (3).jpeg',  name: 'Pastel Bloom Arrangement',  category: 'flowers', price: 299, mrp: 449, description: 'Soft pastel chenille blooms arranged beautifully for home décor.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-005', file: 'Images/Flower (4).jpeg',  name: 'Handmade Flower Bunch',     category: 'flowers', price: 249, mrp: 399, description: 'A cheerful bunch of handmade chenille flowers, perfect for gifting.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-006', file: 'Images/Flower (5).jpeg',  name: 'Mini Floral Display',       category: 'flowers', price: 199, mrp: 299, description: 'Tiny handcrafted floral display with vivid chenille petals.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-007', file: 'Images/Flower (6).jpeg',  name: 'Stem Flower Trio',          category: 'flowers', price: 299, mrp: 449, description: 'Three elegant chenille stem flowers for vase or gifting.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-008', file: 'Images/Flower (7).jpeg',  name: 'Bloom Bouquet',             category: 'flowers', price: 349, mrp: 499, description: 'Rich bouquet of handmade chenille blooms in warm tones.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-009', file: 'Images/Flower (8).jpeg',  name: 'Delicate Rose Stem',        category: 'flowers', price: 249, mrp: 399, description: 'A single elegant chenille rose stem — timeless and handcrafted.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-010', file: 'Images/Flower (9).jpeg',  name: 'Colourful Petal Bunch',     category: 'flowers', price: 299, mrp: 449, description: 'Bright multi-colour chenille petal bunch for festive occasions.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-011', file: 'Images/Flower (10).jpeg', name: 'Lavender Lily Stems',       category: 'flowers', price: 299, mrp: 449, description: 'Graceful lavender lily stems crafted with soft chenille.', featured: true,  cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-012', file: 'Images/Flower (11).jpeg', name: 'Spring Flower Set',         category: 'flowers', price: 349, mrp: 499, description: 'A full spring-inspired set of handcrafted chenille flowers.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-013', file: 'Images/Flower (12).jpeg', name: 'Peach Blossom Stem',        category: 'flowers', price: 249, mrp: 399, description: 'Soft peach blossom stem — ideal for desk or gifting.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-014', file: 'Images/Flower (13).jpeg', name: 'Pink Dahlia Bunch',         category: 'flowers', price: 299, mrp: 449, description: 'Full pink dahlia bunch crafted from premium chenille stems.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-015', file: 'Images/Flower (14).jpeg', name: 'White & Green Bloom',       category: 'flowers', price: 249, mrp: 399, description: 'Clean white and green chenille bloom for minimalist décor.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-016', file: 'Images/Flower (15).jpeg', name: 'Sunflower Stem',            category: 'flowers', price: 299, mrp: 449, description: 'Cheerful handmade sunflower stem — brings warmth to any space.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-017', file: 'Images/Flower (16).jpeg', name: 'Violet Bloom Cluster',      category: 'flowers', price: 349, mrp: 499, description: 'Violet and purple chenille blooms clustered beautifully.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-018', file: 'Images/Flower (17).jpeg', name: 'Festive Floral Decor',      category: 'flowers', price: 399, mrp: 599, description: 'Premium festive floral arrangement — perfect for gifting.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-019', file: 'Images/Flower (18).jpeg', name: 'Blush Rose Bouquet',        category: 'flowers', price: 449, mrp: 649, description: 'Romantic blush rose bouquet handcrafted with chenille stems.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-020', file: 'Images/Flower (19).jpeg', name: 'Coral Flower Spray',        category: 'flowers', price: 299, mrp: 449, description: 'Lively coral flower spray — vibrant and long-lasting.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-021', file: 'Images/Flower (20).jpeg', name: 'Crimson Hibiscus Stem',     category: 'flowers', price: 349, mrp: 499, description: 'Deep crimson hibiscus stem with green leaves — striking and elegant.', featured: true,  cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-022', file: 'Images/Flower (21).jpeg', name: 'Mixed Bloom Vase',          category: 'flowers', price: 499, mrp: 749, description: 'Gorgeous mixed chenille bloom arrangement set in a vase.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-023', file: 'Images/Flower (22).jpeg', name: 'Yellow Petal Stem',         category: 'flowers', price: 249, mrp: 399, description: 'Bright yellow chenille petal stem — simple and cheerful.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-024', file: 'Images/Flower (23).jpeg', name: 'Purple Bouquet',            category: 'flowers', price: 349, mrp: 499, description: 'Lush purple chenille bouquet for home or event décor.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-025', file: 'Images/Flower (24).jpeg', name: 'Fairy Garden Flowers',      category: 'flowers', price: 399, mrp: 599, description: 'Whimsical fairy garden flower set, handcrafted with love.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-026', file: 'Images/Flower (25).jpeg', name: 'Magnolia Stem',             category: 'flowers', price: 299, mrp: 449, description: 'Soft magnolia stem in cream and pink chenille.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'FL-027', file: 'Images/Flower (26).jpeg', name: 'Garden Bloom Bundle',       category: 'flowers', price: 549, mrp: 799, description: 'Full garden bloom bundle — a premium gifting choice.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },

  // ── TOYS & ANIMALS (19) ──
  { id: 'TY-001', file: 'Images/Toys (1).jpeg',    name: 'Elephant Duo',              category: 'toys', price: 299, mrp: 449, description: 'Adorable brown & pink chenille elephants — a perfect pair.', featured: true,  cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-002', file: 'Images/Toys (2).jpeg',    name: 'Handmade Animal Figure',    category: 'toys', price: 199, mrp: 299, description: 'Cute handcrafted chenille animal figurine for kids and gifting.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-003', file: 'Images/Toys (3).jpeg',    name: 'Fluffy Creature',           category: 'toys', price: 199, mrp: 299, description: 'Soft fluffy chenille creature — handmade with care.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-004', file: 'Images/Toys (4).jpeg',    name: 'Mini Animal Charm',         category: 'toys', price: 149, mrp: 249, description: 'Tiny chenille animal charm, great as a keychain or décor piece.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-005', file: 'Images/Toys (5).jpeg',    name: 'Playful Puppy',             category: 'toys', price: 249, mrp: 399, description: 'Playful chenille puppy figurine with lifelike detail.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-006', file: 'Images/Toys (6).jpeg',    name: 'Bunny Figurine',            category: 'toys', price: 249, mrp: 399, description: 'Handcrafted bunny figurine in soft pastel chenille.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-007', file: 'Images/Toys (7).jpeg',    name: 'Woodland Animal Set',       category: 'toys', price: 399, mrp: 599, description: 'Set of woodland animals, all handcrafted from chenille stems.', featured: true,  cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-008', file: 'Images/Toys (8).jpeg',    name: 'Chick Pair',                category: 'toys', price: 199, mrp: 299, description: 'Sweet yellow chick pair with tiny beaks and feet.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-009', file: 'Images/Toys (9).jpeg',    name: 'Colourful Bird',            category: 'toys', price: 249, mrp: 399, description: 'Bright handcrafted bird in vivid chenille colours.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-010', file: 'Images/Toys (10).jpeg',   name: 'Baby Chick Duo',            category: 'toys', price: 199, mrp: 299, description: 'Two adorable baby chicks in bright yellow chenille.', featured: true,  cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-011', file: 'Images/Toys (11).jpeg',   name: 'Fantasy Animal',            category: 'toys', price: 249, mrp: 399, description: 'Imaginative fantasy animal figurine — unique and handmade.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-012', file: 'Images/Toys (12).jpeg',   name: 'Cute Caterpillar',          category: 'toys', price: 199, mrp: 299, description: 'Colourful chenille caterpillar — a favourite with children.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-013', file: 'Images/Toys (13).jpeg',   name: 'Miniature Bear',            category: 'toys', price: 299, mrp: 449, description: 'Tiny handmade chenille bear with expressive features.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-014', file: 'Images/Toys (14).jpeg',   name: 'Rainbow Animal',            category: 'toys', price: 249, mrp: 399, description: 'Rainbow-coloured chenille animal — vibrant and joyful.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-015', file: 'Images/Toys (15).jpeg',   name: 'Fluffy Duckling',           category: 'toys', price: 199, mrp: 299, description: 'Soft and fluffy chenille duckling — sweet gift for all ages.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-016', file: 'Images/Toys (16).jpeg',   name: 'Whimsical Creature',        category: 'toys', price: 249, mrp: 399, description: 'One-of-a-kind whimsical chenille creature, fully handmade.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-017', file: 'Images/Toys (17).jpeg',   name: 'Animal Keychain',           category: 'toys', price: 149, mrp: 249, description: 'Adorable chenille animal keychain — perfect as a small gift.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-018', file: 'Images/Toys (18).jpeg',   name: 'Hedgehog Figurine',         category: 'toys', price: 249, mrp: 399, description: 'Charming hedgehog figurine crafted with precision and love.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
  { id: 'TY-019', file: 'Images/Toys (19).jpeg',   name: 'Animal Friends Set',        category: 'toys', price: 499, mrp: 749, description: 'A delightful set of chenille animal friends — premium gifting.', featured: false, cropX: null, cropY: null, cropW: null, cropH: null },
];

// ── 2. DATA LAYER ─────────────────────────────────────────────

const STORAGE_KEY = 'craftyblooms_products';

function loadProducts() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
    return JSON.parse(saved);
  } catch (e) {
    return JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  }
}

function saveProducts(products) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

function resetProducts() {
  localStorage.removeItem(STORAGE_KEY);
  products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  renderCatalog();
}

// Global products array
let products = loadProducts();

// ── 3. STATE ──────────────────────────────────────────────────

let editMode = false;
let cropState = null; // { productId, startX, startY, currentX, currentY, dragging, resizing, resizeHandle }
let activeModal = null; // 'crop' | 'editor' | null

// ── 4. RENDER ─────────────────────────────────────────────────

function getDiscountPct(p) {
  if (!p.mrp || p.mrp <= p.price) return 0;
  return Math.round(((p.mrp - p.price) / p.mrp) * 100);
}

function buildCardHTML(p) {
  const disc = getDiscountPct(p);
  const imgStyle = buildImageStyle(p);

  return `
    <article class="product-card${p.featured ? ' product-card--featured' : ''}" data-id="${p.id}">
      <div class="product-card__image-wrap">
        <img class="product-card__image" src="${p.file}" alt="${p.name}" style="${imgStyle}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'400\\'><rect fill=\\'%23f7f5f2\\' width=\\'400\\' height=\\'400\\'/>><text x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' fill=\\'%238a8a8a\\' font-size=\\'14\\'>No Image</text></svg>'">
        ${disc > 0 ? `<span class="badge badge--discount">${disc}% OFF</span>` : ''}
        ${p.featured ? `<span class="badge badge--featured">★ Featured</span>` : ''}
        ${editMode ? `
          <div class="card-edit-overlay">
            <button class="card-btn card-btn--crop" onclick="openCropModal('${p.id}')" title="Adjust Crop">✂ Crop</button>
            <button class="card-btn card-btn--edit" onclick="openProductEditor('${p.id}')" title="Edit Product">✏ Edit</button>
          </div>
        ` : ''}
      </div>
      <div class="product-card__body">
        <h3 class="product-card__name">${p.name}</h3>
        ${p.description ? `<p class="product-card__desc">${p.description}</p>` : ''}
        <div class="product-card__pricing">
          ${p.mrp && p.mrp > p.price ? `<span class="product-card__mrp">₹${p.mrp}</span>` : ''}
          <span class="product-card__price">₹${p.price}</span>
        </div>
        <span class="product-card__sku">${p.id}</span>
      </div>
    </article>`;
}

function buildImageStyle(p) {
  if (p.cropX !== null && p.cropY !== null && p.cropW !== null && p.cropH !== null) {
    // Convert stored crop (percentage of original) to object-position
    const posX = ((p.cropX + p.cropW / 2)).toFixed(1);
    const posY = ((p.cropY + p.cropH / 2)).toFixed(1);
    return `object-position: ${posX}% ${posY}%;`;
  }
  return 'object-position: center center;';
}

function renderCatalog() {
  const flowerGrid  = document.getElementById('flowers-grid');
  const toysGrid    = document.getElementById('toys-grid');
  const flowerCount = document.getElementById('flowers-count');
  const toysCount   = document.getElementById('toys-count');
  const flowerFrom  = document.getElementById('flowers-from');
  const toysFrom    = document.getElementById('toys-from');

  const flowers = products.filter(p => p.category === 'flowers');
  const toys    = products.filter(p => p.category === 'toys');

  flowerGrid.innerHTML  = flowers.map(buildCardHTML).join('');
  toysGrid.innerHTML    = toys.map(buildCardHTML).join('');

  flowerCount.textContent = `${flowers.length} products`;
  toysCount.textContent   = `${toys.length} products`;

  const flowerMin = flowers.length ? Math.min(...flowers.map(p => p.price)) : 0;
  const toysMin   = toys.length    ? Math.min(...toys.map(p => p.price))    : 0;
  flowerFrom.textContent = flowers.length ? `from ₹${flowerMin}` : '';
  toysFrom.textContent   = toys.length    ? `from ₹${toysMin}`   : '';

  // Update Edit Mode button state
  const btn = document.getElementById('edit-mode-btn');
  if (btn) {
    btn.textContent  = editMode ? '✓ Exit Edit Mode' : '✏ Edit Mode';
    btn.classList.toggle('active', editMode);
  }

  // Show/hide Add Product button
  const addBtn = document.getElementById('add-product-btn');
  if (addBtn) addBtn.style.display = editMode ? 'inline-flex' : 'none';
}

// ── 5. EDIT MODE ─────────────────────────────────────────────

function toggleEditMode() {
  editMode = !editMode;
  renderCatalog();
}

// ── 6. CROP MODAL ─────────────────────────────────────────────

let cropProduct    = null;
let cropBox        = { x: 10, y: 10, w: 80, h: 80 }; // percentages
let isDragging     = false;
let isResizing     = false;
let resizeHandle   = null;
let dragStartX     = 0;
let dragStartY     = 0;
let dragStartBox   = {};

function openCropModal(productId) {
  cropProduct = products.find(p => p.id === productId);
  if (!cropProduct) return;

  // Initialise crop box from saved state or default centre square
  if (cropProduct.cropX !== null) {
    cropBox = { x: cropProduct.cropX, y: cropProduct.cropY, w: cropProduct.cropW, h: cropProduct.cropH };
  } else {
    cropBox = { x: 10, y: 10, w: 80, h: 80 };
  }

  const modal = document.getElementById('crop-modal');
  const img   = document.getElementById('crop-img');
  img.src     = cropProduct.file;
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
  const overlay = document.getElementById('crop-overlay');
  overlay.style.left   = cropBox.x + '%';
  overlay.style.top    = cropBox.y + '%';
  overlay.style.width  = cropBox.w + '%';
  overlay.style.height = cropBox.h + '%';
}

function clamp(val, min, max) { return Math.max(min, Math.min(max, val)); }

function getCropContainerPos(e) {
  const container = document.getElementById('crop-container');
  const rect = container.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return {
    x: clamp(((clientX - rect.left) / rect.width)  * 100, 0, 100),
    y: clamp(((clientY - rect.top)  / rect.height) * 100, 0, 100),
  };
}

function onCropMouseDown(e) {
  if (e.target.classList.contains('crop-handle')) {
    isResizing  = true;
    resizeHandle = e.target.dataset.handle;
  } else if (e.target.id === 'crop-overlay') {
    isDragging = true;
  } else {
    return;
  }
  const pos = getCropContainerPos(e);
  dragStartX   = pos.x;
  dragStartY   = pos.y;
  dragStartBox = { ...cropBox };
  e.preventDefault();
}

function onCropMouseMove(e) {
  if (!isDragging && !isResizing) return;
  const pos = getCropContainerPos(e);
  const dx  = pos.x - dragStartX;
  const dy  = pos.y - dragStartY;

  if (isDragging) {
    cropBox.x = clamp(dragStartBox.x + dx, 0, 100 - cropBox.w);
    cropBox.y = clamp(dragStartBox.y + dy, 0, 100 - cropBox.h);
  } else if (isResizing) {
    let { x, y, w, h } = dragStartBox;
    if (resizeHandle.includes('e')) w = clamp(w + dx, 10, 100 - x);
    if (resizeHandle.includes('s')) h = clamp(h + dy, 10, 100 - y);
    if (resizeHandle.includes('w')) { const nx = clamp(x + dx, 0, x + w - 10); w = w - (nx - x); x = nx; }
    if (resizeHandle.includes('n')) { const ny = clamp(y + dy, 0, y + h - 10); h = h - (ny - y); y = ny; }
    cropBox = { x, y, w, h };
  }
  updateCropOverlay();
  e.preventDefault();
}

function onCropMouseUp() {
  isDragging  = false;
  isResizing  = false;
  resizeHandle = null;
}

function saveCrop() {
  if (!cropProduct) return;
  const p = products.find(p => p.id === cropProduct.id);
  if (p) {
    p.cropX = Math.round(cropBox.x * 10) / 10;
    p.cropY = Math.round(cropBox.y * 10) / 10;
    p.cropW = Math.round(cropBox.w * 10) / 10;
    p.cropH = Math.round(cropBox.h * 10) / 10;
    saveProducts(products);
    renderCatalog();
  }
  closeCropModal();
  if (typeof showToast === 'function') showToast('✓ Crop saved');
}

function resetCrop() {
  if (!cropProduct) return;
  const p = products.find(p => p.id === cropProduct.id);
  if (p) { p.cropX = p.cropY = p.cropW = p.cropH = null; saveProducts(products); renderCatalog(); }
  cropBox = { x: 10, y: 10, w: 80, h: 80 };
  updateCropOverlay();
  closeCropModal();
}

function handleCropImageUpload(e) {
  const file = e.target.files[0];
  if (!file || !cropProduct) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const p = products.find(p => p.id === cropProduct.id);
    if (p) {
      p.file = ev.target.result;
      p.cropX = p.cropY = p.cropW = p.cropH = null;
      saveProducts(products);
      document.getElementById('crop-img').src = p.file;
      cropBox = { x: 10, y: 10, w: 80, h: 80 };
      updateCropOverlay();
    }
  };
  reader.readAsDataURL(file);
}

// ── 7. PRODUCT EDITOR DRAWER ──────────────────────────────────

let editingProductId = null;

function openProductEditor(productId) {
  const p = productId ? products.find(p => p.id === productId) : null;
  editingProductId = productId || null;
  window._pendingImageDataUrl = null;

  document.getElementById('editor-title').textContent = p ? 'Edit Product' : 'Add New Product';
  document.getElementById('editor-id').value          = p ? p.id          : generateId(p ? p.category : 'flowers');
  document.getElementById('editor-name').value        = p ? p.name        : '';
  document.getElementById('editor-category').value   = p ? p.category    : 'flowers';
  document.getElementById('editor-price').value      = p ? p.price       : 249;
  document.getElementById('editor-mrp').value        = p ? (p.mrp || '') : 399;
  document.getElementById('editor-desc').value       = p ? (p.description || '') : '';
  document.getElementById('editor-featured').checked = p ? !!p.featured  : false;
  document.getElementById('editor-delete-btn').style.display = p ? 'inline-flex' : 'none';

  document.getElementById('editor-drawer').classList.add('open');
  activeModal = 'editor';
}

function openNewProductForm() { openProductEditor(null); }

function closeProductEditor() {
  document.getElementById('editor-drawer').classList.remove('open');
  activeModal = null;
  editingProductId = null;
}

function generateId(category) {
  const cat    = category || 'flowers';
  const prefix = cat === 'flowers' ? 'FL' : 'TY';
  const nums   = products.filter(p => p.category === cat).map(p => parseInt(p.id.split('-')[1]) || 0);
  const next   = (nums.length ? Math.max(...nums) : 0) + 1;
  return `${prefix}-${String(next).padStart(3, '0')}`;
}

function saveProductForm() {
  const id       = document.getElementById('editor-id').value.trim();
  const name     = document.getElementById('editor-name').value.trim();
  const category = document.getElementById('editor-category').value;
  const price    = parseInt(document.getElementById('editor-price').value) || 0;
  const mrp      = parseInt(document.getElementById('editor-mrp').value)   || 0;
  const desc     = document.getElementById('editor-desc').value.trim();
  const featured = document.getElementById('editor-featured').checked;

  if (!name) { alert('Please enter a product name.'); return; }
  if (!price) { alert('Please enter a price.'); return; }

  const existing = products.find(p => p.id === editingProductId);
  if (existing) {
    Object.assign(existing, { name, category, price, mrp, description: desc, featured });
  } else {
    const imageFile = window._pendingImageDataUrl || '';
    window._pendingImageDataUrl = null;
    products.push({ id, file: imageFile, name, category, price, mrp, description: desc, featured, cropX: null, cropY: null, cropW: null, cropH: null });
  }
  saveProducts(products);
  renderCatalog();
  closeProductEditor();
  if (typeof showToast === 'function') showToast('✓ Product saved');
}

function deleteProduct(productId) {
  const p = products.find(p => p.id === productId);
  if (!p) return;
  if (!confirm(`Delete "${p.name}"? This cannot be undone.`)) return;
  products = products.filter(p => p.id !== productId);
  saveProducts(products);
  renderCatalog();
  closeProductEditor();
  if (typeof showToast === 'function') showToast('Product deleted');
}

function handleEditorImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const id = document.getElementById('editor-id').value;
    const p  = products.find(p => p.id === id);
    if (p) { p.file = ev.target.result; saveProducts(products); renderCatalog(); }
    else   { window._pendingImageDataUrl = ev.target.result; }
  };
  reader.readAsDataURL(file);
}

// ── 8. PDF EXPORT ─────────────────────────────────────────────

async function exportPDF() {
  const btn = document.getElementById('pdf-btn');
  btn.disabled    = true;
  btn.textContent = '⏳ Generating PDF…';

  // Temporarily hide edit controls
  const wasEditMode = editMode;
  editMode = false;
  renderCatalog();

  await sleep(200);

  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const A4W = 210, A4H = 297;

    // ── Cover page ──
    const cover = buildCoverElement();
    document.body.appendChild(cover);
    await sleep(100);
    const coverCanvas = await html2canvas(cover, { scale: 2, useCORS: true, allowTaint: true, backgroundColor: '#ffffff' });
    document.body.removeChild(cover);
    doc.addImage(coverCanvas.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, A4W, A4H);

    // ── Product pages (6 per page) ──
    const sections = [
      { label: 'Pipe Cleaner Flowers',  items: products.filter(p => p.category === 'flowers') },
      { label: 'Toys & Animals',        items: products.filter(p => p.category === 'toys') },
    ];

    for (const section of sections) {
      // Section divider page
      doc.addPage();
      const divider = buildSectionDividerElement(section.label, section.items.length);
      document.body.appendChild(divider);
      await sleep(80);
      const divCanvas = await html2canvas(divider, { scale: 2, useCORS: true, allowTaint: true, backgroundColor: '#ffffff' });
      document.body.removeChild(divider);
      doc.addImage(divCanvas.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, A4W, A4H);

      // Product grid pages (6 per page)
      const chunks = chunkArray(section.items, 6);
      for (const chunk of chunks) {
        doc.addPage();
        const gridEl = buildGridPageElement(chunk, section.label);
        document.body.appendChild(gridEl);
        await sleep(150);
        const gridCanvas = await html2canvas(gridEl, { scale: 2, useCORS: true, allowTaint: true, backgroundColor: '#ffffff' });
        document.body.removeChild(gridEl);
        doc.addImage(gridCanvas.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, A4W, A4H);
      }
    }

    // ── Back cover ──
    doc.addPage();
    const back = buildBackCoverElement();
    document.body.appendChild(back);
    await sleep(100);
    const backCanvas = await html2canvas(back, { scale: 2, useCORS: true, allowTaint: true, backgroundColor: '#ffffff' });
    document.body.removeChild(back);
    doc.addImage(backCanvas.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, A4W, A4H);

    doc.save('CraftyBlooms_Catalog.pdf');
  } catch (err) {
    alert('PDF export failed. Please try again.\n' + err.message);
    console.error(err);
  } finally {
    editMode = wasEditMode;
    renderCatalog();
    btn.disabled    = false;
    btn.textContent = '⬇ Download PDF';
  }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function chunkArray(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function buildCoverElement() {
  const featured = products.filter(p => p.featured).slice(0, 4);
  const el = document.createElement('div');
  el.style.cssText = `position:fixed;left:-9999px;top:0;width:794px;height:1123px;background:#fff;font-family:'Poppins',sans-serif;overflow:hidden;box-sizing:border-box;padding:60px 56px;`;
  el.innerHTML = `
    <div style="border-bottom:1px solid #dcdcdc;padding-bottom:20px;margin-bottom:32px;">
      <div style="font-size:44px;font-weight:700;letter-spacing:-1px;color:#1a1a1a;line-height:1;">crafty blooms</div>
      <div style="font-size:10px;font-weight:400;letter-spacing:3px;color:#8a8a8a;text-transform:uppercase;margin-top:6px;">handcrafted with love</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:32px;">
      ${featured.map(p => `
        <div style="position:relative;aspect-ratio:1;overflow:hidden;background:#f7f5f2;">
          <img src="${p.file}" style="width:100%;height:100%;object-fit:cover;object-position:center;" crossorigin="anonymous">
          <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(26,26,26,0.55);padding:10px 12px;">
            <div style="color:#fff;font-size:12px;font-weight:500;">${p.name}</div>
            <div style="color:#fff;font-size:13px;font-weight:700;">₹${p.price}</div>
          </div>
        </div>`).join('')}
    </div>
    <div style="text-align:center;padding:24px 0;border-top:1px solid #dcdcdc;border-bottom:1px solid #dcdcdc;margin-bottom:32px;">
      <div style="font-size:13px;color:#4a4a4a;line-height:1.8;">
        Handmade Pipe Cleaner &amp; Chenille Stem Products<br>
        Flowers · Toys · Décor · Custom Orders Welcome
      </div>
    </div>
    <div style="display:flex;justify-content:center;gap:40px;">
      <div style="text-align:center;">
        <div style="font-size:9px;letter-spacing:2px;color:#8a8a8a;text-transform:uppercase;margin-bottom:4px;">WhatsApp</div>
        <div style="font-size:13px;font-weight:500;color:#1a1a1a;">+91-7030261766</div>
      </div>
      <div style="width:1px;background:#dcdcdc;"></div>
      <div style="text-align:center;">
        <div style="font-size:9px;letter-spacing:2px;color:#8a8a8a;text-transform:uppercase;margin-bottom:4px;">Instagram</div>
        <div style="font-size:13px;font-weight:500;color:#1a1a1a;">@craftyblooms</div>
      </div>
    </div>`;
  return el;
}

function buildSectionDividerElement(label, count) {
  const el = document.createElement('div');
  el.style.cssText = `position:fixed;left:-9999px;top:0;width:794px;height:1123px;background:#f7f5f2;font-family:'Poppins',sans-serif;overflow:hidden;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:center;`;
  el.innerHTML = `
    <div style="font-size:10px;letter-spacing:3px;color:#8a8a8a;text-transform:uppercase;margin-bottom:16px;">crafty blooms</div>
    <div style="font-size:42px;font-weight:700;color:#1a1a1a;text-align:center;line-height:1.15;">${label}</div>
    <div style="width:48px;height:2px;background:#c8102e;margin:20px auto;"></div>
    <div style="font-size:13px;color:#4a4a4a;">${count} handcrafted products</div>`;
  return el;
}

function buildGridPageElement(items, sectionLabel) {
  const el = document.createElement('div');
  el.style.cssText = `position:fixed;left:-9999px;top:0;width:794px;height:1123px;background:#fff;font-family:'Poppins',sans-serif;overflow:hidden;box-sizing:border-box;padding:32px 36px;`;

  const cards = items.map(p => {
    const disc = getDiscountPct(p);
    return `
      <div style="display:flex;flex-direction:column;background:#fff;border:1px solid #dcdcdc;">
        <div style="position:relative;width:100%;aspect-ratio:1;overflow:hidden;background:#f7f5f2;">
          <img src="${p.file}" style="width:100%;height:100%;object-fit:cover;object-position:center;" crossorigin="anonymous">
          ${disc > 0 ? `<div style="position:absolute;bottom:8px;left:8px;background:#c8102e;color:#fff;font-size:9px;font-weight:700;letter-spacing:1px;padding:3px 7px;border-radius:2px;">${disc}% OFF</div>` : ''}
        </div>
        <div style="padding:10px 10px 12px;">
          <div style="font-size:11px;font-weight:500;color:#1a1a1a;line-height:1.3;margin-bottom:4px;">${p.name}</div>
          <div style="display:flex;align-items:center;gap:6px;">
            ${p.mrp && p.mrp > p.price ? `<span style="font-size:9px;color:#8a8a8a;text-decoration:line-through;">₹${p.mrp}</span>` : ''}
            <span style="font-size:12px;font-weight:700;color:#1a1a1a;">₹${p.price}</span>
          </div>
          <div style="font-size:8px;color:#8a8a8a;margin-top:3px;">${p.id}</div>
        </div>
      </div>`;
  }).join('');

  el.innerHTML = `
    <div style="border-bottom:1px solid #dcdcdc;padding-bottom:10px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:baseline;">
      <span style="font-size:9px;letter-spacing:2px;color:#8a8a8a;text-transform:uppercase;">crafty blooms — ${sectionLabel}</span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;">${cards}</div>
    <div style="border-top:1px solid #dcdcdc;margin-top:16px;padding-top:8px;text-align:center;font-size:8px;color:#8a8a8a;">
      +91-7030261766 · @craftyblooms · Handcrafted with Love
    </div>`;
  return el;
}

function buildBackCoverElement() {
  const el = document.createElement('div');
  el.style.cssText = `position:fixed;left:-9999px;top:0;width:794px;height:1123px;background:#1a1a1a;font-family:'Poppins',sans-serif;overflow:hidden;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#fff;`;
  el.innerHTML = `
    <div style="font-size:42px;font-weight:700;letter-spacing:-1px;margin-bottom:8px;">crafty blooms</div>
    <div style="font-size:10px;letter-spacing:4px;color:#8a8a8a;text-transform:uppercase;margin-bottom:48px;">handcrafted with love</div>
    <div style="width:48px;height:2px;background:#c8102e;margin-bottom:48px;"></div>
    <div style="display:flex;gap:60px;margin-bottom:48px;">
      <div style="text-align:center;">
        <div style="font-size:9px;letter-spacing:2px;color:#8a8a8a;text-transform:uppercase;margin-bottom:6px;">WhatsApp</div>
        <div style="font-size:15px;font-weight:500;">+91-7030261766</div>
      </div>
      <div style="width:1px;background:#333;"></div>
      <div style="text-align:center;">
        <div style="font-size:9px;letter-spacing:2px;color:#8a8a8a;text-transform:uppercase;margin-bottom:6px;">Instagram</div>
        <div style="font-size:15px;font-weight:500;">@craftyblooms</div>
      </div>
    </div>
    <div style="font-size:11px;color:#4a4a4a;text-align:center;line-height:2;max-width:360px;">
      Custom orders welcome · Bulk pricing available<br>
      Flowers · Toys · Décor · Gifting
    </div>`;
  return el;
}

// ── 9. EVENT WIRING (runs after DOM ready) ───────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();

  // Crop modal drag events
  const container = document.getElementById('crop-container');
  if (container) {
    container.addEventListener('mousedown',  onCropMouseDown);
    container.addEventListener('mousemove',  onCropMouseMove);
    container.addEventListener('mouseup',    onCropMouseUp);
    container.addEventListener('mouseleave', onCropMouseUp);
    container.addEventListener('touchstart', onCropMouseDown, { passive: false });
    container.addEventListener('touchmove',  onCropMouseMove, { passive: false });
    container.addEventListener('touchend',   onCropMouseUp);
  }

  // Close modals on backdrop click
  document.getElementById('crop-modal').addEventListener('click', (e) => {
    if (e.target.id === 'crop-modal') closeCropModal();
  });
  document.getElementById('editor-overlay').addEventListener('click', closeProductEditor);

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (activeModal === 'crop')   closeCropModal();
      if (activeModal === 'editor') closeProductEditor();
    }
  });
});
