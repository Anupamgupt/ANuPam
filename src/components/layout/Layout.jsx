import React, { useEffect } from 'react'
import Landing from '../landing/Landing'
import Experience from '../../pages/experience/Experience'
import Projects from '../../pages/projects/Projects'
import Skills from '../../pages/skills/Skills'
import Contact from '../../pages/contact/Contact'
import { useDispatch } from 'react-redux';
import { page } from '../../store/NavSlice' 

function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(page("Portfolio"));
  }, [dispatch]); // Only dispatch once after the initial render

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

export default Layout;
