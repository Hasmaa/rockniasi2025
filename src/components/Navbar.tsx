import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const navItems = [
    { name: t('navigation.home'), id: 'hero' },
    { name: t('navigation.about'), id: 'about' },
    { name: t('navigation.lineup'), id: 'lineup' },
    { name: t('navigation.schedule'), id: 'schedule' },
    { name: t('navigation.sponsors'), id: 'sponsors' },
    { name: t('navigation.venue'), id: 'venue' },
    { name: t('navigation.contact'), id: 'contact' }
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
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-display text-secondary-800 dark:text-white">
              Rock'n'Iasi
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-secondary-700 dark:text-white hover:text-primary-400 transition-colors duration-300 font-medium"
                data-testid={`nav-${item.id}`}
              >
                {item.name}
              </button>
            ))}
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
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-secondary-700 dark:text-white hover:text-primary-400 transition-colors duration-300 text-left"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 