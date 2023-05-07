import "./App.css";
import { Header } from "./components/Header/Header";
// import NavBar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import AboutMe from "./components/content/AboutMe";
import Contact from "./components/content/Contact";
import Projects from "./components/Projects/Projects";
import { useRef, useEffect } from "react";
import myGa from "./myGa";

function App() {
  const projectRef = useRef();
  const aboutMeRef = useRef();

  useEffect(() => {
    myGa();
  }, []);

  return (
    <div className="h-screen overflow-scroll scroll-auto w-screen">
      <div className="pt-10 mb-10">
        <Header />
      </div>

      <div ref={projectRef} className="bg-black pt-20">
        <Projects />
      </div>

      <div ref={aboutMeRef} className="bg-gray-100 pt-20">
        <AboutMe />
      </div>

      <div className="bg-gray-200 pt-20">
        <Contact />
      </div>

      <Footer projectRef={projectRef} aboutMeRef={aboutMeRef} />
    </div>
  );
}

export default App;
