import { Router, Request, Response } from 'express';
import { getHistory, createHistory } from '../controllers/historyController';

const router = Router();

// Маршрут для получения истории действий с фильтрами и пагинацией
router.get('/', async (req: Request, res: Response) => {
  try {
    const { shop_id, plu, action, date_from, date_to, page = 1, limit = 10 } = req.query;

    const history = await getHistory({
      shopId: shop_id as string,
      plu: plu as string,
      action: action as string,
      dateFrom: date_from as string,
      dateTo: date_to as string,
      page: Number(page),
      limit: Number(limit),
    });

    res.json(history);
  } catch (error) {
    console.error('Error fetching history:', error);
    res.status(500).json({ error: 'Failed to fetch history.' });
  }
});

// Маршрут для создания новой записи в истории
router.post('/', async (req: Request, res: Response) => {
  try {
    const { shopId, plu, action } = req.body;

    const newHistory = await createHistory({ shopId, plu, action });
    res.status(201).json(newHistory);
  } catch (error) {
    console.error('Error creating history:', error);
    res.status(500).json({ error: 'Failed to create history.' });
  }
});

export default router;
