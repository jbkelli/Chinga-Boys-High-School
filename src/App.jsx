import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Student from './components/Student';
import Parents from './components/Parents';
import Events from './components/Events';
import CodeOfConduct from './components/CodeOfConduct';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Home page component with all sections
const HomePage = () => (
  <>
    <Hero />
    <Header />
    <About />
    <Academics />
    <Gallery />
    <Blog />
    <Contact />
    <Footer />
  </>
);

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<Student />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/events" element={<Events />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
      </Routes>
    </div>
  );
}

export default App;