/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import MapView from '../pages/MapView';
import { useEffect } from 'react';
//import LiveTracking from '../components/LiveTracking'

const CaptainRiding = () => {

    const [ finishRidePanel, setFinishRidePanel ] = useState(false)
    const finishRidePanelRef = useRef(null)
    const location = useLocation()
    const ride = location.state?.ride ;

    //----------------------------- location -----------------------------//

    const [pickupCoords, setPickupCoords] = useState(null);
    const [dropCoords, setDropCoords] = useState(null);

    const getCoordinatesFromAddress = async (address) => {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
    );
    const data = await response.json();
    if (data.length > 0) {
        return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
        };
    }
    return null;
    };

    useEffect(() => {
    if (ride?.pickup && ride?.destination) {
        getCoordinatesFromAddress(ride.pickup).then(setPickupCoords);
        getCoordinatesFromAddress(ride.destination).then(setDropCoords);
    }
    }, [ride]);

      //----------------------------- location -----------------------------//

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ finishRidePanel ])


    return (
        <div className='h-screen relative flex flex-col justify-end'>

                        
            <div className="absolute top-4 left-0 right-0 z-[1000] px-6 flex justify-between items-center">
                <img className="w-16" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber" />
                <Link to="/captain-home" className="h-7 w-7 bg-white flex items-center justify-center rounded-full shadow">
                <i className="text-3xl font-medium ri-close-circle-line"></i>
                </Link>
            </div>

            {pickupCoords && dropCoords && (
                <MapView pickup={pickupCoords} drop={dropCoords} />
            )}

            <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 pt-10'
                onClick={() => {
                    setFinishRidePanel(true)
                }}
            >
                <h5 className='p-1 text-center w-[90%] absolute top-0' onClick={() => {

                }}><i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i></h5>
                <h4 className='text-xl font-semibold'>{'4 KM away'}</h4>
                <button className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>
            <div ref={finishRidePanelRef} className='fixed w-full z-[500] bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                <FinishRide
                    ride={ride}
                    setFinishRidePanel={setFinishRidePanel}
                     />
            </div>

            {/*
            <div className='h-screen fixed w-screen top-0 z-[-1]'>
                <LiveTracking />
            </div>*/}

        </div>
    )
}

export default CaptainRiding