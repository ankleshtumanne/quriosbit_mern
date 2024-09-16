const express = require('express');
const { addToCart, removeFromCart, viewCart } = require('../controller/cartController');

const router = express.Router();

router.post('/cart/add', addToCart);
router.post('/cart/remove', removeFromCart);
router.get('/cart', viewCart);

module.exports = router;
