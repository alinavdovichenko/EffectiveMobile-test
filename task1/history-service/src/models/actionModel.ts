import { pool } from '../database';

export const logAction = async (data: { shopId?: number; plu?: string; action: string }) => {
  const query = 'INSERT INTO actions (shop_id, plu, action, action_date) VALUES ($1, $2, $3, NOW()) RETURNING *';
  const result = await pool.query(query, [data.shopId, data.plu, data.action]);
  return result.rows[0];
};

export const getActions = async (filters: {
  shopId?: number;
  plu?: string;
  action?: string;
  dateFrom?: string;
  dateTo?: string;
  page: number;
  limit: number;
}) => {
  let query = 'SELECT * FROM actions WHERE 1=1';
  const values: any[] = [];

  if (filters.shopId) {
    query += ' AND shop_id = $1';
    values.push(filters.shopId);
  }

  const result = await pool.query(query, values);
  return result.rows;
};
