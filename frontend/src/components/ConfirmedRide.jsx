/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';

const ConfirmedRide = (props) => {
  return (
    <div >
      <h6 className="absolute top-7 right-5 text-2xl text-gray-600"
          onClick={() => props.setConfirmRidePanel(false)}>
        <i className="ri-arrow-down-wide-fill"></i>
      </h6>

      <h3 className="text-2xl font-medium mb-3 px-1">Confirm your Ride</h3>

      <div className="flex justify-between flex-col items-center">
        {props.selectedVehicle && (
          <div className="flex flex-col items-center mb-4">
            <img className="h-28 mb-2" src={props.selectedVehicle.image} alt={props.selectedVehicle.name} />
            <h5 className="text-xl font-semibold">{props.selectedVehicle.name}</h5>
            <h6 className="text-lg text-gray-600">{props.selectedVehicle.timeAway} away</h6>
          </div>
        )}

        <div className='w-full'>
          <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
            <i className="ri-map-pin-2-fill text-3xl"></i>
            <div>
              <h3 className='text-xl font-semibold'>Pickup</h3>
              <p className='-mt-1 text-lg text-gray-700'>{props.pickup}</p>
            </div>
          </div>

          <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
            <i className="ri-map-pin-user-line text-3xl"></i>
            <div>
              <h3 className='text-xl font-semibold'>Destination</h3>
              <p className='-mt-1 text-lg text-gray-700'>{props.destination}</p>
            </div>
          </div>

          <div className='flex items-center gap-5 p-3'>
            <i className="ri-money-rupee-circle-fill text-3xl"></i>
            <div>
              <h3 className='text-xl font-semibold'>{props.selectedVehicle?.price ?? '193.20'}</h3>
              <p className='text-lg -mt-1 text-gray-700'>Cash</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            props.setConfirmRidePanel(false);
            props.setVehicleFound(true);
          }}
          className='w-full mt-5 bg-green-500 text-white text-xl font-semibold rounded-md p-2'
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

ConfirmedRide.propTypes = {
  pickup: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  setVehiclePanel: PropTypes.func.isRequired,
  setVehicleFound: PropTypes.func.isRequired,
  setConfirmRidePanel: PropTypes.func.isRequired,
  setDriverAccepted: PropTypes.func.isRequired,
  selectedVehicle: PropTypes.shape({
    name: PropTypes.string,
    timeAway: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
};

export default ConfirmedRide;
