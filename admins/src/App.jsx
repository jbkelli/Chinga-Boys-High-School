import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import Teachers from "./components/Teachers";
import Health from "./components/Health";
import Admissions from "./components/Admissions";
import Faculty from "./components/Faculty";

const root = createRoot(document.getElementById('root'))

function App(){
  return(
    <>
      <Teachers />
      <Health />
      <Health />
      <Admissions />
      <Faculty />
    </>
  )
}

root.render(
  <App />
)

export default App