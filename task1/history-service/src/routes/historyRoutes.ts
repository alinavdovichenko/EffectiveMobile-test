import express from 'express';
import { logActionHandler, getActionsHandler } from '../controllers/historyController';

const router = express.Router();

router.post('/', logActionHandler);
router.get('/', getActionsHandler);

export default router;
