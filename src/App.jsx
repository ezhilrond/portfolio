import { use, useState } from "react"
import './App.css'

import Home from './Components/Homepage/Home'
import About from './Components/Aboutpage/About'
import Navbar from './Components/Navbar/Navbar'
import Skills from "./Components/Skillsection/Skills";
import Contact from "./Components/Contact/Contact";
import Project from "./Components/Projectsection/Project";
import Certificate from "./Components/Certificatepage/Certificate";

const App = () => {
  const handleScrool = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Certificate />
      <Contact />
    </>
  )
};

export default App;
