import { motion } from 'framer-motion'
import Logo from './components/Logo'
import { NavLink } from './components/NavLink'

export function Nav() {
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
        <NavLink delay={0.25}>
          Início
        </NavLink>
        <NavLink href="" delay={0.35}>
          Sobre
        </NavLink>
        <NavLink href="" delay={0.45}>
          Experiência
        </NavLink>
        <NavLink href="" delay={0.55}>
          Contato
        </NavLink>
      </div>
    </motion.nav>
  )
}