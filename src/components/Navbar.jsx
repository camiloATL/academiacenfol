"use client";

import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Hamburguesa */}
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center">
            <Image
              src="/assets/LOGO_ALC_RGB_COLOR.png"
              alt="Cenfol Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </a>
          {/* Botón hamburguesa (solo en móviles) */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menú en desktop */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-semibold uppercase text-sm">
          <li>
            <a
              href="/"
              className="transition-all duration-300 transform hover:text-sky-400 hover:translate-y-1"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/materias"
              className="transition-all duration-300 transform hover:text-sky-400 hover:translate-y-1"
            >
              Materias
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="transition-all duration-300 transform hover:text-sky-400 hover:translate-y-1"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/contacto"
              className="transition-all duration-300 transform hover:text-sky-400 hover:translate-y-1"
            >
              Contacto
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              className="transition-all duration-300 transform hover:text-sky-400 hover:translate-y-1"
            >
              Sobre nosotros
            </a>
          </li>
        </ul>

        {/* Botón cuenta (visible siempre) */}
        <a href="/login" className="bg-yellow-300 text-black px-4 py-2 rounded">
          Mi cuenta
        </a>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-sm uppercase font-semibold text-gray-700">
          <a href="/" onClick={toggleMenu} className="block hover:text-sky-400">
            Inicio
          </a>
          <a
            href="/materias"
            onClick={toggleMenu}
            className="block hover:text-sky-400"
          >
            Materias
          </a>
          <a
            href="/blog"
            onClick={toggleMenu}
            className="block hover:text-sky-400"
          >
            Blog
          </a>
          <a
            href="/contacto"
            onClick={toggleMenu}
            className="block hover:text-sky-400"
          >
            Contacto
          </a>
          <a
            href="#about-us"
            onClick={toggleMenu}
            className="block hover:text-sky-400"
          >
            Sobre nosotros
          </a>
        </div>
      )}
    </nav>
  );
}
