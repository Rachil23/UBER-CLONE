/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';

const ConfirmedRide = (props) => {

  return (
    <div>

      <h6 className="absolute top-7 right-5 text-2xl text-gray-600" onClick={
            () => props.setConfirmRidePanel(false)
          }> <i className="ri-arrow-down-wide-fill"></i> </h6>

          <h3 className="text-2xl font-semibold mb-5 px-1">Confirm your Ride</h3>

          <div className="flex justify-between flex-col items-center">
            <img className="h-38" src='https://www.uber-assets.com/image/upload/v1699622825/assets/26/12256b-fe40-4f78-b94c-d2ffdec56a23/original/UberBlack.png'/>

            <div className='w-full'>

              <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
                <i className="ri-map-pin-2-fill text-3xl"></i>
                <div>
                  <h3 className='text-xl font-semibold' >562/11-A</h3>
                  <p className=' -mt-1 text-lg text-gray-700' >Kankariya Talab, Ahemdabad</p>
                </div>
              </div>
              

              <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
              <i className="ri-map-pin-user-line text-3xl"></i>
                <div>
                  <h3 className='text-xl font-semibold' >H-24</h3>
                  <p className=' -mt-1 text-lg text-gray-700' >BKC, Bombay</p>
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
            <button onClick={()=>{
              props.setVehicleFound(true)
              props.setConfirmRidePanel(false)
            }}className='w-full mt-5 bg-green-500 text-white text-xl font-semibold rounded-md p-2' >Confirm</button>
          </div>
              
    </div>
  )
}

ConfirmedRide.propTypes = {
  setVehiclePanel: PropTypes.func.isRequired,
  setVehicleFound: PropTypes.func.isRequired, 
  setConfirmRidePanel: PropTypes.func.isRequired,
};


export default ConfirmedRide