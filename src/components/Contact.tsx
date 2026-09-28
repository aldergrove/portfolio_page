function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-heading">
        <p className="section-label">CONTACT</p>

        <h1>
          Let's build something
          <br />
          useful.
        </h1>
      </div>

      <div className="contact-content">
        <div className="contact-intro">
          <p>
            Interested in working together, discussing an opportunity
            or exchanging ideas? Feel free to get in touch.
          </p>
        </div>

        <div className="contact-links">
          <a href="mailto:your@email.com">
            <span>Email</span>
            <strong>your@email.com</strong>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <strong>View profile</strong>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <strong>View projects</strong>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact