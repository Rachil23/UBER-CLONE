/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h6 className="absolute top-7 right-5 text-2xl text-gray-600" onClick={
            () => props.setVehiclePanel(false)
          }> <i className="ri-arrow-down-wide-fill"></i> </h6>
          
        <h3 className="text-2xl font-semibold mb-5 px-1">Choose a Vehicle</h3>

        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className="flex border-2 border-gray-300 active:border-black focus-within:border-gray-900 
        transition-all rounded-xl mb-2 px-2.5 py-1 w-full items-center justify-between">

          <img className="h-22" src="https://www.uber-assets.com/image/upload/v1699622825/assets/26/12256b-fe40-4f78-b94c-d2ffdec56a23/original/UberBlack.png" />

          <div className="w-1/2">
            <h4 className="font-semibold text-lg">UberGo  
              <span> <i className="ri-user-3-fill"></i> 3</span>
            </h4>
            <h5 className="font-medium text-base text-gray-800 ">8 mins away </h5>
            <p className="font-normal text-sm text-gray-600">Affordable, compact rides</p>
          </div>

          <h2 className="text-xl font-semibold">₹193.20</h2>

        </div>

        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className="flex border-2 border-gray-300 active:border-black focus-within:border-gray-900 
        transition-all rounded-xl mb-2 px-2.5 py-2.5 w-full items-center justify-between">
          <img className="h-13.5 " src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" />
          <div className="w-1/2">
            <h4 className="font-semibold text-lg">Moto  
              <span> <i className="ri-user-3-fill"></i> 1</span>
            </h4>
            <h5 className="font-medium text-base text-gray-800 ">2 mins away </h5>
            <p className="font-normal text-sm text-gray-600">Affordable motorcycle rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹85.00</h2>
        </div>

        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className="flex border-2 border-gray-300 active:border-black focus-within:border-gray-900 
        transition-all rounded-xl mb-2 px-2.5 py-2.5 w-full items-center justify-between">

          <img className="h-14 " src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" />

          <div className="w-1/2">
            <h4 className="font-semibold text-lg">UberAuto  
              <span> <i className="ri-user-3-fill"></i> 2</span>
            </h4>
            <h5 className="font-medium text-base text-gray-800 ">2 mins away </h5>
            <p className="font-normal text-sm text-gray-600">Affordable auto rides</p>
          </div>

          <h2 className="text-xl font-semibold">₹113.68</h2>

        </div>

    </div>
  )
}

export default VehiclePanel