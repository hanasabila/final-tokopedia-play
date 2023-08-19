const product = require('../models/productModel');

// add a product
const addProduct = async (req, res) => {
    try {
        const { videoID } = req.params;
        const { productID, url, title, price } = req.body;
        const addProduct = new product({
            videoID,
            productID,
            url,
            title,
            price
        })
        const savedProduct = await addProduct.save();
        res.json({ message: 'Product successfully added.', savedProduct });
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: 'Failed to add product' });
    }
};


// view a video of a product
const getProduct = async (req, res) => {
    try {
        const products = await product.find({ 
            videoID: req.params.videoID });
        res.json(products);
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: 'No product available.' });
    }
};

module.exports = { addProduct, getProduct};

