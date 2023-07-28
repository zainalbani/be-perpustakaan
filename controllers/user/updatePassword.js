const { User } = require("../../models");

module.exports = {
    updatePassword: async (req, res) => {
        try {
            const { idanggota } = req.params;

            const { oldPassword, newPassword, confirmNewPassword } = req.body;

            const findUser = await User.findOne({ where: { idanggota } });

            if (oldPassword != findUser.pass) {
                return res.status(400).send({
                    status: false,
                    message: "Old password is wrong",
                });
            }

            if (newPassword !== confirmNewPassword) {
                return res.status(400).send({
                    status: false,
                    message: "New password and confirm new password is not same",
                });
            }

            const user = await User.update(
                {
                    pass: newPassword,
                },
                { where: { idanggota } }
            );

            return res.status(200).send({
                status: true,
                message: "Password has been updated",
                data: user,
            });
        } catch (err) {
            console.log(err);
        }
    },
};