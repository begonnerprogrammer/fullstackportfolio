import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { RiFacebookCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom'; 
import {motion} from "framer-motion"
const Navbar = () => {
    const [menu,setMenu]=useState(false);
    const [navbar,setNavbar]=useState(false);
    const changebackground=()=>{
      if(window.scrollY>=70){
        setNavbar(true);
      }
      else{
        setNavbar(false)
      }
    }
    window.addEventListener("scroll",changebackground)
  return (
   <nav className={navbar? 'main-div  place-content-center fixed z-30  active' : 'main-div place-content-center fixed z-30 '}>
    <motion.div initial={{x:-300}} animate={{x:0}} transition={{duration:"1" ,delay:"0.5"}} className='logo'>
        <h2>
      <Link to={"/"}><a href=""><span  className={navbar? "text-white" : ""}>Usman</span></a></Link>  
        </h2>
    </motion.div>
    {/* <div  className={menu? "mobile-menu-link":'menu-link'}>
       <ul>
      <Link to={'/'}><a href=""><li>Home</li></a></Link>
        
       <Link to={'/contact'}> <a href=""><li>Contact</li></a></Link>
       
       <Link to={"/projects"} > <a href=""><li>Projects</li></a></Link>
       
     <Link to={'/about'}><a href=""><li>About</li></a></Link>
        
        
       </ul>
    </div> */}
    <motion.div initial={{x:600}} animate={{x:0}} transition={{duration:"1" ,delay:"0.5"}} className='social-media'>
        <ul className='social-media-desktop mt-3 '>
        <li><a href="https://github.com/begonnerprogrammer" target='_usman'><FaGithub className={navbar? "text-white" : ""} /></a></li>
            <li>  <a href="https://www.linkedin.com/in/usman-tahir-60010727a/" target='_usman' ><CiLinkedin  className={navbar? "text-white" : ""} /></a></li>
            <li>  <a href="https://www.facebook.com/profile.php?id=100072123282936" target='_usman' ><RiFacebookCircleLine className={navbar? "text-white" : ""} /></a></li>
        </ul>
        {/* <ul className='hambergur-menu' onClick={()=>setMenu(!menu)}>
            <li><RxHamburgerMenu/></li>
        </ul> */}

    </motion.div>
   </nav>
  )
}

export default Navbar
