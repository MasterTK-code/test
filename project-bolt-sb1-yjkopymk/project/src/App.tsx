import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import Particles from './components/Particles';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05051a] to-[#0a0a2a] text-white relative overflow-hidden">
      <Particles />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;