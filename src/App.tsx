

import LearnPage from './components/LearnPage'
// src/main.tsx (or src/index.tsx)
import './index.css'; // Make sure Tailwind CSS is imported
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/landingPage';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/demo" element={<LearnPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
