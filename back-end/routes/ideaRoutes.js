const express = require('express');
const { createIdea, listIdeas } = require('../services/ideaService'); 
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newIdea = await createIdea(req.body); 
        res.status(201).json(newIdea);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const ideas = await listIdeas(); 
        res.status(200).json(ideas); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
