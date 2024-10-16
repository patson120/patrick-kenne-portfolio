'use client'

import { useEffect, useState } from 'react'

const NavigationBar = () => {

  const [showMenu, setshowMenu] = useState(false)

  globalThis?.window?.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      setshowMenu(false)
      document.getElementById('mobile-menu')?.classList.remove('hidden')
    }
  })

  const handleToggleMenu = () => {
    setshowMenu(prev => !prev)
    document.getElementById('mobile-menu')?.classList.toggle('hidden')
  }

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(anchor.getAttribute('href')!)!.scrollIntoView({
          behavior: 'smooth'
        })
        // Close mobile menu if open
        setshowMenu(false)
        document.getElementById('mobile-menu')?.classList.remove('hidden')
      });
    });
  }, [])

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* <h1 className="text-2xl font-heading font-bold text-primary">Patrick KENNE</h1> */}
        <span></span>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
          <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
          <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
        </ul>
        <button onClick={handleToggleMenu} className="md:hidden text-gray-600 hover:text-primary">
          <i className={`fas ${showMenu ? 'fa-close' : 'fa-bars'} text-2xl`}></i>
        </button>
      </nav>
      <div id="mobile-menu" className="hidden md:hidden bg-white pb-4">
        <ul className="flex flex-col items-center space-y-4">
          <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
          <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
          <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
        </ul>
      </div>
    </header>
  )
}
export default NavigationBar