const Product = require("../models/product.model");

// create product
const createProduct = async (productModel) => {
    const product = new Product({
        ...productModel
    });
    await product.save();
    return product.toObject();
}

// get product list
const getProductList = async () => {
    const productList = await Product.find();
    return productList.map(product => product.toObject());
}

module.exports = { createProduct, getProductList };