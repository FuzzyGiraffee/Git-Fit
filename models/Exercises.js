const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


/**TODO: get list of exercises for each plan from kaileon*/

class Exercises extends Model {}
//Individual excercises that are avalible
//TODO: Finish this schema
Exercises.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            uniqe: true,
          },
        weight: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        repitiions: {
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue:"3"
        },
        recomended_number_of_days: {
            type:DataTypes.INTEGER,

        },
        plan_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'plans',
                key: 'id'
            }
        }
    
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Exercises',
    }
)

module.exports = Exercises;