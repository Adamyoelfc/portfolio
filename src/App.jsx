import { useEffect } from 'react';
import { Hero, Skills, Projects, Contact } from './components/sections';
import { Footer } from './components/layout';
import { gsap, ScrollTrigger } from './hooks';
import myGa from './myGa';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    myGa();

    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: target, offsetY: 0 },
            ease: 'power3.inOut',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-primary overflow-x-hidden">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Vignette effect */}
      <div className="vignette" />

      {/* Main content */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
