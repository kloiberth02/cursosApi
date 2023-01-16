const CategoriesService = require("../services/categories.services");


const createCategories = async (req, res) => {

    try {
        const category = req.body;
        const result = await CategoriesService.create(category);
        res.status(201).json(result);

    } catch (error) {
        res.status(400).json(error.message);      
    }
}

const deleteCategories = async (req, res) => {

    try {
        
        const id = req.body;
        const result = await CategoriesService.deleted(id);
        res.status(200);

    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports =  {
    createCategories,
    deleteCategories,
}