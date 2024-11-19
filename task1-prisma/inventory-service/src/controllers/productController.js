const prisma = require('../prisma');

exports.createProduct = async (req, res) => {
  const { plu, name } = req.body;
  try {
    const product = await prisma.product.create({ data: { plu, name } });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product.' });
  }
};

exports.getProducts = async (req, res) => {
  const { name, plu } = req.query;
  try {
    const products = await prisma.product.findMany({
      where: {
        name: name ? { contains: name, mode: 'insensitive' } : undefined,
        plu,
      },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products.' });
  }
};
