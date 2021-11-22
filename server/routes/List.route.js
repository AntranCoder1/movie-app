const express = require('express');
const router = express.Router();
const List = require('../models/List.model');
const verify = require('../verifyToken');

// @router api/lists
// @desc POST list
// @access Private
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body);
        try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});




module.exports = router;