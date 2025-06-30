import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Play, Calendar, MapPin } from 'lucide-react'

const Hero = () => {
  const { t } = useTranslation()
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
           style={{
             backgroundImage: 'url("https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop&crop=faces,entropy&auto=format&q=80")'
           }}>
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-accent-600/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Festival badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6"
            data-testid="festival-badge"
          >
            {t('hero.badge')}
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-6"
            data-testid="hero-title"
          >
            {t('hero.title')}<span className="text-primary-400">{t('hero.titleAccent')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            data-testid="hero-subtitle"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Event details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12"
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-testid="hero-buttons"
          >
            <button
              onClick={() => scrollToSection('tickets')}
              className="btn-primary flex items-center space-x-2 group"
              data-testid="buy-tickets-btn"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              <span>{t('common.buyTickets')}</span>
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
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            data-testid="scroll-indicator"
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
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