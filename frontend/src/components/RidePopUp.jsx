/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';

const RidePopUp = (props) => {
    return (
        <div className='bg-white'>
            <h5 className='p-1 text-right w-[93%] absolute top-5 right-0' onClick={() => {
                props.setRidePopupPanel(false)
            }}><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>
            <div className='flex items-center justify-between p-3 bg-gray-300 rounded-lg mt-4'>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 rounded-full object-cover w-12' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
                    <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.6 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-1 border-gray-500'>
                        <i className="ri-map-pin-user-fill text-2xl"></i>
                        <div>
                            <h2 className='text-md font-medium'>562/11-A</h2>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-1 border-gray-500'>
                        <i className="ri-map-pin-2-fill text-2xl"></i>
                        <div>
                            <h4 className='text-md font-medium'>H.no-256 sector-2</h4>
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
                    }} className='w-full flex-1 bg-gray-300 text-gray-700 font-semibold p-2 px-10 rounded-lg'>
                        Ignore</button>

                    <button onClick={() => {
                        props.setConfirmRidePopupPanel(true)
                        props.confirmRide()
                    }} className='bg-green-600 flex-1 w-full text-white font-semibold p-2 px-10 rounded-lg'>
                        Accept</button>

                </div>
            </div>
        </div>
    )
};

RidePopUp.propTypes = {
    ride: PropTypes.object,
    confirmRide: PropTypes.func.isRequired,
    setRidePopupPanel: PropTypes.func.isRequired,
    setConfirmRidePopupPanel: PropTypes.func.isRequired,
};

export default RidePopUp