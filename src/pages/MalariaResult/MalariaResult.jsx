import React from 'react'
import Navbar from '../Navbar/Navbar'

const MalariaResult = () => {
  return (
    <div className='xl:h-screen' style={{
        background: 'url(./src/assets/malariaresbg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
       
      }}>
        <Navbar/>
        <div className='container m-auto flex justify-center px-3 xl:px-0 py-[80px] xl:py-[240px]'>
         <div className='bg-[#d9d9d9e3] p-5 xl:p-[80px] rounded-lg'>
          <h1 className='font-sans font-bold text-[40px] text-blue text-center'>Your have Malaria. </h1>
          <h2 className='font-sans text-center font-semibold text-[40px] text-blue'>Be careful!</h2> 
         </div>
        </div>
        
      </div>
  )
}

export default MalariaResult