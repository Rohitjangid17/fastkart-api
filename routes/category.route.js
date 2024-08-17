const express = require("express");
const { createCategory, getCategoryList } = require("../controllers/category.controller");
const router = express.Router();

// Router to create category
router.post("/", async (req, res) => {
    try {
        const model = req.body;
        const category = await createCategory(model);
        res.status(201).send(category);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Router to get all category
router.get("/", async (req, res) => {
    try {
        const categories = await getCategoryList();
        res.send(categories);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;