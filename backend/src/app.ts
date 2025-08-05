import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { connect } from './config/database';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes'; // Nova rota de autenticação
import { authenticateToken } from './middlewares/authMiddleware';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

connect();

// A rota de login não precisa de autenticação, então a definimos primeiro
app.use('/api/auth', authRoutes);

// As rotas protegidas usam o middleware de autenticação
app.use('/api/users', authenticateToken, userRoutes);

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Admin Panel Backend is running!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
