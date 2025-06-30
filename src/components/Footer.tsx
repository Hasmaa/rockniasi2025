import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary-950 text-white" data-testid="footer">
      <div className="container-custom py-12">
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
              <span className="text-xl font-display text-white">Rock'n'Iasi</span>
            </div>
            <p className="text-gray-400 mb-4">
              The biggest rock festival in Eastern Europe, bringing together the best 
              international and local rock artists for three unforgettable days.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/rockniasi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                data-testid="footer-facebook"
              >
                <span className="sr-only">Facebook</span>
                <span className="text-lg">📘</span>
              </a>
              <a 
                href="https://instagram.com/rockniasi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                data-testid="footer-instagram"
              >
                <span className="sr-only">Instagram</span>
                <span className="text-lg">📷</span>
              </a>
              <a 
                href="https://twitter.com/rockniasi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                data-testid="footer-twitter"
              >
                <span className="sr-only">Twitter</span>
                <span className="text-lg">𝕏</span>
              </a>
              <a 
                href="https://youtube.com/rockniasi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
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
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  About Festival
                </a>
              </li>
              <li>
                <a href="#lineup" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  Lineup
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#tickets" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  Tickets
                </a>
              </li>
              <li>
                <a href="#venue" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  Venue
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
            <h4 className="text-lg font-bold text-white mb-4">Festival Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="font-semibold text-white">Date:</span> July 15-17, 2025
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-white">Location:</span> Iasi, Romania
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-white">Venue:</span> Iasi Exhibition Center
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-white">Capacity:</span> 50,000+
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-white">Stages:</span> 5 stages
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
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="font-semibold text-white">Email:</span> info@rockniasi.com
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-white">Phone:</span> +40 232 123 456
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-white">Address:</span> Strada Palat, Nr. 1
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-white">Hours:</span> Mon-Fri 9:00-18:00
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-secondary-700 pt-8 flex flex-col md:flex-row justify-between items-center"
          data-testid="footer-bottom"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>
              © 2025 Rock'n'Iasi Festival. All rights reserved. Made with{' '}
              <Heart size={16} className="inline text-primary-400" /> in Iasi, Romania.
            </p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        data-testid="scroll-to-top"
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  )
}

export default Footer 