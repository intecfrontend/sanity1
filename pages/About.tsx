import React from 'react'
import Image from 'next/image'
import face from './beneface.jpg'
import { motion } from 'framer-motion'

type Props = {}

function About ({}: Props) {
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 3.2 }}
        className='space-y-10 px-0 md:px-10'
      >
        <h4 className='text-4xl font-semibold'>
          Here is a <span className='text-[#F7AB0A]/50'> little </span>
          background
        </h4>
        <p className='text-base md:w-[500px] md:h-auto'>
          Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
          zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
          bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak
          met letters nam en ze door elkaar husselde om een font-catalogus te
          maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook,
          vrijwel onveranderd, overgenomen in elektronische letterzetting. Het
          is in de jaren '60 populair geworden met de introductie van Letraset
          vellen met Lorem Ipsum passages en meer recentelijk door desktop
          publishing software zoals Aldus PageMaker die versies van Lorem Ipsum
          bevatten.
        </p>
      </motion.div>
    </div>
  )
}

export default About
