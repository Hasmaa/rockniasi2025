import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Calendar, MapPin, Users, Music, Award, Heart, Mail, User, Mic } from 'lucide-react'

const RNI = () => {
  const { t } = useTranslation()

  const stats = [
    { icon: Music, number: "12", label: "Trupe participante" },
    { icon: Users, number: "300+", label: "Tineri în public" },
    { icon: User, number: "30", label: "Voluntari implicați" },
    { icon: Calendar, number: "3", label: "Zile de concerte" }
  ]

  const activities = [
    {
      title: "Concerte Live",
      description: "12 trupe rock debutante, program artistic divers (rock alternativ, metal, indie, progressive)",
      icon: Mic
    },
    {
      title: "Atelier \"Rock Responsabil\"",
      description: "Educație pentru cetățenie digitală, siguranță online și comportament etic",
      icon: Award
    },
    {
      title: "Campanie Media",
      description: "Facebook, Instagram, TikTok, YouTube – urmărește anunțurile și conținutul festivalului",
      icon: Heart
    }
  ]

  const involvement = [
    {
      title: "Înscrie-ți trupa!",
      description: "Urmărește campania de înscriere (august-septembrie 2025) pe rețelele noastre sociale",
      color: "bg-primary-600"
    },
    {
      title: "Vino ca public!",
      description: "Intrare liberă la toate concertele, 3 zile de muzică live și activități interactive",
      color: "bg-accent-600"
    },
    {
      title: "Devino voluntar!",
      description: "Oportunități reale de învățare, training, diploma de participare și experiență practică",
      color: "bg-secondary-600"
    }
  ]

  return (
    <div className="min-h-screen bg-secondary-50 dark:bg-secondary-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="section-padding pt-24 md:pt-32 bg-gradient-to-br from-primary-600 to-accent-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-display mb-6">
              RNI – YOU(THS) BREAK THE STAGE
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Festivalul național dedicat tinerilor artiști rock debutanți din România
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar size={24} className="text-primary-300" />
                <span className="text-lg">26 – 28 septembrie 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={24} className="text-primary-300" />
                <span className="text-lg">Sala Azur, Casa de Cultură a Studenților Iași</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is this festival */}
      <section className="section-padding bg-white dark:bg-secondary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display text-secondary-800 dark:text-white mb-6">
              Ce este acest festival?
            </h2>
            <p className="text-xl text-secondary-600 dark:text-gray-300 max-w-4xl mx-auto">
              O platformă unică de afirmare artistică, networking și formare civică pentru trupele rock tinere, cu vârstele 14-35 ani.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Music size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-2">12 trupe selectate</h3>
                    <p className="text-secondary-600 dark:text-gray-300">din întreaga țară vor cânta live, vor primi feedback de la un juriu de profesioniști și vor fi promovate în media națională.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-2">Intrare gratuită</h3>
                    <p className="text-secondary-600 dark:text-gray-300">pentru public, iar trupele beneficiază de suport tehnic, premii și vizibilitate.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-secondary-100 dark:bg-secondary-700 rounded-lg">
                  <stat.icon size={32} className="text-primary-500 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-secondary-800 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-secondary-600 dark:text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's new */}
      <section className="section-padding bg-secondary-100 dark:bg-secondary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display text-secondary-800 dark:text-white mb-6">
              Ce aduce nou față de alte festivaluri?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-secondary-700 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-4">Fără headlineri consacrați</h3>
              <p className="text-secondary-600 dark:text-gray-300">
                Accentul cade exclusiv pe trupele debutante, pe șanse egale și colaborare.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-secondary-700 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-4">Atelier &quot;Rock Responsabil&quot;</h3>
              <p className="text-secondary-600 dark:text-gray-300">
                Sesiuni interactive pe teme de cetățenie digitală, siguranță online, drepturi de autor și comportament etic.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-secondary-700 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-4">Componentă socială</h3>
              <p className="text-secondary-600 dark:text-gray-300">
                30 de voluntari implicați în organizare, traininguri gratuite pentru tineri în management de eveniment și comunicare digitală.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to get involved */}
      <section className="section-padding bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display text-secondary-800 dark:text-white mb-6">
              Cum te poți implica?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {involvement.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${item.color} text-white rounded-lg p-8 shadow-lg`}
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main activities */}
      <section className="section-padding bg-secondary-100 dark:bg-secondary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display text-secondary-800 dark:text-white mb-6">
              Activități principale
            </h2>
          </motion.div>

          <div className="space-y-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-secondary-700 rounded-lg p-8 shadow-lg"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <activity.icon size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-800 dark:text-white mb-4">
                      {activity.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-gray-300 text-lg">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display text-secondary-800 dark:text-white mb-6">
              Impactul proiectului
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <p className="text-secondary-600 dark:text-gray-300">
                  Sprijină scena rock tânără din România, oferind spațiu de afirmare, feedback artistic și networking.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <p className="text-secondary-600 dark:text-gray-300">
                  Dezvoltă competențe digitale și civice pentru tineri, cu focus pe comportament responsabil în online.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <p className="text-secondary-600 dark:text-gray-300">
                  Creează o comunitate alternativă, sigură și prietenoasă pentru artiști, public și voluntari.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <p className="text-secondary-600 dark:text-gray-300">
                  Contribuie la diversificarea vieții culturale din Iași și susține colaborarea între ONG-uri, instituții și mediul artistic.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organizers & Contact */}
      <section className="section-padding bg-secondary-100 dark:bg-secondary-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display text-secondary-800 dark:text-white mb-6">
                Cine organizează?
              </h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-secondary-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-2">
                    Asociația Culturală Moldavia
                  </h3>
                  <p className="text-secondary-600 dark:text-gray-300">
                    Din 2010, peste 150 de evenimente organizate la Iași
                  </p>
                </div>
                <div className="bg-white dark:bg-secondary-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-2">
                    Partener
                  </h3>
                  <p className="text-secondary-600 dark:text-gray-300">
                    Asociația Liga Studenților "ETH" din Iași
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display text-secondary-800 dark:text-white mb-6">
                Contact
              </h2>
              <div className="bg-white dark:bg-secondary-700 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail size={20} className="text-primary-500" />
                  <span className="text-secondary-600 dark:text-gray-300">asociatiamoldavia@gmail.com</span>
                </div>
                <h3 className="text-lg font-bold text-secondary-800 dark:text-white mb-4">
                  Urmărește-ne pe:
                </h3>
                <div className="space-y-2">
                  <p className="text-secondary-600 dark:text-gray-300">
                    <strong>Facebook:</strong> Asociația Culturală Moldavia | Liga Studenților ETH Iași
                  </p>
                  <p className="text-secondary-600 dark:text-gray-300">
                    <strong>Instagram & TikTok:</strong> Urmează conturile anunțate la startul campaniei!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RNI 