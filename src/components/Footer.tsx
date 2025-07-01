import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Heart, ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

const Footer = () => {
  const { t } = useTranslation()
  const [showScrollTop, setShowScrollTop] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Show button when user scrolls down more than 150px
      setShowScrollTop(scrollY > 150)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary-200 dark:bg-secondary-900 text-secondary-800 dark:text-white transition-colors duration-300" data-testid="footer">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="footer-brand"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-display text-secondary-800 dark:text-white">Rock'n'Iasi</span>
            </div>
            <p className="text-secondary-600 dark:text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/rockniasi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                data-testid="footer-facebook"
              >
                <span className="sr-only">Facebook</span>
                <span className="text-lg">📘</span>
              </a>
              <a 
                href="https://instagram.com/rockniasi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                data-testid="footer-instagram"
              >
                <span className="sr-only">Instagram</span>
                <span className="text-lg">📷</span>
              </a>
              <a 
                href="https://twitter.com/rockniasi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                data-testid="footer-twitter"
              >
                <span className="sr-only">Twitter</span>
                <span className="text-lg">𝕏</span>
              </a>
              <a 
                href="https://youtube.com/rockniasi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                data-testid="footer-youtube"
              >
                <span className="sr-only">YouTube</span>
                <span className="text-lg">▶</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            data-testid="footer-links"
          >
            <h4 className="text-lg font-bold text-secondary-800 dark:text-white mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-secondary-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                  {t('navigation.about')}
                </a>
              </li>
              <li>
                <a href="#lineup" className="text-secondary-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                  {t('navigation.lineup')}
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-secondary-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                  {t('navigation.schedule')}
                </a>
              </li>
              <li>
                <a href="#tickets" className="text-secondary-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                  {t('navigation.tickets')}
                </a>
              </li>
              <li>
                <a href="#venue" className="text-secondary-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                  {t('navigation.venue')}
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            data-testid="footer-info"
          >
            <h4 className="text-lg font-bold text-secondary-800 dark:text-white mb-4">Festival Info</h4>
            <ul className="space-y-2">
              <li className="text-secondary-600 dark:text-gray-400">
                <span className="font-semibold text-secondary-800 dark:text-white">Date:</span> {t('hero.date')}
              </li>
              <li className="text-secondary-600 dark:text-gray-400">
                <span className="font-semibold text-secondary-800 dark:text-white">Location:</span> {t('hero.location')}
              </li>
              <li className="text-secondary-600 dark:text-gray-400">
                <span className="font-semibold text-secondary-800 dark:text-white">{t('common.venue')}</span> {t('common.iasiExhibitionCenter')}
              </li>
              <li className="text-secondary-600 dark:text-gray-400">
                <span className="font-semibold text-secondary-800 dark:text-white">{t('common.capacity')}</span> 50,000+
              </li>
              <li className="text-secondary-600 dark:text-gray-400">
                <span className="font-semibold text-secondary-800 dark:text-white">{t('common.stages')}</span> 5 stages
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            data-testid="footer-contact"
          >
            <h4 className="text-lg font-bold text-secondary-800 dark:text-white mb-4">{t('navigation.contact')}</h4>
            <ul className="space-y-2">
              <li className="text-secondary-600 dark:text-gray-400">
                <span className="font-semibold text-secondary-800 dark:text-white">Email:</span> {t('contact.info.email')}
              </li>
              <li className="text-secondary-600 dark:text-gray-400">
                <span className="font-semibold text-secondary-800 dark:text-white">Phone:</span> {t('contact.info.phone')}
              </li>
              <li className="text-secondary-600 dark:text-gray-400">
                <span className="font-semibold text-secondary-800 dark:text-white">Address:</span> {t('contact.info.address')}
              </li>
              <li className="text-secondary-600 dark:text-gray-400">
                <span className="font-semibold text-secondary-800 dark:text-white">Hours:</span> Mon-Fri 9:00-18:00
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-secondary-300 dark:border-secondary-700 pt-8 flex flex-col md:flex-row justify-between items-center"
          data-testid="footer-bottom"
        >
          <div className="text-secondary-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            <p>
              {t('footer.rights')} Made with{' '}
              <Heart size={16} className="inline text-primary-500 dark:text-primary-400" /> by Hasma.
            </p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-secondary-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-secondary-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        data-testid="scroll-to-top"
        style={{ pointerEvents: showScrollTop ? 'auto' : 'none' }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  )
}

export default Footer 