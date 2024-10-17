
import React from 'react'
import About from './About'
import Experiences from './Experiences'
import Skills from './Skills'
import Projects from './Projects'

const BodyContent = () => {
  return (
    <main className="container mx-auto px-4 py-12">
        {/* About */}
        <About />
        <div className='md:h-10'></div>
        {/* Expériences */}
        <Experiences />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />
    </main>
  )
}
export default BodyContent