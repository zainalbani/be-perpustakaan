const { Buku } = require ("../models");

const qr = require('qr-image');

const qrPost = async (req, res, next) => {
    try {
        const { idbuku } = req.body;

        const buffer = qr.imageSync(idbuku);

        const dataqr = buffer.toString('base64');

        await Buku.findOne({ where: { idbuku } });

        await Buku.update({
            qrcode: dataqr
        }, { where: { idbuku }})

        return res.status(200).json({
            status: true,
            message: "update qr successfull",
            data: dataqr,
        });
    } catch(error) {
        next(error);
    };
};

module.exports = {qrPost};