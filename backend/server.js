const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint for products
app.get('/api/products', (req, res) => {
  const products = [
    { name: 'Apple', price: 120 },
    { name: 'Banana', price: 50 },
    { name: 'Orange', price: 80 }
  ];
  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
