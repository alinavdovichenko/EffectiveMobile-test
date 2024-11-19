const express = require('express');
const { createInventory, updateStock } = require('../controllers/inventoryController');
const router = express.Router();

router.post('/', createInventory);
router.patch('/update-stock', updateStock);

module.exports = router;
