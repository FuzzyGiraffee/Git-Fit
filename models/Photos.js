const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Photos extends Model {}

Photos.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Photos',
    }
)

module.exports = Photos;