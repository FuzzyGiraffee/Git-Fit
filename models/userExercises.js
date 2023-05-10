const {  Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class UserExercises extends Model {}

UserExercises.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        workout_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'userworkout',
                key: 'id'
            },
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
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
        modelName: 'UserExercises',
        }
)

module.exports = UserExercises;