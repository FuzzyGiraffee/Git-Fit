const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection');

class Plans extends Model {}
//Selection of avalible workout Plans. Conists of exercises over a period of time.
Plans.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
            }
        }, 
        date: {
            type: STRING(9),
            allowNull: false,
            validate: {
                isDate: true,
            },
        exercise_id: {
            type: DataTypes.INTEGER,
            references:{ 
                model: 'exercise',
                key: 'id'
            }
        },
        workout_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'workout',
                key: 'id'
            }
        },
        }
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