/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1554260570-83dc2f46ef79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGF4aSUyMFVJJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D)] h-screen pt-8 w-full flex justify-between flex-col bg-red-400'>
            <img className=" w-18 ml-10 " src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/> 
            <div className='bg-white py-4 px-4 pb-7 '>
                <h2 className='text-3xl font-semibold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black font-2xl 
                font-semibold text-white py-3 rounded mt-4 '>
                    Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home