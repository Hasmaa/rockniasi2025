import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Lineup from './components/Lineup'
import Schedule from './components/Schedule'
import Sponsors from './components/Sponsors'
import Venue from './components/Venue'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <Router basename="/rock-n-iasi-2025">
        <div className="min-h-screen bg-secondary-50 dark:bg-secondary-900 transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Lineup />
                <Schedule />
                <Sponsors />
                <Venue />
                <Contact />
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App 