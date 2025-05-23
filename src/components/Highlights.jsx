import {
  FaGraduationCap,
  FaCertificate,
  FaGlobeAmericas,
  FaUsers,
} from "react-icons/fa";

export default function Highlights() {
  return (
    <section className="bg-gray-50 py-2">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white p-6 rounded-lg shadow-sm">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <FaGraduationCap className="text-4xl text-blue-900 mb-3" />
            <h3 className="text-blue-900 font-semibold text-lg">Vida universitaria</h3>
            <p className="text-gray-500 text-sm">Experiencia integral online</p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
            <FaCertificate className="text-4xl text-blue-900 mb-3" />
            <h3 className="text-blue-900 font-semibold text-lg">Titulación oficial</h3>
            <p className="text-gray-500 text-sm">Reconocimiento garantizado</p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center">
            <FaGlobeAmericas className="text-4xl text-blue-900 mb-3" />
            <h3 className="text-blue-900 font-semibold text-lg">Conexión global</h3>
            <p className="text-gray-500 text-sm">Comunidad sin fronteras</p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center">
            <FaUsers className="text-4xl text-blue-900 mb-3" />
            <h3 className="text-blue-900 font-semibold text-lg">Acompañamiento</h3>
            <p className="text-gray-500 text-sm">Acompañamiento continuo y cercano</p>
          </div>
        </div>
      </div>
    </section>
  );
}
