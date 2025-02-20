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
    <div className='h-screen relative'>
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
    </div>
  )
}

export default Home