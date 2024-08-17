const Category = require("../models/category.model");

// create category
const createCategory = async (categoryModel) => {
    const category = new Category({
        ...categoryModel
    });
    await category.save();
    return category.toObject();
}

// get category list
const getCategoryList = async () => {
    const categories = await Category.find();
    return categories.map(category => category.toObject());
}

module.exports = { createCategory, getCategoryList };