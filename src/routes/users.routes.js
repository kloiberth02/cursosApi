const { Router } = require("express");
const { getUserById, getUserWhitCourses, usersUpdate, createUser, addCourse } = require("../controllers/users.controllers");

const router = Router();

router.get("/users/:id", getUserById);
router.get("/users/:id/courses", getUserWhitCourses);

router.post("/users", createUser);
router.post("/users/add/courses", addCourse);

router.put("/users/:id", usersUpdate);


module.exports = router;
