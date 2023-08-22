import React from 'react'
import './index.css'
import MainRoutes from './Routes'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'



function App() {
  return (
    <>
    <React.StrictMode>

        <Router>
            <Navbar />
            <MainRoutes />
        </Router>

    </React.StrictMode>
    </>
  )
}

export default App;

