/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>

        <Link to='/home' className='flex items-center justify-center rounded-full bg-white w-12 h-12 absolute top-3 right-3'>
            <i className="text-medium font-semibold ri-home-2-line"></i>
        </Link>


        <div className='h-1/2'>
            <img className='h-full w-full object-cover' 
            src="https://w0.peakpx.com/wallpaper/336/971/HD-wallpaper-usa-map-top-best-quality-usa-map-background-aesthetic-map-thumbnail.jpg" />
        </div>

        <div className='h-1/2 py-4 px-4.5'>
            {/* Data of ride confirmed starts here*/ }

            <div className='flex items-center justify-between'>
    <img className="h-18" src='https://www.uber-assets.com/image/upload/v1699622825/assets/26/12256b-fe40-4f78-b94c-d2ffdec56a23/original/UberBlack.png'/>
        <div className='text-right'>
            <h2 className='text-lg font-medium '>Sarthak</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>RJ 09 CA 6440</h4>
            <p className='text-gray-600 font-sm'>Maruti Suzuki Alto</p>
        </div>
    </div>

 

    <div className="flex justify-between flex-col items-center mt-3">
      

      <div className='w-full'>

        <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
          <i className="ri-map-pin-2-fill text-3xl"></i>
          <div>
            <h3 className='text-xl font-semibold' >562/11-A</h3>
            <p className=' -mt-1 text-lg text-gray-700' >Kankariya Talab, Ahemdabad</p>
          </div>
        </div>
        
        <div className='flex items-center gap-5 p-3 '>
        <i className="ri-money-rupee-circle-fill text-3xl"></i>
          <div>
            <h3 className='text-xl font-semibold' >193.20</h3>
            <p className='text-lg -mt-1 text-gray-700' >Cash</p>
          </div>
        </div>
      </div>
      
    </div>
             {/* Data of ride confirmed ends here*/ }

             <button className='w-full mt-5 bg-green-500 text-white text-xl font-semibold rounded-md p-2' >Make your payment</button>
        </div>
        
    </div>
  )
}

export default Riding