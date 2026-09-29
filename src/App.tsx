import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Expertise />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App