import React, { useState, useEffect, lazy, Suspense } from "react";

// Критичные стили загружаем сразу
// src/main.jsx
//import './scss/styles/_styles.scss';

import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './i18n';

// Критичные компоненты загружаем сразу
import Preloader from "./components/Preloader/Preloader";
import MagicCursor from "./components/MagicCursor/MagicCursor";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Ленивая загрузка остальных компонентов
const FeatureSection = lazy(() => import("./components/FeatureSection/FeatureSection"));
const AboutSection = lazy(() => import("./components/AboutSection/AboutSection"));
const ResumeSection = lazy(() => import("./components/ResumeSection/ResumeSection"));
const MarqueeSection = lazy(() => import("./components/MarqueeSection/MarqueeSection"));
const ServiceSection = lazy(() => import("./components/ServiceSection/ServiceSection"));
const PortfolioSection = lazy(() => import("./components/PortfolioSection/PortfolioSection"));
const PricingSection = lazy(() => import("./components/PricingSection/PricingSection"));
const BrandSection = lazy(() => import("./components/BrandSection/BrandSection"));
const TestimonialSection = lazy(() => import("./components/TestimonialSection/TestimonialSection"));
const BlogSection = lazy(() => import("./components/BlogSection/BlogSection"));
const ContactSection = lazy(() => import("./components/ContactSection/ContactSection"));
const Footer = lazy(() => import("./components/Footer/Footer"));

// Компонент загрузки для ленивых компонентов
const SectionLoader = () => (
  <div className="d-flex justify-content-center p-4">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

// Хук для отложенной инициализации AOS
const useAOS = () => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({ 
        duration: 1000, 
        once: true,
        offset: 50,
        delay: 100
      });
    };
    
    // Инициализируем AOS только после загрузки страницы
    if (document.readyState === 'complete') {
      initAOS();
    } else {
      window.addEventListener('load', initAOS);
      return () => window.removeEventListener('load', initAOS);
    }
  }, []);
};

// Хук для отложенной загрузки Bootstrap JS
const useBootstrap = () => {
  useEffect(() => {
    const loadBootstrap = async () => {
      await import("bootstrap/dist/js/bootstrap.bundle.min.js");
    };
    
    // Загружаем Bootstrap JS только когда нужно
    const timer = setTimeout(loadBootstrap, 2000);
    return () => clearTimeout(timer);
  }, []);
};

// Хук для отложенной загрузки Odometer
const useOdometer = () => {
  useEffect(() => {
    const loadOdometer = async () => {
      await import("odometer/themes/odometer-theme-default.css");
    };
    
    // Загружаем Odometer только при скролле
    const handleScroll = () => {
      loadOdometer();
      window.removeEventListener('scroll', handleScroll);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

function App() {
  useAOS();
  useBootstrap();
  useOdometer();

  return (
    <div className="page-wrapper overflow-visible">
      <Preloader />
      <MagicCursor />
      <Header />

      <main>
        <HeroSection />
        
        <Suspense fallback={<SectionLoader />}>
          <FeatureSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ResumeSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <MarqueeSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ServiceSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <PortfolioSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <PricingSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <BrandSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <TestimonialSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <BlogSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
        
        <ScrollToTop />
      </main>
    </div>
  );
}

export default App;