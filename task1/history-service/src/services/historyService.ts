import { logAction, getActionsByFilters } from '../models/actionModel';

export const recordAction = async (shop_id: string, plu: string, action: string) => {
  const timestamp = new Date();
  return await logAction({ shop_id, plu, action, timestamp });
};

export const fetchActions = async (
  shop_id: string | null,
  plu: string | null,
  dateFrom: string | null,
  dateTo: string | null,
  action: string | null,
  page: number,
  limit: number
) => {
  const offset = (page - 1) * limit;
  const filters = { shop_id, plu, dateFrom, dateTo, action };
  return await getActionsByFilters(filters, offset, limit);
};
