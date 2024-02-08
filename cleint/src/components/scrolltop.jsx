import React from 'react'
import { useEffect,useState } from 'react'
import { MdArrowUpward } from "react-icons/md";
const Scrolltop = () => {
    const [showbutton,setShowbutton]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scroll>300){
                setShowbutton(true);
                }
                else{
                    setShowbutton(false);
                }
        })
       
    },[])
    const scrolltop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div>
        {
         showbutton && <MdArrowUpward  className='fixed b-2 r-2 h-3 w-4 rounded-[50%] text-black cursor-pointer'  onClick={scrolltop}/>
        }
    
    </div>
  )
}

export default Scrolltop
