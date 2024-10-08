const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Auth = require('../models/auth.model');

// Create Store
const createStore = async (req, res) => {
    const { storeName, businessType, currency, address, email, mobileNumber, password, country, state, pinCode, city } = req.body;
    const hashedPassword = await bcrypt.hash(password.toString(), 4);

    try {
        const store = new Auth({
            storeName, businessType, currency, address, email, mobileNumber, country, state, pinCode, city, password: hashedPassword
        });

        await store.save();
        res.status(201).json({ message: "Store created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// SignIn Store
const signInStore = async (req, res) => {
    const { mobileNumber, password } = req.body;

    try {
        const store = await Auth.findOne({ mobileNumber });
        if (!store) {
            return res.status(404).json({ message: "Store not found" });
        }

        const isMatch = await bcrypt.compare(password, store.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate token
        const token = jwt.sign({ id: store._id }, "Ctpl#2023?");

        // Exclude the password from the store object
        const { password: hashedPassword, ...storeDetails } = store.toObject(); // Rename password to hashedPassword

        res.status(200).json({ ...storeDetails, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { createStore, signInStore };