const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  products: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', 
      required: true
    },
    name: { type: String },
    price: { type: Number },
    quantity: { type: Number }
  }],
  totalPrice: { type: Number, default: 0 }
});

module.exports = mongoose.model('Cart', CartSchema);