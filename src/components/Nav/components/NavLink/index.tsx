import { ComponentProps } from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps extends ComponentProps<'a'> {
  children: string
  delay: number
}

export function NavLink(props: NavLinkProps) {
  return (
    <motion.a
      className="[writing-mode:vertical-lr] text-gray-400 hover:text-white duration-300"
      variants={{
        hidden: { opacity: 0, x: -26 },
        visible: { opacity: 1, x: 0 }
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.1, delay: props.delay }}
      href="#p1">
      {props.children}
    </motion.a>
  );
};
