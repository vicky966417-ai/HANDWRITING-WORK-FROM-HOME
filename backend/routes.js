const express = require("express");
const router = express.Router();

const db = require("./database");

router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "API Working"
    });
});

router.post("/register", (req, res) => {

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

    const registrationId = "HWH" + Date.now();

    db.run(
        `
        INSERT INTO registrations (
            registrationId,
            fullName,
            mobile,
            houseNo,
            area,
            city,
            district,
            pinCode,
            state,
            fee
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
            registrationId,
            fullName,
            mobile,
            houseNo,
            area,
            city,
            district,
            pinCode,
            state,
            fee
        ],
        function(err) {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Database Error"
                });
            }

            res.json({
                success: true,
                registrationId,
                status: "Pending",
                message: "Registration Submitted Successfully"
            });

        }
    );

});

module.exports = router;
