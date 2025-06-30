import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ro', name: 'Română', flag: '🇷🇴' }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
    setIsOpen(false)
  }

  return (
    <div className="relative" data-testid="language-switcher">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-secondary-800 hover:bg-secondary-700 px-3 py-2 rounded-lg transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        data-testid="language-button"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-white text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown 
          size={16} 
          className={`text-white transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </motion.button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 right-0 bg-secondary-800 border border-secondary-700 rounded-lg shadow-lg z-20 min-w-[120px]"
            data-testid="language-dropdown"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-secondary-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  currentLanguage.code === language.code ? 'bg-primary-600 hover:bg-primary-700' : ''
                }`}
                data-testid={`language-option-${language.code}`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="text-white text-sm font-medium">{language.name}</span>
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  )
}

export default LanguageSwitcher 