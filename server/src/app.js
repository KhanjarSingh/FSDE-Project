const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running', timestamp: new Date().toISOString() });
});
app.get('/', (req, res) => { res.send('MiniShop API'); });
module.exports = app;
