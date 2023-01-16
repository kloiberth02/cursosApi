const Categories = require("../models/categories.model");


class CategoriesService {

    static async create(category) {

        try {

            const result = await Categories.create(category);
            return result;

        } catch (error) {
            throw error;
        }
    }

    static async deleted(id) {

        try {

            const result = await Categories.destroy({
                where: { id },
            });
            return result;

        } catch (error) {
            throw error;
        }
    }
}

module.exports = CategoriesService;