import './App.css';
import { Header } from './components/Header/Header';
// import NavBar from "./components/layouts/Navbar";
import Footer from './components/layouts/Footer';
import AboutMe from './components/content/AboutMe';
import Contact from './components/content/Contact';
import Projects from './components/Projects/Projects';
import { useRef, useEffect } from 'react';
import myGa from './myGa';
import WSkills from './components/Skills/WSkills';

import { useSelector } from 'react-redux';

function App() {

  const aboutMeRef = useRef();
  const projectRef = useRef();

  const aboutInside = useSelector((state) => state.aboutInside.isInside);

  useEffect(() => {
    // initialize google analytics
    myGa();
  }, []);

  return (
    <div className="h-screen overflow-scroll w-screenh-screen scroll-smooth backgroundImage" >
      <div className="h-screen mb-10">
        <Header />
      </div>

      <div className="w-full overflow-hidden">
        <WSkills />
      </div>

      <div ref={projectRef} className="pt-20 overflow-hidden">
        <Projects />
      </div>

      <div className="pt-20">
        <Contact />
      </div>

      <Footer projectRef={projectRef} aboutMeRef={aboutMeRef} />
    </div>
  );
}

export default App;

// arreglar escala de imagenes, poner overflow hidden para que queden parejas sin perder la escala
// onhover en las cartas de project hacer que se opaque y que se vean las tecnologias y un boton para el link
