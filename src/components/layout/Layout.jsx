import React from 'react'
import Landing from '../landing/Landing'
import Experience from '../../pages/experience/Experience'
import Projects from '../../pages/projects/Projects'
import Skills from '../../pages/skills/Skills'
import Contact from '../../pages/contact/Contact'

function Layout() {
  return (
    <>
        <Landing/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Contact/>
    </>
  )
}

export default Layout