import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const HDis = () => {
    const [age, setAge] = useState()
    const [ageerr, setAgeerr] = useState()

    const [sex, setSex] = useState()
    const [sexerr, setSexerr] = useState()

    const [cp, setCp] = useState()
    const [cperr, setCperr] = useState()

    const [tre, setTre] = useState()
    const [treerr, setTreerr] = useState()

    const [chol, setChol] = useState()
    const [cholerr, setCholerr] = useState()

    const [res, setRes] = useState()
    const [reserr, setReserr] = useState()

    const [thalach, setThalach] = useState()
    const [thalacherr, setThalacherr] = useState()

    const [fbs, setFbs] = useState()
    const [fbserr, setFbserr] = useState()

    const navigate=useNavigate()
    
    const handleSubmit = ()=>{
        if (!age) {
            setAgeerr('Age is required')
          }
        if (!sex) {
            setSexerr('Sex is required')
          }
        if (!cp) {
            setCperr('CP is required')
          }
        if (!tre) {
            setTreerr('TRESTBPS is required')
          }
        if (!chol) {
            setCholerr('CHOL is required')
          }
        if (!res) {
            setReserr('Restecg is required')
          }
        if (!thalach) {
            setThalacherr('Thalach is required')
          }
        if (!fbs) {
            setFbserr('FBS is required')
          } 
         if(age && sex &&cp&&tre&&chol&&res&&thalach&&fbs){
          navigate('/hdisres');

         }
    }

    const handleAge = (e) => {
        setAge(e.target.value);
        setAgeerr('')
      }
    const handleSex = (e) => {
        setSex(e.target.value);
        setSexerr('')
      }
    const handleCp = (e) => {
        setCp(e.target.value);
        setCperr('')
      }
    const handleTre = (e) => {
        setTre(e.target.value);
        setTreerr('')
      }
    const handleChol = (e) => {
        setChol(e.target.value);
        setCholerr('')
      }
    const handleRes = (e) => {
        setRes(e.target.value);
        setReserr('')
      }
    const handleThalach = (e) => {
        setThalach(e.target.value);
        setThalacherr('')
      }
    const handleFbs = (e) => {
        setFbs(e.target.value);
        setFbserr('')
      }
  return (
    <div className='xl:h-screen' style={{
        background: 'url(./src/assets/hdisbg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',

    }}>
        <Navbar />
        <div className='container m-auto pt-[30px]'>
            <div className='flex justify-center'>
                <div className='bg-[#d9d9d9a2] py-[20px] px-[50px] md:px-[100px] rounded-lg xl:w-[600px] mb-5 xl:mb-0'>
                    <h1 className='font-sans font-bold text-[30px] leading-[45px] pb-4 text-blue text-center'>Heart Disease Prediction </h1>
                    <div className='text-center'>
                        <input onChange={handleAge} type="text" className='bg-[#131a5ab7] p-2 font-sans text-base md:text-[20px] text-white mt-[10px] rounded  placeholder-[#ffffffb4]' placeholder='Age' />
                        <p className='font-sans text-red-600 font-bold text-base'>{ageerr}</p>

                        <input onChange={handleSex} type="text" className='bg-[#131a5ab7] p-2 font-sans text-base md:text-[20px] text-white mt-[10px] rounded  placeholder-[#ffffffb4]' placeholder='Sex' />
                        <p className='font-sans text-red-600 font-bold text-base'>{sexerr}</p>

                        <input onChange={handleCp} type="text" className='bg-[#131a5ab7] p-2 font-sans text-base md:text-[20px] text-white mt-[10px] rounded  placeholder-[#ffffffb4]' placeholder='CP' />
                        <p className='font-sans text-red-600 font-bold text-base'>{cperr}</p>

                        <input onChange={handleTre} type="text" className='bg-[#131a5ab7] p-2 font-sans text-base md:text-[20px] text-white mt-[10px] rounded  placeholder-[#ffffffb4]' placeholder='TRESTBPS' />
                        <p className='font-sans text-red-600 font-bold text-base'>{treerr}</p>

                        <input onChange={handleChol} type="text" className='bg-[#131a5ab7] p-2 font-sans text-base md:text-[20px] text-white mt-[10px] rounded  placeholder-[#ffffffb4]' placeholder='CHOL' />
                        <p className='font-sans text-red-600 font-bold text-base'>{cholerr}</p>

                        <input onChange={handleRes} type="text" className='bg-[#131a5ab7] p-2 font-sans text-base md:text-[20px] text-white mt-[10px] rounded  placeholder-[#ffffffb4]' placeholder='Restecg' />
                        <p className='font-sans text-red-600 font-bold text-base'>{reserr}</p>

                        <input onChange={handleThalach} type="text" className='bg-[#131a5ab7] p-2 font-sans text-base md:text-[20px] text-white mt-[10px] rounded  placeholder-[#ffffffb4]' placeholder='Thalach' />
                        <p className='font-sans text-red-600 font-bold text-base'>{thalacherr}</p>

                        <input onChange={handleFbs} type="text" className='bg-[#131a5ab7] p-2 font-sans text-base md:text-[20px] text-white mt-[10px] rounded  placeholder-[#ffffffb4]' placeholder='FBS' />
                        <p className='font-sans text-red-600 font-bold text-base'>{fbserr}</p>
                    </div>
                    
                </div>
            </div>
            <div onClick={handleSubmit} className='flex justify-end mr-[10%] xl:mr-[200px]'>
                <button className='bg-blue text-white rounded-lg p-3 font-sans font-semibold text-[20px] mb-3'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default HDis