const route = require('express').Router();

const Idea = require('../database/models/idea');

route.get('/get-all', async (req, res) => {
    try {
        const ideas = await Idea.find();
        res.send({ success: true, ideas });
    } catch (err) {
        res.status(400).send({ success: false, error: err.message });
    }
});

module.exports = route;