import React from 'react'

function Skills() {

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Python',
    'Django',
    'C++',
    'MySQL',
    'MongoDB',
    'Git & GitHub'
  ]

  return (
    <section className="skills section" id="skills">

      <h2>Skills</h2>

      <div className="skills-container">

        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills