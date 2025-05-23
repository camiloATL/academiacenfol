import { FaChalkboardTeacher, FaBookOpen, FaHandsHelping } from "react-icons/fa";

export default function Benefits() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          ¿Por qué estudiar con CENFOL?
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Formamos personas íntegras con una educación basada en valores y excelencia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all border">
            <FaChalkboardTeacher className="text-4xl text-sky-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Docentes capacitados</h3>
            <p className="text-gray-600">
              Nuestro equipo está conformado por profesionales con experiencia y vocación.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all border">
            <FaBookOpen className="text-4xl text-sky-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Programas relevantes</h3>
            <p className="text-gray-600">
              Nuestros programas están diseñados para las necesidades del mundo actual.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all border">
            <FaHandsHelping className="text-4xl text-sky-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Acompañamiento humano</h3>
            <p className="text-gray-600">
              Te apoyamos en cada etapa de tu formación personal y profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
