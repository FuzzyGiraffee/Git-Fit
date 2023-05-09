const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection');
// "":"",
class Plans extends Model {}
//Selection of avalible workout Plans. Conists of exercises, number of days a week recommended
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
        //comprised of many
        exercise_id: {
            type: DataTypes.INTEGER,
            references:{ 
                model: 'exercise',
                key: 'id'
            }
        },
        //is apart of user workout
        workout_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'userworkout',
                key: 'id'
            }
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