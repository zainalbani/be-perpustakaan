const express = require('express');
const router = express.Router();
const CRegister = require("../controllers/auth/register.js");
const CLogin = require("../controllers/auth/login.js");
const CGetById = require("../controllers/auth/getById.js");
const CUpdatePass = require("../controllers/user/updatePassword.js");
const CGetAllBook = require("../controllers/buku/getBuku.js");
const CSearch = require("../controllers/buku/searchBuku.js");
const CQrCode = require("../controllers/qrCode.js");
const CPinjamById = require("../controllers/buku/getPinjam.js");
const CDPinjamById = require("../controllers/buku/getDetailPinjamById.js");
const CBukuById = require("../controllers/buku/getBukuById.js");
const CDetailBuku = require("../controllers/buku/getDetailBuku.js");
const CPinjam = require("../controllers/buku/peminjaman.js");
const CGetIdPinjam = require("../controllers/buku/getIdPinjam.js");

router.post("/register", CRegister.register);
router.post("/login", CLogin.login);
router.get("/getbyid/:idanggota", CGetById.getById);
router.put("/update/:idanggota",CUpdatePass.updatePassword)

router.get("/getallbook", CGetAllBook.getAllBuku);
router.get("/search/book", CSearch.searchBook);
router.get("/buku/getpinjambyid/:idanggota", CPinjamById.getPinjamById);
router.get("/buku/getdetpinjambyid/:idpinjam", CDPinjamById.getDetailPinjamById);
router.get("/buku/getbookbyid/:idbuku", CBukuById.getBukuById);
router.get("/buku/getdetailbuku/:idbuku", CDetailBuku.getDetailBuku);
router.post("/buku/peminjaman/:idanggota", CPinjam.postPinjam);
router.get("/buku/getidpinjam", CGetIdPinjam.getIdPinjam);

router.put("/qrcodes", CQrCode.qrPost);
module.exports = router;