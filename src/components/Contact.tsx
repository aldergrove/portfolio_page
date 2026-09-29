function Contact() {
  const sendEmail = () => {
  const encoded: number[] = [138, 151, 147, 148, 83, 146, 134, 153, 142, 134, 152, 101, 140, 146, 134, 142, 145, 83, 136, 148, 146]

  const address = encoded
    .map((value) => String.fromCharCode(value - 37))
    .join('')

  const protocol = String.fromCharCode(
    109, 97, 105, 108, 116, 111, 58
  )
  console.log(address)
  window.location.assign(protocol + address)
}

  return (
    <section className="contact-page" id="contact">
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
          <button
            type="button"
            className="contact-email"
            onClick={sendEmail}
          >
            <span>Email</span>
            <strong>Send me an email</strong>
          </button>

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