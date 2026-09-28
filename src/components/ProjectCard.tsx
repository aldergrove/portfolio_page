type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
}

function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <div className="technologies">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard