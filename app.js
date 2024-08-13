const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Rohit Jangid Fullstack Developer." });
});

// Routes call
app.use("/api/products", productRoutes);

// database connection
const connectDb = async () => {
    await mongoose.connect("mongodb+srv://fdeveloperrohitjangid:F0wx7DlSFCV6IFrQ@cluster0.a9dfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("mongodb connected");
}

connectDb().catch((error) => {
    console.error(error);
});

app.listen(port, () => {
    console.log("Server running on port", port);
});