const mongoose = require('mongoose');
const video = require('../models/videoModel');

// function show all video
const allVideo  = async (req, res) => {
    try {
        const videos = await video.find();
        res.json(videos);
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: 'No video availabe.' });
    }
};


// function add video
const addVideo = async (req, res) => {
    try {
        const { imgURL } = req.body;
        const addVideo = new video({
        imgURL
    })
    const savedVideo = await addVideo.save();
    res.json({ message: 'Video successfully added.', savedVideo});
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: 'Failed to add video.'});
    }
}


// function view a video
const getVideo = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such video.'})
    }

    const videos = await video.findById(id)

    if (!videos) {
        return res.status(404).json({error: 'No such video.'})
    }

    res.status(200).json(videos)
}



module.exports = { allVideo, addVideo, getVideo }
