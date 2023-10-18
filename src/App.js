import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Experiance from "./components/Experiance/Experiance";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Experiance />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
