import React from 'react'

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2>Contact Me</h2>

      <p>
        Feel free to connect with me through the following platforms.
      </p>

      <div className="contact-links">
        {/* Opens Gmail directly in a new tab */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=abdulrehmanbhatti1@icloud.com"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>

        <a
          href="https://github.com/abdulrehman3104"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/abdulrehmanbhatti-tech/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact