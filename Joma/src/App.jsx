import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { JobsProvider } from "./config/JobsContext.jsx";

import "preline/preline";

import Header from "./components/Header";
import EnHeader from "./components/EnHeader.jsx";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";
import CatalogoPage from "./pages/CatalogoPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import VideosPage from "./pages/VideosPage";
import FAQPage from "./pages/FAQPage";
import EmpleoPage from "./pages/EmpleoPage";
import ContactPage from "./pages/ContactPage";
import EnvioPage from "./pages/FooterPages/EnvioPage";
import PaymentPage from "./pages/FooterPages/PaymentPage";
import MapPage from "./pages/FooterPages/MapPage";
import ExportPage from "./pages/ExportPage.jsx";
import BlogListPage from "./pages/BlogListPage.jsx";
import BlogDetailPage from "./pages/BlogDetailPage.jsx";

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

  const isExportPage = location.pathname === "/export";

  return (
    <>
      <JobsProvider>
        {isExportPage ? <EnHeader /> : <Header />}
        <main>
          <div className="routes-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<CatalogoPage />} />
              <Route path="/details/:title" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/empleo" element={<EmpleoPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/envio" element={<EnvioPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/export" element={<ExportPage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:id" element={<BlogDetailPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </JobsProvider>
    </>
  );
}

export default App;
