/* eslint-disable no-unused-vars */

import React , { useContext }from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainHome = () => {

  const { captain } = useContext(CaptainDataContext)

  return (
    <div className='h-screen'>
            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-18' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
    

            <div className='h-4/6'>
                <img className='h-full w-full object-cover' 
                src="https://w0.peakpx.com/wallpaper/336/971/HD-wallpaper-usa-map-top-best-quality-usa-map-background-aesthetic-map-thumbnail.jpg" />
            </div>
    
            <div className='h-1/4 py-4 px-4.5'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://i.pravatar.cc/100" alt="img" />
                    <h4 className='text-lg font-medium capitalize'>{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>₹295.20</h4>
                    <p className='text-sm text-gray-600'>Earned</p>
                </div>
            </div>
            <div className='flex p-3 mt-8 bg-gray-200 rounded-xl justify-center gap-8 items-start'>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                    <h5 className='text-lg font-medium'>8.2</h5>
                    <p className='text-sm text-gray-600'>Hours Ride</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                    <h5 className='text-lg font-medium'>107.2 Km</h5>
                    <p className='text-sm text-gray-600'>Traveled</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
            </div>  
          </div>
        </div>
  )
}

export default CaptainHome