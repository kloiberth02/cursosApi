const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Courses = require("./courses.model");


const Categories = db.define('categories', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
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
    }
},
{
    timestamps: false
});

module.exports = Categories;