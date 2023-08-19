const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
    {
    imgURL: {
        required: true,
        type: String,
      },
});

module.exports = mongoose.model('video', videoSchema);

