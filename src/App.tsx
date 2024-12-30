

import LearnPage from './components/LearnPage'
// src/main.tsx (or src/index.tsx)
// import React from 'react';

import './index.css'; // Make sure Tailwind CSS is imported
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/landingPage';
import RoadmapDisplay from './utils/roadmapDisplay'
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/demo/" element={<LearnPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/roadmap/" element={<RoadmapDisplay />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
