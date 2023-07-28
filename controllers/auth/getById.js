const { User } = require("../../models");

const getById = async (req, res) => {
    try {
        const { idanggota } = req.params;

        const user = await User.findOne({ where: { idanggota } });
        if (!user) {
            return res.status(404).send({
                message: "user not found",
            });
        }

        return res.status(200).send({
            status: true,
            message: "get user successfully",
            data: user,
        });
    } catch (err) {
        console.log(err);
    }
}
module.exports = {getById};