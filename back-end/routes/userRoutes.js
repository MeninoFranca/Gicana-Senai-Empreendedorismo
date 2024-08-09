const express = require('express');
const {newUser, loginUser} = require('../services/userService');
const router = express.Router();

router.post('/register', async(req,res) =>{
    try {
        const user = await newUser(req.body);
        res.status(201).json(user)
    } catch (error){
        res.status(500).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const {user, token} = await loginUser(req.body.email, req.body.password);
        res.status(200).json({ user,token}); 
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

module.exports = router;