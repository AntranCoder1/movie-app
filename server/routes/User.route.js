const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const CryptoJS = require("crypto-js");
const verify = require('../verifyToken');

// @router api/users/:id
// @desc PUT user
// @access Private
router.put("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }
  
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can update only your account!");
    }
});

// @router api/users/:id
// @desc DELETE user
// @access Private
router.delete('/:id', verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json('User has been deleted...');
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    } else {
        res.status(403).json({ success: false, message: 'You can delete only your account!' });
    }
});

// @router api/users/find/:id
// @desc GET user
// access Private
router.get('/find/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// @router api/users/?new=true
// @desc GET all user
// access Private
router.get("/", verify, async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            const users = query
                ? await User.find().sort({ _id: -1 }).limit(5)
                : await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
      res.status(403).json("You are not allowed to see all users!");
    }
});

// @router api/user/stats
// @desc GET stats user
// @access Private
router.get('/stats', async (req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}); 

module.exports = router;