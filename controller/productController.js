const Product = require("../modules/Product");



const seedProducts = async (req, res) => {
  const products = [
    { productId: 'P001', name: 'Laptop', price: 1000, category: 'Electronics' },
    { productId: 'P002', name: 'Phone', price: 500, category: 'Electronics' },
    { productId: 'P003', name: 'T-Shirt', price: 20, category: 'Fashion' }
  ];

  await Product.insertMany(products);
  res.json({ message: 'Product catalog pre-populated' });
};


const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

module.exports = { seedProducts, getProducts };