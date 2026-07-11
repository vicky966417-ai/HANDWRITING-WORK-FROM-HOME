const express = require("express");
const router = express.Router();

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "meenarinku";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Admin@123";

router.post("/login", (req, res) => {

    const { username, password } = req.body;

    if (
        username === ADMIN_USERNAME &&
        password === ADMIN_PASSWORD
    ) {

        return res.json({
            success: true,
            message: "Login Successful"
        });

    }

    return res.status(401).json({
        success: false,
        message: "Invalid Username or Password"
    });

});

module.exports = router;
