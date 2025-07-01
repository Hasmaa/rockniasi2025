import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Play, Calendar, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const { t } = useTranslation()
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Hide indicator when user scrolls down more than 100px
      setShowScrollIndicator(scrollY < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-end relative overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
           style={{
             backgroundImage: 'url("https://images.unsplash.com/photo-1501612780327-45045538702b?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80")'
           }}>
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-accent-600/20"></div>

      <div className="container-custom text-left relative z-10 px-4 sm:px-6 lg:px-8 pr-8 md:pr-20">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Festival badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-block bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6"
            data-testid="festival-badge"
          >
            {t('hero.badge')}
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-6"
            data-testid="hero-title"
          >
            {t('hero.title')}<span className="text-primary-600">{t('hero.titleAccent')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl ml-auto"
            data-testid="hero-subtitle"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Event details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-end items-end sm:items-center gap-6 mb-12"
            data-testid="event-details"
          >
            <div className="flex items-center space-x-2 text-gray-200">
              <Calendar size={20} className="text-primary-400" />
              <span>{t('hero.date')}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-200">
              <MapPin size={20} className="text-primary-400" />
              <span>{t('hero.location')}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-end items-end sm:items-center"
            data-testid="hero-buttons"
          >
            <button
              onClick={() => scrollToSection('sponsors')}
              className="btn-primary flex items-center space-x-2 group"
              data-testid="become-partner-btn"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              <span>{t('common.becomePartner')}</span>
            </button>
            <button
              onClick={() => scrollToSection('lineup')}
              className="btn-secondary"
              data-testid="view-lineup-btn"
            >
              {t('common.viewLineup')}
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showScrollIndicator ? 1 : 0 }}
            transition={{ delay: showScrollIndicator ? 1 : 0, duration: 0.5 }}
            className="fixed bottom-24 right-11 z-40"
            data-testid="scroll-indicator"
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 