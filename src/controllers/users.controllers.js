const UsersService = require("../services/users.services");

const getUserById = async (req, res) => {

  try {

    const { id } = req.params;
    const result = await UsersService.getById(id);
    res.json(result);

  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserWhitCourses = async (req, res) => {

  try {

    const { id } = req.params;
    const result = await UsersService.getWithCourse(id);
    res.json(result);

  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createUser = async (req, res) => {

  try {

    const newUser = req.body;
    const result = await UsersService.create(newUser);
    res.status(201).json(result);

  } catch (error) {

  }
}

const usersUpdate = async (req, res) => {

  try {

    const { id } = req.params;
    const field = req.body;
    const result = await UsersService.update(field, id);
    res.status(201).json(result);

  } catch (error) {
    res.status(400).json(error.message);
  }
}

const addCourse = async (req, res) => {

  try {

    const course = req.body;
    const result = await UsersService.addCourses(course);
    res.status(201).json(result);

  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  getUserById,
  getUserWhitCourses,
  usersUpdate,
  createUser,
  addCourse,
};
