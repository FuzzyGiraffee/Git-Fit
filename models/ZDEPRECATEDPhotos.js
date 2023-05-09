/**in purgatory, may be used at some point, for now not apart of MVP*/

const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection');

class Photos extends Model {}
//photos uploaded by user to be displayed to share
Photos.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        description: {
            type:STRING,
            allowNull: true,
        },
        //TODO: figure out how to reference images in a Database
        // photo: {
            
        // },   
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Photos',
    }
)

module.exports = Photos;