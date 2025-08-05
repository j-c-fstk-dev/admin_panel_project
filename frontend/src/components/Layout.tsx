"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardPage from "../pages/DashboardPage";
import UsersPage from "../pages/UsersPage";
import SettingsPage from "../pages/SettingsPage";

const pageConfig = {
  dashboard: { title: "Dashboard", component: DashboardPage },
  users: { title: "Gerenciar Usuários", component: UsersPage },
  settings: { title: "Configurações", component: SettingsPage }
};

export default function Layout() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const PageComponent =
  pageConfig[currentPage as keyof typeof pageConfig]?.component ||
  DashboardPage;
  const pageTitle =
  pageConfig[currentPage as keyof typeof pageConfig]?.title || "Dashboard";

  return (
    <div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors"
      data-oid="uf.94:j">

      <Sidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        data-oid="h.vj6cw" />


      <Header title={pageTitle} data-oid="8-z60i4" />
      <main className="ml-64 pt-16 p-8" data-oid="5y1ieq6">
        <PageComponent data-oid="fqe5nnt" />
      </main>
    </div>);

}