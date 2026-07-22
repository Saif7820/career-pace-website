import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Ecosystem from "../pages/Ecosystem";
import Services from "../pages/Services";
import Products from "../pages/Products";
import Partners from "../pages/Partners";
import WhyPartner from "../pages/WhyPartner";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout Wrapper */}
        <Route path="/" element={<MainLayout />}>

          {/* Nested Routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ecosystem" element={<Ecosystem />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="partners" element={<Partners />} />
          <Route path="why-partner" element={<WhyPartner />} />
          <Route path="contact" element={<Contact />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;