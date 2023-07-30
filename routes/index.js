const express = require('express');
const router = express.Router();
const CRegister = require("../controllers/auth/register.js");
const CLogin = require("../controllers/auth/login.js");
const CGetById = require("../controllers/auth/getById.js");
const CUpdatePass = require("../controllers/user/updatePassword.js");
const CGetAllBook = require("../controllers/buku/getBuku.js")


router.post("/register", CRegister.register);
router.post("/login", CLogin.login);
router.get("/getbyid/:idanggota", CGetById.getById);
router.put("/update/:idanggota",CUpdatePass.updatePassword)

router.get("/getallbook", CGetAllBook.getAllBuku);

module.exports = router;