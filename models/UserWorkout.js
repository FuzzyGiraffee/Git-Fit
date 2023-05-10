const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class UserWorkout extends Model {}
//List of User assigned workouts pulled from plans
UserWorkout.init(
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
            allowNull:false,
            defaultValue: 1
        },
        tuesday:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: 1
        },
        wendesday:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: 1
        },
        tuesday:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: 1
        },
        thursday:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: 1
        },
        friday:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: 1
        },
        saturday:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: 1
        },
        sunday:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: 1
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
    modelName: 'userWorkout',
    }
)

module.exports = UserWorkout;