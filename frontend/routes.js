const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "HANDWRITING WORK FROM HOME API Running"
    });
});

router.post("/register", (req, res) => {

    res.json({
        success: true,
        status: "Pending",
        message: "Registration Submitted Successfully"
    });

});

module.exports = router;
