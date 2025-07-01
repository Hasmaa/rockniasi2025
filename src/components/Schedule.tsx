import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Clock, MapPin } from 'lucide-react'

const Schedule = () => {
  const { t } = useTranslation()
  
  const schedule = [
    {
      day: `${t('schedule.days.friday')} - July 15`,
      date: "Tuesday",
      events: [
        { time: "14:00", artist: t('schedule.events.openingCeremony'), stage: t('schedule.stages.main') },
        { time: "15:30", artist: t('schedule.events.localRockBand'), stage: t('schedule.stages.rock') },
                  { time: "17:00", artist: "Arctic Monkeys", stage: t('schedule.stages.main') },
          { time: "19:30", artist: t('schedule.events.alternativeRockAct'), stage: t('schedule.stages.alternative') },
          { time: "22:00", artist: "Metallica", stage: t('schedule.stages.main') }
      ]
    },
    {
      day: `${t('schedule.days.saturday')} - July 16`,
      date: "Wednesday",
      events: [
        { time: "14:00", artist: t('schedule.events.morningRockSession'), stage: t('schedule.stages.rock') },
        { time: "15:30", artist: t('schedule.events.indieRockBand'), stage: t('schedule.stages.alternative') },
        { time: "17:00", artist: "The Killers", stage: t('schedule.stages.main') },
        { time: "19:30", artist: t('schedule.events.heavyMetalAct'), stage: t('schedule.stages.rock') },
        { time: "22:00", artist: "Foo Fighters", stage: t('schedule.stages.main') }
      ]
    },
    {
      day: `${t('schedule.days.sunday')} - July 17`,
      date: "Thursday",
      events: [
        { time: "14:00", artist: t('schedule.events.finalDayKickoff'), stage: t('schedule.stages.all') },
        { time: "15:30", artist: t('schedule.events.stonerRockBand'), stage: t('schedule.stages.rock') },
        { time: "17:00", artist: "Queens of the Stone Age", stage: t('schedule.stages.main') },
        { time: "19:30", artist: t('schedule.events.funkRockAct'), stage: t('schedule.stages.alternative') },
        { time: "22:00", artist: "Red Hot Chili Peppers", stage: t('schedule.stages.main') }
      ]
    }
  ]

  return (
    <section id="schedule" className="section-padding bg-secondary-100 dark:bg-secondary-800 transition-colors duration-300 relative" data-testid="schedule-section">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-3 dark:opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-500/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-accent-500/20 rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-20 h-20 border-2 border-primary-500/20 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-36 h-36 border-2 border-accent-500/20 rounded-full"></div>
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-secondary-800 dark:text-white mb-6" data-testid="schedule-title">
            {t('schedule.title')}
          </h2>
          <p className="text-xl text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="schedule-description">
            {t('schedule.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-12" data-testid="schedule-timeline">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-secondary-700 rounded-lg p-8 shadow-lg"
              data-testid={`day-${dayIndex}`}
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-display text-primary-500 dark:text-primary-400 mb-2" data-testid={`day-${dayIndex}-title`}>
                  {day.day}
                </h3>
                <p className="text-secondary-600 dark:text-gray-300 text-lg">{day.date}</p>
              </div>

              <div className="space-y-4" data-testid={`day-${dayIndex}-events`}>
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={`${day.day}-${event.time}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-secondary-50 dark:bg-secondary-600 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-500 transition-colors duration-300"
                    data-testid={`event-${dayIndex}-${eventIndex}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-primary-500 dark:text-primary-400">
                        <Clock size={20} />
                        <span className="font-bold">{event.time}</span>
                      </div>
                      <div>
                        <h4 className="text-secondary-800 dark:text-white font-bold text-lg">{event.artist}</h4>
                        <div className="flex items-center space-x-2 text-secondary-600 dark:text-gray-300">
                          <MapPin size={16} />
                          <span>{event.stage}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {event.time}
                      </div>
                    </div>
                  </motion.div>
                ))}
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
          data-testid="schedule-info"
        >
          <div className="bg-white dark:bg-secondary-700 rounded-lg p-8 max-w-2xl mx-auto shadow-lg">
            <h4 className="text-2xl font-display text-secondary-800 dark:text-white mb-4">{t('common.importantInfo')}</h4>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h5 className="text-primary-500 dark:text-primary-400 font-bold mb-2">{t('schedule.info.gatesOpen')}</h5>
                <p className="text-secondary-600 dark:text-gray-300">{t('schedule.info.gatesOpenTime')}</p>
              </div>
              <div>
                <h5 className="text-primary-500 dark:text-primary-400 font-bold mb-2">{t('schedule.info.lastEntry')}</h5>
                <p className="text-secondary-600 dark:text-gray-300">{t('schedule.info.lastEntryTime')}</p>
              </div>
              <div>
                <h5 className="text-primary-500 dark:text-primary-400 font-bold mb-2">{t('schedule.info.foodDrinks')}</h5>
                <p className="text-secondary-600 dark:text-gray-300">{t('schedule.info.foodAvailable')}</p>
              </div>
              <div>
                <h5 className="text-primary-500 dark:text-primary-400 font-bold mb-2">{t('schedule.info.security')}</h5>
                <p className="text-secondary-600 dark:text-gray-300">{t('schedule.info.securityInfo')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Schedule 