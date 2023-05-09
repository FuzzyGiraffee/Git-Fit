const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FitnessData extends Model {}
//users current fitness information, includes exercises and workouts. used to track progress
FitnessData.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        exercise_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'exercise',
                key: 'id'
            }
        },
        workout_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'workout',
                key: 'id'
            }
        }
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