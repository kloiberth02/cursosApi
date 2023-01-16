const { Router } = require("express");
const { getAllCourses, getAllResources, createCourses, updateCourses } = require("../controllers/courses.controllers");


const router = Router();

router.get("/courses", getAllCourses);
router.get("/courses/categories/videos", getAllResources);

router.post("/courses", createCourses);

router.put("/courses/:id", updateCourses);

module.exports = router;