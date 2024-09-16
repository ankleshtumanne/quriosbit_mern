

const Cart = require('../modules/Cart');
const Product = require('../modules/Product');


const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  
  
  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  let cart = await Cart.findOne();

  if (!cart) {
    cart = new Cart({ products: [], totalPrice: 0 });
  }

  
  const existingProductIndex = cart.products.findIndex(p => p.productId.equals(productId));

  if (existingProductIndex > -1) {
   
    cart.products[existingProductIndex].quantity += quantity;
  } else {
   
    cart.products.push({
      productId: product._id,
      quantity
    });
  }

  
  cart.totalPrice = cart.products.reduce((acc, p) => acc + p.quantity * product.price, 0);
  await cart.save();
  res.json(cart);
};

const removeFromCart = async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne();

  if (!cart) return res.status(400).json({ message: 'Cart is empty' });


  const productIndex = cart.products.findIndex(p => p.productId === productId);
  if (productIndex === -1) return res.status(404).json({ message: 'Product not in cart' });

  
  if (quantity >= cart.products[productIndex].quantity) {
    cart.products.splice(productIndex, 1);
  } else {
    cart.products[productIndex].quantity -= quantity;
  }

  
  cart.totalPrice = cart.products.reduce((acc, p) => acc + p.price * p.quantity, 0);
  await cart.save();
  res.json(cart);
};


const viewCart = async (req, res) => {
  const cart = await Cart.findOne().populate('products.productId', 'name price category');
  if (!cart) {
    return res.json({ message: 'Cart is empty' });
  }
  res.json(cart);
};

module.exports = { addToCart, removeFromCart, viewCart };

