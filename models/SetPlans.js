const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plans extends Model {}

Plans.init(
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
    modelName: 'Plans',
    }
)

module.exports = Plans;