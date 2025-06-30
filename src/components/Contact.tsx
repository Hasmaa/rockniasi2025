import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const { t } = useTranslation()
  
  return (
    <section id="contact" className="section-padding bg-secondary-50 dark:bg-secondary-900 transition-colors duration-300 relative overflow-hidden" data-testid="contact-section">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-secondary-800 dark:text-white mb-6" data-testid="contact-title">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="contact-description">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="contact-form"
          >
            <h3 className="text-2xl font-display text-secondary-800 dark:text-white mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-secondary-600 dark:text-gray-300 mb-2">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={t('contact.form.namePlaceholder')}
                    className="w-full px-4 py-3 bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-600 rounded-lg text-secondary-800 dark:text-white focus:outline-none focus:border-primary-500 transition-colors duration-300"
                    data-testid="contact-first-name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-secondary-600 dark:text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-600 rounded-lg text-secondary-800 dark:text-white focus:outline-none focus:border-primary-500 transition-colors duration-300"
                    data-testid="contact-last-name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-secondary-600 dark:text-gray-300 mb-2">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="w-full px-4 py-3 bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-600 rounded-lg text-secondary-800 dark:text-white focus:outline-none focus:border-primary-500 transition-colors duration-300"
                  data-testid="contact-email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-secondary-600 dark:text-gray-300 mb-2">{t('contact.form.subject')}</label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-600 rounded-lg text-secondary-800 dark:text-white focus:outline-none focus:border-primary-500 transition-colors duration-300"
                  data-testid="contact-subject"
                >
                  <option value="">{t('contact.form.subjectPlaceholder')}</option>
                  <option value="tickets">Ticket Information</option>
                  <option value="lineup">Lineup Questions</option>
                  <option value="venue">Venue & Directions</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="vendor">Vendor Information</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-secondary-600 dark:text-gray-300 mb-2">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-600 rounded-lg text-secondary-800 dark:text-white focus:outline-none focus:border-primary-500 transition-colors duration-300 resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                  data-testid="contact-message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary flex items-center space-x-2"
                data-testid="contact-submit"
              >
                <Send size={20} />
                <span>{t('contact.form.send')}</span>
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="contact-info"
          >
            <h3 className="text-2xl font-display text-secondary-800 dark:text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-secondary-800 dark:text-white font-bold mb-1">Email</h4>
                  <p className="text-secondary-600 dark:text-gray-300">{t('contact.info.email')}</p>
                  <p className="text-secondary-500 dark:text-gray-400 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-secondary-800 dark:text-white font-bold mb-1">Phone</h4>
                  <p className="text-secondary-600 dark:text-gray-300">{t('contact.info.phone')}</p>
                  <p className="text-secondary-500 dark:text-gray-400 text-sm">Mon-Fri 9:00-18:00 (EET)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-secondary-800 dark:text-white font-bold mb-1">Address</h4>
                  <p className="text-secondary-600 dark:text-gray-300">{t('contact.info.address')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-secondary-800 dark:text-white font-bold mb-1">Office Hours</h4>
                  <p className="text-secondary-600 dark:text-gray-300">Monday - Friday: 9:00 - 18:00</p>
                  <p className="text-secondary-600 dark:text-gray-300">Saturday: 10:00 - 16:00</p>
                  <p className="text-secondary-500 dark:text-gray-400 text-sm">Closed on Sundays</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white dark:bg-secondary-800 rounded-lg p-6 shadow-lg">
              <h4 className="text-xl font-display text-secondary-800 dark:text-white mb-4">{t('common.followUs')}</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com/rockniasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
                  data-testid="social-facebook"
                >
                  <span className="text-white font-bold">f</span>
                </a>
                <a 
                  href="https://instagram.com/rockniasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
                  data-testid="social-instagram"
                >
                  <span className="text-white font-bold">📷</span>
                </a>
                <a 
                  href="https://twitter.com/rockniasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
                  data-testid="social-twitter"
                >
                  <span className="text-white font-bold">𝕏</span>
                </a>
                <a 
                  href="https://youtube.com/rockniasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
                  data-testid="social-youtube"
                >
                  <span className="text-white font-bold">▶</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 