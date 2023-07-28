const express = require('express');
const router = express.Router();
const CRegister = require("../controllers/auth/register.js")

router.get("/", (req, res) => {
    res.send("ok");
});

router.post("/register", CRegister.register);
module.exports = router;