const router = require('express').Router();

const getAllFeeds = require('../controllers/getAllFeeds');
const addFeed = require('../controllers/addFeed');
const deleteFeed = require('../controllers/deleteFeed');

router.get('/:username', getAllFeeds);
router.post('/add', addFeed);
router.delete('/delete/:title', deleteFeed);

module.exports = router;
