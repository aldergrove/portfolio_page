function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <p className="section-label">ABOUT</p>

        <h1>
          Engineer by profession.
          <br />
          Generalist by nature.
        </h1>
      </div>

      <div className="about-content">
        <div className="about-intro">
          <p>
            I am a multidisciplinary engineer with experience across
            engineering, product data, quality, project coordination
            and technical customer-facing work.
          </p>
        </div>

        <div className="about-text">
          <p>
            My work has ranged from product structures and ERP systems
            to quotation tools, process development and international
            engineering projects. I am particularly interested in
            understanding complex systems and turning them into
            practical solutions.
          </p>

          <p>
            I am equally comfortable working with data and software,
            coordinating people and projects, or solving practical
            technical problems.
          </p>

          <p>
            Outside my professional work, I build, program, compose
            and produce music. These different disciplines share the
            same foundation for me: curiosity, experimentation and
            understanding how things work.
          </p>
        </div>
      </div>

      <div className="about-skills">
        <div>
          <span>01</span>
          <h2>Engineering</h2>
          <p>
            Product development, product structures, quality,
            manufacturing and technical problem solving.
          </p>
        </div>

        <div>
          <span>02</span>
          <h2>Systems & Data</h2>
          <p>
            ERP, PDM, Excel, VBA, data structures, automation
            and process development.
          </p>
        </div>

        <div>
          <span>03</span>
          <h2>Projects</h2>
          <p>
            Project coordination, international collaboration,
            workshops and stakeholder communication.
          </p>
        </div>

        <div>
          <span>04</span>
          <h2>Creative</h2>
          <p>
            Music production, composition, programming,
            electronics and hands-on projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About