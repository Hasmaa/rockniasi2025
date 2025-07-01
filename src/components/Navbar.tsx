import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Animated Hamburger Component
  const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
    return (
      <div className="w-6 h-6 relative flex items-center justify-center">
        {/* Top line */}
        <motion.div
          className="absolute w-4 h-0.5 bg-secondary-700 dark:bg-white rounded-sm"
          animate={
            isOpen
              ? { rotate: 45, y: 0 }
              : { rotate: 0, y: -5 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        
        {/* Middle line */}
        <motion.div
          className="absolute w-4 h-0.5 bg-secondary-700 dark:bg-white rounded-sm"
          animate={
            isOpen
              ? { opacity: 0 }
              : { opacity: 1 }
          }
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
        
        {/* Bottom line */}
        <motion.div
          className="absolute w-4 h-0.5 bg-secondary-700 dark:bg-white rounded-sm"
          animate={
            isOpen
              ? { rotate: -45, y: 0 }
              : { rotate: 0, y: 5 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
    )
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for active section detection
  useEffect(() => {
    // Only run intersection observer on home page
    if (location.pathname !== '/') {
      setActiveSection('')
      return
    }

    const sections = ['hero', 'about', 'lineup', 'schedule', 'sponsors', 'venue', 'contact']
    const observers: IntersectionObserver[] = []

    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -70% 0px', // Account for navbar height (~80px) + extra margin
      threshold: 0
    }

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId)
            }
          })
        }, observerOptions)
        
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [location.pathname])

  const scrollToSection = (sectionId: string) => {
    const scrollToElementWithOffset = (element: HTMLElement) => {
      const navbar = document.querySelector('nav[data-testid="navbar"]') as HTMLElement
      const navbarHeight = navbar ? navbar.offsetHeight : 80 // fallback to 80px
      const elementPosition = element.offsetTop - navbarHeight - 20 // 20px extra padding
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }

    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          scrollToElementWithOffset(element)
        }
      }, 100)
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(sectionId)
      if (element) {
        scrollToElementWithOffset(element)
      }
    }
    setIsOpen(false)
  }

  const navItems = [
    { name: t('navigation.home'), id: 'hero', isRoute: false },
    { name: t('navigation.about'), id: 'about', isRoute: false },
    { name: t('navigation.lineup'), id: 'lineup', isRoute: false },
    { name: t('navigation.schedule'), id: 'schedule', isRoute: false },
    { name: t('navigation.sponsors'), id: 'sponsors', isRoute: false },
    { name: t('navigation.venue'), id: 'venue', isRoute: false },
    { name: t('navigation.contact'), id: 'contact', isRoute: false },
    { name: 'You(ths) Break the Stage', id: '/rni', isRoute: true }
  ]

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/95 dark:bg-transparent backdrop-blur-md'
      }`}
      data-testid="navbar"
    >
      <div className="container-custom px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-display text-secondary-800 dark:text-white">
              Rock'n'Iasi
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.isRoute) {
                return (
                  <Link
                    key={item.id}
                    to={item.id}
                    className={`font-medium transition-colors duration-300 ${
                      location.pathname === item.id
                        ? 'text-primary-500 dark:text-primary-400'
                        : 'text-secondary-700 dark:text-white hover:text-primary-400'
                    }`}
                    data-testid={`nav-${item.id.replace('/', '')}`}
                    onClick={() => {
                      setIsOpen(false)
                      // Scroll to top when navigating to RNI page
                      if (item.id === '/rni') {
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }, 100)
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                )
              } else {
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`font-medium transition-colors duration-300 ${
                      activeSection === item.id && location.pathname === '/'
                        ? 'text-primary-500 dark:text-primary-400'
                        : 'text-secondary-700 dark:text-white hover:text-primary-400'
                    }`}
                    data-testid={`nav-${item.id}`}
                  >
                    {item.name}
                  </button>
                )
              }
            })}
            <LanguageSwitcher />
            <ThemeToggle />

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-700 dark:text-white p-3 flex items-center justify-center min-w-[48px] min-h-[48px]"
              data-testid="mobile-menu-button"
            >
              <AnimatedHamburger isOpen={isOpen} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-secondary-800 rounded-lg mt-2 p-4 shadow-lg" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                if (item.isRoute) {
                                     return (
                     <Link
                       key={item.id}
                       to={item.id}
                       className={`transition-colors duration-300 text-left ${
                         location.pathname === item.id
                           ? 'text-primary-500 dark:text-primary-400 font-semibold'
                           : 'text-secondary-700 dark:text-white hover:text-primary-400'
                       }`}
                       data-testid={`mobile-nav-${item.id.replace('/', '')}`}
                       onClick={() => {
                         setIsOpen(false)
                         // Scroll to top when navigating to RNI page
                         if (item.id === '/rni') {
                           setTimeout(() => {
                             window.scrollTo({ top: 0, behavior: 'smooth' })
                           }, 100)
                         }
                       }}
                     >
                       {item.name}
                     </Link>
                   )
                } else {
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`transition-colors duration-300 text-left ${
                        activeSection === item.id && location.pathname === '/'
                          ? 'text-primary-500 dark:text-primary-400 font-semibold'
                          : 'text-secondary-700 dark:text-white hover:text-primary-400'
                      }`}
                      data-testid={`mobile-nav-${item.id}`}
                    >
                      {item.name}
                    </button>
                  )
                }
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 