
const UserModel = require("../../models").User;

const register = async (req, res) => {
    const payload = req.body;

    // payload.pass = await bcrypt.hashSync(payload.pass, 8);

    try{
        await UserModel.create(payload);
        return res.status(201).json({
            status: "success",
            msg: "Registrasi berhasil",
            data: payload,
        });
    } catch (err) {
        console.log(err);
    }

    res.send(payload);
    console.log(payload);
};

module.exports = {register}