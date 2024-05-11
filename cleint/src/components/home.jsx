import React, { useRef } from 'react'
import Typewriter from "typewriter-effect"
import {motion} from "framer-motion"
import "../css/home.css"
import { Link } from 'react-router-dom'
import Skills from "./skills"
import Projects from "./projects"
import About from "./about"
import Contact from "./contact"
const Home = () => {
  const about=useRef(null);
  const projects=useRef(null);
  const skills=useRef(null);
  const contact=useRef(null);

const scrolltopsection=(elem)=>{
window.scrollTo({
  top:elem.current.offsetTop,
  behavior:"smooth",
})
}

  return (
    <>
    <div className='main h-screen'>
      <div className='container' >
      < motion.div initial={{rotate:0}} whileInView={{rotate:360}} transition={{duration:"1" ,delay:""}} className='div1'>
        <img src="/images/user2.png" alt=""   className='img'/>
      </motion.div>
   
       <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:"1" ,delay:""}} className='div2'>
       <h1>SOFWARE ENGINEER</h1> 
       </motion.div>
     
       <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:"2" ,delay:""}} className='div3'>
        <h1>
        <Typewriter
        options={
        {
          autoStart:true,
          loop:true,
          delay:50,
          strings:["Hello! my name is Usman.","A FULLSTACK-DEVELOPER."]
        }
        }
        />
        </h1>
       
       </motion.div>
     
   <motion.div className='tabs' initial={{y:600}} animate={{y:0}} transition={{duration:"1.5" ,delay:""}} >
      <Link   to={"#"}><a  href="" onClick={()=>scrolltopsection(about)}><h1>ABOUT</h1></a></Link>
      <Link to={"#"}><a href="" onClick={()=>scrolltopsection(skills)}><h1>SKILLS</h1></a></Link>
      <Link to={"#"}><a href="" onClick={()=>scrolltopsection(projects)}><h1>PROJECTS</h1></a></Link>  
      <Link to={"#"}><a href="" onClick={()=>scrolltopsection(contact)}><h1>CONTACT</h1></a></Link>   
   </motion.div>

      </div>
      </div>
    <div >
    <section ref={about}> <About/></section>
      <section ref={skills}><Skills/></section>
  <section ref={projects} > <Projects/></section>
  <section  ref={contact}> <Contact/></section>
   
   
   
    </div>
 
    
    </>
  )
}

export default Home
