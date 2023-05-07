import React from 'react'
import './App.css'
import Landing from './components/landing/Landing.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Experience from './pages/experience/Experience'
import Projects from './pages/projects/Projects'
import Skills from './pages/skills/Skills'
import Development from './components/development/Development'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <>
      {/* <Development/> */}
        <Navbar/>
        <Landing/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Contact/>
    </>
  )
}

export default App