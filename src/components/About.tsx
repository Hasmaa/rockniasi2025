import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Music, Users, Star, Award } from 'lucide-react'

const About = () => {
  const { t } = useTranslation()
  
  const features = [
    {
      icon: Music,
      title: t('about.stats.artists'),
      description: "World-class rock bands and solo artists from around the globe"
    },
    {
      icon: Users,
      title: t('about.stats.capacity'),
      description: "Join thousands of rock enthusiasts for an unforgettable experience"
    },
    {
      icon: Star,
      title: t('about.stats.stages'),
      description: "Multiple stages with different vibes and musical styles"
    },
    {
      icon: Award,
      title: t('about.stats.years'),
      description: "Recognized as the best rock festival in Eastern Europe"
    }
  ]

  return (
    <section id="about" className="section-padding bg-secondary-100 dark:bg-secondary-800 transition-colors duration-300" data-testid="about-section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-secondary-800 dark:text-white mb-6" data-testid="about-title">
            {t('about.title')}
          </h2>
          <p className="text-xl text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="about-description">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="about-content"
          >
            <h3 className="text-3xl font-display text-secondary-800 dark:text-white mb-6">
              The Ultimate Rock Experience
            </h3>
            <p className="text-secondary-600 dark:text-gray-300 mb-6">
              {t('about.description')}
            </p>
            <p className="text-secondary-600 dark:text-gray-300 mb-6">
              Set against the beautiful backdrop of Iasi, Romania's cultural capital, the festival 
              offers not just incredible music, but also amazing food, art installations, and 
              interactive experiences that make every moment memorable.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                Rock & Metal
              </div>
              <div className="bg-accent-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                Alternative
              </div>
              <div className="bg-secondary-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                Indie Rock
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
            data-testid="about-image"
          >
            <div className="bg-gradient-to-br from-primary-600 to-accent-600 p-1 rounded-lg">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                  alt="Rock festival crowd at night"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-white mb-2">Rock'n'Iasi 2025</h4>
                    <p className="text-gray-200">Experience the power of rock</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="features-grid"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-secondary-700 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-600 transition-colors duration-300 shadow-md"
                data-testid={`feature-${index}`}
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-secondary-800 dark:text-white mb-2">{feature.title}</h4>
                <p className="text-secondary-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 