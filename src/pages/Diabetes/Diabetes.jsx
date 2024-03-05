import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import {useNavigate} from 'react-router-dom'

const Diabetes = () => {
    const [bmi, setBmi] = useState()
    const [bmierr, setBmierr] = useState()

    const [sh, setSh] = useState()
    const [sherr, setSherr] = useState()

    const [hba, setHba] = useState()
    const [hbaerr, setHbaerr] = useState()

    const [bgl, setBgl] = useState()
    const [bglerr, setBglerr] = useState()

    const [gender, setGender] = useState()
    const [gendererr, setGendererr] = useState()

    const [age, setAge] = useState()
    const [ageerr, setAgeerr] = useState()

    const [hpt, setHpt] = useState()
    const [hpterr, setHpterr] = useState()

    const [hd, setHd] = useState()
    const [hderr, setHderr] = useState()
   
   const navigate=useNavigate()
    
    const handleSubmit = ()=>{
        if (!bmi) {
            setBmierr('BMI is required')
          }
        if (!sh) {
            setSherr('Smoking History is required')
          }
        if (!hba) {
            setHbaerr('HbA1C Level is required')
          }
        if (!bgl) {
            setBglerr('Blood Glucose Level is required')
          }
        if (!gender) {
            setGendererr('Gender is required')
          }
        if (!age) {
            setAgeerr('Age is required')
          }
        if (!hpt) {
            setHpterr('Hypertention is required')
          }
        if (!hd) {
            setHderr('Heart Condition is required')
          } 
         if(bmi && sh && hba && bgl && gender && age && hpt && hd){
          navigate('/diabetesRes');
         }
    }

    

    const handleBmi = (e) => {
        setBmi(e.target.value);
        setBmierr('')
      }
    const handleSh = (e) => {
        setSh(e.target.value);
        setSherr('')
      }
    const handleHba = (e) => {
        setHba(e.target.value);
        setHbaerr('')
      }
    const handleBgl = (e) => {
        setBgl(e.target.value);
        setBglerr('')
      }
    const handleGender = (e) => {
        setGender(e.target.value);
        setGendererr('')
      }
    const handleAge = (e) => {
        setAge(e.target.value);
        setAgeerr('')
      }
    const handleHpt = (e) => {
        setHpt(e.target.value);
        setHpterr('')
      }
    const handleHd = (e) => {
        setHd(e.target.value);
        setHderr('')
      }
    return (
        <div className='w-full md:h-screen' style={{
            background: 'url(./src/assets/diabetesbg.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',

        }}>
            <Navbar />
            <div className='container m-auto md:pt-[30px]'>
                <div className='flex justify-center'>
                    <div className='bg-[#d9d9d9a2] py-5 px-[100px] rounded-lg w-[600px] mb-3 xl:mb-0'>
                        <h1 className='font-sans font-bold text-[40px] leading-[45px] text-blue text-center pb-4'>Diabetes Prediction </h1>
                        <div className='text-center'>
                            <input onChange={handleBmi} type="text" className='bg-[#131a5ab7] p-2 font-sans text-base md:text-[20px] text-white mt-[10px] rounded  placeholder-[#ffffffb4]' placeholder='BMI' />
                            <p className='font-sans text-red-600 font-bold text-base'>{bmierr}</p>

                            <input onChange={handleSh} type="text" className='bg-[#131a5ab7] p-2 font-sans text-base md:text-[20px] text-white mt-[10px] rounded  placeholder-[#ffffffb4]' placeholder='Smoking History' />
                            <p className='font-sans text-red-600 font-bold text-base'>{sherr}</p>

                            <input onChange={handleHba} type="text" className='bg-[#131a5ab7] p-2 font-sans text-base md:text-[20px] text-white mt-[10px] rounded  placeholder-[#ffffffb4]' placeholder='HbA1C Level' />
                            <p className='font-sans text-red-600 font-bold text-base'>{hbaerr}</p>

                            <input onChange={handleBgl} type="text" className='bg-[#131a5ab7] p-2 font-sans text-base md:text-[20px] text-white mt-[10px] rounded  placeholder-[#ffffffb4]' placeholder='Blood Glucose Level' />
                            <p className='font-sans text-red-600 font-bold text-base'>{bglerr}</p>

                            <input onChange={handleGender} type="text" className='bg-[#131a5ab7] p-2 font-sans text-base md:text-[20px] text-white mt-[10px] rounded  placeholder-[#ffffffb4]' placeholder='Gender' />
                            <p className='font-sans text-red-600 font-bold text-base'>{gendererr}</p>

                            <input onChange={handleAge} type="text" className='bg-[#131a5ab7] p-2 font-sans text-base md:text-[20px] text-white mt-[10px] rounded  placeholder-[#ffffffb4]' placeholder='Age' />
                            <p className='font-sans text-red-600 font-bold text-base'>{ageerr}</p>

                            <input onChange={handleHpt} type="text" className='bg-[#131a5ab7] p-2 font-sans text-base md:text-[20px] text-white mt-[10px] rounded  placeholder-[#ffffffb4]' placeholder='Hypertention' />
                            <p className='font-sans text-red-600 font-bold text-base'>{hpterr}</p>

                            <input onChange={handleHd} type="text" className='bg-[#131a5ab7] p-2 font-sans text-base md:text-[20px] text-white mt-[10px] rounded  placeholder-[#ffffffb4]' placeholder='Heart Disease'/>
                            <p className='font-sans text-red-600 font-bold text-base'>{hderr}</p>
                        </div>
                        
                    </div>
                </div>
                <div onClick={handleSubmit} className='flex justify-end mr-[10%] md:mr-[200px]'>
                    <button className='bg-blue text-white rounded-lg p-3 font-sans font-semibold text-[20px] mb-3'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Diabetes