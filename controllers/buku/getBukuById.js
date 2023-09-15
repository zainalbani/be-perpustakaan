const { Buku } = require('../../models');

const getBukuById = async (req, res) => {
    try {
        const { idbuku } = req.params;

        const id = await Buku.findOne({ where: { idbuku } });
        if (!id) {
            return res.status(404).send({
                message: "id not found",
            });
        }
        if (id.jml == 0) {
            return res.status(400).send({
                message: "stok buku tidak ada",
            });
        }

        return res.status(200).send({
            status: true,
            message: "get buku by id successfully",
            data: id,
        });
    } catch (err) {
        console.log(err);
    }
}
module.exports = {getBukuById};