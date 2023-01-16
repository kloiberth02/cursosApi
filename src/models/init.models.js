const UsersCourses = require('./usersCousers.model');
const Users = require('./users.model');
const Courses = require('./courses.model');
const Categories = require('./categories.model');
const Videos = require('./videos.model');

const initModels = () => {

    //relacion de muchos a muchos
    UsersCourses.belongsTo(Users, {as: "author", foreignKey: "user_id"});
    Users.hasMany(UsersCourses, {as: "courses", foreignKey: "user_id"});

    UsersCourses.belongsTo(Courses, {as: "courses", foreignKey: "course_id"});
    Courses.hasMany(UsersCourses, {as: "author", foreignKey: "course_id"});

    // relacion de uno a muchos
    Videos.belongsTo(Courses, {as: "courses", foreignKey: "course_id"});
    Courses.hasMany(Videos, {as: "videos", foreignKey: "course_id"});

    Categories.belongsTo(Courses, {as: "course", foreignKey: "course_id"});
    Courses.hasMany(Categories, {as: "categories", foreignKey: "course_id"});
}

module.exports = initModels;