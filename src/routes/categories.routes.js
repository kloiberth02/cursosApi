const { Router } = require("express");
const { createCategories, deleteCategories } = require("../controllers/categories.controllers");


const router = Router();

router.post("/categories", createCategories);

router.delete("/categories", deleteCategories);

module.exports = router;