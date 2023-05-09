const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}
//List of User assigned workouts pulled from plans
Workout.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        //TODO: add user association "one user has one plan"
        
        monday:{
            type: DataTypes.BOOLEAN,
        },
        tuesday:{
            type: DataTypes.BOOLEAN
        },
        wendesday:{
            type: DataTypes.BOOLEAN
        },
        tuesday:{
            type: DataTypes.BOOLEAN
        },
        thursday:{
            type: DataTypes.BOOLEAN
        },
        friday:{
            type: DataTypes.BOOLEAN
        },
        saturday:{
            type: DataTypes.BOOLEAN
        },
        sunday:{
            type: DataTypes.BOOLEAN
        },
        plan_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'plans',
                key: 'id'
            }
        },
            user_id:{
                type: DataTypes.INTEGER,
                    references:{
                        model: 'user',
                        id: 'id'
                    }
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