import { Request, Response, NextFunction } from 'express';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    // Implemente a lógica de autenticação aqui (e.g., JWT)
    // Por enquanto, vamos permitir todas as requisições para teste
    next();
};
