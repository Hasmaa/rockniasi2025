import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ro', name: 'Română' }
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
        className="flex items-center space-x-2 px-3 py-2 text-secondary-700 dark:text-white hover:text-primary-400 transition-colors duration-300 font-medium"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        data-testid="language-button"
      >
        <span className="text-sm">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown 
          size={16} 
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
            className="absolute top-full mt-2 right-0 bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-lg shadow-lg z-20 min-w-[120px]"
            data-testid="language-dropdown"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left text-secondary-700 dark:text-white hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:text-primary-400 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  currentLanguage.code === language.code ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400' : ''
                }`}
                data-testid={`language-option-${language.code}`}
              >
                <span className="text-sm font-medium">{language.name}</span>
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  )
}

export default LanguageSwitcher 