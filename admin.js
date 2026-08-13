/* ============================================================
   Crafty Blooms — Admin Dashboard JS
   PIN-protected · localStorage-based order management
   ============================================================ */

const ADMIN_PIN   = '1234'; // Change this to your preferred PIN
const AUTH_KEY    = 'cb_admin_auth_v1';
const ORDERS_KEY  = 'craftyblooms_orders_v1';
const LOCKOUT_KEY = 'cb_admin_lockout_v1'; // { attempts: n, lockedUntil: ms }
const MAX_ATTEMPTS  = 3;
const LOCKOUT_MS    = 5 * 60 * 1000; // 5 minutes

// ── 1. AUTH ───────────────────────────────────────────────────

function getLockoutState() {
  try { return JSON.parse(localStorage.getItem(LOCKOUT_KEY)) || { attempts: 0, lockedUntil: 0 }; }
  catch { return { attempts: 0, lockedUntil: 0 }; }
}
function saveLockoutState(state) { localStorage.setItem(LOCKOUT_KEY, JSON.stringify(state)); }

function checkPin() {
  const lockout = getLockoutState();
  const now = Date.now();

  // Still locked out?
  if (lockout.lockedUntil > now) {
    const remaining = Math.ceil((lockout.lockedUntil - now) / 1000);
    const mins = Math.floor(remaining / 60), secs = remaining % 60;
    showLockError(`Too many attempts. Try again in ${mins}m ${secs}s.`);
    document.getElementById('pin-input').value = '';
    return;
  }

  const val = document.getElementById('pin-input').value;
  if (val === ADMIN_PIN) {
    // Reset lockout on success
    saveLockoutState({ attempts: 0, lockedUntil: 0 });
    localStorage.setItem(AUTH_KEY, '1');
    document.getElementById('lock-screen').style.display = 'none';
    document.getElementById('dashboard').style.display   = 'block';
    init();
  } else {
    const newAttempts = lockout.attempts + 1;
    const newLockedUntil = newAttempts >= MAX_ATTEMPTS ? now + LOCKOUT_MS : 0;
    saveLockoutState({ attempts: newAttempts, lockedUntil: newLockedUntil });
    document.getElementById('pin-input').value = '';
    document.getElementById('pin-input').focus();
    if (newLockedUntil > 0) {
      showLockError(`Too many attempts. Locked for 5 minutes.`);
    } else {
      const left = MAX_ATTEMPTS - newAttempts;
      showLockError(`Incorrect PIN. ${left} attempt${left !== 1 ? 's' : ''} remaining.`);
    }
  }
}

function showLockError(msg) {
  const err = document.getElementById('lock-error');
  err.textContent = msg;
  err.style.display = 'block';
  setTimeout(() => { err.style.display = 'none'; }, 4000);
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
let _lastSeenOrderCount = 0;  // track pending orders for new-order alert

function init() {
  renderStats();
  renderOrders();
  _lastSeenOrderCount = loadOrders().filter(o => o.status === 'pending').length;
  startOrderPoller();
}

function refreshDashboard() {
  renderStats();
  renderOrders();
  _lastSeenOrderCount = loadOrders().filter(o => o.status === 'pending').length;
  showToast('🔄 Refreshed');
}

// ── NEW ORDER NOTIFICATION (polling localStorage every 10s) ────
let _pollerTimer = null;

function startOrderPoller() {
  if (_pollerTimer) clearInterval(_pollerTimer);
  _pollerTimer = setInterval(checkForNewOrders, 10000);
  // Also listen for storage events (cross-tab, same browser)
  window.addEventListener('storage', e => {
    if (e.key === ORDERS_KEY) checkForNewOrders();
  });
  // Refresh whenever admin tab regains focus (e.g. user placed order in another tab)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      renderStats();
      renderOrders();
      checkForNewOrders();
    }
  });
}

function checkForNewOrders() {
  const pending = loadOrders().filter(o => o.status === 'pending').length;
  if (pending > _lastSeenOrderCount) {
    const newCount = pending - _lastSeenOrderCount;
    showNewOrderBadge(pending);
    showToast(`🛒 ${newCount} new order${newCount > 1 ? 's' : ''} received!`);
    // Browser notification if permitted
    if (Notification && Notification.permission === 'granted') {
      new Notification('Crafty Blooms — New Order!', {
        body: `${newCount} new order${newCount > 1 ? 's' : ''} waiting. Open admin dashboard.`,
        tag: 'cb-new-order'
      });
    }
    renderStats();
    renderOrders();
  }
  _lastSeenOrderCount = pending;
}

function showNewOrderBadge(count) {
  const badge = document.getElementById('new-order-badge');
  if (!badge) return;
  badge.textContent = count;
  badge.style.display = 'inline-flex';
}

function clearNewOrderBadge() {
  const badge = document.getElementById('new-order-badge');
  if (badge) badge.style.display = 'none';
  _lastSeenOrderCount = loadOrders().filter(o => o.status === 'pending').length;
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
    // Request browser notification permission silently
    if (Notification && Notification.permission === 'default') {
      Notification.requestPermission();
    }
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
  if (status === 'pending') clearNewOrderBadge();
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

  // Shipping info block
  const shipping = `
    <div class="order-card__shipping">
      ${order.phone   ? `<div class="order-ship-row"><span class="order-ship-label">📞 Phone</span><span>${escapeHtml(order.phone)}</span></div>` : ''}
      ${order.address ? `<div class="order-ship-row"><span class="order-ship-label">📍 Address</span><span>${escapeHtml(order.address)}</span></div>` : ''}
    </div>`;

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
  const hasPhone  = !!order.phone;

  // WA confirmation button — only if we have the customer's phone
  const waConfirmBtn = hasPhone ? `
    <button class="action-btn action-btn--wa" onclick="sendWAConfirmation('${order.id}')" title="Send WhatsApp confirmation to customer">
      <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      Send Confirmation
    </button>` : '';

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
      ${shipping}
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
          ${waConfirmBtn}
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
  // Prompt admin to send WA confirmation if customer has a phone number
  if (o.phone) {
    setTimeout(() => {
      if (confirm(`Order accepted! Send WhatsApp confirmation to ${o.customerName} (${o.phone})?`)) {
        sendWAConfirmation(id);
      }
    }, 300);
  }
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
  // Prompt admin to send WA rejection notice if customer has a phone number
  if (o.phone) {
    setTimeout(() => {
      if (confirm(`Order rejected. Send WhatsApp notice to ${o.customerName} (${o.phone})?`)) {
        sendWAConfirmation(id);
      }
    }, 300);
  }
}

// ── 7. WHATSAPP CONFIRMATION ──────────────────────────────────

function sendWAConfirmation(id) {
  const orders = loadOrders();
  const o = orders.find(x => x.id === id);
  if (!o || !o.phone) { showToast('No phone number on this order.'); return; }

  // Clean phone: strip spaces, dashes, +; ensure 91 prefix for India
  let phone = o.phone.replace(/[\s\-\(\)]/g, '');
  if (phone.startsWith('+')) phone = phone.slice(1);
  if (phone.startsWith('0'))  phone = '91' + phone.slice(1);
  if (!phone.startsWith('91') && phone.length === 10) phone = '91' + phone;

  const itemLines = (o.items || []).map((item, i) =>
    `${i+1}. ${item.name} \u00d7 ${item.qty} \u2014 \u20b9${item.price * item.qty}`
  ).join('\n');

  let msg;
  if (o.status === 'accepted') {
    msg =
`Hi ${o.customerName}! \uD83C\uDF38

Your order *${o.id}* has been *confirmed*! \u2705

Items:
${itemLines}

Total: \u20b9${(o.subtotal || 0).toLocaleString('en-IN')}

We\u2019ll prepare your order and reach out shortly with dispatch details and payment info.

Thank you for shopping with *Crafty Blooms*! \uD83D\uDC9B`;
  } else if (o.status === 'rejected') {
    msg =
`Hi ${o.customerName},

We\u2019re sorry, but your order *${o.id}* could not be fulfilled at this time. \uD83D\uDE22

Items requested:
${itemLines}

This may be due to a stock shortage or customisation constraints. Please reach out and we\u2019ll help you find an alternative!

\u2014 *Crafty Blooms* Team`;
  } else {
    msg =
`Hi ${o.customerName}! \uD83C\uDF38

Your order *${o.id}* is being processed.

Items:
${itemLines}

Total: \u20b9${(o.subtotal || 0).toLocaleString('en-IN')}

We\u2019ll confirm availability and share payment details shortly.

Thank you! \u2014 *Crafty Blooms*`;
  }

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
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

  const header = ['Order ID', 'Date', 'Customer', 'Phone', 'Address', 'Items', 'Subtotal', 'Status', 'Customer Note', 'Admin Note'];
  const rows = orders.map(o => {
    const date  = new Date(o.timestamp).toLocaleString('en-IN');
    const items = (o.items || []).map(i => `${i.name} x${i.qty}`).join(' | ');
    return [
      o.id,
      date,
      o.customerName || '',
      o.phone        || '',
      o.address      || '',
      items,
      o.subtotal || 0,
      o.status,
      o.note     || '',
      o.adminNote|| '',
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
