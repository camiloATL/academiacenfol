"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        "/api/login",
        { email, password },
        {
          validateStatus: () => true,
        }
      );

      if (response.data.success) {
        localStorage.setItem("loggedIn", "true");
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
        });
        router.push("/dashboard");
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "error",
          title: "Credenciales incorrectas",
        });
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Loading />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Navbar />
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md text-center">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/assets/LOGO_ALC_RGB_COLOR.png" // Usa tu logo aquí
            alt="Logo CENFOL"
            width={150}
            height={50}
            className="mx-auto"
          />
        </div>

        {/* Formulario */}
        <form className="space-y-4 text-left" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Nombre de usuario o correo electrónico"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Opciones */}
          <div className="flex justify-between items-center text-sm text-gray-700">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Mantenerme conectado
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              ¿Olvidaste la contraseña?
            </a>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition-all"
          >
            Acceder
          </button>
        </form>

        {/* Registro */}
        <p className="text-sm text-gray-600 mt-6">
          ¿No tienes una cuenta?{" "}
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Regístrate ahora
          </a>
        </p>
      </div>
    </main>
  );
}
