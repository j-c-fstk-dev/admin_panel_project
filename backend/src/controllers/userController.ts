import { Request, Response } from 'express';
import * as userModel from '../models/userModel';

export const listUsers = async (req: Request, res: Response) => {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Error listing users', error: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

export const addUser = async (req: Request, res: Response) => {
    const { name, email, status } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }
    try {
        const newUser = await userModel.createUser(name, email, status || 'pending');
        res.status(201).json(newUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Error adding user', error: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

export const editUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, status } = req.body;
    try {
        const updatedUser = await userModel.updateUser(Number(id), name, email, status);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Error updating user', error: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

export const removeUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedUser = await userModel.deleteUser(Number(id));
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Error deleting user', error: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
