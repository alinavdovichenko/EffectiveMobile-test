const express = require('express');
const productRoutes = require('./routes/productRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/inventory', inventoryRoutes);

app.listen(PORT, () => console.log(`Inventory Service running on port ${PORT}`));
