const { DetailPinjam } = require ("../../models");


const detailPinjam = async (req, res, next) => {
    try {
        const {
            idpinjam,
            idbuku,
            jml_buku
        } = req.body;
        
        const data = await DetailPinjam.create({
            idpinjam: idpinjam,
            idbuku: idbuku,
            jml_buku: jml_buku,

        })

        return res.status(200).json({
            status: true,
            message: "detail pinjam successfull",
            data: data,
        });
    } catch(error) {
        next(error);
    };
};

module.exports = {detailPinjam};