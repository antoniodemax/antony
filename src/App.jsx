import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white font-sans">
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <HeroSection />
        <Services />
        <Portfolio />
        <Testimonials />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;