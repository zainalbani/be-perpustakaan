const { Buku, sequelize } = require('../../models');
const {Op} = require ('sequelize');

const searchBook = async (req, res) => {
    try {
        const { keyword } = req.query;

        const id = await Buku.findAll({
            where: {
                [Op.or]: [
                    {
                        idbuku: {
                            [Op.like]: `%${keyword}%`
                        }
                    },

                    {
                        judul: {
                            [Op.like]: `%${keyword}%`
                        }
                    },
                    {
                        penerbit: {
                            [Op.like]: `%${keyword}%`
                        }
                    },
                    {
                        pengarang: {
                            [Op.like]: `%${keyword}%`
                        }
                    }
                ]
            }
        });
        if (id.length == 0) {
            return res.status(404).send({
                message: "buku not found",
            });
        }

        return res.status(200).send({
            status: true,
            message: "search buku successfully",
            data: id,
        });
    } catch (err) {
        console.log(err);
    }
}
module.exports = { searchBook };