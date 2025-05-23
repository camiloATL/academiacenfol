import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-20 px-4 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Contacto
        </h1>
        <p className="text-gray-700 text-lg">
          Si tienes preguntas o deseas más información, no dudes en
          contactarnos.
        </p>
      </main>
      <Footer />
    </>
  );
}
