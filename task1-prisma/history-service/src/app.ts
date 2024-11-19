import express from 'express';
import dotenv from 'dotenv';
import historyRoutes from './routes/historyRoutes';

dotenv.config();

const app = express();
app.use(express.json());

// Подключение маршрутов
app.use('/history', historyRoutes);

// Заглушка
app.get('/', (req, res) => {
    res.send('History Service Running');
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`History service running on port ${PORT}`));
