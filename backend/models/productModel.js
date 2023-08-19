const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {   
        videoID: {
            type: mongoose.Schema.Types.ObjectId, ref: 'videos',
            required: true,
        },
        productID: {
            required: true,
            type: String,
        },
        url: {
            required: true,
            type: String,
        },
        title: {
            required: true,
            type: String,
        },
        price: {
            required: true,
            type: String,
        }
    });

module.exports = mongoose.model('product', productSchema);