const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FitnessData extends Model {}

FitnessData.init(
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
    modelName: 'FitnessData',
    }
)

module.exports = FitnessData;