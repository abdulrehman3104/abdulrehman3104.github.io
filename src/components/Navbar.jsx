import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="portfolio-navbar">
      <Link className="portfolio-logo" to="/">
        My Portfolio
      </Link>

      <div className="portfolio-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
        <Link to="/contact">Contact</Link>

        <Link to="/projects" className="projects-btn">
          View Projects
        </Link>
      </div>
    </nav>
  )
}

export default Navbar