import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full bg-background relative selection:bg-accent selection:text-background">
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

      <Navbar />

      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
