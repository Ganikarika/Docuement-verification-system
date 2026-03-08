const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const path = require('path');

// Path to db.json
const file = path.join(__dirname, 'db.json');
const adapter = new JSONFile(file);

// ✅ Provide default data here
const defaultData = { documents: [] };

const db = new Low(adapter, defaultData);

async function initDB() {
  await db.read();
  db.data ||= defaultData;
  await db.write();
}

initDB();

module.exports = db;
