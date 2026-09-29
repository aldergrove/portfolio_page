import { projects } from '../data/projects.ts'

function FeaturedProjects() {
  return (
    <section className="featured-projects">
      <div className="featured-projects-header">
        <p className="section-label">SELECTED PROJECTS</p>

        
      </div>

      <div className="featured-project-list">
        {projects.map((project, index) => (
          <article className="featured-project" key={project.title}>
            <span className="project-number">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className="featured-project-main">
              <h3>{project.title}</h3>

              <p>{project.description}</p>
            </div>

            <div className="featured-project-tech">
              {project.technologies.join(' / ')}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects