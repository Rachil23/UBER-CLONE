/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

const LocationSearchPanel = ({
  setPanelOpen,
  setVehiclePanel,
  setPickupCoords,
  setDestinationCoords,
  setPickup,
  setDestination,
  setConfirmRidePanel
}) => {
  const containerRef = useRef(null);
  const [pickupSelected, setPickupSelected] = useState('');
  const [destinationSelected, setDestinationSelected] = useState('');
  const [selecting, setSelecting] = useState('pickup'); 

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { y: '100%' },
        { y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, []);

  const locations = [
    // Mumbai
    "One BKC, Bandra Kurla Complex, Mumbai 400051, MH IND",
    "Palm Court, Malad West, Mumbai 400064, MH IND",
    "DLH Park, S.V. Road, Goregaon West, Mumbai 400062, MH IND",
    //"Rustomjee Central Park, Andheri East, Mumbai 400069, MH IND",

    // Pune
    "Marvel Fria, Kharadi, Pune 411014, MH  IND",
    "Kolte Patil Ivy Estate, Wagholi, Pune 412207, MH IND",
    "Panchshil Business Park, Viman Nagar, Pune 411014, MH IND",

    // Bangalore
    "Prestige Lakeside Habitat, Whitefield, Bangalore 560066, KA IND",
    "Brigade Gateway, Malleswaram, Bangalore 560055, KA IND",
    "RMZ Infinity, Old Madras Road, Bangalore 560016, KA IND",

    // Hyderabad
    "Aparna Sarovar Zenith, Nallagandla, Hyderabad 500019, TS IND",
    "Lodha Meridian, Kukatpally, Hyderabad 500072, TS IND",
    "My Home Bhooja, HITEC City, Hyderabad 500081, TS IND"
  ];

  const handleSelection = (loc) => {
    if (selecting === 'pickup') {
      setPickupSelected(loc);
      setPickup(loc);
      setSelecting('destination');
    } else {
      if (loc === pickupSelected) {
        alert('Pickup and destination cannot be the same.');
        return;
      }

      setDestinationSelected(loc);
      setDestination(loc);
      setPanelOpen(false);
      setVehiclePanel(true);
    }
  };

  return (
    <div ref={containerRef} className="h-[80vh] overflow-y-auto no-scrollbar px-2 pb-24">
      <h3 className="text-lg font-semibold mb-3 sticky -top-1 bg-gray-100 ">
        {selecting === 'pickup' ? 'Select Pickup Location' : 'Select Destination'}
      </h3>

      {locations.map((elem, index) => (
        <div
        onClick={() => {
            handleSelection(elem);
          }}
          key={index}
          className="flex gap-3 border-2 p-3 border-gray-200 active:border-black rounded-xl items-center my-3 justify-start cursor-pointer"
        >
          <h2 className="bg-gray-300 h-6.5 w-10 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}

      <div className="mt-4 text-sm text-gray-500">
        {pickupSelected && <p>Pickup: {pickupSelected}</p>}
        {destinationSelected && <p>Destination: {destinationSelected}</p>}
      </div>
    </div>
  );
};

export default LocationSearchPanel;
