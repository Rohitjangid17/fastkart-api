const express = require("express");
const { createCategory, getCategoryList, deleteCategoryById, getCategoryById, updateCategoryById } = require("../controllers/category.controller");
const router = express.Router();

// Router to create category
router.post("/", async (req, res) => {
    try {
        const model = req.body;
        const category = await createCategory(model);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Router to get all category
router.get("/", async (req, res) => {
    try {
        const categories = await getCategoryList();
        res.status(201).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to delete category
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params["id"];
        await deleteCategoryById(id);
        res.status(201).json({ message: "Category successfully deleted" });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Route to get category by id
router.get("/:id", async (req, res) => {
    try {
        const id = req.params["id"];
        const category = await getCategoryById(id);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Route to update category by id
router.put("/:id", async (req, res) => {
    try {
        const model = req.body;
        const id = req.params["id"];
        await updateCategoryById(id, model);
        res.status(201).json({ message: "Category Update" });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;