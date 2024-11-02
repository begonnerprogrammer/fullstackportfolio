import React from 'react'
import "../css/experience.css"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
const Projects = () => {
  const projects=[
    {
       img:"./images/mern.jpg",
       title:"COMPLETE MERN-STACK BLOG APP",
       description:`This is a complete Mern-Stack application with Sign-up Functionality, Login  Functionality,Logout Functionality, Jwt Authentication and Verification Functionality.At also include Uplaoding Post Functionality,Edit Post Functionality, Delete Post Functionality. In short, it is a complete project of MERN-STACK DEVELOMPMENT.`,
       link:"https://github.com/begonnerprogrammer/Blogapp-MERNSTACK-"
    },
    {
      img:"./images/movie2.webp",
      title:"Movie App using Next.Js",
      link:"https://github.com/begonnerprogrammer/fullstackmovieapp-react-",
      description:"This is a Movie App using Next.js.</br> A complete movie app with Google sign-in Feature using Next-Auth  . Also includes Add movies functionality feature using React Redux."
    }
    ,{
      img:"./images/nodejs.png",
      title:"A Website Using Html,css,js,nodejs(Express.js)",
      link:"https://github.com/begonnerprogrammer/backendweatherapp",
      description:"This is a complete Weather App using html ,css , js.</br> View engine handlebars is used in this app. This app also use partials."
    }
  ];
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5}} className='h-screen  flex relative overflow-hidden flex-col text-left md:flex-row 
    max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-32   uppercase tracking-[20px] text-gray-700 text-2xl'>
       Projects
      </h3>
      {/* //projects */}
      <div className=' relative w-full overflow-x-scroll scrollbar scrollbar-track-gray-400/20  scrollbar-thumb-[#000]/80  scroll-smooth  flex overflow-y-hidden snap-x snap-mandatory z-20'>
        {
          projects.map((project)=>(
           
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center  md:p-44 h-screen'>
               <Link to={`${project.link}`}>
              <img src={project.img} className='h-40' ></img>
              </Link>
             
             <div className='space-y-4 max-w-6xl px-0 md:px-10 md:space-x-14 snap-center'>
              <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#000]/50'>{project.title}</span>
              </h4>
              <p className='text-lg text-center md:text-left'>
                {
                  project.description
                }
              </p>
              </div>
             
             </div>
             
          ))
        }
      </div>
      <div className='w-full absolute top-[50%] bg-gray-400 left-0  h-[500px]  skew-y-12'/>
 
    </motion.div>
  )
}

export default Projects
