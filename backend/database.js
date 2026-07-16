
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./handwriting.db", (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("SQLite Database Connected");
    }
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS registrations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            registrationId TEXT,
            fullName TEXT,
            mobile TEXT,
            houseNo TEXT,
            area TEXT,
            city TEXT,
            district TEXT,
            pinCode TEXT,
            state TEXT,
            fee TEXT,
            status TEXT DEFAULT "Pending",
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
});

module.exports = db;
