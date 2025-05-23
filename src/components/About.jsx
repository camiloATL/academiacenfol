import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-gray-50 py-20" id="about-us">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Texto a la izquierda */}
        <div className="flex-1 text-center md:text-left">
          <p className="uppercase text-md text-[#0B2042] font-semibold mb-2">
            ¿Quiénes somos nosotros?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2042] leading-tight mb-4">
            Empoderados por Dios para <br /> alcanzar a otros para Cristo.
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Somos CENFOL (Centros de Formación y Liderazgo Cristiano), una
            asociación de iglesias que trabaja unidas para formar el carácter de
            Cristo y desarrollar líderes de influencia en Colombia y el mundo.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#0B2042] text-white px-5 py-3 rounded hover:bg-yellow-300 hover:text-[#0B2042] transition-all"
          >
            Sobre nosotros <FaArrowRight />
          </a>
        </div>

        {/* Imagen a la derecha */}
        <div className="flex-1">
          <Image
            src="/assets/164315.jpg"
            alt="Sobre nosotros"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
