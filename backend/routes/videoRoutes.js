const express = require('express');

const videoController = require('../controllers/videoController');

const router = express.Router();


// show all videos
router.get('/home', videoController.allVideo);

// add new video
router.post('/add-video', videoController.addVideo);

// view a video
router.get('/video/:id', videoController.getVideo);


module.exports = router;