import express from 'express';
import historyRoutes from './routes/historyRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api/history', historyRoutes);

app.listen(PORT, () => console.log(`History Service running on port ${PORT}`));
