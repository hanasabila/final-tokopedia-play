const express = require('express');

const commentController = require('../controllers/commentController');

const router = express.Router();


// show all comments
router.get('/get-comment/:videoID', commentController.getComment);

// add a comment
router.post('/add-comment/:videoID', commentController.addComment);

module.exports = router;