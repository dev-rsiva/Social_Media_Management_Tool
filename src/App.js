import React from 'react'
import './index.css'
import MainRoutes from './Routes'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'



function App() {
  return (
    <>
      <Router>
          <Navbar />
          <MainRoutes />
      </Router>
    </>
  )
}

export default App;

