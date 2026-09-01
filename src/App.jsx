import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Component Imports
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProjectDetails from './components/ProjectDetails'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'

import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App