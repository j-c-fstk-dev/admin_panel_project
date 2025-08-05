import { Router } from 'express';
import { listUsers, addUser, editUser, removeUser } from '../controllers/userController';

const router = Router();

// Rota para listar todos os usuários
router.get('/', listUsers);

// Rota para adicionar um novo usuário
router.post('/', addUser);

// Rota para editar um usuário existente (pelo ID)
router.put('/:id', editUser);

// Rota para remover um usuário (pelo ID)
router.delete('/:id', removeUser);

export default router;
