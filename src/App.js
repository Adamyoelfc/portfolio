import "./App.css";
import { Header } from "./components/Header/Header";
// import NavBar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import AboutMe from "./components/content/AboutMe";
import Contact from "./components/content/Contact";
import Projects from "./components/Projects/Projects";
import { useRef } from "react";

function App() {
  const projectRef = useRef();
  const aboutMeRef = useRef();
  return (
    <div className="h-screen overflow-scroll scroll-auto">
      <div className="pt-10 mb-10">
        <Header />
      </div>

      <div ref={projectRef} className="mx-4 mt-20 md:mt-40 sm:mx-20">
        <Projects />
      </div>

      <div ref={aboutMeRef} className="mx-4 mt-40 sm:mx-20">
        <AboutMe />
      </div>

      <div className="mx-4 mt-40 sm:mx-20">
        <Contact />
      </div>

      <Footer projectRef={projectRef} aboutMeRef={aboutMeRef} />
    </div>
  );
}

export default App;
