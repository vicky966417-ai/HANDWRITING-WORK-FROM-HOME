const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./handwriting.db", (err) => {
    if (err) {
        console.error("Database Error:", err.message);
    } else {
        console.log("Database Connected Successfully");
    }
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS registrations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fullName TEXT,
            mobile TEXT,
            houseNo TEXT,
            areaName TEXT,
            city TEXT,
            district TEXT,
            pinCode TEXT,
            state TEXT,
            plan TEXT,
            paymentScreenshot TEXT,
            status TEXT DEFAULT 'Pending',
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
});

module.exports = db;
