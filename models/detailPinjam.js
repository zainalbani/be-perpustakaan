'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailPinjam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      DetailPinjam.belongsTo(models.Buku, {
        foreignKey: 'idbuku',
        as: 'buku'
       });
      DetailPinjam.belongsTo(models.Peminjaman, {
        foreignKey: 'idpinjam',
        as: 'pinjam'
       });


    }
  }
  DetailPinjam.init({
    iddetpinjam: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    idpinjam: DataTypes.STRING,
    idbuku: DataTypes.STRING,
    jml_buku: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DetailPinjam',
    tableName: 'tbdetailpinjam',
    timestamps: false,
  });
  return DetailPinjam;
};