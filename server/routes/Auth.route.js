const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// @router api/auth/register
// @desc POST auth
// @access Public
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET_KEY
        ).toString(),
    });

    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;