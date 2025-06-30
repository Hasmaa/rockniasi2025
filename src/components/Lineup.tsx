import { motion } from 'framer-motion'
import { Instagram, Twitter, Globe } from 'lucide-react'

const Lineup = () => {
  const artists = [
    {
      name: "Metallica",
      genre: "Heavy Metal",
      day: "Day 1 - Headliner",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face",
      social: { instagram: "metallica", twitter: "Metallica", website: "metallica.com" }
    },
    {
      name: "Foo Fighters",
      genre: "Alternative Rock",
      day: "Day 2 - Headliner",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face",
      social: { instagram: "foofighters", twitter: "foofighters", website: "foofighters.com" }
    },
    {
      name: "Red Hot Chili Peppers",
      genre: "Funk Rock",
      day: "Day 3 - Headliner",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face",
      social: { instagram: "chilipeppers", twitter: "ChiliPeppers", website: "redhotchilipeppers.com" }
    },
    {
      name: "Arctic Monkeys",
      genre: "Indie Rock",
      day: "Day 1",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face",
      social: { instagram: "arcticmonkeys", twitter: "ArcticMonkeys", website: "arcticmonkeys.com" }
    },
    {
      name: "The Killers",
      genre: "Alternative Rock",
      day: "Day 2",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face",
      social: { instagram: "thekillers", twitter: "thekillers", website: "thekillersmusic.com" }
    },
    {
      name: "Queens of the Stone Age",
      genre: "Stoner Rock",
      day: "Day 3",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face",
      social: { instagram: "queensofthestoneage", twitter: "qotsa", website: "qotsa.com" }
    }
  ]

  return (
    <section id="lineup" className="section-padding bg-secondary-900" data-testid="lineup-section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6" data-testid="lineup-title">
            Festival Lineup
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="lineup-description">
            Experience the best rock artists from around the world. From legendary bands to rising stars, 
            our lineup promises three days of unforgettable performances.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="artists-grid">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              data-testid={`artist-${index}`}
            >
              <div className="relative h-64 bg-gradient-to-br from-primary-600 to-accent-600">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">🎸</span>
                    </div>
                    <h3 className="text-2xl font-display text-white mb-2">{artist.name}</h3>
                    <p className="text-primary-300 font-medium">{artist.genre}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {artist.day}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-center space-x-4 mb-4">
                  <a 
                    href={`https://instagram.com/${artist.social.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    data-testid={`artist-${index}-instagram`}
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href={`https://twitter.com/${artist.social.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    data-testid={`artist-${index}-twitter`}
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href={`https://${artist.social.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    data-testid={`artist-${index}-website`}
                  >
                    <Globe size={20} />
                  </a>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-300 text-sm">
                    Don't miss the incredible performance by {artist.name} at Rock'n'Iasi 2025!
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
          data-testid="lineup-cta"
        >
          <p className="text-gray-300 mb-6">
            More artists to be announced! Stay tuned for updates.
          </p>
          <button className="btn-primary">
            View Full Schedule
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Lineup 