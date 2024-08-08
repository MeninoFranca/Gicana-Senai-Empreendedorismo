const express = require('express')
const {addComment} = require('../services/CommentService')
const router = express.Router();

router.post('/', async(req, res) => {

    try {
        const newComment = await addComment(req.body);
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});;

module.exports = router;
