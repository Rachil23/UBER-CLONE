/* eslint-disable no-unused-vars */

import React , { useContext }from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'

const CaptainHome = () => {

  const { captain } = useContext(CaptainDataContext)

  const [ride, setRide] = useState(null);
  const [showRidePopup, setRidePopupPanel] = useState(true);
  const [showConfirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRide({
        user: {
          fullname: {
            firstname: 'Harsh',
            lastname: 'Sharma',
          },
        },
        pickup: 'Times Square, NY',
        destination: 'Central Park, NY',
        fare: 150,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const confirmRide = () => {
    console.log('Ride Confirmed!');
    setRidePopupPanel(false);
  };

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
                <CaptainDetails/>
          </div>
          <div className="fixed z-10 w-full  bg-white bottom-0 px-3 py-8">
            {ride && showRidePopup && (
                <RidePopUp
                    ride={ride}
                    confirmRide={confirmRide}
                    setRidePopupPanel={setRidePopupPanel}
                    setConfirmRidePopupPanel={setConfirmRidePopupPanel}
                />
                )}
          </div>
        </div>
  )
}

export default CaptainHome