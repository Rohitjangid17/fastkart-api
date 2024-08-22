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

// delete category
const deleteCategoryById = async (categoryId) => {
    await Category.findByIdAndDelete(categoryId);
}

// get category by id
const getCategoryById = async (categoryId) => {
    const category = await Category.findById(categoryId);
    return category?.toObject();
}

// update category by id
const updateCategoryById = async (categoryId, categoryModel) => {
    await Category.findOneAndUpdate({ _id: categoryId }, categoryModel);
}

module.exports = { createCategory, getCategoryList, deleteCategoryById, getCategoryById, updateCategoryById };