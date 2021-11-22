const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');
const verify = require('../verifyToken');

// @router api/movie/
// @desc POST movie
// @access Private
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);
        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
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

// @router api/movie/:id
// @desc DELETE movie
// @access Private
router.delete('/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json('The movie has been delete...');
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    } else {
        res.status(403).json({ success: false, message: 'You are not allowed!' });
    }
});

// @router api/movie/find/:id
// @desc GET movie
// @access Private
router.get('/find/:id', verify, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// @router api/movie/random?type=series
// @desc GET random movie
// @access Private
router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } },
            ]);
        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } },
            ]);
        }
        res.status(200).json(movie);
    } catch (err) {
      res.status(500).json(err);
    }
});

// @router api/movie/
// @desc GET all movie
// @access Private
router.get('/', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const movies = await Movie.find();
            res.status.apply(200).json(movies.reverse());
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    } else {
        res.status(403).json({ success: false, message: 'You are not allowed!' });
    }
});

module.exports = router;