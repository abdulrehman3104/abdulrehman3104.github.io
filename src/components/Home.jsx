import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../assets/profile.jpeg'

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Abdul Rehman Bhatti</h1>
        <h2>Software Engineering Student & Web Developer</h2>
        <p>
          I am a Software Engineering student passionate about building
          modern and user-friendly web applications.
        </p>

        <Link to="/contact" className="contact-btn">
          Contact Me
        </Link>
      </div>

      <div className="home-image">
        <img src={profile} alt="Abdul Rehman Bhatti" />
      </div>
    </section>
  )
}

export default Home