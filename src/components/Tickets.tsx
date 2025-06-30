import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Check, Star } from 'lucide-react'

const Tickets = () => {
  const { t } = useTranslation()
  
  const ticketTiers = [
    {
      name: t('tickets.types.dayPass.name'),
      price: "€89",
      originalPrice: "€120",
      description: t('tickets.types.dayPass.description'),
      features: [
        t('tickets.features.access'),
        t('tickets.features.food'),
        "General admission",
        t('tickets.features.merchandise')
      ],
      popular: false
    },
    {
      name: t('tickets.types.weekendPass.name'),
      price: "€199",
      originalPrice: "€280",
      description: t('tickets.types.weekendPass.description'),
      features: [
        "3-day access to all stages",
        "Priority entry",
        "Exclusive food & drink areas",
        t('tickets.features.merchandise'),
        "Access to VIP lounges",
        t('tickets.features.meetGreet')
      ],
      popular: true
    },
    {
      name: t('tickets.types.vipPass.name'),
      price: "€399",
      originalPrice: "€550",
      description: t('tickets.types.vipPass.description'),
      features: [
        "3-day VIP access",
        "Exclusive VIP area",
        "Complimentary food & drinks",
        "Premium viewing areas",
        t('tickets.features.meetGreet'),
        t('tickets.features.merchandise'),
        "Dedicated VIP entrance",
        t('tickets.features.backstage')
      ],
      popular: false
    }
  ]

  return (
    <section id="tickets" className="section-padding bg-secondary-50 dark:bg-secondary-900 transition-colors duration-300 relative" data-testid="tickets-section">
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
          <h2 className="text-4xl md:text-5xl font-display text-secondary-800 dark:text-white mb-6" data-testid="tickets-title">
            {t('tickets.title')}
          </h2>
          <p className="text-xl text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="tickets-description">
            {t('tickets.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16" data-testid="ticket-tiers">
          {ticketTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white dark:bg-secondary-800 rounded-lg p-8 shadow-lg ${
                tier.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
              data-testid={`ticket-${index}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star size={16} />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-display text-secondary-800 dark:text-white mb-2" data-testid={`ticket-${index}-name`}>
                  {tier.name}
                </h3>
                <p className="text-secondary-600 dark:text-gray-300 mb-4">{tier.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary-400" data-testid={`ticket-${index}-price`}>
                    {tier.price}
                  </span>
                  <span className="text-gray-500 line-through ml-2" data-testid={`ticket-${index}-original-price`}>
                    {tier.originalPrice}
                  </span>
                </div>
                
                <div className="text-green-400 text-sm font-bold mb-6">
                  Save {parseInt(tier.originalPrice.replace('€', '')) - parseInt(tier.price.replace('€', ''))}€
                </div>
              </div>

              <ul className="space-y-3 mb-8" data-testid={`ticket-${index}-features`}>
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check size={20} className="text-primary-500 dark:text-primary-400 flex-shrink-0" />
                    <span className="text-secondary-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                    : 'bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'
                }`}
                data-testid={`ticket-${index}-buy-btn`}
              >
                {t('tickets.buyNow')}
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
          data-testid="ticket-info"
        >
          <h4 className="text-2xl font-display text-secondary-800 dark:text-white mb-4">Important Ticket Information</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div>
              <h5 className="text-primary-500 dark:text-primary-400 font-bold mb-2">Age Requirement</h5>
              <p className="text-secondary-600 dark:text-gray-300">18+ or accompanied by adult</p>
            </div>
            <div>
              <h5 className="text-primary-500 dark:text-primary-400 font-bold mb-2">Refund Policy</h5>
              <p className="text-secondary-600 dark:text-gray-300">Full refund until May 1st, 2025</p>
            </div>
            <div>
              <h5 className="text-primary-500 dark:text-primary-400 font-bold mb-2">Payment</h5>
              <p className="text-secondary-600 dark:text-gray-300">Credit card, PayPal, Bank transfer</p>
            </div>
            <div>
              <h5 className="text-primary-500 dark:text-primary-400 font-bold mb-2">Delivery</h5>
              <p className="text-secondary-600 dark:text-gray-300">Digital tickets via email</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Tickets 