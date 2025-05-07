/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MapView from '../pages/MapView';

const DriverFound = ({ pickup, setDriverAccepted }) => {
  const [showOTP, setShowOTP] = useState(false);
  const [showOkButton, setShowOkButton] = useState(true);

  const handleCancel = () => {
    alert("Ride successfully canceled");
    window.location.reload(); 
  };

  const handleOk = () => {
    setShowOkButton(false);
    setShowOTP(true);
  };

  return (
    <div className="fixed top-16 h-[92%] left-0 z-50 w-full bg-white flex flex-col items-center justify-between">
      
      
      <div className="w-full px-5 pt-6 text-center">
        <h2 className="text-3xl font-bold mb-2 text-green-600">🎉 Driver Found!</h2>
        <p className="text-lg text-gray-700">Your captain is heading to:</p>
        <p className="text-xl font-semibold text-gray-900 mt-1">{pickup}</p>
      </div>

     
      <div className="w-full h-full mt-4">
        <MapView />
      </div>

      
      {showOTP && (
        <div className="text-2xl text-gray-800 font-bold mb-1 mt-2">
          OTP to start the ride: <span className="text-blue-600">1234</span>
        </div>
      )}

      
      <div className="w-full flex justify-center gap-6 pb-6 px-6">
        <button
          onClick={handleCancel}
          className={`${
            showOTP ? 'w-full' : 'w-40'
          } py-2 bg-red-500 text-white text-lg font-semibold rounded-xl mt-6`}
        >
          Cancel Ride
        </button>

        {showOkButton && (
          <button
            onClick={handleOk}
            className="w-40 py-2 bg-green-600 text-white text-lg font-semibold rounded-xl mt-6"
          >
            OK, Got It
          </button>
        )}
      </div>
    </div>
  );
};

DriverFound.propTypes = {
  pickup: PropTypes.string,
  setDriverAccepted: PropTypes.func,
};

export default DriverFound;
