"use client";

import React, { useState } from "react";
import { FiSun, FiMoon, FiChevronDown, FiUser, FiLogOut } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth(); // Obtenha o usuário do contexto
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
  };

  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10">
      <div className="flex items-center justify-between h-full px-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h1>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <FiUser className="text-white" size={16} />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {user?.name || "Usuário"} {/* Exibe o nome do usuário logado */}
              </span>
              <FiChevronDown className="text-gray-500 dark:text-gray-400" size={16} />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1">
                <button
                  className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setShowDropdown(false)}
                >
                  <FiUser size={16} />
                  <span>Perfil</span>
                </button>
                <button
                  className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={handleLogout}
                >
                  <FiLogOut size={16} />
                  <span>Sair</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
