import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
    <div>
      <Image alt='profile-image' src={assets.profile_img} className='rounded-full w-32' />
      
    </div>
    <h3 className='flex items-end gap-2  text-xl md:text-3xl mb-3 '>Hi! I'm Sumit Singh <Image alt='' src={assets.hand_icon} className=' w-6' />
    </h3>

    <h1 className='text-4xl  '>
       Frontend based  <span className='text-blue-400'>web developer</span> in India
       <p className='max-w-2xl py-2 text-[20px] hover:text-lightHover mx-auto '>A frontend-focused web developer who crafts responsive, accessible, and high-performance interfaces — powered by modern JavaScript frameworks.
       </p>

       <div className='flex flex-col justify-center sm:flex-row items-center gap-4 mt-4'>
        <a className='px-10 text-lg py-3 border rounded-full bg-black border-white text-white md:text-2xl flex items-center gap-2' href="#contact">Contact me <Image src={assets.right_arrow} alt='' className=' w-4' /></a>

        <a className='md:text-2xl text-lg  px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2' href="/sample-resume.pdf" download 
        >my resume <Image alt='' src={assets.download_icon} className=' w-4'  /></a>
       </div>
    </h1>

    </div>
    
    
  )
}

export default Header
