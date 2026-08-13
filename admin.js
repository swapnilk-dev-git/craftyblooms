/* ============================================================
   Crafty Blooms — Admin Dashboard JS
   PIN-protected · localStorage-based order management
   ============================================================ */

const ADMIN_PIN   = '1234'; // Change this to your preferred PIN
const AUTH_KEY    = 'cb_admin_auth_v1';
const ORDERS_KEY  = 'craftyblooms_orders_v1';

// ── 1. AUTH ───────────────────────────────────────────────────

function checkPin() {
  const val = document.getElementById('pin-input').value;
  if (val === ADMIN_PIN) {
    localStorage.setItem(AUTH_KEY, '1');
    document.getElementById('lock-screen').style.display = 'none';
    document.getElementById('dashboard').style.display   = 'block';
    init();
  } else {
    const err = document.getElementById('lock-error');
    err.style.display = 'block';
    document.getElementById('pin-input').value = '';
    document.getElementById('pin-input').focus();
    setTimeout(() => { err.style.display = 'none'; }, 3000);
  }
}

function logout() {
  localStorage.removeItem(AUTH_KEY);
  document.getElementById('dashboard').style.display   = 'none';
  document.getElementById('lock-screen').style.display = 'flex';
  document.getElementById('pin-input').value = '';
}

// ── 2. INIT ───────────────────────────────────────────────────

let activeStatusFilter = 'all';
let editingNoteId = null;

function init() {
  renderStats();
  renderOrders();
}

// Check auth on load
document.addEventListener('DOMContentLoaded', () => {
  // Enter key on PIN input
  document.getElementById('pin-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') checkPin();
  });

  if (localStorage.getItem(AUTH_KEY) === '1') {
    document.getElementById('lock-screen').style.display = 'none';
    document.getElementById('dashboard').style.display   = 'block';
    init();
  }
});

// ── 3. DATA LAYER ─────────────────────────────────────────────

function loadOrders() {
  try { return JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]'); }
  catch(e) { return []; }
}

function saveOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

// ── 4. STATS ──────────────────────────────────────────────────

function renderStats() {
  const orders = loadOrders();
  const total    = orders.length;
  const pending  = orders.filter(o => o.status === 'pending').length;
  const accepted = orders.filter(o => o.status === 'accepted').length;
  const rejected = orders.filter(o => o.status === 'rejected').length;
  const revenue  = orders.filter(o => o.status === 'accepted')
                         .reduce((s, o) => s + (o.subtotal || 0), 0);

  document.getElementById('stat-total').textContent    = total;
  document.getElementById('stat-pending').textContent  = pending;
  document.getElementById('stat-accepted').textContent = accepted;
  document.getElementById('stat-rejected').textContent = rejected;
  document.getElementById('stat-revenue').textContent  = `₹${revenue.toLocaleString('en-IN')}`;
}

// ── 5. RENDER ORDERS ──────────────────────────────────────────

function setStatusFilter(status) {
  activeStatusFilter = status;
  document.querySelectorAll('.spill').forEach(el => {
    el.classList.toggle('spill--active', el.dataset.status === status);
  });
  renderOrders();
}

function renderOrders() {
  const orders = loadOrders();
  const list   = document.getElementById('orders-list');
  const empty  = document.getElementById('orders-empty');

  const filtered = activeStatusFilter === 'all'
    ? orders
    : orders.filter(o => o.status === activeStatusFilter);

  if (filtered.length === 0) {
    list.innerHTML  = '';
    empty.style.display = 'flex';
    return;
  }
  empty.style.display = 'none';
  list.innerHTML = filtered.map(buildOrderCard).join('');
}

function buildOrderCard(order) {
  const date = new Date(order.timestamp);
  const dateStr = date.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
  const timeStr = date.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });

  const statusBadge = {
    pending:  '<span class="status-badge status-badge--pending">⏳ Pending</span>',
    accepted: '<span class="status-badge status-badge--accepted">✅ Accepted</span>',
    rejected: '<span class="status-badge status-badge--rejected">❌ Rejected</span>',
  }[order.status] || '';

  const items = (order.items || []).map(item => `
    <div class="order-item-row">
      <span>
        <span class="order-item-row__name">${item.name}</span>
        <span class="order-item-row__qty">× ${item.qty}</span>
        <span style="font-size:11px;color:var(--ink-400);margin-left:4px;">(${item.id})</span>
      </span>
      <span>₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
    </div>`).join('');

  const note = order.note ? `
    <div class="order-card__note">
      <strong>Note:</strong> ${escapeHtml(order.note)}
    </div>` : '';

  const adminNote = order.adminNote ? `
    <div class="order-card__note" style="color:var(--amber);border-top-color:var(--amber);">
      <strong>Admin note:</strong> ${escapeHtml(order.adminNote)}
    </div>` : '';

  const canAccept = order.status !== 'accepted';
  const canReject = order.status !== 'rejected';

  return `
    <div class="order-card order-card--${order.status}" id="order-${order.id}">
      <div class="order-card__header">
        <div>
          <div class="order-card__id">${order.id}</div>
          <div class="order-card__customer">${escapeHtml(order.customerName || 'Unknown')}</div>
        </div>
        ${statusBadge}
        <div class="order-card__time">${dateStr} · ${timeStr}</div>
      </div>
      <div class="order-card__items">${items}</div>
      ${note}
      ${adminNote}
      <div class="order-card__footer">
        <div class="order-total">
          <span>Subtotal</span>
          ₹${(order.subtotal || 0).toLocaleString('en-IN')}
        </div>
        <div class="order-actions">
          ${canAccept ? `<button class="action-btn action-btn--accept" onclick="acceptOrder('${order.id}')">✅ Accept</button>` : ''}
          ${canReject ? `<button class="action-btn action-btn--reject" onclick="rejectOrder('${order.id}')">❌ Reject</button>` : ''}
          <button class="action-btn action-btn--note" onclick="openNoteModal('${order.id}')">📝 Note</button>
          <button class="action-btn action-btn--delete" onclick="deleteOrder('${order.id}')">🗑</button>
        </div>
      </div>
    </div>`;
}

// ── 6. ORDER ACTIONS ──────────────────────────────────────────

function acceptOrder(id) {
  const orders = loadOrders();
  const o = orders.find(x => x.id === id);
  if (!o) return;
  o.status = 'accepted';
  saveOrders(orders);
  renderStats();
  renderOrders();
  showToast('✅ Order accepted');
}

function rejectOrder(id) {
  const orders = loadOrders();
  const o = orders.find(x => x.id === id);
  if (!o) return;
  o.status = 'rejected';
  saveOrders(orders);
  renderStats();
  renderOrders();
  showToast('❌ Order rejected');
}

function deleteOrder(id) {
  if (!confirm('Delete this order? This cannot be undone.')) return;
  let orders = loadOrders();
  orders = orders.filter(o => o.id !== id);
  saveOrders(orders);
  renderStats();
  renderOrders();
  showToast('Order deleted');
}

function confirmClearAll() {
  const orders = loadOrders();
  if (orders.length === 0) { showToast('No orders to clear.'); return; }
  if (!confirm(`Clear all ${orders.length} orders? This cannot be undone.`)) return;
  localStorage.removeItem(ORDERS_KEY);
  renderStats();
  renderOrders();
  showToast('All orders cleared');
}

// ── 7. NOTE MODAL ─────────────────────────────────────────────

function openNoteModal(id) {
  editingNoteId = id;
  const orders = loadOrders();
  const o = orders.find(x => x.id === id);
  document.getElementById('note-textarea').value = o ? (o.adminNote || '') : '';
  document.getElementById('note-modal').style.display = 'flex';
  setTimeout(() => document.getElementById('note-textarea').focus(), 50);
}

function closeNoteModal() {
  document.getElementById('note-modal').style.display = 'none';
  editingNoteId = null;
}

function saveNote() {
  if (!editingNoteId) return;
  const text = document.getElementById('note-textarea').value.trim();
  const orders = loadOrders();
  const o = orders.find(x => x.id === editingNoteId);
  if (o) { o.adminNote = text; saveOrders(orders); renderOrders(); }
  closeNoteModal();
  showToast('Note saved');
}

// Close note modal on backdrop click
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('note-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('note-modal')) closeNoteModal();
  });
  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.getElementById('note-modal').style.display === 'flex') closeNoteModal();
  });
});

// ── 8. CSV EXPORT ─────────────────────────────────────────────

function exportCSV() {
  const orders = loadOrders();
  if (orders.length === 0) { showToast('No orders to export.'); return; }

  const header = ['Order ID', 'Date', 'Customer', 'Items', 'Subtotal', 'Status', 'Customer Note', 'Admin Note'];
  const rows = orders.map(o => {
    const date = new Date(o.timestamp).toLocaleString('en-IN');
    const items = (o.items || []).map(i => `${i.name} x${i.qty}`).join(' | ');
    return [
      o.id,
      date,
      o.customerName || '',
      items,
      o.subtotal || 0,
      o.status,
      o.note || '',
      o.adminNote || '',
    ].map(csvEscape).join(',');
  });

  const csv = [header.join(','), ...rows].join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = `CraftyBlooms_Orders_${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('CSV exported');
}

function csvEscape(val) {
  const s = String(val);
  if (s.includes(',') || s.includes('"') || s.includes('\n')) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

// ── 9. HELPERS ────────────────────────────────────────────────

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function showToast(msg) {
  const t = document.getElementById('adm-toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}
