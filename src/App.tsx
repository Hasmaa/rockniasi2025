import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Lineup from './components/Lineup'
import Schedule from './components/Schedule'
import Tickets from './components/Tickets'
import Venue from './components/Venue'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-secondary-900">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Lineup />
              <Schedule />
              <Tickets />
              <Venue />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App 