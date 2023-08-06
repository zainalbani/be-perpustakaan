const { Peminjaman } = require('../../models');

const getPinjamById = async (req, res) => {
    try {
        const { idanggota } = req.params;

        const user = await Peminjaman.findAll({ where: { idanggota } });
        if (!user) {
            return res.status(404).send({
                message: "user not found",
            });
        }

        return res.status(200).send({
            status: true,
            message: "get pinjam by id successfully",
            data: user,
        });
    } catch (err) {
        console.log(err);
    }
}
module.exports = {getPinjamById};