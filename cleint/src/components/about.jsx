import React from 'react'
import "../css/about.css"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <main className='h-screen about-main relative flex flex-col items-center justify-center'>
       <div className='absolute top-32 about-heading text-3xl'>
        <h1>A B O U T.</h1>
        <div className='about-container'>
        <motion.div >
        <motion.img initial={{y:-200}} whileInView={{y:0}}   transition={{duration:"1" ,delay:""}} src="./images/photo-1519085360753-af0119f7cbe7.avif" alt="" />
        </motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:"1" ,delay:""}} className='about-text'>
        <h1 className='text-5xl'>Here's a little background about me.</h1>
        <p className='mt-2 text-3xl'>I've been learning web development <br /> since  <span className='text-4xl text-[#000]  font-bold'>2 years.</span>  I learnt many technologies such as core texhnologies <span className='text-4xl text-[#000]  font-bold'> HTML,CSS,JS</span>  as well as advance texhnologies <span className='text-4xl text-[#000]  font-bold' >React.js , Next.js,Nodejs </span>and many more which technologies are described in the <span className='text-4xl text-[#000]  font-bold'>skills section.</span></p>
        <p className='mt-2 text-3xl'>I love to code and that's why i keep grinding until i get my  <span className='text-4xl text-[#000] font-bold '>dream job.</span> </p>
        <p className='mt-2 text-3xl'>And i hope i will get it soon.</p>
        </motion.div>
    
       </div>

        </div>
       w
    </main>
  )
}

export default About
