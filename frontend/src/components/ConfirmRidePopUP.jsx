/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ConfirmRidePopUP = (props) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isValid, setIsValid] = useState(true);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const navigate = useNavigate();

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Only numeric input
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleConfirm = () => {
    console.log("ride being passed to navigate:", props.ride);
    const enteredOtp = otp.join('');
    const correctOtp = '1234';
    if (enteredOtp === correctOtp) {
      props.confirmRide();
      navigate('/captain-riding', { state: { ride: props.ride } });
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className='bg-white pt-16 p-3 h-screen'>
      <div className='p-1 text-right w-[93%] absolute right-2' onClick={() => {
        props.setConfirmRidePopupPanel(false)
      }}><i className="text-2xl text-gray-400 ri-arrow-down-wide-line"></i></div>

      <h3 className='text-2xl font-semibold mb-5'>Confirm this Ride to Start</h3>

      <div className='flex items-center justify-between p-3 bg-gray-200 rounded-lg mt-6'>
        <div className='flex items-center gap-4'>
          <img className='h-12 w-12 rounded-full object-cover' src="user.jpg" alt="" />
          <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
        </div>
        <h5 className='text-lg font-semibold'>5.4 k.m.</h5>
      </div>

      <div className='flex gap-2 justify-between flex-col items-center'>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-1 border-gray-500 mt-2 mb-2'>
            <i className="ri-map-pin-user-fill text-2xl"></i>
            <div>
              <h2 className='text-lg font-medium'>562/11-A</h2>
              <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
            </div>
          </div>
          <div className='flex mb-2 items-center gap-5 p-3 border-b-1 border-gray-500'>
            <i className="ri-map-pin-2-fill text-2xl"></i>
            <div>
              <h4 className='text-lg font-medium'>H.no-256 sector-2</h4>
              <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-line text-2xl"></i>
            <div>
              <h3 className='text-lg font-medium'>₹{props.ride?.fare}</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>

        {/* OTP Section */}
        <div className='bg-gray-100 w-full rounded-md p-4 mt-5'>
          <h4 className='text-md font-semibold mb-2'>Enter OTP</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleConfirm();
            }}
            className='flex flex-col gap-3 items-center justify-center'
          >
            <div className='flex gap-2 justify-center'>
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  type='text'
                  inputMode='numeric'
                  maxLength='1'
                  value={digit}
                  ref={inputRefs[idx]}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  className='w-12 h-12 text-center text-xl border border-gray-400 rounded focus:outline-none'
                />
              ))}
            </div>
            {!isValid && <p className='text-sm text-red-500 mt-1'>Incorrect OTP</p>}

            <div className='flex w-full justify-between mt-4 gap-3'>
              <button
                type='button'
                onClick={() => {
                  props.setRidePopupPanel(false);
                  props.setConfirmRidePopupPanel(false);
                }}
                className='flex-1 bg-red-400 text-white font-semibold py-2 rounded-lg'
              >
                Cancel
              </button>

              <Link
                to='/captain-riding'
                
                onClick={(e) => {
                  e.preventDefault();
                  handleConfirm();
                }}
                className={`flex-1 flex justify-center font-semibold py-2 rounded-lg ${
                  otp.every((d) => d !== '') ? 'bg-green-600 text-white' : 'bg-green-300 text-white cursor-not-allowed'
                }`}
              >
                Confirm
              </Link>


            
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ConfirmRidePopUP.propTypes = {
  ride: PropTypes.object,
  confirmRide: PropTypes.func.isRequired,
  setRidePopupPanel: PropTypes.func.isRequired,
  setConfirmRidePopupPanel: PropTypes.func.isRequired,
};

export default ConfirmRidePopUP;
