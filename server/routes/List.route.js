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

// @router api/lists/:id
// @desc DELETE list
// @access Private
router.delete('/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id);
            res.status(200).json('The list has been delete...');
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    } else {
        res.status(403).json({ success: false, message: 'You are not allowed!' });
    }
});

// @router api/lists/
// @desc GET list
// @access Private
router.get('/', verify, async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];

    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } },
                ]);
            } else {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery } },
                ]);
            }
        } else {
            list = await List.aggregate([
                { $sample: { size: 10 } }
            ]);
        }
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});



module.exports = router;