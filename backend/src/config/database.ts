import { Pool, QueryResult } from 'pg';

export interface User {
    id: number;
    name: string;
    email: string;
    status: string;
    created_at: Date;
}

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5432,
});

export const connect = async () => {
    try {
        await pool.connect();
        console.log('Connected to PostgreSQL database successfully!');
    } catch (error) {
        console.error('Failed to connect to the database', error);
    }
};

export const query = (text: string, params?: any[]): Promise<QueryResult> => {
    return pool.query(text, params);
};
