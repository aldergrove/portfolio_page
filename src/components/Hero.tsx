import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <p className="hero-label">
        ENGINEERING / TECHNOLOGY / CREATIVE
      </p>

      <h1>
        Engineer. Creator.
        <br />
        Problem Solver.
      </h1>

      <p className="hero-description">
        I build practical solutions across engineering,
        technology and creative work.
      </p>

      <Link to="/about">About me</Link>
    </section>
  )
}

export default Hero