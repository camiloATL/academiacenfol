import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50 py-3">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo y menú alineados a la izquierda */}
        <div className="flex items-center gap-10">
          <Image
            src="/assets/LOGO_ALC_RGB_COLOR.png"
            alt="Cenfol Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
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
            {/* Sobre nosotros */}
            <li>
              <a
                href="#about-us"
                className="transition-all duration-300 transform hover:text-sky-400 hover:translate-y-1"
              >
                Sobre nosotros
              </a>
            </li>
          </ul>
        </div>

        {/* Botón a la derecha */}
        <a href="/login" className="bg-yellow-300 text-black px-4 py-2 rounded">
          Mi cuenta
        </a>
      </div>
    </nav>
  );
}
