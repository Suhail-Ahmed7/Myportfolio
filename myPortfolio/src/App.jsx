import React, { useEffect, useState, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Certifications from './Components/Certifications';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AOS from 'aos';        
import 'aos/dist/aos.css'; 
import './App.css'

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });

    const handleScroll = () => {
      let current = '';
      sectionsRef.current.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    
      <main>
        <Navbar activeSection={activeSection} />
        <Home ref={(el) => (sectionsRef.current[0] = el)} />
        <About ref={(el) => (sectionsRef.current[1] = el)} />
        <Projects ref={(el) => (sectionsRef.current[2] = el)} />
        <Skills ref={(el) => (sectionsRef.current[3] = el)} />
        <Certifications ref={(el) => (sectionsRef.current[4] = el)} />
        <Education ref={(el) => (sectionsRef.current[5] = el)} />
        <Contact ref={(el) => (sectionsRef.current[6] = el)} />
        
          
      </main>
      <Footer />
    </>
  );
};

export default App;