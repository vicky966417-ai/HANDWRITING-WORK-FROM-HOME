const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "HANDWRITING WORK FROM HOME API Running"
    });
});

router.post("/register", (req, res) => {

    const registration = {
        fullName: req.body.fullName,
        mobile: req.body.mobile,
        houseNo: req.body.houseNo,
        area: req.body.area,
        city: req.body.city,
        district: req.body.district,
        pinCode: req.body.pinCode,
        state: req.body.state,
        fee: req.body.fee,
        status: "Pending"
    };

    console.log(registration);

    res.json({
        success: true,
        message: "Registration Submitted Successfully",
        data: registration
    });

});

module.exports = router;
