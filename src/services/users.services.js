const Courses = require("../models/courses.model");
const Users = require("../models/users.model");
const UsersCourses = require("../models/usersCousers.model");

class UsersService {

  static async getById(id) {

    try {

      const result = await Users.findByPk(id, {
        attributes: ["firstName", "lastName", "email"],

      });

      return result;

    } catch (error) {
      throw error;
    }
  }

  static async getWithCourse(id) {

    try {

      const result = await Users.findOne({
        where: { id },
        attributes: ["firstName", "lastName", "email"],
        include: {
          model: UsersCourses,
          as: "courses",
          attributes: ["id"],
          include: {
            model: Courses,
            as: "courses",
            attributes: ["id", "title", "description", "instructor"]
          }
        }
      });

      return result;

    } catch (error) {
      throw error;
    }
  }
  
    static async create(user) {
  
      try {
        
        const result = await Users.create(user);
        return result;
  
      } catch (error) {
        throw error;
      }
    }

  static async update(field, id) {

    try {

      const result = await Users.update(field, {
        where: { id }
      });

      return result;

    } catch (error) {
      throw error;
    }
  }

  static async addCourses(course) {

    try {
      
      const result = await UsersCourses.create(course)

      return result;

    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersService;
