const listDiscounts = (req, res) => {
    const discounts = [
      { description: 'Buy 1 Get 1 Free on Fashion items' },
      { description: '10% Off on Electronics' }
    ];
    res.json(discounts);
  };
  
  
  const applyDiscounts = (cart) => {
    cart.products.forEach(product => {
      if (product.category === 'Fashion' && product.quantity >= 2) {
        const freeItems = Math.floor(product.quantity / 2);
        cart.totalPrice -= freeItems * product.price;
      }
      if (product.category === 'Electronics') {
        cart.totalPrice -= product.price * 0.1 * product.quantity;
      }
    });
  };
  
  module.exports = { listDiscounts, applyDiscounts };
  