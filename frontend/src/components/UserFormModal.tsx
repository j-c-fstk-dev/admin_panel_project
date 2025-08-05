"use client";

import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import Button from "./Button";
import Input from "./Input";
import { User } from "../services/api"; // Importe a interface User

interface UserFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: User;
  onSave: (user: User) => void;
}

export default function UserFormModal({
  isOpen,
  onClose,
  user,
  onSave,
}: UserFormModalProps) {
  const [formData, setFormData] = useState<User>({
    id: user?.id || 0, // ID agora é number, 0 para novo usuário
    name: user?.name || "",
    email: user?.email || "",
    status: user?.status || "Ativo",
    created_at: user?.created_at || new Date().toISOString(), // Adicionado para tipagem
  });

  // Atualiza o formulário quando o usuário de edição muda
  useEffect(() => {
    if (user) {
      setFormData({
        id: user.id,
        name: user.name,
        email: user.email,
        status: user.status,
        created_at: user.created_at,
      });
    } else {
      setFormData({
        id: 0, // Reset para novo usuário
        name: "",
        email: "",
        status: "Ativo",
        created_at: new Date().toISOString(),
      });
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData); // Envia o formData completo
    // onClose(); // Fechar modal é responsabilidade do onSave em UsersPage
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {user ? "Editar Usuário" : "Adicionar Usuário"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FiX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <Input
            label="Nome"
            placeholder="Nome Completo"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <Input
            label="Email"
            type="email"
            placeholder="seu.email@exemplo.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value as User["status"],
                })
              }
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                                 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                                 transition-colors duration-200"
            >
              <option value="Ativo">Ativo</option>
              <option value="Pendente">Pendente</option>
              <option value="Inativo">Inativo</option>
            </select>
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button type="submit" className="flex-1">
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
