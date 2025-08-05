"use client";

import React, { useState } from "react";
import { FiBarChart } from "react-icons/fi";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const success = await login(credentials.email, credentials.password);
      if (!success) {
        setError("Credenciais inválidas");
      }
    } catch (err) {
      console.error("Login API error:", err); // Log more detailed error
      setError("Erro ao fazer login. Verifique sua conexão ou credenciais.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="p-8">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <FiBarChart className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Admin Panel
              </h1>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-8">
            Painel Administrativo
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="E-mail"
              type="email"
              placeholder="seu.email@exemplo.com"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              required
            />

            <Input
              label="Senha"
              type="password"
              placeholder="••••••••"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              required
              error={error}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
