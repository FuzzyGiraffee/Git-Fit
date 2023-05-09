const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}
//List of User assigned workouts
Workout.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        //TODO: add user association "one user has one plan"
        plan_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'plans',
                key: 'id'
            }
        //TODO: add days fields
          },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Workout',
    }
)

module.exports = Workout;