const express = require('express');
const router = express.Router();
const CRegister = require("../controllers/auth/register.js");
const CLogin = require("../controllers/auth/login.js");
const CGetById = require("../controllers/auth/getById.js");
const CUpdatePass = require("../controllers/user/updatePassword.js");
const CGetAllBook = require("../controllers/buku/getBuku.js");
const CQrCode = require("../controllers/qrCode.js");
const CDetailPinjam = require("../controllers/buku/detailPinjam.js");
const CPeminjaman = require("../controllers/buku/peminjaman.js");
const CPinjamById = require("../controllers/buku/getPinjam.js");
const CDPinjamById = require("../controllers/buku/getDetailPinjamById.js");
const CBukuById = require("../controllers/buku/getBukuById.js");


router.post("/register", CRegister.register);
router.post("/login", CLogin.login);
router.get("/getbyid/:idanggota", CGetById.getById);
router.put("/update/:idanggota",CUpdatePass.updatePassword)

router.get("/getallbook", CGetAllBook.getAllBuku);
router.get("/buku/getpinjambyid/:idanggota", CPinjamById.getPinjamById);
router.get("/buku/getdetpinjambyid/:idpinjam", CDPinjamById.getDetailPinjamById);
router.get("/buku/getbukubyid/:idbuku", CBukuById.getBukuById);

router.post("/qrcodes", CQrCode.qrPost);
router.post("/detailpinjam", CDetailPinjam.detailPinjam);
router.post("/peminjaman", CPeminjaman.peminjaman);
module.exports = router;