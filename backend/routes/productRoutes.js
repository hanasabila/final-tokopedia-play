const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();

// add new product for a video
router.post('/add-product/:videoID', productController.addProduct);

// view product in a video
router.get('/get-product/:videoID', productController.getProduct)


module.exports = router;

