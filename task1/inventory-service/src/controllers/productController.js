const { createProduct, getProductsByFilters } = require('../models/productModel');

const addProduct = async (req, res) => {
  try {
    const { name, plu } = req.body;
    const product = await createProduct(name, plu);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Unable to add product' });
  }
};

const getProducts = async (req, res) => {
  try {
    const { name, plu } = req.query;
    const products = await getProductsByFilters(name, plu);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch products' });
  }
};

module.exports = { addProduct, getProducts };
