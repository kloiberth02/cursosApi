const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Courses = require("./courses.model");


const Videos = db.define('videos', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "course_id",
        references: {
            model: Courses,
            key: "id"
        }
    },
});

module.exports = Videos;