import { Request, Response } from 'express';

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    // Lógica de autenticação com o banco de dados
    if (email === 'test@user.com' && password === 'senha123') {
        res.status(200).json({ token: 'fake-jwt-token' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};
