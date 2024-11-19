const { createInventory, updateInventory } = require('../models/inventoryModel');

const addInventory = async (req, res) => {
  try {
    const { plu, shop_id, quantityOnShelf, quantityInOrder } = req.body;
    const inventory = await createInventory(plu, shop_id, quantityOnShelf, quantityInOrder);
    res.status(201).json(inventory);
  } catch (error) {
    res.status(500).json({ error: 'Unable to add inventory' });
  }
};

const modifyInventory = async (req, res) => {
  try {
    const { id, quantity, isAdding } = req.body;
    const updatedInventory = await updateInventory(id, quantity, isAdding);
    res.status(200).json(updatedInventory);
  } catch (error) {
    res.status(500).json({ error: 'Unable to modify inventory' });
  }
};

module.exports = { addInventory, modifyInventory };
