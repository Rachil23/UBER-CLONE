/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const Captainlogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { setCaptain } = useContext(CaptainDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        const Captain = {
            email: email,
            password: password
        };

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, Captain);
            
            if (response.status === 200) {
                const data = response.data;
                setCaptain(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');
            }
        } catch (error) {
            console.error("Login failed:", error);
            setError(error.response?.data?.message || "Invalid email or password");
        }
    };

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-18 mb-6' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='Uber Logo' />
                
                <form onSubmit={submitHandler}>
                    <h3 className='text-xl font-medium mb-2'>What&apos;s your email?</h3>
                    <input 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base'
                        type='email' 
                        placeholder='email@example.com' 
                    />
                    
                    <h3 className='text-xl font-medium mb-2 mt-3'>Enter password:</h3>
                    <input 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base'
                        type='password' 
                        placeholder='Enter your password' 
                    />
                    
                    {error && <p className='text-red-500 text-center mt-2'>{error}</p>}
                    
                    <button className='text-xl mb-2 text-white font-semibold mt-7 w-full bg-black h-11 rounded align-center'>
                        Login
                    </button>
                    
                    <p className='mt-4 font-md text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
                </form>    
            </div>  
            
            <div>
                <Link 
                    to={'/login'}
                    className='text-xl flex items-center justify-center text-center mb-2 text-black font-semibold mt-7 w-full bg-[#84E1BC] h-11 rounded align-center'>
                    Sign in as User
                </Link>
            </div>      
        </div>
    );
};

export default Captainlogin;