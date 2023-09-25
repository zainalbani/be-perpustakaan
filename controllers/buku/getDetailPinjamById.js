const { DetailPinjam, Buku, Peminjaman, sequelize } = require ('../../models');
const { Sequelize } = require('sequelize');

const getDetailPinjamById = async (req, res) => {
    try {
        const { idpinjam } = req.params;
        const today = new Date();

        const id = await DetailPinjam.findOne({
            where: { idpinjam },
            include: [
                {
                    model: Buku,
                    as: "buku",
                },
                {
                    model: Peminjaman,
                    as: "pinjam"
                }
            ],
        });
        if (!id) {
            return res.status(404).send({
                message: "data not found",
            });
        }
        
        return res.status(200).send({
            status: true,
            message: "get detail pinjam by id successfully",
            data: id,
        });
    } catch (err) {
        console.log(err);
    }
}
module.exports = {getDetailPinjamById};