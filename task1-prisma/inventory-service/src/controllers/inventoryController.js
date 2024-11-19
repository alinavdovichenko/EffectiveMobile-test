const prisma = require('../prisma');

exports.createInventory = async (req, res) => {
  const { productId, shopId, stockQuantity, orderQuantity } = req.body;
  try {
    const inventory = await prisma.inventory.create({
      data: { productId, shopId, stockQuantity, orderQuantity },
    });
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create inventory.' });
  }
};

exports.updateStock = async (req, res) => {
  const { id, amount } = req.body;
  try {
    const updatedInventory = await prisma.inventory.update({
      where: { id },
      data: { stockQuantity: { increment: amount } },
    });
    res.json(updatedInventory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update stock.' });
  }
};
