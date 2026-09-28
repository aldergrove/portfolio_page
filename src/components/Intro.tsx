import { Link } from 'react-router-dom'

function Intro() {
  return (
    <section className="intro">
      <div className="intro-heading">
        <p className="section-label">ABOUT</p>

        <h2>
          A multidisciplinary engineer
          <br />
          with a creative side.
        </h2>
      </div>

      <div className="intro-content">
        <p>
          My background spans engineering, product data, quality,
          project coordination and technical problem solving.
        </p>

        <p>
          I enjoy understanding how things work, improving processes
          and building practical solutions, whether the challenge is
          technical, digital or hands-on.
        </p>

        <p>
          Outside engineering, I work with music, programming and
          creative projects, bringing the same curiosity and
          problem-solving mindset across different disciplines.
        </p>

        <Link to="/about" className="text-link">
          More about me
        </Link>
      </div>
    </section>
  )
}

export default Intro