import React from 'react'
import face from '../pages/beneface.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean;
};

function Skills ({directionLeft}: Props) {
  return (
    <motion.div
    initial={{ x: -200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.2 }}
  >
    <Image
      className='-mb-20 md:mb-0 flex-schrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      src={face}
      alt='Picture with a problem'
    />
  </motion.div>
  )
}

export default Skills
