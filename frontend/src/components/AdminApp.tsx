"use client";

import { ThemeProvider } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import LoginPage from "../pages/LoginPage";
import Layout from "./Layout";

function AppContent() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginPage data-oid="cj3.z5p" />;
  }

  return <Layout data-oid="wu9npob" />;
}

export default function AdminApp() {
  return (
    <ThemeProvider data-oid="6gr0yvr">
      <AppContent data-oid="p5cygno" />
    </ThemeProvider>);

}