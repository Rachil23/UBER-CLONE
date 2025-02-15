/* eslint-disable no-unused-vars */
import React, { useState , useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [userData, setUserData] = useState({})
const { user, setUser } = useContext(UserDataContext);

const navigate = useNavigate();


const submitHandler = async (e) => {
    e.preventDefault();
    
    const userData = {
        email: email,
        password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if(response.status === 200){
        const data = response.data
        setUser(data.user)
        navigate('/home');
    }
    
    setEmail('')
    setPassword('')
    
}


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className=" w-18 mb-6 " src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/>

        <form onSubmit={(e)=>{
            submitHandler(e);
        }}>

            <h3 className='text-xl  font-medium mb-2'>What&apos;s your email ?</h3> 

            <input 
                required 
                value={ email }
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base'
                type="email" 
                placeholder='email@example.com' 
                /> 

            <h3 className='text-xl  font-medium mb-2 mt-3' >Enter password : </h3>

            <input 
                required 
                value={ password }
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base'
                type="password" 
                placeholder='Enter your password'/>

            <button className='text-xl mb-2 text-white font-semibold mt-7 w-full bg-black h-11 rounded align-center' >
                Login</button>

            <p className='mt-4 font-md text-center '>New here ? <Link to='/signup' className='text-blue-600 '> Create new Account</Link> </p>

        </form>    
        </div>  
        <div>
            <Link 
            to={'/captain-login'}
            className='text-xl flex items-center justify-center text-center mb-2 text-black font-semibold mt-7 w-full bg-[#A4CAFE] h-11 rounded align-center' >
                Sign in as Captain</Link>
        </div>      
    </div>
  )
}

export default UserLogin