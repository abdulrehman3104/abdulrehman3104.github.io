import React from 'react'
import { useParams } from 'react-router-dom'

function ProjectDetails() {

  const { id } = useParams()

  const projects = {
    netflix: {
      title: 'Netflix Data Explorer',

      description:
        'A Django-based web application for exploring and analyzing Netflix movies and TV shows. It provides an interactive dashboard with search, filtering, charts, statistics, and data export features.',

      technologies: [
        'Python',
        'Django',
        'SQLite',
        'Pandas',
        'Chart.js',
        'ReportLab',
        'HTML',
        'CSS',
      ],

      github:
        'https://github.com/abdulrehman3104/netflix_explorer'
    },

    textutils: {
      title: 'TextUtils',

      description:
        'A React-based text utility application that allows users to perform different operations on text, including changing text case, clearing text, copying text, removing extra spaces, counting words and characters, extracting emails, and using different themes.',

      technologies: [
        'React.js',
        'JavaScript',
        'HTML',
        'CSS',
        'Bootstrap'
      ],

      github:
        'https://github.com/abdulrehman3104/TextUtlilty-Home'
    },

    election: {
      title: 'Election Management System',

      description:
        'A Django-based Election Management System designed to manage voters, candidates, political parties, constituencies, elections, online voting, OTP authentication, and automated election results.',

      technologies: [
        'Python',
        'Django',
        'MySQL',
        'HTML',
        'CSS',
      ],

      github:
        'https://github.com/abdulrehman3104/Election-Management-System'
    }
  }

  const project = projects[id]

  if (!project) {
    return <h2>Project Not Found</h2>
  }

  return (
    <div className="project-details">

      <h1>{project.title}</h1>

      <h2>Description</h2>

      <p>{project.description}</p>

      <h2>Technologies Used</h2>

      <div className="technology-list">

        {project.technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}

      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="github-btn"
      >
        View on GitHub
      </a>

    </div>
  )
}

export default ProjectDetails