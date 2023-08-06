const { Qrcode } = require ("../models");

const qr = require('qr-image');

const qrPost = async (req, res, next) => {
    try {
        const { idbuku } = req.body;
        console.log(idbuku);

        const buffer = qr.imageSync(idbuku);

        const dataqr = buffer.toString('base64');
        
        const createdata = await Qrcode.create({
            idbuku: idbuku,
            qrcode: dataqr
        })

        return res.status(200).json({
            status: true,
            message: "create qr successfull",
            data: createdata,
        });
    } catch(error) {
        next(error);
    };
};

module.exports = {qrPost};