const express = require('express');
const { addInventory, modifyInventory } = require('../controllers/inventoryController');
const router = express.Router();

router.post('/', addInventory);
router.put('/', modifyInventory);

module.exports = router;
