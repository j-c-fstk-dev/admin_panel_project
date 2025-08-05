"use client";

import { AuthProvider } from "../context/AuthContext";
import AdminApp from "../components/AdminApp";

export default function Page() {
  return (
    <AuthProvider data-oid="fp9e37e">
      <AdminApp data-oid="0x04vu:" />
    </AuthProvider>);

}