const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    createdAt: Date
});

const Category = mongoose.model("categories", categorySchema);
module.exports = Category;