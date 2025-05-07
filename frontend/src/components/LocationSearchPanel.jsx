/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
const LocationSearchPanel = ({ setPanelOpen, setVehiclePanel, setPickupCoords, setDestinationCoords , setPickup }) => {

    //console.log(props);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
          gsap.fromTo(containerRef.current, 
            { y: '100%' }, 
            { y: 0, duration: 0.5, ease: "power2.out" }
          );
        }
      }, []);

    const locations = [
        "4-158/9 5th Cross Road Sainikpuri Secunderabad 500094, TS IND" ,
        "16-15/80 5th Cross Road Sainikpuri Secunderabad 500094, TS IND" ,
        "7-58/9 5th Cross Road Sainikpuri Secunderabad 500094, TS IND" ,
        "42-18/95 5th Cross Road Sainikpuri Secunderabad 500094, TS IND"
    ]


  return (
    <div ref={containerRef} >
        {
            locations.map((elem, index) => (
                <div
                  onClick={() => {
                    setPickup(elem); 
                    setPanelOpen(false);
                    setVehiclePanel(true);
                  }}
                  key={index}
                  className="flex gap-3 border-2 p-3 border-gray-200 active:border-black rounded-xl items-center my-3 justify-start"
                >
                  <h2 className="bg-gray-300 h-8 w-12 flex items-center justify-center rounded-full">
                    <i className="ri-map-pin-fill"></i>
                  </h2>
                  <h4 className="font-medium">{elem}</h4>
                </div>
              ))
        }
    </div>
  )
}

export default LocationSearchPanel