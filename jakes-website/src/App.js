//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className= "bg-gradient-to-r from-cyan-500 to-blue-900 pb-20">
      <Nav></Nav>
      <div className = "px-20">
      <About></About>
      <Experience></Experience>
      <Skills></Skills>
      <Projects></Projects>

      <Contact></Contact>

      </div>
    </div>
  );
}

export default App;
