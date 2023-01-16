const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Users = db.define('users', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        field: "first_name"
    },
    lastName: {
        type: DataTypes.STRING,
        field: "last_name"
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }        
    }
});

module.exports = Users;