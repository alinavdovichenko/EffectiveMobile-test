import { Request, Response } from 'express';
import { recordAction, fetchActions } from '../services/historyService';

export const logActionHandler = async (req: Request, res: Response) => {
  try {
    const { shop_id, plu, action } = req.body;
    const loggedAction = await recordAction(shop_id, plu, action);
    res.status(201).json(loggedAction);
  } catch (error) {
    res.status(500).json({ error: 'Unable to log action' });
  }
};

export const getActionsHandler = async (req: Request, res: Response) => {
  try {
    const { shop_id, plu, dateFrom, dateTo, action, page = 1, limit = 10 } = req.query;
    const actions = await fetchActions(
      shop_id as string | null,
      plu as string | null,
      dateFrom as string | null,
      dateTo as string | null,
      action as string | null,
      Number(page),
      Number(limit)
    );
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch actions' });
  }
};
