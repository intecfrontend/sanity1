import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from './Hero'
import About from './About'
import WorkExperience from './WorkExperience'
import Skills from '../components/skills'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <html className='bg-slate-800 text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
    </html>
  )
}

export default Home
