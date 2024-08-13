const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    warrantyInformation: String,
    shippingInformation: String,
    availabilityStatus: String,
    reviews: [
        {
            rating: Number,
            comment: String,
            date: Date,
            reviewerName: String,
            reviewerEmail: String
        }
    ],
    returnPolicy: String,
    minimumOrderQuantity: Number,
    images: [String],
    thumbnail: String
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;