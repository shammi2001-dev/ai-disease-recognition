import React from 'react'
import Navbar from '../Navbar/Navbar'

const HDisRes = () => {
  return (
    <div className='h-screen' style={{
        background: 'url(./src/assets/hdisresbg.jpg)',
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
       
      }}>
        <Navbar/>
        <div className='container m-auto flex justify-center py-[50px] xl:py-[240px]'>
         <div className='bg-[#d9d9d9e3] mx-5 xl:mx-0 p-4 sm:p-6 md:p-11 xl:p-[80px] rounded-lg'>
          <h1 className='font-sans font-bold text-3xl md:text-[40px] pb-2 md:pb-6 text-blue text-center'>Your heart condition is good. </h1>
          <h2 className='font-sans text-center font-semibold text-2xl md:text-[40px] text-blue'>Keep it up!</h2> 
         </div>
        </div>
        
      </div>
  )
}

export default HDisRes