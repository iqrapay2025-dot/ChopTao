import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";
import PageSkeleton from "./components/PageSkeleton";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Order from "./pages/Order";
import Contact from "./pages/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fade-out after fonts + first paint settle
    const fadeTimer = setTimeout(() => setFading(true), 1200);
    // Unmount skeleton after the CSS transition completes
    const doneTimer = setTimeout(() => setLoading(false), 1650);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, []);

  return (
    <BrowserRouter>
      {/* Skeleton sits on top until loading resolves */}
      {loading && (
        <div className={`skeleton-screen${fading ? " fading" : ""}`}>
          <PageSkeleton />
        </div>
      )}

      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}
