const { DetailPinjam } = require('../../models');

const getDetailPinjamById = async (req, res) => {
    try {
        const { idpinjam } = req.params;

        const id = await DetailPinjam.findAll({ where: { idpinjam } });
        if (!id) {
            return res.status(404).send({
                message: "id not found",
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