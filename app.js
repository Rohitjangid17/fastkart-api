const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const productRoutes = require("./routes/product.route");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Rohit jangid fullstack developer." });
});

app.use(cors());

// Routes call
app.use("/api/products", productRoutes);

// database connection
const connectDb = async () => {
    await mongoose.connect("mongodb+srv://fdeveloperrohitjangid:RUkcWQAkmtx4IZ7h@fastkartnew.ywhjl.mongodb.net/");
    // await mongoose.connect("mongodb://localhost:27017", {
    //     dbName: "fastkartDb"
    // });
    console.log("mongodb connected");
}

connectDb().catch((error) => {
    console.error(error);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});