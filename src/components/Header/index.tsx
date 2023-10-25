import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Header = () => {

  return (
    <header className='w-full fixed z-10 backdrop-blur-lg'>
      <div className="px-6 py-6 mx-auto">
        <div className='flex gap-x-4'>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.35 }}>
            <a
              href="https://www.linkedin.com/in/mateusmatosleonardo"
              target="_blank" rel="noreferrer">
              <FaLinkedinIn size={22} className={'hover:text-blue-500 text-gray-400'} />
            </a>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.45 }}>
            <a
              href="https://twitter.com/m4teusmatos"
              target="_blank" rel="noreferrer">
              <FaTwitter size={22} className={'hover:text-blue-500 text-gray-400'} />
            </a>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.55 }}>
            <a
              href="https://github.com/mateusmatosleonardo"
              target="_blank" rel="noreferrer">
              <FaGithub size={22} className={'hover:text-blue-500 text-gray-400'} />
            </a>
          </motion.div>

        </div>
      </div>
    </header>
  )
}

export default Header
