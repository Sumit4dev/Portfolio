'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
   
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6669e638-c0d0-4ff4-88f8-420691d6084d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div  id='contact' className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-[length:90%_auto] bg-no-repeat bg-center ">
      <h4 className="text-center mb-2 text-lg">Connect with me</h4>
      <h2 className="text-center text-5xl">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
        I'd love to hear from you! If you have any questions , comments , or feedback , please use the form below .
      </p>

      

      <form onSubmit={onSubmit}  className='max-w-2xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-6 mt-10 mb-5'>
          <input name='name'  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="text" placeholder='Enter your name' required />
          <input  name='number'  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="text" placeholder='Enter your name' type='number'  placeholder='Enter your number' required  />
        </div>
        <div className='grid md:grid-cols-1 gap-6  mb-5'>
          <input name='email'  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="text" placeholder='Enter your name' type='email'  placeholder='Enter your email' required  />
        </div>
        <textarea name='message'  rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>

        <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer' type='submit'>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' /></button>

        <p className='mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact