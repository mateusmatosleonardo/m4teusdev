import { motion } from 'framer-motion'
import Avatar from '../../assets/aya4.jpg'

const Hero = () => {
  return (
    <div className="mt-32 lg:mt-40 space-y-14 lg:space-y-24 text-white">
      <section className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="container px-4 mx-auto">
          <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left lg:items-center">
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
              >Olá, Eu sou Mateus<span className='text-primary_green'>.</span>
              </motion.h1>
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
                <span className='text-4xl text-[#ebecf3] font-extralight'>Sou {''}</span>
                <span className='text-4xl text-primary_green font-bold'>Desenvolvedor Full Stack</span>
              </motion.div>
              <div className="mt-6 text-white w-full max-w-lg">
                <motion.p
                  className="text-lg text-[#ebecf3] font-extralight"
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
                  <button className='mt-6 py-1.5 px-5 text-lg text-black hover:-translate-y-1 transition-all duration-300 font-light rounded-sm bg-primary_green'>
                    Contato
                  </button>
                </motion.div>
              </div>
            </div>
            {/* <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10 drop-shadow-xl">
              <div className="flex justify-center items-center p-1.5 rounded-full bg-primary_green">
                <img
                  src={Avatar}
                  className="rounded-full w-48 h-48 sm:w-48 sm:h-48 object-cover shadow-lg dark:shadow-none dark:bg-gray-800"
                  alt="Profile"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
