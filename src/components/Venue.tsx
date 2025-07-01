import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { MapPin, Car, Train, Bus, Wifi, Utensils, Heart } from 'lucide-react'

const Venue = () => {
  const { t } = useTranslation()
  
  const facilities = [
    {
      icon: Wifi,
      title: t('venue.facilities.wifi.title'),
      description: t('venue.facilities.wifi.description')
    },
    {
      icon: Utensils,
      title: t('venue.features.food'),
      description: "Multiple food vendors and bars"
    },
    {
      icon: Heart,
      title: t('venue.facilities.medical.title'),
      description: t('venue.facilities.medical.description')
    },
    {
      icon: Car,
      title: t('venue.features.parking'),
      description: "Secure parking for 10,000+ vehicles"
    }
  ]

  const transportOptions = [
    {
      icon: Car,
      title: t('venue.facilities.transport.car.title'),
      description: t('venue.facilities.transport.car.description'),
      details: t('venue.facilities.transport.car.details')
    },
    {
      icon: Train,
      title: t('venue.facilities.transport.train.title'),
      description: t('venue.facilities.transport.train.description'),
      details: t('venue.facilities.transport.train.details')
    },
    {
      icon: Bus,
      title: t('venue.facilities.transport.bus.title'),
      description: t('venue.facilities.transport.bus.description'),
      details: t('venue.facilities.transport.bus.details')
    }
  ]

  return (
    <section id="venue" className="section-padding bg-secondary-100 dark:bg-secondary-800 transition-colors duration-300" data-testid="venue-section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-secondary-800 dark:text-white mb-6" data-testid="venue-title">
            {t('venue.title')}
          </h2>
          <p className="text-xl text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="venue-description">
            {t('venue.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="venue-info"
          >
            <h3 className="text-3xl font-display text-secondary-800 dark:text-white mb-6">
              {t('common.iasiExhibitionCenter')}
            </h3>
            <p className="text-secondary-600 dark:text-gray-300 mb-6">
              {t('venue.description')}
            </p>
            <p className="text-secondary-600 dark:text-gray-300 mb-6">
              {t('common.venueDescription')}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-primary-500 dark:text-primary-400" />
                <span className="text-secondary-600 dark:text-gray-300">Strada Palat, Nr. 1, Iasi, Romania</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-500 dark:text-primary-400 font-bold">{t('common.capacity')}</span>
                <span className="text-secondary-600 dark:text-gray-300">{t('common.attendeesCount')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-500 dark:text-primary-400 font-bold">{t('common.stages')}</span>
                <span className="text-secondary-600 dark:text-gray-300">{t('venue.features.stages')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
            data-testid="venue-map"
          >
            <div className="bg-gradient-to-br from-primary-600 to-accent-600 p-1 rounded-lg">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                  alt="Modern exhibition center venue"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600/80 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin size={32} className="text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{t('common.iasiExhibitionCenter')}</h4>
                    <p className="text-gray-200 mb-4">Strada Palat, Nr. 1</p>
                    <button className="btn-secondary text-sm">
                      {t('common.getDirections')}
                    </button>
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
          className="mb-16"
          data-testid="facilities-section"
        >
          <h3 className="text-3xl font-display text-secondary-800 dark:text-white text-center mb-12">
            {t('common.venueFacilities')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-secondary-700 rounded-lg shadow-md"
                data-testid={`facility-${index}`}
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <facility.icon size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-secondary-800 dark:text-white mb-2">{facility.title}</h4>
                <p className="text-secondary-600 dark:text-gray-300">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="transport-section"
        >
          <h3 className="text-3xl font-display text-secondary-800 dark:text-white text-center mb-12">
            {t('common.gettingThere')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {transportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-secondary-700 rounded-lg p-6 shadow-lg"
                data-testid={`transport-${index}`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <option.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-secondary-800 dark:text-white">{option.title}</h4>
                </div>
                <p className="text-secondary-600 dark:text-gray-300 mb-3">{option.description}</p>
                <p className="text-secondary-500 dark:text-gray-400 text-sm">{option.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Venue 