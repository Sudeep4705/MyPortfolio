import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './LandingPage/Home/Home'
import Sidebar from './LandingPage/Sidebar/Sidebar'
import Resume from './LandingPage/Resume/Resume'
import Projects from './LandingPage/Projects/Projects'
import About from './LandingPage/About/About'
function App() {
  

  return (
  
    <BrowserRouter>
    <Sidebar/>
    <main style={{ marginLeft: 280, padding: '2rem', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          {/* add more routes here */}
        </Routes>
      </main>
    </BrowserRouter>
   
  
  )
}

export default App
