const { Peminjaman, DetailPinjam, Buku } = require("../../models");
const {sequelize} = require("../../models");
const postPinjam = async (req, res) => {
    try {
        const today = new Date();
        const { idanggota } = req.params;
        const {
            idpinjam, idbuku
        } = req.body;


        const find = await Peminjaman.findAll({
            where: { idanggota },
            include: [
                {
                    model: DetailPinjam,
                    as: "pinjam",
                }
            ]
        });
        console.log(find)
        if (find.length >= 2) {
            return res.status(400).send({
                status: false,
                message: "anda sudah mencapai batas peminjaman buku",
                data: null,
            })
        };
        const findBuku = await Buku.findOne({ where: { idbuku } });
        if(findBuku.jml == 0){
            return res.status(400).send({
                status: false,
                message: "stok buku habis",
                data: null,
            });
        };
        const data = await Peminjaman.create({
            idpinjam: idpinjam,
            tglpinjam: today.toISOString(),
            idanggota: idanggota,
            idpetugas: 1,
            status: "Pinjam",
            estimasi_tgl_kembali: sequelize.literal('DATE_ADD(NOW(), INTERVAL 7 DAY)')
        });


        await DetailPinjam.create({
            idpinjam,
            idbuku: idbuku,
            jml_buku: "1",
            status: "Pinjam"

        });
        await Buku.update({
            jml: findBuku.jml - 1
        },
            { where: { idbuku } }
        );
        return res.status(200).send({
            status: true,
            message: "Peminjaman Berhasil",
            data: data,
        });
    } catch (err) {
        console.log(err);
    }
}
module.exports = { postPinjam }