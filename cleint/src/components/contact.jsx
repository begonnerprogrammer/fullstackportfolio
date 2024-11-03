"use client"
import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import "../css/contact.css"
import { Link } from 'react-router-dom';
// import { useLocation, useNavigate} from  'react-router-dom';
const Contact = () => {
// const [name,setName]=useState("");
// const [email,setEmail]=useState("");
// const [subject,setSubject]=useState("");
// const [massage,setMassage]=useState("");
// const location=useLocation();
// const navigate=useNavigate();
//   const submit=async(e)=>{
//     e.preventDefault();
//     const res=await fetch('/register',{
  
//       //rrules to write
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify({
//         name,email,massage,subject,
//       })
//     })
   
//     const data=await res.json();
   
//     if(data.status===422 || !data){
//       console.log("Invalid")
//     }
//     else {
//       console.log("Valid")
//       navigate("/")
//       alert("Thank You! Form Submitted")
//       window.location.reload()
//     }
//   }


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
      

    {/* <form className='flex flex-col space-y-1 w-fit mx-auto bg-gray-400' onSubmit={submit} method='POST' >
      <div  className='flex space-x-2'>
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'  className="placeholder:italic placeholder:text-black contactinput" type="text" required />
        <input value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Email' type="email" className="placeholder:italic placeholder:text-black contactinput"   required/>
      </div>
      <input value={subject} onChange={(e)=>setSubject(e.target.value)}  placeholder='Subject'  className="placeholder:italic placeholder:text-black contactinput" type="text"  required/>
      <textarea  value={massage} onChange={(e)=>setMassage(e.target.value)}  placeholder='Massage'  className="placeholder:italic placeholder:text-black contactinput" name="" id="" cols="10" rows="2" required></textarea>
      <button className='bg-[#000] hover:bg-[#333] hover:text-[#000] transition ease-in-out delay-100 py-5 px-10 text-white rounded-md  font-bold text-lg'>Submit</button>
    </form> */}
 
      </div>
    
     
    </div>
     
  )
}

export default Contact
