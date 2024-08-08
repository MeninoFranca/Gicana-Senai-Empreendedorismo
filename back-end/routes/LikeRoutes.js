const express = require('express');
const {addLike} = require('../services/likeService');
const router = express.Router();

router.post('/', async (req, res) => {

    try {
        const newLike  = await addLike(req.body);
        res.status(201).json(newLike);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

module.exports = router;
