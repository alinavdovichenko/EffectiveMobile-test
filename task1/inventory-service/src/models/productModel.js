const pool = require('../database');

const createProduct = async (name, plu) => {
  const query = 'INSERT INTO products (name, plu) VALUES ($1, $2) RETURNING *';
  const values = [name, plu];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getProductsByFilters = async (name, plu) => {
  const query = 'SELECT * FROM products WHERE name ILIKE $1 OR plu = $2';
  const values = [`%${name}%`, plu];
  const result = await pool.query(query, values);
  return result.rows;
};

module.exports = { createProduct, getProductsByFilters };
