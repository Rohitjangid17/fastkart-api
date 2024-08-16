const express = require("express");
const { createProduct, getProductList, deleteProductById, getProductById, updateProductById } = require("../controllers/product.controller");
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

// Route to delete product
router.delete("/:id", async (req, res) => {
    const id = req.params["id"];
    await deleteProductById(id);
    res.send({ message: "Product successfully deleted" });
});

// Route to get product by id
router.get("/:id", async (req, res) => {
    const id = req.params["id"];
    const product = await getProductById(id);
    res.send(product);
});

// Route to update product by id
router.put("/:id", async (req, res) => {
    const model = req.body;
    const id = req.params["id"];
    await updateProductById(id, model);
    res.send({ message: "Product Update" });
});

module.exports = router;