'use client'

import React, { useEffect } from 'react'

const NavigationBar = () => {

  // const openMenu = (event: MouseEvent<HTMLButtonElement>) => {
  //   var menu = document.querySelector("#mobile-menu")
  //   menu?.classList.remove("hide_menu")
  //   menu?.classList.add("show_menu")
  // }

  // const closeMenu = () => {
  //   var menu = document.querySelector("#mobile-menu")
  //   menu?.classList.remove("show_menu")
  //   menu?.classList.add("hide_menu")
  // }

  // globalThis?.window?.addEventListener("resize", (event: Event) => {
  //   if (window.innerWidth > 1024) {
  //     closeMenu()
  //   }
  // })

  useEffect(() => {
    const mobileMenuButton = document.getElementById('mobile-menu-button')
    mobileMenuButton!.addEventListener('click', function () { handleToggleMenu() })

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(anchor.getAttribute('href')!)!.scrollIntoView({
          behavior: 'smooth'
        })
        // Close mobile menu if open
        handleToggleMenu()
      });
    });
  }, [])

  const handleToggleMenu = () => {
    document.getElementById('mobile-menu')!.classList.toggle('hidden')
    console.log("ClassList", document.getElementById('mobile-menu')!.classList);
    
  }

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-heading font-bold text-primary">Patrick KENNE</h1>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
          <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
          <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
        </ul>
        <button onClick={handleToggleMenu} id="mobile-menu-button" className="md:hidden text-gray-600 hover:text-primary">
          <i className="fas fa-bars text-2xl"></i>
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