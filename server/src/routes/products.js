const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { protect, admin } = require('../middleware/auth');
router.get('/', async (req, res) => { const products = await Product.find({}); res.json(products); });
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) res.json(product); else res.status(404).json({ message: 'Not found' });
});
router.post('/', protect, admin, async (req, res) => {
  const { name, price, image, description } = req.body;
  const product = new Product({ name, price, image, description });
  const createdProduct = await product.save(); res.status(201).json(createdProduct);
});
router.delete('/:id', protect, admin, async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) { await product.deleteOne(); res.json({ message: 'Removed' }); }
  else res.status(404).json({ message: 'Not found' });
});
module.exports = router;
