const CoursesService = require("../services/courses.services")


const getAllCourses = async (req, res) => {

    try {

        const result = await CoursesService.getAll();
        res.json(result);

    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getAllResources = async (req, res) => {

    try {

        const result = await CoursesService.getAllResources();
        res.json(result);

    } catch (error) {
        res.status(400).json(error.message);
    }
}

const createCourses = async (req, res) => {

    try {

        const course = req.body;
        const result = await CoursesService.create(course);
        res.status(201).json(result);

    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateCourses = async (req, res) => {

    try {

        const { id } = req.params;
        const field = req.body;
        const result = await CoursesService.update(field, id);
        res.status(201).json(result);

    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllCourses,
    getAllResources,
    createCourses,
    updateCourses
};