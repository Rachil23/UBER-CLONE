/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { useRef } from "react";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
import DriverFound from "../components/DriverFound";

const Home = () => { 

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)

  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const [driverFound, setDriverFound] = useState(false);
  
  const [rideStarted, setRideStarted] = useState(false);

  const [driverAccepted, setDriverAccepted] = useState(false);
  const [driverLocation, setDriverLocation] = useState(null);
  const [pickupCoords, setPickupCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);

  const [selectedVehicle, setSelectedVehicle] = useState(null);

  {/*
  const submitHandler = (e) => {
    e.preventDefault();
  }
  */}

  const submitHandler = (e) => {
    e.preventDefault();
    setWaitingForDriver(true);  
  };

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

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanel])

  
  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePanel])

  

  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[waitingForDriver])
  

  {/*

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehicleFound])
 
    */ }

    useGSAP(() => {
      if (vehicleFoundRef.current) {
        if(vehicleFound){
          gsap.to(vehicleFoundRef.current,{
            transform:'translateY(0)'
          })
        } else {
          gsap.to(vehicleFoundRef.current,{
            transform:'translateY(100%)'
          })
        }
      }
    }, [vehicleFound]);

    
    useEffect(() => {
      if (vehicleFound && !driverFound) {
        const timer = setTimeout(() => {
          setDriverFound(true);
        }, 4000);

        return () => clearTimeout(timer);
      }
    }, [vehicleFound, driverFound]);


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
            <LocationSearchPanel 
              setPanelOpen={setPanelOpen} 
              setVehiclePanel={setVehiclePanel} 
              setPickup={setPickup}
              setDestination={setDestination} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className="fixed z-10 w-full translate-y-full bg-gray-200 bottom-0 px-3 py-8">
          <VehiclePanel 
            setConfirmRidePanel={setConfirmRidePanel} 
            setVehiclePanel={setVehiclePanel} 
            setSelectedVehicle={setSelectedVehicle}
            /> 
            
      </div>

      <div ref={confirmRidePanelRef} className="fixed z-10 w-full translate-y-full bg-gray-200 bottom-0 px-3 py-6">
          <ConfirmedRide 
            setConfirmRidePanel={setConfirmRidePanel} 
            setVehiclePanel={setVehiclePanel} 
            setVehicleFound={setVehicleFound} 
            setDriverAccepted={setDriverAccepted}
            selectedVehicle={selectedVehicle}
            /> 
            
      </div>

      
      {vehicleFound && !driverFound && !driverAccepted && (
        <div ref={vehicleFoundRef} className="fixed z-10 w-full translate-y-full bg-gray-200 bottom-0 px-3 py-6">
          <LookingForDriver 
            setVehiclePanel={setVehiclePanel} 
            setConfirmRidePanel={setConfirmRidePanel} 
            setVehicleFound={setVehicleFound} 
            setDriverFound={setDriverFound} 
            selectedVehicle={selectedVehicle}
          />
        </div>
      )}

      {driverFound && !driverAccepted && (
        <DriverFound
          pickup={pickup}
          setDriverAccepted={setDriverAccepted}
        />
      )}

      {driverAccepted && !rideStarted && (
        <div ref={waitingForDriverRef} className="fixed z-10 w-full translate-y-full bg-gray-200 bottom-0 px-3 py-6">
          <WaitingForDriver 
            setWaitingForDriver={setWaitingForDriver} 
            setVehiclePanel={setVehiclePanel} 
            setConfirmRidePanel={setConfirmRidePanel} 
            setVehicleFound={setVehicleFound}
          />
        </div>
      )}

    </div>
  )
}

export default Home