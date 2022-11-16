import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import LandingPage from './pages/landingPage'
import Slider from './pages/slider/index';

function App() {
  return (
    
    <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
          <Route
          path="/slide"
          element={<Slider />}
        />
      </Routes>
  )
}

export default App
