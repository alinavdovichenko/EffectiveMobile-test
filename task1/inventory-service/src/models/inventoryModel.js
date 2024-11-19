const pool = require('../database');

const createInventory = async (plu, shop_id, quantityOnShelf, quantityInOrder) => {
  const query = `
    INSERT INTO inventory (plu, shop_id, quantity_on_shelf, quantity_in_order) 
    VALUES ($1, $2, $3, $4) RETURNING *`;
  const values = [plu, shop_id, quantityOnShelf, quantityInOrder];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const updateInventory = async (id, quantity, isAdding) => {
  const field = isAdding ? 'quantity_on_shelf' : 'quantity_in_order';
  const query = `UPDATE inventory SET ${field} = ${field} + $1 WHERE id = $2 RETURNING *`;
  const values = [quantity, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = { createInventory, updateInventory };
