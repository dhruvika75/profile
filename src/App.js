import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Servicdepage from './pages/Servicdepage'
import Contactpage from './pages/Contactpage'
import Workpage from './pages/workpage'

function App() {
 
  return (
    <>
  <Routes> 

    <Route path="/" element={<Homepage/>} />
    <Route path="/about" element={<Aboutpage/>} />
    <Route path="/service" element={<Servicdepage/>} />
    <Route path="/work" element={<Workpage/>} />
    <Route path="/contact" element={<Contactpage/>} />
  </Routes>

    </>
  )
}

export default App
