"use client";

import React, { useState, useEffect } from "react";
import { FiSearch, FiEdit2, FiTrash2 } from "react-icons/fi";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import UserFormModal from "../components/UserFormModal";
import { users, User } from "../services/api"; // Importe o serviço de usuários e a interface User

export default function UsersPage() {
  const [usersList, setUsersList] = useState<User[]>([]); // Renomeado para evitar conflito com a interface
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Função para buscar usuários da API
  const fetchUsers = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await users.getAll();
      setUsersList(data);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Erro ao carregar usuários.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = usersList.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddUser = () => {
    setEditingUser(undefined);
    setIsModalOpen(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = async (userId: number) => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      try {
        await users.delete(userId);
        fetchUsers(); // Recarrega a lista após a exclusão
      } catch (err) {
        console.error("Error deleting user:", err);
        setError("Erro ao excluir usuário.");
      }
    }
  };

  const handleSaveUser = async (userData: User) => {
    try {
      if (userData.id) {
        // Edit existing user
        await users.update(userData.id, userData);
      } else {
        // Add new user
        await users.create(userData);
      }
      fetchUsers(); // Recarrega a lista após salvar
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error saving user:", err);
      setError("Erro ao salvar usuário.");
    }
  };

  const getStatusBadge = (status: User["status"]) => {
    const statusConfig = {
      Ativo:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      Pendente:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      Inativo: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    };

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig[status]}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            placeholder="Busca por nome ou email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button onClick={handleAddUser}>Adicionar Usuário</Button>
      </div>

      {/* Users Table */}
      <Card>
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">Carregando usuários...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-500 dark:text-red-400">{error}</div>
          ) : filteredUsers.length === 0 ? (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">Nenhum usuário encontrado.</div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">Nome</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">Email</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`border-b border-gray-200 dark:border-gray-700 ${
                      index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800/50" : ""
                    }`}
                  >
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">{user.name}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{user.email}</td>
                    <td className="py-3 px-4">{getStatusBadge(user.status)}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditUser(user)}
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                        >
                          <FiEdit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Card>

      {/* User Form Modal */}
      <UserFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={editingUser}
        onSave={handleSaveUser}
      />
    </div>
  );
}
