const express = require('express');
const { createIdea, listIdeas, updateIdea, deleteIdea } = require('../services/ideaService');
const jwt = require('jsonwebtoken');
const router = express.Router();
const JWT_SECRET = 'MATHEUSÉLINDO'

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

router.post('/', authenticateToken, async (req, res) => {
    try {
      req.body.user_id = req.user.userId; // 'user_id' deve ser usado aqui
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

router.put('/:id', authenticateToken, async (req, res) => {
    try {
        const updatedIdea = await updateIdea(req.params.id, req.body, req.user.userId);
        res.status(200).json(updatedIdea);
    } catch (error) {
        res.status(403).json({ error: error.message });
    }
});

router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        const result = await deleteIdea(req.params.id, req.user.userId);
        res.status(200).json(result);
    } catch (error) {
        res.status(403).json({ error: error.message });
    }
});

module.exports = router;