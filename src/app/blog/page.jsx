import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-20 px-4 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Blog
        </h1>
        <p className="text-gray-700 text-lg">
          Bienvenido a nuestro blog. Aquí encontrarás artículos y recursos
          relacionados con nuestras materias y valores.
        </p>
      </main>
      <Footer />
    </>
  );
}
