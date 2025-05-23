import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function MateriasPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-20 px-4 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Materias
        </h1>
        <p className="text-gray-700 text-lg">
          Explora nuestras materias enfocadas en formación integral, valores
          cristianos y desarrollo de habilidades para el liderazgo.
        </p>
        {/* Aquí puedes mapear una lista de materias dinámicamente */}
      </main>
      <Footer />
    </>
  );
}
