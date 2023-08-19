const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {   
        videoID: {
            type: mongoose.Schema.Types.ObjectId, ref: 'videos',
            required: true,
        },
        username: {
            required: true,
            type: String,
        },
        comment: {
            required: true,
            type: String,
        },
        timestamp: {
            required: true,
            type: Date,
            default: Date.now,
        }
    });

module.exports = mongoose.model('comment', commentSchema);