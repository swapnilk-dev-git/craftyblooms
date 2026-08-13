/**
 * ============================================================
 *  Crafty Blooms — Google Apps Script Backend
 *  Google Sheet order store for cross-device order sync
 * ============================================================
 *
 *  DEPLOYMENT INSTRUCTIONS (one-time setup, ~3 minutes)
 *  ─────────────────────────────────────────────────────
 *  1. Go to script.google.com → click "New Project"
 *  2. Delete any existing code in the editor
 *  3. Paste the entire contents of this file
 *  4. Click the floppy-disk icon (Save) — name it "CraftyBlooms"
 *  5. Click "Deploy" (top-right) → "New deployment"
 *  6. Click the gear icon next to "Type" → select "Web app"
 *  7. Set:
 *       Description:        CraftyBlooms Orders API
 *       Execute as:         Me  (your Google account)
 *       Who has access:     Anyone
 *  8. Click "Deploy" → click "Authorise access"
 *     → choose your Google account → click "Allow"
 *  9. Copy the Web App URL shown — it ends with /exec
 * 10. Open Website/catalog.js and paste the URL into GAS_URL
 * 11. Open Website/admin.js  and paste the URL into GAS_URL
 * 12. Commit + deploy to GitHub Pages (run the subtree push)
 *
 *  The Google Sheet is auto-created on the first order — no
 *  manual Sheet setup needed.
 *
 *  TO UPDATE THE SCRIPT AFTER EDITS:
 *  → Deploy → "Manage deployments" → edit pencil → New version
 *  → Deploy. The URL stays the same.
 * ============================================================
 */

// ── SHEET CONFIG ─────────────────────────────────────────────

var SHEET_NAME    = 'Orders';
var SPREADSHEET_TITLE = 'Crafty Blooms — Orders';

var COL = {
  ID:            1,
  TIMESTAMP:     2,
  CUSTOMER_NAME: 3,
  PHONE:         4,
  ADDRESS:       5,
  ITEMS:         6,   // JSON string
  SUBTOTAL:      7,
  STATUS:        8,
  NOTE:          9,
  ADMIN_NOTE:    10
};

var HEADERS = [
  'OrderID', 'Timestamp', 'CustomerName', 'Phone', 'Address',
  'Items', 'Subtotal', 'Status', 'CustomerNote', 'AdminNote'
];

// ── CORS / RESPONSE HELPERS ───────────────────────────────────

function jsonResponse(data, statusCode) {
  var output = ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
  return output;
}

function ok(data)  { return jsonResponse({ ok: true,  data: data  }); }
function err(msg)  { return jsonResponse({ ok: false, error: msg  }); }

// ── SHEET HELPERS ─────────────────────────────────────────────

function getOrCreateSheet() {
  var files = DriveApp.getFilesByName(SPREADSHEET_TITLE);
  var ss;
  if (files.hasNext()) {
    ss = SpreadsheetApp.open(files.next());
  } else {
    ss = SpreadsheetApp.create(SPREADSHEET_TITLE);
  }

  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  // Write header row if sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight('bold')
      .setBackground('#1a1a1a')
      .setFontColor('#ffffff');
    sheet.setFrozenRows(1);
    // Column widths
    sheet.setColumnWidth(COL.ID,            140);
    sheet.setColumnWidth(COL.TIMESTAMP,     160);
    sheet.setColumnWidth(COL.CUSTOMER_NAME, 140);
    sheet.setColumnWidth(COL.PHONE,         120);
    sheet.setColumnWidth(COL.ADDRESS,       220);
    sheet.setColumnWidth(COL.ITEMS,         280);
    sheet.setColumnWidth(COL.SUBTOTAL,       90);
    sheet.setColumnWidth(COL.STATUS,         90);
    sheet.setColumnWidth(COL.NOTE,          180);
    sheet.setColumnWidth(COL.ADMIN_NOTE,    180);
  }
  return sheet;
}

function findRowById(sheet, orderId) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return -1;
  var ids = sheet.getRange(2, COL.ID, lastRow - 1, 1).getValues();
  for (var i = 0; i < ids.length; i++) {
    if (ids[i][0] === orderId) return i + 2; // 1-based row, skip header
  }
  return -1;
}

function rowToOrder(row) {
  var itemsRaw = row[COL.ITEMS - 1];
  var items = [];
  try { items = JSON.parse(itemsRaw); } catch(e) { items = []; }
  return {
    id:           row[COL.ID            - 1],
    timestamp:    row[COL.TIMESTAMP     - 1],
    customerName: row[COL.CUSTOMER_NAME - 1],
    phone:        row[COL.PHONE         - 1],
    address:      row[COL.ADDRESS       - 1],
    items:        items,
    subtotal:     Number(row[COL.SUBTOTAL    - 1]) || 0,
    status:       row[COL.STATUS        - 1] || 'pending',
    note:         row[COL.NOTE          - 1] || '',
    adminNote:    row[COL.ADMIN_NOTE    - 1] || ''
  };
}

// ── doGET — return all orders as JSON array ───────────────────

function doGet(e) {
  try {
    var sheet = getOrCreateSheet();
    var lastRow = sheet.getLastRow();
    if (lastRow < 2) return ok([]);

    var data = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues();
    var orders = data
      .filter(function(row) { return row[COL.ID - 1] !== ''; })
      .map(rowToOrder)
      .reverse(); // newest first (Sheet appends at bottom, we reverse for admin)

    return ok(orders);
  } catch(e) {
    return err('doGet failed: ' + e.message);
  }
}

// ── doPOST — action router ────────────────────────────────────

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var action  = payload.action;

    if (action === 'create_order')  return createOrder(payload.order);
    if (action === 'update_status') return updateField(payload.id, COL.STATUS,     payload.status);
    if (action === 'update_note')   return updateField(payload.id, COL.ADMIN_NOTE, payload.adminNote);
    if (action === 'delete_order')  return deleteOrder(payload.id);

    return err('Unknown action: ' + action);
  } catch(e) {
    return err('doPost failed: ' + e.message);
  }
}

// ── ACTION HANDLERS ───────────────────────────────────────────

function createOrder(order) {
  if (!order || !order.id) return err('Missing order.id');
  var sheet = getOrCreateSheet();

  // Deduplicate — don't double-insert if customer retries
  if (findRowById(sheet, order.id) !== -1) return ok('duplicate');

  var row = [
    order.id           || '',
    order.timestamp    || new Date().toISOString(),
    order.customerName || '',
    order.phone        || '',
    order.address      || '',
    JSON.stringify(order.items || []),
    order.subtotal     || 0,
    order.status       || 'pending',
    order.note         || '',
    order.adminNote    || ''
  ];
  sheet.appendRow(row);

  // Colour-code status
  var newRow = sheet.getLastRow();
  colourStatusCell(sheet, newRow, order.status || 'pending');

  return ok('created');
}

function updateField(orderId, colIndex, value) {
  if (!orderId) return err('Missing id');
  var sheet = getOrCreateSheet();
  var row   = findRowById(sheet, orderId);
  if (row === -1) return err('Order not found: ' + orderId);
  sheet.getRange(row, colIndex).setValue(value);
  if (colIndex === COL.STATUS) colourStatusCell(sheet, row, value);
  return ok('updated');
}

function deleteOrder(orderId) {
  if (!orderId) return err('Missing id');
  var sheet = getOrCreateSheet();
  var row   = findRowById(sheet, orderId);
  if (row === -1) return ok('not_found'); // already gone — treat as success
  sheet.deleteRow(row);
  return ok('deleted');
}

// ── VISUAL HELPERS ────────────────────────────────────────────

function colourStatusCell(sheet, rowIndex, status) {
  var cell = sheet.getRange(rowIndex, COL.STATUS);
  if (status === 'accepted') {
    cell.setBackground('#dcfce7').setFontColor('#15803d');
  } else if (status === 'rejected') {
    cell.setBackground('#fee2e2').setFontColor('#c8102e');
  } else {
    cell.setBackground('#fef3c7').setFontColor('#d97706');
  }
}
