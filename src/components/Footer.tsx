function Footer() {
  return (
    <footer>
      <div className="footer-content">
        {/* <strong>Matias Lepistö.</strong> */}

        <p>
          Engineer. Creator. Problem Solver.
        </p>

        <span>
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}

export default Footer