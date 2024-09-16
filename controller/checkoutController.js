const { applyDiscounts } = require('./discountController');
const { convertCurrency } = require('../utils/currencyConverter');
const Cart = require('../modules/Cart');


const checkout = async (req, res) => {
  let cart = await Cart.findOne();
  if (!cart || cart.products.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  
  applyDiscounts(cart);

  
  const { currency } = req.body;
  if (currency && currency !== 'USD') {
    const convertedTotal = convertCurrency(cart.totalPrice, currency);
    return res.json({ message: `Total price in ${currency}: ${convertedTotal.toFixed(2)} ${currency}` });
  }

  res.json({ message: `Final price: ${cart.totalPrice.toFixed(2)} USD` });
};

module.exports = { checkout };
