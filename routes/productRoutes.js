const express = require('express');
const { seedProducts, getProducts } = require('../controller/productController');

const router = express.Router();

router.post('/seed', seedProducts);
router.get('/products', getProducts);

module.exports = router;
