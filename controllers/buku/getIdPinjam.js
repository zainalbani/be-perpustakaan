const { Peminjaman } = require("../../models");
const { Op } = require('sequelize');

const getIdPinjam = async (req, res) => {
    try {
        function formatDateWithoutDashes(date) {
            const year = date.getFullYear().toString();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');

            return `${year}${month}${day}`;
        }
        const today = new Date();
        const date = formatDateWithoutDashes(today);
        const id = await Peminjaman.findOne({
            attributes: ['idpinjam'],
            where: {
                idpinjam: {
                    [Op.like]: `${date}%`,

                },
            },
            order: [['idpinjam', 'DESC']],
        });
        console.log(date);

        return res.status(200).send({
            status: true,
            message: "get buku by id successfully",
            data: id,
        });
    } catch (err) {
        console.log(err);
    }
}
module.exports = { getIdPinjam };