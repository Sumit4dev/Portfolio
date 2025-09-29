"use client"

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  
  
  const sideMenuRef = useRef();

  const openMenu = () =>{
     sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () =>{
     sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  

  return (
    <>

    <div className='fixed top-0 right-0 w-11/12 z-10 translate-y-[-80%]'>
      <Image alt='header-image' src={assets.header_bg_color} className='w-full h-[500px]' priority />
    </div>

    <nav className={'w-full flex items-center justify-between fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50' }>
      <a href="#top">
        <Image alt='logo' src={assets.logo } className='w-36 cursor-pointer mr-14' />
      </a>

      <ul className='hidden rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50  md:flex item-center gap-6 lg:gap-8'>
        <li><a className='font-Ovo' href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#work">Projects</a></li>
        <li><a href="#contact">Contact me</a></li>
      </ul>

      <div className='flex items-center gap-4'>
        <button>
          <Image alt='' src={assets.moon_icon} className='w-6 cursor-pointer' />
        </button>


        <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact <Image src={assets.arrow_icon} alt='arrow-icon' className='w-3' />
        </a>

        <button onClick={openMenu} className='block md:hidden ml-3'>
          <Image alt='' src={assets.menu_black}  className='w-6 cursor-pointer' />
        </button>

      </div>

      {/* mobile-menu */}

      <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
        <div onClick={closeMenu} className='absolute right-6 top-6'>
          <Image src={assets.close_black} alt='' className='w-5 cursor-pointer 
        ' />
        </div>
        <li><a onClick={closeMenu} className='font-Ovo' href="#top">Home</a></li>
        <li><a onClick={closeMenu} className='font-Ovo' href="#about">About</a></li>
        <li><a onClick={closeMenu} className='font-Ovo' href="#services">Services</a></li>
        <li><a onClick={closeMenu} className='font-Ovo' href="#work">Projects</a></li>
        <li><a onClick={closeMenu} className='font-Ovo' href="#contact">Contact me</a></li>
      </ul>
    </nav>
    
    </>
  )
}

export default Navbar