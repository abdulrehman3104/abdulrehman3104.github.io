import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <h3>Abdul Rehman Bhatti</h3>
      <div className="footer-links">
        {/* Opens Gmail Web App directly in a new tab */}
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
      <p>© 2026 Abdul Rehman Bhatti</p>
    </footer>
  )
}

export default Footer