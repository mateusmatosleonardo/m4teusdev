import { motion } from 'framer-motion'
import Avatar from '../../assets/me.jpeg'

const Hero = () => {
  return (
    <div className="mt-32 space-y-14 lg:space-y-24 text-white">
      <section className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="container px-4 mx-auto">
          <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
            <div className="lg:px-4 lg:mt-12">
              <motion.h1
                className='text-2xl font-bold text-white lg:text-7xl'
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4, delay: 0.25 }}
              >Olá 👋,
              </motion.h1>
              <motion.div
                className='flex items-center gap-x-4'
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                <h1
                  className={'text-2xl font-bold text-white lg:text-7xl'}
                >
                  Eu sou
                </h1>
                <span className={'text-2xl font-bold text-white lg:text-7xl'}>
                  Mateus
                  <span className={'text-2xl font-bold text-blue-500 lg:text-7xl'}>.</span>
                </span>
              </motion.div>
              <motion.div
                className='mt-6'
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4, delay: 0.45 }}
              >
                <span className='text-4xl text-white font-light'>Sou {''}</span>
                <span className='text-4xl text-blue-500 font-bold'>Desenvolvedor Full Stack</span>
              </motion.div>
              <div className="mt-6 text-white">
                <motion.p
                  className="text-lg text-gray-400 font-light"
                  variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.4, delay: 0.55 }}>
                  Com mais de 4 anos inserido no mercado, já desenvolvi diversos sistemas e apps para varias empresas e pessoas. 🚀🌎
                </motion.p>
                <motion.div variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 }
                }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.4, delay: 0.65 }}>
                  <button className='mt-6 py-1.5 px-5 text-lg text-black hover:-translate-y-1 transition-all duration-300 font-light rounded-sm bg-blue-500'>
                    Contato
                  </button>
                </motion.div>
              </div>
            </div>
            <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10 drop-shadow-xl">
              <div className="flex justify-center items-center p-1.5 rounded-full bg-blue-500">
                <img
                  src={Avatar}
                  className="rounded-full w-52 h-52 sm:w-60 sm:h-60 object-cover shadow-lg dark:shadow-none dark:bg-gray-800"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
