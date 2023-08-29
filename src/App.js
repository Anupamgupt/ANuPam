import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Experience from './pages/experience/Experience'
import Projects from './pages/projects/Projects'
import Skills from './pages/skills/Skills'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Contact from './pages/contact/Contact'
import Layout from './components/layout/Layout'


function App() {  
  // console.log(location)
  // const dispatch = useDispatch();
  
  return (
    <Router>
      <Navbar/>   
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App