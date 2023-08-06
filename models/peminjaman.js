'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Peminjaman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Peminjaman.init({
    idpinjam: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    tglpinjam: DataTypes.DATE,
    idanggota: DataTypes.STRING,
    idpetugas: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Peminjaman',
    tableName: 'tbpeminjaman',
    timestamps: false,
  });
  return Peminjaman;
};