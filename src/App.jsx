import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Legal from './components/Legal';
import LeadFormModal from './components/LeadFormModal';

function Home({ onOpenModal }) {
  return (
    <main>
      <Hero onOpenModal={onOpenModal} />
      <Features />
      <Philosophy />
      <Protocol />
      <Pricing onOpenModal={onOpenModal} />
    </main>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="w-full bg-background relative selection:bg-accent selection:text-background min-h-screen flex flex-col">
        {/* Global CSS Noise Filter definition (since Safari might not support pure CSS filters well, 
            using an SVG turbulence overlay is best per prompt) */}
        <svg className="fixed top-0 left-0 w-0 h-0 pointer-events-none noise-overlay z-[9999]" style={{ opacity: 0.05, mixBlendMode: 'overlay' }}>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        {/* Fallback CSS class for the noise overlay defined in index.css */}
        <div className="noise-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

        <Navbar onOpenModal={() => setIsModalOpen(true)} />

        <div className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home onOpenModal={() => setIsModalOpen(true)} />} />

            <Route path="/privacy-policy" element={
              <Legal
                title="Privacy Policy"
                lastUpdated="October 12, 2024"
                content={<>
                  <h3>1. Information We Collect</h3>
                  <p>When you interact with our Services, we collect information that could be used to identify you...</p>
                  <h3>2. How We Use Your Information</h3>
                  <p>We use the information we collect to operate, improve, and protect our systems and services.</p>
                </>}
              />
            } />

            <Route path="/terms" element={
              <Legal
                title="Terms of Service"
                lastUpdated="October 12, 2024"
                content={<>
                  <h3>1. Acceptance of Terms</h3>
                  <p>By accessing or using our websites and services, you agree to be bound by these Terms.</p>
                  <h3>2. Description of Service</h3>
                  <p>Griv is an AI growth agency providing custom engineering and strategic automation pipelines.</p>
                </>}
              />
            } />
          </Routes>
        </div>

        <Footer />
        <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
