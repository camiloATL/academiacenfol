import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-gray-100 pt-28 md:pt-36 pb-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Texto */}
        <div className="flex-1">
          <Image
            src="/assets/imagenhome.png"
            alt="Imagen de ejemplo"
            width={1000}
            height={667}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="mt-4 text-lg text-gray-600 mb-10">
            CONFIANZA EN LÍDERES DE EDUCACIÓN CRISTIANA
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Fortalece tu mente y <br />
            <strong>fortalece tu espíritu</strong> <br />
            con CENFOL Ecuador
          </h1>
          <p className="mt-6 text-gray-700 text-xl">
            Accede a programas que combinan excelencia académica y principios
            cristianos, diseñados para adaptarse a tu vida.
          </p>
          <a
            href="#"
            className="inline-block mt-6 bg-white text-black font-semibold px-6 py-3 rounded shadow-md hover:bg-[#0B2042] hover:text-white transition-all mr-3"
          >
            Sobre Nosotros
          </a>
          <a
            href="#"
            className="inline-block mt-6 bg-[#0B2042] text-white font-semibold px-6 py-3 rounded shadow-md hover:bg-yellow-400 hover:text-[#0B2042] transition-all"
          >
            Incríbete ahora
            <FaArrowRight className="inline-block ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
