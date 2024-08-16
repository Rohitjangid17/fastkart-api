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

// delete product
const deleteProductById = async (productId) => {
    await Product.findByIdAndDelete(productId);
}

// update product by id
const updateProductById = async (productId, productModel) => {
    await Product.findOneAndUpdate({ _id: productId }, productModel);
}

// get product by id
const getProductById = async (productId) => {
    const product = await Product.findById(productId);
    return product?.toObject();
}

module.exports = { createProduct, getProductList, deleteProductById, updateProductById, getProductById };