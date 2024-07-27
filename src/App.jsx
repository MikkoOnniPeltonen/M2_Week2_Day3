
import './App.css'
import { useState } from 'react'

import {Routes, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ErrorPage from './pages/ErrorPage'
import Navbar from './pages/Navbar'
import ProjectsDetailsPage from './pages/ProjectsDetailsPage'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/projects" element={<ProjectsPage />}/>
        <Route path="/projects/:projectId" element={<ProjectsDetailsPage/>} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
      
    </>
  )
}

export default App
