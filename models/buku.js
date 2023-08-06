'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Buku.init({
    idbuku: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    idkatbuku: DataTypes.STRING,
    idrak: DataTypes.STRING,
    judul: DataTypes.STRING,
    penerbit: DataTypes.STRING,
    pengarang: DataTypes.STRING,
    thnterbit: DataTypes.INTEGER,
    keterangan: DataTypes.STRING,
    jml: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Buku',
    tableName: 'tbbuku',
    timestamps: false,
  });
  return Buku;
};