const { Buku } = require("../../models")

module.exports = {
  getAllBuku: async (req, res) => {
    try {
      const buku = await Buku.findAll();

      if (!buku) {
        return res.status(404).send({
          status: false,
          message: "no books found",
          data: null,
        });
      }

      return res.status(200).send({
        status: true,
        message: "get books successfull",
        data: buku,
      });
    } catch (err) {
      console.log(err);
    }
  },
}