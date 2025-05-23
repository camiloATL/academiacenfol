import { FaInstagram, FaXTwitter, FaYoutube, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t" id="footer">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Parte superior */}
        <h4 className="text-gray-700 font-semibold text-md mb-2">Enlaces de Interés</h4>
        <hr className="mb-6 border-gray-300" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Enlaces */}
          <ul className="flex gap-6 text-sm text-gray-700">
            <li><a href="#">Contacto</a></li>
            <li><a href="#">¿Quiénes somos?</a></li>
            <li><a href="#">CENFOL</a></li>
            <li><a href="#">Administrador</a></li>
          </ul>

          {/* Redes sociales */}
          <div className="flex gap-5 text-gray-500 text-xl">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>
      </div>

      {/* Parte inferior */}
      <div className="bg-blue-900 text-center text-white py-4 text-sm">
        Copyright © 2025 – Creado por <span className="text-yellow-300 font-semibold">Xidne</span>
      </div>
    </footer>
  );
}
