import { query, User } from '../config/database';

export const getAllUsers = async (): Promise<User[]> => {
    const res = await query('SELECT id, name, email, status, created_at FROM users ORDER BY id DESC');
    return res.rows as User[];
};

export const createUser = async (name: string, email: string, status: string): Promise<User> => {
    const res = await query(
        'INSERT INTO users (name, email, status) VALUES ($1, $2, $3) RETURNING id, name, email, status, created_at',
        [name, email, status]
    );
    return res.rows[0] as User;
};

export const updateUser = async (id: number, name: string, email: string, status: string): Promise<User | undefined> => {
    const res = await query(
        'UPDATE users SET name = $1, email = $2, status = $3 WHERE id = $4 RETURNING id, name, email, status, created_at',
        [name, email, status, id]
    );
    return res.rows[0] as User;
};

export const deleteUser = async (id: number): Promise<User | undefined> => {
    const res = await query('DELETE FROM users WHERE id = $1 RETURNING id', [id]);
    return res.rows[0] as User;
};
