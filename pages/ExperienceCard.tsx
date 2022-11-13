import React from 'react'
import face from './beneface.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'
type Props = {}

function ExperienceCard ({}: Props) {
  return (
    <article
      className='flex flex-col rounded-lg space-y-7 flex-shrink-0 items-center w-[500px] md:w-[600px] 
    xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 transition-opacity 
    cursor-pointer duration-200 overflow-hidden'
    >
      <motion.div>
        <Image
          className='relative rounded-full h-32 w-32 mx-auto object-cover object-center'
          src={face}
          alt='Picture of the author'
        />
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO of PAPAFAM</h4>
        <p className='font-bold text-2xl mt-1'>PAPAFAM</p>
        <div className='flex space-x-2 my-2'>
          <Image
            className='h-10 w-10 rounded-full'
            src={face}
            alt='Picture with a problem'
          />
          <Image
            className='h-10 w-10 rounded-full'
            src={face}
            alt='Picture with a problem'
          />
          <Image
            className='h-10 w-10 rounded-full'
            src={face}
            alt='Picture with a problem'
          />
        </div>
        <p className='text-gray-300 py-5 uppercase'>
          Started work... -Ended...
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
