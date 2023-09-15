"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            User.hasMany(models.Peminjaman,
                {
                    foreignKey: 'idanggota',
                    as: "id_anggota"
                });
        }
    }
    User.init(
        {
            idanggota: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            kategori: DataTypes.STRING,
            idkelas: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true
            },
            nama: DataTypes.STRING,
            jk: DataTypes.STRING,
            nohp: DataTypes.STRING,
            alamat: DataTypes.STRING,
            email: DataTypes.STRING,
            status: DataTypes.STRING,
            keterangan: DataTypes.STRING,
            pass: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "User",
            tableName: "tbanggota",
            timestamps: false,
            indexes: [
                {
                    unique: true, // This will create a unique index on the 'username' column
                    fields: ['idkelas'],
                },
            ]
        }
    );
    return User;
};