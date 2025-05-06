/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FinishRide = (props) => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [rideCompleted, setRideCompleted] = useState(false);

  const handleFinishRide = () => {
    setAnimationStarted(true);
    setTimeout(() => {
      setRideCompleted(true);
    }, 900); // faster animation (0.9s)
  };

  return (
    <div className="relative">
      {/* Close Button */}
      <h5 className="p-2 text-center w-[93%] absolute -top-3 left-40 right-2 z-20 " onClick={() => props.setFinishRidePanel(false)}>
        <i className="  text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>

      {/* Moving car animation overlay */}
      {animationStarted && !rideCompleted && (
        <div className="absolute inset-0 bg-white/70 z-20 flex items-center justify-start">
          <div className="w-full relative h-24">
            <img
            src="/car.png"
            alt="car"
            className="absolute left-[-60px] top-6 w-14 h-14 animate-[slideCar_0.9s_linear_forwards]"
            />
          </div>
        </div>
      )}

      {/* Ride Details (still visible underneath) */}
      <div className={animationStarted ? 'opacity-50 pointer-events-none' : ''}>
        <h3 className="text-2xl font-semibold mb-5 ">Finish this Ride</h3>
        <div className="flex items-center justify-between p-4 border bg-gray-100 rounded-lg mt-4">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
              alt=""
            />
            <h2 className="text-lg font-medium">{props.ride?.user.fullname.firstname}</h2>
          </div>
          <h5 className="text-lg font-semibold">5.4 k.m.</h5>
        </div>

        <div className="flex flex-col items-center gap-2 justify-between">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b border-gray-400">
              <i className="ri-map-pin-user-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">{props.ride?.pickup}</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-b border-gray-400">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">{props.ride?.destination}</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>

          <div className="mt-10 w-full">
            <button
              onClick={handleFinishRide}
              className="w-full mt-5 flex text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
              disabled={animationStarted}
            >
              Finish Ride
            </button>
          </div>
        </div>
      </div>

      {/* Ride Completed message */}
      {rideCompleted && (
        <div className="absolute inset-0 z-30 bg-white/80 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-green-600"> Ride Completed</h2>
          <p className="text-gray-700 mt-2">You have successfully finished the ride.</p>
        </div>
      )}

      {/* Tailwind inline animation definition via utility */}
      <style>
        {`
          @keyframes slideCar {
            0% { left: -60px; }
            100% { left: 100%; }
          }
          .animate-\\[slideCar_0\\.9s_linear_forwards\\] {
            animation: slideCar 0.9s linear forwards;
          }
        `}
      </style>
    </div>
  );
};

FinishRide.propTypes = {
  ride: PropTypes.object,
  setFinishRidePanel: PropTypes.func.isRequired,
};

export default FinishRide;
