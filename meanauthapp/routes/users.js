const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req, res, next) => {
    res.send('Register');
});

// Authenticate
router.get('/authenticate', (req, res, next) => {
    res.send('Authenticate');
});

// Register
router.get('/register', (req, res, next) => {
    res.send('Register');
});

// Validate
router.get('/validate', (req, res, next) => {
    res.send('validate');
});

module.exports = router;