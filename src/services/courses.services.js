const Categories = require("../models/categories.model");
const Courses = require("../models/courses.model");
const Videos = require("../models/videos.model");

class CoursesService {

    static async getAll() {

        try {

            const result = await Courses.findAll({
                attributes: ["title", "description", "instructor"]
            });
            return result;

        } catch (error) {
            throw error;
        }
    }

    static async getAllResources() {

        try {

            const result = await Courses.findAll({

                attributes: ["id","title", "description", "instructor"],

                include: [
                    {
                        model: Categories,
                        as: "categories",
                        attributes: ["name"]
                    },
                    {
                        model: Videos,
                        as: "videos",
                        attributes: [ "title", "url"]
                    }
                ]
            });
            return result;

        } catch (error) {
            throw error;
        }
    }

    static async create(course) {

        try {

            const result = await Courses.create(course);
            return result;

        } catch (error) {
            throw error;
        }
    }

    static async update(field, id) {

        try {

            const result = await Courses.update(field, {
                where: { id }
            });
            return result;

        } catch (error) {
            throw error;
        }
    }
}

module.exports = CoursesService;