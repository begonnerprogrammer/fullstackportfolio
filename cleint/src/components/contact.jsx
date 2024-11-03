"use client"
import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import "../css/contact.css"
import { Link } from 'react-router-dom';




const Contact = () => {
 



  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly mx-auto items-center snap-center'>

      <h3 className='absolute top-32 uppercase tracking-[20px] text-gray-900 text-2xl'>Contact</h3>
      <div className='flex flex-col space-y-10 mt-28'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need.  {""}
          <span className='decoration-[#000] underline'>Lets Talk.</span>
        </h4>
        <div className='space-y-10'>
        <div className='flex items-center space-x-5 justify-center'>
        <FaPhoneAlt color='black' className='h-6 w-6 animate-pulse'/>
        <p className='text-2xl'>03019685689</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
        <FaRegEnvelope color='black' className='h-6 w-6 '/>
        <p className='text-2xl'>ut027908@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
        <CiLocationOn color='black' className='h-6 w-6 '/>
        <p className='text-2xl'>China Scheme Lahore.</p>
          </div>
        </div>
      


  

 

 
      </div>
    
     
    </div>
     
  )
}

export default Contact
