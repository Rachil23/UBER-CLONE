/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className=" w-18 mb-6 " src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/>

        <form>

            <h3 className='text-xl mb-2'>What&apos;s your email ?</h3> 

            <input 
                required 
                className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base'
                type="email" 
                placeholder='email@example.com' 
                /> 

            <h3 className='text-xl mb-2 mt-3' >Enter password : </h3>

            <input 
                required 
                className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base'
                type="password" 
                placeholder='Enter your password'/>

            <button className='text-xl mb-2 text-white font-semibold mt-7 w-full bg-black h-11 rounded align-center' >
                Login</button>

            <p className='mt-4 font-md text-center '>New here ? <Link to='/signup' className='text-blue-600 '> Create new Account</Link> </p>

        </form>    
        </div>  
        <div>
            <button className='text-xl text-center mb-2 text-black font-semibold mt-7 w-full bg-gray-300 h-11 rounded align-center' >
                Sign in as Captain</button>
        </div>      
    </div>
  )
}

export default UserLogin