import "./App.css";
import { Header } from "./components/Header/Header";
// import NavBar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import AboutMe from "./components/content/AboutMe";
import Contact from "./components/content/Contact";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="w-screen h-screen overflow-scroll md:snap-y lg:snap-y snap-mandatory">
      <div className="h-screen pt-10 mb-10 snap-start">
        <Header />
      </div>

      <Projects />

      <AboutMe />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
