import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Check, Star, Heart } from 'lucide-react'

const Sponsors = () => {
  const { t } = useTranslation()
  
  const sponsorPackages = [
    {
      name: t('sponsors.packages.bronze.name'),
      price: "€2,500",
      originalPrice: "€3,500",
      description: t('sponsors.packages.bronze.description'),
      benefits: [
        t('sponsors.benefits.logoWebsite'),
        t('sponsors.benefits.socialMedia'),
        "Program booklet mention",
        "2 VIP tickets included",
        t('sponsors.benefits.mediaKit')
      ],
      popular: false
    },
    {
      name: t('sponsors.packages.silver.name'),
      price: "€5,000",
      originalPrice: "€7,000",
      description: t('sponsors.packages.silver.description'),
      benefits: [
        t('sponsors.benefits.logoWebsite'),
        t('sponsors.benefits.logoStage'),
        t('sponsors.benefits.socialMedia'),
        t('sponsors.benefits.boothSpace'),
        "5 VIP tickets included",
        t('sponsors.benefits.mediaKit'),
        "Newsletter mentions"
      ],
      popular: true
    },
    {
      name: t('sponsors.packages.gold.name'),
      price: "€10,000",
      originalPrice: "€15,000",
      description: t('sponsors.packages.gold.description'),
      benefits: [
        "Premium logo placement on website",
        t('sponsors.benefits.logoStage'),
        "Featured social media campaigns",
        "Premium booth location",
        "10 VIP tickets included",
        t('sponsors.benefits.backstageAccess'),
        t('sponsors.benefits.brandingRights'),
        t('sponsors.benefits.mediaKit'),
        "Press conference participation"
      ],
      popular: false
    }
  ]

  return (
    <section id="sponsors" className="section-padding bg-secondary-50 dark:bg-secondary-900 transition-colors duration-300 relative" data-testid="sponsors-section">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-3 dark:opacity-5">
        <div className="absolute top-16 left-4 transform rotate-12">
          <div className="w-16 h-20 border-2 border-dashed border-primary-500/30"></div>
        </div>
        <div className="absolute top-32 right-8 transform -rotate-12">
          <div className="w-20 h-24 border-2 border-dashed border-accent-500/30"></div>
        </div>
        <div className="absolute bottom-20 left-12 transform rotate-45">
          <div className="w-12 h-16 border-2 border-dashed border-primary-500/30"></div>
        </div>
        <div className="absolute bottom-40 right-16 transform -rotate-45">
          <div className="w-18 h-22 border-2 border-dashed border-accent-500/30"></div>
        </div>
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-secondary-800 dark:text-white mb-6" data-testid="sponsors-title">
            {t('sponsors.title')}
          </h2>
          <p className="text-xl text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="sponsors-description">
            {t('sponsors.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16" data-testid="sponsor-packages">
          {sponsorPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white dark:bg-secondary-800 rounded-lg p-8 shadow-lg ${
                pkg.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
              data-testid={`sponsor-package-${index}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star size={16} />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-display text-secondary-800 dark:text-white mb-2" data-testid={`sponsor-package-${index}-name`}>
                  {pkg.name}
                </h3>
                <p className="text-secondary-600 dark:text-gray-300 mb-4">{pkg.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary-400" data-testid={`sponsor-package-${index}-price`}>
                    {pkg.price}
                  </span>
                  <span className="text-gray-500 line-through ml-2" data-testid={`sponsor-package-${index}-original-price`}>
                    {pkg.originalPrice}
                  </span>
                </div>
                
                <div className="text-green-400 text-sm font-bold mb-6">
                  Save {parseInt(pkg.originalPrice.replace('€', '').replace(',', '')) - parseInt(pkg.price.replace('€', '').replace(',', ''))}€
                </div>
              </div>

              <ul className="space-y-3 mb-8" data-testid={`sponsor-package-${index}-benefits`}>
                {pkg.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center space-x-3">
                    <Check size={20} className="text-primary-500 dark:text-primary-400 flex-shrink-0" />
                    <span className="text-secondary-600 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                    : 'bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'
                }`}
                data-testid={`sponsor-package-${index}-contact-btn`}
              >
                {t('sponsors.contactUs')}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-secondary-700 rounded-lg p-8 text-center shadow-lg"
          data-testid="sponsorship-info"
        >
          <div className="flex justify-center mb-4">
            <Heart size={48} className="text-primary-500 dark:text-primary-400" />
          </div>
          <h4 className="text-2xl font-display text-secondary-800 dark:text-white mb-4">Why Partner With Us?</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div>
              <h5 className="text-primary-500 dark:text-primary-400 font-bold mb-2">Audience Reach</h5>
              <p className="text-secondary-600 dark:text-gray-300">15,000+ attendees over 3 days</p>
            </div>
            <div>
              <h5 className="text-primary-500 dark:text-primary-400 font-bold mb-2">Digital Exposure</h5>
              <p className="text-secondary-600 dark:text-gray-300">50,000+ social media followers</p>
            </div>
            <div>
              <h5 className="text-primary-500 dark:text-primary-400 font-bold mb-2">Media Coverage</h5>
              <p className="text-secondary-600 dark:text-gray-300">Local & national press coverage</p>
            </div>
            <div>
              <h5 className="text-primary-500 dark:text-primary-400 font-bold mb-2">Brand Association</h5>
              <p className="text-secondary-600 dark:text-gray-300">Align with Romania's top rock event</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Sponsors 