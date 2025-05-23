"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn !== "true") {
      router.push("/login");
    }
  }, []);

  /* Función para cerrar sesión */
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
        Bienvenido al Dashboard
      </h1>
      <p className="text-gray-700">
        Aquí va el contenido privado del usuario autenticado.
      </p>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Cerrar sesión
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-800">Contenido Privado</h2>
        <p className="text-gray-600">
          Este es el contenido que solo los usuarios autenticados pueden ver.
        </p>
      </div>
    </main>
  );
}
