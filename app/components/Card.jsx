import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const skills = ['HTML5', 'CSS3', 'JavaScript(ES6+)', 'Tailwind CSS','Bootstrap', 'React', 'WordPress', 'Node.js', 'Express', 'MongoDB',  'GitHub', 'chatGPT',    'Material UI'];

const tools = ['VS Code', 'Chatgpt', 'Browser DevTools', 'Git + GitHub', 'npm', 'vite', 'Postman', 'Canva', 'Netlify', 'Vercel', 'Heroku'];


const Card = ({className , setShowCard}) => {



  return (
    <div   className={`w-full  h-full z-50 fixed top-0 left-0 bg-black/50 flex items-center cursor-pointer justify-center ${className}`}>
      <div className='w-[700px] h-[500px] flex flex-col gap-y-10 p-5    bg-white  rounded-lg '>
        
        <div className='flex items-center justify-end'>
          <Image onClick={() => setShowCard(false)} className='w-5 h-5' src={assets.close_black} />
        </div>
        {/* skills */}

        <div className='flex flex-col'>
          <div className='flex items-center gap-x-2'>
            <Image className='w-5 h-5' src={assets.code_icon} alt="" />
          <p className='text-lg font-semibold'>Skills</p>
          </div>
          <div className='pl-3 mt-2 flex flex-wrap  gap-2'>
            {skills.map((skill , index) =>(
              <span key={index}  className='text-sm p-1.5 shrink-0 rounded-full border border-blue-700 bg-blue-50 '>{skill}</span>
            ))}

          </div>

        </div>
        {/* education */}
        <div className='flex flex-col'>
          <div className='flex items-center gap-x-2'>
            <Image className='w-5 h-5' src={assets.edu_icon} alt="" />
          <p className='text-lg font-semibold'>Education</p>
          </div>
          <div className='pl-3 mt-2 flex gap-x-2'>
            <span  className='text-sm p-1.5 rounded-full border border-blue-700 bg-blue-50 '>Bachelor's Degree</span>
            <span  className='text-sm p-1.5 rounded-full border border-blue-700 bg-blue-50 '>MERN Stack Certified</span>

          </div>

        </div>
   
        {/* Tools i use */}
        <div className='flex flex-col'>
          <div className='flex items-center gap-x-2'>
            <Image className='w-5 h-5' src={assets.code_icon} alt="" />
          <p className='text-lg font-semibold'>Tools I Use</p>
          </div>
          <div className='pl-3 mt-2 flex flex-wrap  gap-2'>
            {tools.map((tool , index) =>(
              <span key={index}  className='text-sm p-1.5 shrink-0 rounded-full border border-blue-700 bg-blue-50 '>{tool}</span>
            ))}

          </div>

        </div>
        


      </div>

    </div>
  )
}

export default Card