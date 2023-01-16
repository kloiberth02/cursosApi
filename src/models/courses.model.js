const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const Courses = db.define('courses', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING
    },
    instructor: {
        type: DataTypes.STRING
    }
});

module.exports = Courses;