const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/products', productRoutes);
app.use('/inventory', inventoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Inventory service running on port ${PORT}`));
