import { motion } from 'framer-motion'
import { MapPin, Car, Train, Bus, Wifi, Utensils, Heart } from 'lucide-react'

const Venue = () => {
  const facilities = [
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed internet throughout the venue"
    },
    {
      icon: Utensils,
      title: "Food & Drinks",
      description: "Multiple food vendors and bars"
    },
    {
      icon: Heart,
      title: "Medical Services",
      description: "24/7 medical assistance on site"
    },
    {
      icon: Car,
      title: "Parking",
      description: "Secure parking for 10,000+ vehicles"
    }
  ]

  const transportOptions = [
    {
      icon: Car,
      title: "By Car",
      description: "Free parking available on site",
      details: "Follow signs to Rock'n'Iasi Festival parking"
    },
    {
      icon: Train,
      title: "By Train",
      description: "Iasi Central Station - 15 min walk",
      details: "Regular trains from Bucharest, Cluj, and Timisoara"
    },
    {
      icon: Bus,
      title: "By Bus",
      description: "Multiple bus routes to venue",
      details: "Lines 1, 3, 5, 8, 12, 15, 20, 25"
    }
  ]

  return (
    <section id="venue" className="section-padding bg-secondary-800" data-testid="venue-section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6" data-testid="venue-title">
            Festival Venue
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="venue-description">
            Experience Rock'n'Iasi at the beautiful Iasi Exhibition Center, 
            a state-of-the-art venue with perfect acoustics and amazing atmosphere.
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
            <h3 className="text-3xl font-display text-white mb-6">
              Iasi Exhibition Center
            </h3>
            <p className="text-gray-300 mb-6">
              Located in the heart of Iasi, the Exhibition Center provides the perfect 
              setting for our rock festival. With over 50,000 square meters of space, 
              multiple stages, and excellent facilities, it's the ideal venue for an 
              unforgettable music experience.
            </p>
            <p className="text-gray-300 mb-6">
              The venue features state-of-the-art sound systems, LED screens, 
              comfortable seating areas, and plenty of space for food vendors, 
              merchandise stands, and interactive installations.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-primary-400" />
                <span className="text-gray-300">Strada Palat, Nr. 1, Iasi, Romania</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-400 font-bold">Capacity:</span>
                <span className="text-gray-300">50,000+ attendees</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-400 font-bold">Stages:</span>
                <span className="text-gray-300">3 main stages + 2 smaller stages</span>
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
              <div className="bg-secondary-900 rounded-lg p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin size={40} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Iasi Exhibition Center</h4>
                  <p className="text-gray-400 mb-4">Strada Palat, Nr. 1</p>
                  <button className="btn-secondary text-sm">
                    View on Map
                  </button>
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
          <h3 className="text-3xl font-display text-white text-center mb-12">
            Venue Facilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-secondary-700 rounded-lg"
                data-testid={`facility-${index}`}
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <facility.icon size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{facility.title}</h4>
                <p className="text-gray-300">{facility.description}</p>
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
          <h3 className="text-3xl font-display text-white text-center mb-12">
            Getting There
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {transportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-secondary-700 rounded-lg p-6"
                data-testid={`transport-${index}`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <option.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{option.title}</h4>
                </div>
                <p className="text-gray-300 mb-3">{option.description}</p>
                <p className="text-gray-400 text-sm">{option.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Venue 