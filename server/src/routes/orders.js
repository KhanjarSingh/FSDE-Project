const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { protect, admin } = require('../middleware/auth');
router.post('/', protect, async (req, res) => {
  const { items, totalPrice } = req.body;
  if (!items || items.length === 0) return res.status(400).json({ message: 'No items' });
  const order = new Order({ user: req.user._id, items, totalPrice });
  const createdOrder = await order.save(); res.status(201).json(createdOrder);
});
router.get('/myorders', protect, async (req, res) => {
  const orders = await Order.find({ user: req.user._id }); res.json(orders);
});
router.get('/', protect, admin, async (req, res) => {
  const orders = await Order.find({}).populate('user', 'name'); res.json(orders);
});
module.exports = router;
