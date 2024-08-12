const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Rohit Jangid Backend Developer." });
});

app.listen(port, () => {
    console.log("Server running on port", port);
});