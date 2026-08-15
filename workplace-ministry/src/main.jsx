import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Ministries from './pages/Ministries.jsx'
import Events from './pages/Events.jsx'
import Contact from './pages/Contact.jsx'
import Prayer from './pages/Prayer.jsx'
import Donate from './pages/Donate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prayer" element={<Prayer />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  </StrictMode>,
)
