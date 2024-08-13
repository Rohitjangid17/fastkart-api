const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.json(
        [
            {
                "title": "Essence Mascara Lash Princess",
                "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
                "category": "beauty",
                "price": 499,
                "discountPercentage": 10,
                "rating": 4.5,
                "stock": 5,
                "brand": "Essence",
                "warrantyInformation": "1 month warranty",
                "shippingInformation": "Ships in 1 month",
                "availabilityStatus": "Low Stock",
                "reviews": [
                    {
                        "rating": 2,
                        "comment": "Very unhappy with my purchase!",
                        "date": "2024-05-23T08:56:21.618Z",
                        "reviewerName": "John Doe",
                        "reviewerEmail": "john.doe@x.dummyjson.com"
                    },
                    {
                        "rating": 2,
                        "comment": "Not as described!",
                        "date": "2024-05-23T08:56:21.618Z",
                        "reviewerName": "Nolan Gonzalez",
                        "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
                    },
                    {
                        "rating": 5,
                        "comment": "Very satisfied!",
                        "date": "2024-05-23T08:56:21.618Z",
                        "reviewerName": "Scarlett Wright",
                        "reviewerEmail": "scarlett.wright@x.dummyjson.com"
                    }
                ],
                "returnPolicy": "30 days return policy",
                "minimumOrderQuantity": 24,
                "images": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
                "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
            },
            {
                "title": "Essence Mascara Lash Princess",
                "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
                "category": "beauty",
                "price": 499,
                "discountPercentage": 10,
                "rating": 4.5,
                "stock": 5,
                "brand": "Essence",
                "warrantyInformation": "1 month warranty",
                "shippingInformation": "Ships in 1 month",
                "availabilityStatus": "Low Stock",
                "reviews": [
                    {
                        "rating": 2,
                        "comment": "Very unhappy with my purchase!",
                        "date": "2024-05-23T08:56:21.618Z",
                        "reviewerName": "John Doe",
                        "reviewerEmail": "john.doe@x.dummyjson.com"
                    },
                    {
                        "rating": 2,
                        "comment": "Not as described!",
                        "date": "2024-05-23T08:56:21.618Z",
                        "reviewerName": "Nolan Gonzalez",
                        "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
                    },
                    {
                        "rating": 5,
                        "comment": "Very satisfied!",
                        "date": "2024-05-23T08:56:21.618Z",
                        "reviewerName": "Scarlett Wright",
                        "reviewerEmail": "scarlett.wright@x.dummyjson.com"
                    }
                ],
                "returnPolicy": "30 days return policy",
                "minimumOrderQuantity": 24,
                "images": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
                "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
            },
            {
                "title": "Essence Mascara Lash Princess",
                "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
                "category": "beauty",
                "price": 499,
                "discountPercentage": 10,
                "rating": 4.5,
                "stock": 5,
                "brand": "Essence",
                "warrantyInformation": "1 month warranty",
                "shippingInformation": "Ships in 1 month",
                "availabilityStatus": "Low Stock",
                "reviews": [
                    {
                        "rating": 2,
                        "comment": "Very unhappy with my purchase!",
                        "date": "2024-05-23T08:56:21.618Z",
                        "reviewerName": "John Doe",
                        "reviewerEmail": "john.doe@x.dummyjson.com"
                    },
                    {
                        "rating": 2,
                        "comment": "Not as described!",
                        "date": "2024-05-23T08:56:21.618Z",
                        "reviewerName": "Nolan Gonzalez",
                        "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
                    },
                    {
                        "rating": 5,
                        "comment": "Very satisfied!",
                        "date": "2024-05-23T08:56:21.618Z",
                        "reviewerName": "Scarlett Wright",
                        "reviewerEmail": "scarlett.wright@x.dummyjson.com"
                    }
                ],
                "returnPolicy": "30 days return policy",
                "minimumOrderQuantity": 24,
                "images": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
                "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
            }
        ]
    );
});

// Routes call
app.use("/api/products", productRoutes);

// database connection
const connectDb = async () => {
    await mongoose.connect("mongodb+srv://fdeveloperrohitjangid:RUkcWQAkmtx4IZ7h@fastkartnew.ywhjl.mongodb.net/");
    console.log("mongodb connected");
}

connectDb().catch((error) => {
    console.error(error);
});

app.listen(port, () => {
    console.log("Server running on port", port);
});