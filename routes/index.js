const router = require('express').Router();

const ideaRoute = require('./idea');

router.use('/ideas', ideaRoute);

module.exports = router;