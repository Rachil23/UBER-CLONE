/* eslint-disable no-unused-vars */
import { useState } from "react"
import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { useRef } from "react";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => { 

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function() {
    if(panelOpen){
      gsap.to(panelRef.current,{
        height: '75%',
        padding:24
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
        
      })
    }else{
      gsap.to(panelRef.current,{
        height: '0%',
        padding:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className=" w-18 mb-6 absolute left-7 top-7 " 
      src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/>

      <div className='h-screen w-screen'>

        <img className='h-full w-full object-cover' 
        src="https://w0.peakpx.com/wallpaper/336/971/HD-wallpaper-usa-map-top-best-quality-usa-map-background-aesthetic-map-thumbnail.jpg" />

      </div>

      <div className=' absolute flex flex-col justify-end top-0 h-screen w-full'>

        <div className='h-[25%] bg-white p-3.5 rounded-t-xl relative'>
          <h5 ref={panelCloseRef} onClick={ ()=> 
            setPanelOpen(false) } 
          className='absolute top-3 right-3 text-2xl'>
            <i className="ri-arrow-down-s-line "></i>
          </h5>

          <h4 className='text-3xl font-semibold mb-3'>Find a trip ?</h4>

            <form onSubmit={(e) => {
              submitHandler(e);
            }}>

            <div className="line absolute h-16 w-1 top-[45%] left-7 bg-gray-800 rounded-full "></div>

            <input
            onClick={(e) => {
              setPanelOpen(true)
            }} 
            value={pickup}
            onChange={(e) => {
              setPickup(e.target.value)
            }}
            className='bg-[#eee] px-9 py-2.5 text-lg rounded-lg w-full mb-3' 
            type='text'  
            placeholder='Add a pick-up location'/>

            <input
            onClick={(e) => {
              setPanelOpen(true)
            }} 
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value)
            }} 
            className='bg-[#eee] px-9 py-2.5 text-lg rounded-lg w-full mb-1 ' 
            type='text'  
            placeholder='Enter your destination'/>

          </form>

        </div>

        <div ref={panelRef} className='h-[0] bg-gray-100 '>
            <LocationSearchPanel/>
        </div>
      </div>

      <div className="fixed z-10 w-full bg-gray-200 bottom-0 px-3 py-8">

        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

        <div className="flex border-2 border-gray-300 active:border-black focus-within:border-gray-900 
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

        <div className="flex border-2 border-gray-300 active:border-black focus-within:border-gray-900 
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

        <div className="flex border-2 border-gray-300 active:border-black focus-within:border-gray-900 
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
    </div>
  )
}

export default Home