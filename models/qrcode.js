'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Qrcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Qrcode.init({
    idbuku: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    qrcode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Qrcode',
    tableName: 'tbqrcode',
    timestamps: false,
  });
  return Qrcode;
};