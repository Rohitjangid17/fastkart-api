const express = require('express');
const router = express.Router();
const { createStore, signInStore } = require('../controllers/auth.controller');

// Create Store
router.post('/register-store', createStore);

// Sign In
router.post('/signin', signInStore);

module.exports = router;
