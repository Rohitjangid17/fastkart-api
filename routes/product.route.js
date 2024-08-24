const express = require("express");
const { createProduct, getProductList, deleteProductById, getProductById, updateProductById } = require("../controllers/product.controller");
const router = express.Router();

// Router to create Product
router.post("/", async (req, res) => {
    try {
        const model = req.body;
        const product = await createProduct(model);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Router to get all products
router.get("/", async (req, res) => {
    try {
        const products = await getProductList();
        res.status(201).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to delete product
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params["id"];
        await deleteProductById(id);
        res.status(201).json({ message: "Product successfully deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to get product by id
router.get("/:id", async (req, res) => {
    try {
        const id = req.params["id"];
        const product = await getProductById(id);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to update product by id
router.put("/:id", async (req, res) => {
    try {
        const model = req.body;
        const id = req.params["id"];
        await updateProductById(id, model);
        res.status(201).json({ message: "Product successfully deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;