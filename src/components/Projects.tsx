import { projects } from '../data/projects.ts'

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <p className="section-label">PROJECTS</p>

        <h2>
          Things I've built,
          <br />
          developed and created.
        </h2>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <article className="project-row" key={project.title}>
            <span className="project-index">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects