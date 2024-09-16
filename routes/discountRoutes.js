const express = require('express');
const { listDiscounts } = require('../controller/discountController');

const router = express.Router();

router.get('/discounts', listDiscounts);

module.exports = router;
