/* eslint-disable no-unused-vars */
import React , { useContext }from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
const CaptainDetails = () => {

    const { captain } = useContext(CaptainDataContext)

  return (
    <div >
        <div className='flex items-center justify-between '>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://i.pravatar.cc/100" alt="img" />
                    <h4 className='text-lg font-medium capitalize'>{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>₹295.20</h4>
                    <p className='text-sm text-gray-600'>Earned</p>
                </div>
            </div>
            <div className='flex p-1.5 mt-8  bg-gray-200 rounded-xl justify-center gap-8 items-start'>
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
  )
}

export default CaptainDetails