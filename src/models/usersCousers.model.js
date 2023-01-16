const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Courses = require("./courses.model");
const Users = require("./users.model");


const UsersCourses = db.define('users_courses', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
        references: {
            model: Users,
            key: "id"
        }
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

module.exports = UsersCourses;