
import './App.css'
import { useState } from 'react'

import {Routes, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage'

function App() {


  return (
    <>

      <Routes>
        <Route path="/about" element={<AboutPage/>}/>
        {/* Exercise 1: Create route for /homepage that displays the HomePage component */}
      </Routes>
      
    </>
  )
}

export default App
