import { motion } from 'framer-motion'
import { Music, Users, Star, Award } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Music,
      title: "50+ Artists",
      description: "World-class rock bands and solo artists from around the globe"
    },
    {
      icon: Users,
      title: "50,000+ Attendees",
      description: "Join thousands of rock enthusiasts for an unforgettable experience"
    },
    {
      icon: Star,
      title: "3 Stages",
      description: "Multiple stages with different vibes and musical styles"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized as the best rock festival in Eastern Europe"
    }
  ]

  return (
    <section id="about" className="section-padding bg-secondary-800" data-testid="about-section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6" data-testid="about-title">
            About the Festival
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="about-description">
            Rock'n'Iasi is more than just a music festival - it's a celebration of rock culture, 
            bringing together the best international and local rock artists for three unforgettable days.
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
            <h3 className="text-3xl font-display text-white mb-6">
              The Ultimate Rock Experience
            </h3>
            <p className="text-gray-300 mb-6">
              Since its inception in 2010, Rock'n'Iasi has grown from a local gathering to one of 
              Europe's most anticipated rock festivals. Our mission is to create an immersive 
              experience where music, culture, and community come together.
            </p>
            <p className="text-gray-300 mb-6">
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
              <div className="bg-secondary-900 rounded-lg p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Music size={40} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Rock'n'Iasi 2025</h4>
                  <p className="text-gray-400">Experience the power of rock</p>
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
                className="text-center p-6 bg-secondary-700 rounded-lg hover:bg-secondary-600 transition-colors duration-300"
                data-testid={`feature-${index}`}
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 