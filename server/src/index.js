const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/minishop';
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });
  })
  .catch(err => console.error('MongoDB connection error:', err));
