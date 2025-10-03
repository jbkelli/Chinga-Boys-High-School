import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';
import Health from './components/Health';
import Teachers from './components/Teachers';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/health" element={<Health />} />
          <Route path="/teachers" element={<Teachers />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;