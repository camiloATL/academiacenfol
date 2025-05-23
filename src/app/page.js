import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Benefits />
      <Footer />
    </>
  );
}
