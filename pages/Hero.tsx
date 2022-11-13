import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles'
import face from './beneface.jpg'
import Image from 'next/image'
import Link from 'next/link';


type Props = {}

function Hero ({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Developer', 'Designer', 'Creator'],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className='h-screen flex flex-col space-y-8 item-center justify-center text-center overflow-hidden snap-y '>
      <BackgroundCircles />
      <Image
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={face}
        alt='Picture of the author'
      />
      <div className='z-50'>
        <h2 className='text-sn uppercase text-gray-500 ph-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-1xl lg:text-1xl font-semibold px-10 tracking-[5px] mt-5'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A'></Cursor>
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>{' '}
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
