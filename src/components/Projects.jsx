import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  const projects = [
    {
      id: 'netflix',
      title: 'Netflix Data Explorer',
      technology: 'Python & Django'
    },
    {
      id: 'textutils',
      title: 'TextUtils',
      technology: 'React.js'
    },
    {
      id: 'election',
      title: 'Election Management System',
      technology: 'Python & Django'
    }
  ]

  return (
    <section className="projects section" id="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.technology}</p>
            
            {/* Navigates to the details page */}
            <Link to={`/project/${project.id}`} className="view-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects