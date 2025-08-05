"use client";

import React from "react";
import { FiHome, FiUsers, FiSettings, FiBarChart } from "react-icons/fi";

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const menuItems = [
{ id: "dashboard", label: "Dashboard", icon: FiHome },
{ id: "users", label: "Usuários", icon: FiUsers },
{ id: "settings", label: "Configurações", icon: FiSettings }];


export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  return (
    <aside
      className="fixed left-0 top-0 w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-20"
      data-oid="i.bvg45">

      <div className="p-6" data-oid=":2f7i1r">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-8" data-oid="dp8grxj">
          <div
            className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
            data-oid="y_nfhf0">

            <FiBarChart className="text-white" size={20} data-oid="rib4ug0" />
          </div>
          <h2
            className="text-xl font-bold text-gray-900 dark:text-gray-100"
            data-oid="9_476gz">

            Admin Panel
          </h2>
        </div>

        {/* Navigation */}
        <nav className="space-y-2" data-oid="4mq7kbw">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                isActive ?
                "bg-primary text-white" :
                "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`
                }
                data-oid="4hc43k4">

                <Icon size={20} data-oid="21zwh6p" />
                <span className="font-medium" data-oid="7wvnoi:">
                  {item.label}
                </span>
              </button>);

          })}
        </nav>
      </div>
    </aside>);

}