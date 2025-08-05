"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation"; // CORRIGIDO: Importe o useRouter do 'next/navigation'
import { auth, User } from "../services/api"; // Importe o serviço de autenticação

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter(); // Inicialize o useRouter

  useEffect(() => {
    // Tenta carregar o usuário e o token do localStorage ao iniciar
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("authToken");

    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      } catch (e) {
        console.error("Failed to parse user from localStorage", e);
        logout(); // Limpa dados inválidos
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await auth.login(email, password);
      const { token } = response; // Supondo que a API retorna { token: '...' }

      // Neste ponto, você pode querer buscar os dados reais do usuário logado
      // Para simplificar, vamos usar um objeto de usuário mock ou os dados do login
      const loggedInUser: User = {
        id: 0, // ID temporário, idealmente viria do backend
        name: "Administrador", // Nome temporário
        email: email,
        status: "Ativo",
        created_at: new Date().toISOString(),
      };

      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      setUser(loggedInUser);
      setIsAuthenticated(true);
      router.push("/dashboard"); // Redireciona para o dashboard após o login
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
    router.push("/login"); // Redireciona para a página de login
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
