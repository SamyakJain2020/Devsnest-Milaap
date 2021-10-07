const sequelize = require('../database/initializeDatabase');
const {Model, DataTypes} = require('sequelize');
const roles = require('../utils/roles');

class User extends Model{}

User.init({
    firstname: {
        type:DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull:false
    },
    phonenumber: {
        type: DataTypes.NUMBER,
        //TODO: Needs to look into unique
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            //TODO: Verify regex is working or not article refered https://www.w3resource.com/javascript/form/email-validation.php
            is: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        }
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    role: {
        type: DataTypes.NUMBER,
        defaultValue: roles.TeamMember
    },
    team: {
        type: DataTypes.STRING,
    },
    profile: {
        //TODO: Check by storing image on db
        type: DataTypes.BLOB
    }
});

module.exports = User;
