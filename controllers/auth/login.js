const {User} = require("../../models");
const bcrypt = require("bcrypt");

const login = async (req,res) => {
    try {
        const { email, pass } = req.body;

        const user = await User.findOne({ where: { email } });
        if(!user) {
            return res.status(404).send({
                message: "user not found",
            });
        }
        
        if(pass != user.pass) {
            return res.status(401).send({
                message: "password is invalid",
            });
        }

        return res.status(200).send({
            status: true,
            message: "user logged in successfully",
            data: {
                user
            }
        });
    } catch (err){
        console.log(err);
    }
}

module.exports = {login};