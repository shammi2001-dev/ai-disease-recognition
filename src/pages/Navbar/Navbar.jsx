import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const[show, setShow]=useState(false);
  const hadnleClick=()=>{
    setShow(!show)
  }

  return (
    <div className='bg-blue text-white py-[20px]'>
        <div className='container m-auto max-w-container px-4 xl:px-0'>
            <div className='flex items-center'>
            <div className='md:w-1/5'>
                <Link to='/home'><img src={logo} alt="logo" /></Link> 
            </div>
            <div className='w-4/5'>
                <ul className={`absolute top-[-100%] md:relative md:flex justify-end gap-x-[45px] ${!show?'top-[-100%] bg-blue w-full duration-700':'top-[50px] bg-blue w-full p-4 duration-300 z-10'}`}>
                    <li><Link to='/home' className='text-base font-sans font-semibold hover:text-cyan-300'>Home</Link></li>
                    <li className='pt-5 md:pt-0'><Link to='/login' className='text-base font-sans font-semibold hover:text-cyan-300'>Login</Link></li>
                    <li className='pt-5 md:pt-0'><Link to='/information' className='text-base font-sans font-semibold hover:text-cyan-300'>Information</Link></li>
                    <li className='pt-5 md:pt-0'><Link to='/contactus' className='text-base font-sans font-semibold hover:text-cyan-300'>Contact Us</Link></li>
                </ul>
            </div>
            <div onClick={hadnleClick} className='text-2xl md:hidden'>
            {
              show==true ? <IoMdClose/> : <IoMenu />
            }
            </div>
            </div>
            </div> 
    </div>
    
  )
}

export default Navbar