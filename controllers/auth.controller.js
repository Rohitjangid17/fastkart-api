const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Auth = require('../models/auth.model');

// Create Store
const createStore = async (req, res) => {
    const storeData = req.body;

    try {
        const store = new Auth({
            ...storeData
        });

        await store.save();
        res.status(201).json({ message: "Store created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// SignIn Store
const signInStore = async (req, res) => {
    const { email, password } = req.body;

    try {
        const store = await Store.findOne({ email });
        if (!store) {
            return res.status(404).json({ message: "Store not found" });
        }

        const isMatch = await bcrypt.compare(password, store.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: store._id }, "Ctpl#2023?");
        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

module.exports = { createStore, signInStore };