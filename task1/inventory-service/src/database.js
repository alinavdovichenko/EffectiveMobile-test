const { Pool } = require('pg');
require('dotenv').config();

// Конфигурация подключения к базе данных
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Проверка подключения
pool.connect()
  .then(() => console.log('Подключение к базе данных успешно установлено'))
  .catch(err => {
    console.error('Ошибка подключения к базе данных', err);
    process.exit(1); // Завершаем процесс при ошибке
  });

module.exports = pool;
