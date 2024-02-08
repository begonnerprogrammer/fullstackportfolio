import React from 'react'
import Skill from "./skill.jsx" 
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
const Skills = () => {
  return (
    
    <div className='h-screen flex  relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10  justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-32 uppercase tracking-[20px] black text-2xl'>
        skills
        </h3>
    <h3 className='absolute top-48 uppercase tracking-[3px] black text-xl md:text-sm'>
     Skills I have learnt till now
    </h3>

<motion.div initial={{rotateX:0}} whileInView={{rotateX:360}} transition={{duration:"1" ,delay:""}} className='grid grid-cols-4 gap-5 pt-10' >
    <Skill src={"./images/html.png"} />
    <Skill src={"./images/css2.png"}/>
    <Skill src={"./images/final.jpg"}/>
    <Skill src={"./images/bootstrap.png"}/>
    <Skill src={"./images/mongodb.png"} />
    <Skill src={"./images/express.png"}/>
    <Skill src={"./images/react.png"}/>
    <Skill src={"./images/nodejs2.png"}/>
    <Skill src={"./images/tailwindcss.avif"}/>
    <Skill src={"./images/redux.png"}/>
    <Skill src={"./images/next.jpg"}/>
    <Skill src={"./images/git.png"}/>
  
    </motion.div>
   
  
    </div>
      
  )
}

export default Skills
