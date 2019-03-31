const router = require('express').Router();

const getNewsFromFeed = require('../controllers/getNewsFromFeed');

router.post('/', getNewsFromFeed);

module.exports = router;
