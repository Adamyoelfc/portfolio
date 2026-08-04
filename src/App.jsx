import { useEffect } from 'react';
import { Hero, Experience, EngineeringWork, Skills, Projects, Contact } from './components/sections';
import { Footer } from './components/layout';
import myGa from './myGa';

function App() {
  useEffect(() => {
    myGa();
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-primary overflow-x-clip">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Vignette effect */}
      <div className="vignette" />

      {/* Main content */}
      <main>
        <Hero />
        <Experience />
        <EngineeringWork />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
