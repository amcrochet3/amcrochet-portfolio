import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

export default App;