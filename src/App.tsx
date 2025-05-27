import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Solution from "./pages/Solution";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import "./index.css";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative bg-light flex flex-col">
      <Navbar isScrolled={isScrolled} />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
