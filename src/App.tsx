import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashbord from './pages/dashbord'

import LandingPage from './pages/landingPage'

function App() {
  return (
    
    <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/dashbord"
          element={<Dashbord />}
        />
      </Routes>
  )
}

export default App
