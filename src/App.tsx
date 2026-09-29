import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SelectedWork />
        <Intro />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App