import { motion } from 'framer-motion'
import Logo from './components/logo'

const Nav = () => {
  return (
    <motion.nav
      className="flex flex-col items-center h-screen sticky top-0 left-0 gap-y-10 p-3.5 text-lg font-light bg-zinc-950"
      variants={{
        hidden: { opacity: 0, x: -26 },
        visible: { opacity: 1, x: 0 }
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}>
      <Logo />
      <div className="flex flex-col gap-y-6">
        <motion.a
          className="[writing-mode:vertical-lr] text-gray-400 hover:text-white duration-300"
          variants={{
            hidden: { opacity: 0, x: -26 },
            visible: { opacity: 1, x: 0 }
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.1, delay: 0.25 }}
          href="">
          Início
        </motion.a>
        <motion.a
          className="[writing-mode:vertical-lr] text-gray-400 hover:text-white duration-300"
          variants={{
            hidden: { opacity: 0, x: -26 },
            visible: { opacity: 1, x: 0 }
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.1, delay: 0.35 }}
          href="">
          Sobre
        </motion.a>
        <motion.a
          className="[writing-mode:vertical-lr] text-gray-400 hover:text-white duration-300"
          variants={{
            hidden: { opacity: 0, x: -26 },
            visible: { opacity: 1, x: 0 }
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.1, delay: 0.45 }}
          href="">
          Experiência
        </motion.a>
        <motion.a
          className="[writing-mode:vertical-lr] text-gray-400 hover:text-white duration-300"
          variants={{
            hidden: { opacity: 0, x: -22 },
            visible: { opacity: 1, x: 0 }
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.1, delay: 0.55 }}
          href="">
          Contato
        </motion.a>
      </div>
    </motion.nav>
  )
}

export default Nav
