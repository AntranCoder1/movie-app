const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');
const verify = require('../verifyToken');

// @router api/movie/
// @desc POST movie
// @access Private
router.post('/', verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);

        try {
            const savedMovie = await newMovie.save();
            res.status(200).json(savedMovie);
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    } else {
        res.status(403).json({ success: false, message: 'You are not allowed!' });
    }
});

// @router api/movie/:id
// @desc PUT movie
// @access Private
router.put('/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updateMovie = await Movie.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body
                },
                { new: true }
            );
            res.status(200).json(updateMovie);
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    } else {
        res.status(403).json({ success: false, message: 'You are not allowed!' });
    }
});

module.exports = router;