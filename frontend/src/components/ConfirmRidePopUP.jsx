
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react'
import { Link } from 'react-router-dom';

const ConfirmRidePopUP = (props) => {
  return (
    <div className='bg-white pt-16 p-3 h-screen'>
            <div className='p-1 text-right w-[93%] absolute  right-2' onClick={() => {
                props.setConfirmRidePopupPanel(false)
            }}><i className="text-2xl text-gray-400 ri-arrow-down-wide-line"></i></div>
            <h3 className='text-2xl font-semibold mb-5'>Confirm this Ride to Start</h3>
            <div className='flex items-center justify-between p-3 bg-gray-200 rounded-lg mt-6'>
                <div className='flex items-center gap-4 '>
                    <img className='h-12 rounded-full object-cover w-12' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
                    <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
                </div>
                <h5 className='text-lg font-semibold'>5.4 k.m.</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5 '>
                    <div className='flex items-center gap-5 p-3 border-b-1 border-gray-500 mt-2 mb-2'>
                        <i className="ri-map-pin-user-fill text-2xl"></i>
                        <div>
                            <h2 className='text-lg font-medium'>562/11-A</h2>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className='flex mb-2 items-center gap-5 p-3 border-b-1 border-gray-500'>
                        <i className="ri-map-pin-2-fill text-2xl"></i>
                        <div>
                            <h4 className='text-lg font-medium'>H.no-256 sector-2</h4>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line text-2xl"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{props.ride?.fare} </h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5 w-full flex gap-3 '>
                    
                    <button onClick={() => {
                        props.setRidePopupPanel(false)
                        props.setConfirmRidePopupPanel(false)
                    }} className='w-full flex-1 bg-red-400 text-white font-semibold p-2 px-10 rounded-lg'>
                        Cancel</button>

                    <Link to='/captain-riding' onClick={() => {
                        
                        props.confirmRide()
                    }} className='bg-green-600 flex-1 w-full flex justify-center text-white font-semibold p-2 px-10 rounded-lg'>
                        Confirm</Link>

                </div>
            </div>
        </div>
  )
}

ConfirmRidePopUP.propTypes = {
    ride: PropTypes.object,
    confirmRide: PropTypes.func.isRequired,
    setRidePopupPanel: PropTypes.func.isRequired,
    setConfirmRidePopupPanel: PropTypes.func.isRequired,
};


export default ConfirmRidePopUP