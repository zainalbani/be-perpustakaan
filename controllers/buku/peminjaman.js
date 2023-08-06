const { Peminjaman } = require ("../../models");


const peminjaman = async (req, res, next) => {
    try {
        const {
            idpinjam,
            idanggota,
            tglpinjam,
            idpetugas
        } = req.body;
        
        const data = await Peminjaman.create({
            idpinjam: idpinjam,
            tglpinjam: tglpinjam,
            idanggota: idanggota,
            idpetugas: idpetugas

        })

        return res.status(200).json({
            status: true,
            message: "Peminjaman berhasil",
            data: data,
        });
    } catch(error) {
        next(error);
    };
};

module.exports = {peminjaman};