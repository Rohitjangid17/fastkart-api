const express = require("express");
const { createProduct, getProductList } = require("../controllers/product.controller");
const router = express.Router();


// Router to create Product
router.post("/", async (req, res) => {
    const model = req.body;
    const product = await createProduct(model);
    res.send(product);
});

// Router to get all products
router.get("/", async (req, res) => {
    const products = await getProductList();
    res.send(products);
});

module.exports = router;