import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar o token JWT em todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Assumindo que o token é armazenado no localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const auth = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
};

export const users = {
  getAll: async () => {
    const response = await api.get('/users');
    return response.data;
  },
  create: async (userData: Omit<User, 'id' | 'created_at'>) => {
    const response = await api.post('/users', userData);
    return response.data;
  },
  update: async (id: number, userData: Omit<User, 'id' | 'created_at'>) => {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  },
  delete: async (id: number) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  },
};

// Interface User (para tipagem consistente)
export interface User {
  id: number;
  name: string;
  email: string;
  status: "Ativo" | "Pendente" | "Inativo";
  created_at: string; // Adicionado para corresponder ao backend
}

export default api;
