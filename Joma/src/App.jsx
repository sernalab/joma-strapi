import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "preline/preline";

import Header from "./components/Header";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";
import CatalogoPage from "./pages/CatalogoPage";
import ProductDetailPage from "./pages/ProductDetail";
import AboutPage from "./pages/AboutPage";
import PromotionsPage from "./pages/PromotionsPage";
import VideosPage from "./pages/VideosPage";
import FAQPage from "./pages/FAQPage";
import EmpleoPage from "./pages/EmpleoPage";
import ContactPage from "./pages/ContactPage";
import EnvioPage from "./pages/FooterPages/EnvioPage";
import PaymentPage from "./pages/FooterPages/PaymentPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (
      window.HSStaticMethods &&
      typeof window.HSStaticMethods.autoInit === "function"
    ) {
      window.HSStaticMethods.autoInit();
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<CatalogoPage />} />
            <Route path="/details/:title" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/promotions" element={<PromotionsPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/empleo" element={<EmpleoPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/envio" element={<EnvioPage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
