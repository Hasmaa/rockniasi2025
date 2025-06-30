import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary-900" data-testid="contact-section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6" data-testid="contact-title">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="contact-description">
            Have questions about the festival? Want to volunteer or become a vendor? 
            We'd love to hear from you!
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
            <h3 className="text-2xl font-display text-white mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-secondary-800 border border-secondary-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors duration-300"
                    data-testid="contact-first-name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-secondary-800 border border-secondary-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors duration-300"
                    data-testid="contact-last-name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-secondary-800 border border-secondary-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors duration-300"
                  data-testid="contact-email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-secondary-800 border border-secondary-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors duration-300"
                  data-testid="contact-subject"
                >
                  <option value="">Select a subject</option>
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
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary-800 border border-secondary-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                  data-testid="contact-message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary flex items-center space-x-2"
                data-testid="contact-submit"
              >
                <Send size={20} />
                <span>Send Message</span>
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
            <h3 className="text-2xl font-display text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-gray-300">info@rockniasi.com</p>
                  <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone</h4>
                  <p className="text-gray-300">+40 232 123 456</p>
                  <p className="text-gray-400 text-sm">Mon-Fri 9:00-18:00 (EET)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Address</h4>
                  <p className="text-gray-300">Strada Palat, Nr. 1</p>
                  <p className="text-gray-300">Iasi, Romania</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Office Hours</h4>
                  <p className="text-gray-300">Monday - Friday: 9:00 - 18:00</p>
                  <p className="text-gray-300">Saturday: 10:00 - 16:00</p>
                  <p className="text-gray-400 text-sm">Closed on Sundays</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-secondary-800 rounded-lg p-6">
              <h4 className="text-xl font-display text-white mb-4">Follow Us</h4>
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