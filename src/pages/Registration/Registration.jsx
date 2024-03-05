import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import { RiEyeFill, RiEyeCloseFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const [email, setEmail] = useState()
    const [fullname, setFullname] = useState()
    const [password, setPassword] = useState()

    const [showPassword, setShowPassword] = useState(false)

    const [emailerr, setEmailerr] = useState()
    const [fullnameerr, setFullnameerr] = useState()
    const [passworderr, setPassworderr] = useState()
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailerr('')
    }
    const handleFullname = (e) => {
        setFullname(e.target.value);
        setFullnameerr('')
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPassworderr('')
    }

    const navigate=useNavigate()
    const handleSignup = () => {
        if (!email) {
            setEmailerr('Please Enter Your Email First')
        }
        if (!fullname) {
            setFullnameerr('Please Enter Your Full Name First')
        }
        if (!password) {
            setPassworderr('Please Enter Your Password First')
          }
        if(email&&fullname&&password){
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailerr('Enter a valid email')
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)){
                setPassworderr('A minimum 8 characters password contains a combination of uppercase and lowercase letter, number and special character are required.')
            }else{
                navigate('/home');
            }
        }
    }
    return (
        <div className='xl:h-screen' style={{
            background: 'url(./src/assets/regbg.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <Navbar />
            <div className='container m-auto flex justify-center md:justify-end md:pr-[150px] py-[50px] xl:py-[80px]'>
                <div className='bg-[#d9d9d9] py-[50px] px-[20px] md:px-[70px] rounded-lg'>
                    <div className='flex'>
                        <div className='flex justify-end'>

                            <div>
                                <h1 className='font-nun font-bold text-[34px] text-[#11175D]'>Register</h1>

                                <div className='relative mt-[20px]'>
                                    <input onChange={handleEmail} className='bg-[#ffffff00] border border-[#585050] rounded-lg outline-none px-[52px] py-[26px] placeholder-[#423939]' type='email' placeholder='Enter Your Email'></input>
                                    <p className='p-1 absolute top-[-12px] left-[34px] px-[18px] bg-[#d9d9d9] font-nun font-semibold text-[13px] tracking-[1px]'>Email Address</p>
                                    <p className='font-sans text-red-600 font-semibold text-sm'>{emailerr}</p>
                                </div>
                                <div className='relative mt-[60px]'>
                                    <input onChange={handleFullname} className='bg-[#ffffff00] border border-[#5c5252] rounded-lg outline-none px-[52px] py-[26px] placeholder-[#423939]' type='text' placeholder='Enter Your Full Name' ></input>
                                    <p className='absolute top-[-12px] left-[34px] px-[18px] bg-[#d9d9d9] font-nun font-semibold text-[13px] tracking-[1px] p-1'>Full Name</p>
                                    <p className='font-sans text-red-600 font-semibold text-sm'>{fullnameerr}</p>
                                </div>

                                <div className='relative mt-[60px]'>
                                    <input onChange={handlePassword} className='bg-[#ffffff00] border border-[#5f5858] rounded-lg outline-none px-[52px] py-[26px] placeholder-[#423939]' type={showPassword ? 'text' : 'password'} placeholder='Enter Your Password'></input>
                                    <p className='absolute top-[-12px] left-[34px] px-[18px] bg-[#d9d9d9] font-nun font-semibold text-[13px] tracking-[1px] p-1'>Password</p>
                                    {
                                        showPassword ?
                                            <RiEyeFill onClick={() => setShowPassword(!showPassword)} className='absolute top-[32px] right-[25px]' />
                                            :
                                            <RiEyeCloseFill onClick={() => setShowPassword(!showPassword)} className='absolute top-[32px] right-[25px]' />

                                    }

                                    <p className='font-sans text-red-600 font-semibold text-sm sm:w-[300px]'>{passworderr}</p>
                                </div>


                                <div onClick={handleSignup} className='mt-[20px] mb-[20px] cursor-pointer'>
                                    <button className='bg-blue font-nun font-semibold text-[20px] text-white bg-primary px-[115px] py-[20px] rounded' href=''>Sign up</button>
                                </div>
                                <p className='font-sans text-[13px] text-[#03014C] ml-[20px]'>Already  have an account ?<span className='text-[#EA6C00] font-bold ml-[10px]'><Link to='/login'>Sign In</Link></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration