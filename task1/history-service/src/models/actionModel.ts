import pool from '../database';

interface Action {
  shop_id: string;
  plu: string;
  action: string;
  timestamp: Date;
}

export const logAction = async (action: Action) => {
  const query = `
    INSERT INTO actions (shop_id, plu, action, timestamp) 
    VALUES ($1, $2, $3, $4) RETURNING *`;
  const values = [action.shop_id, action.plu, action.action, action.timestamp];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const getActionsByFilters = async (filters: any, offset: number, limit: number) => {
  const { shop_id, plu, dateFrom, dateTo, action } = filters;

  const query = `
    SELECT * FROM actions
    WHERE ($1::text IS NULL OR shop_id = $1)
      AND ($2::text IS NULL OR plu = $2)
      AND ($3::timestamp IS NULL OR timestamp >= $3)
      AND ($4::timestamp IS NULL OR timestamp <= $4)
      AND ($5::text IS NULL OR action = $5)
    ORDER BY timestamp DESC
    OFFSET $6 LIMIT $7`;

  const values = [shop_id, plu, dateFrom, dateTo, action, offset, limit];
  const result = await pool.query(query, values);
  return result.rows;
};
