const express = require("express");
const cors = require("cors");
const multer = require("multer");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create uploads folder
if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads");
}

// SQLite Database
const db = new sqlite3.Database("./database.db");

// Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Create Table
db.run(`
CREATE TABLE IF NOT EXISTS registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT,
    mobile TEXT,
    houseNo TEXT,
    area TEXT,
    city TEXT,
    district TEXT,
    pinCode TEXT,
    state TEXT,
    fee TEXT,
    screenshot TEXT,
    status TEXT
)
`);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "API Working Successfully"
    });
});
app.post("/api/register", upload.single("paymentScreenshot"), (req, res) => {

    const {
        fullName,
        mobile,
        houseNo,
        area,
        city,
        district,
        pinCode,
        state,
        fee
    } = req.body;

    const screenshot = req.file ? req.file.filename : "";

    db.run(
        `INSERT INTO registrations
        (fullName,mobile,houseNo,area,city,district,pinCode,state,fee,screenshot,status)
        VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
        [
            fullName,
            mobile,
            houseNo,
            area,
            city,
            district,
            pinCode,
            state,
            fee,
            screenshot,
            "Pending"
        ],
        function (err) {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.json({
                success: true,
                message: "Registration Submitted Successfully",
                registrationId: this.lastID,
                status: "Pending"
            });

        }
    );

});

app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
