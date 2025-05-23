/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios';

const Captainsignup = () => {

        const navigate = useNavigate()

        const [ email, setEmail ] = useState('')
        const [ password, setPassword ] = useState('')
        const [ firstName, setFirstName ] = useState('')
        const [ lastName, setLastName ] = useState('')
        const [ captainData, setCaptainData ] = useState({})

        const [ vehicleColor, setVehicleColor ] = useState('')
        const [ vehiclePlate, setVehiclePlate ] = useState('')
        const [ vehicleCapacity, setVehicleCapacity ] = useState('')
        const [ vehicleType, setVehicleType ] = useState('')

        const { captain , setCaptain } = React.useContext(CaptainDataContext)
    
        const submitHandler = async (e) => {
            e.preventDefault()
            const captainData = {
              fullname: {
                firstname: firstName,
                lastname: lastName
              },
              email: email,
              password: password,
              vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
              }
            }

            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

            if(response.status === 201){
              const data = response.data
              setCaptain(data.captain)
              localStorage.setItem('token', data.token)
              navigate('/captain-home')
            }
    
            setEmail('')
            setFirstName('')
            setLastName('')
            setPassword('')
            setVehicleColor('')
            setVehiclePlate('')
            setVehicleCapacity('')
            setVehicleType('')
        }


  return (
    <div>
        <div className='p-5 h-screen flex flex-col justify-between'>
          <div>
            <img className='w-16 mb-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
    
            <form onSubmit={(e) => {
              submitHandler(e)
            }}>
    
              <h3 className='text-lg w-1/2  font-medium  mb-2'>What&apos;s your name</h3>
              <div className='flex gap-4 mb-4'>
                <input
                  required
                  className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2  text-lg placeholder:text-base'
                  type="text"
                  placeholder='First name'
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}
                />
                <input
                  required
                  className='bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2   text-lg placeholder:text-base'
                  type="text"
                  placeholder='Last name'
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value)
                  }}
                />
              </div>
    
              <h3 className='text-lg font-medium mb-2'>What&apos;s your email</h3>
              <input
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                className='bg-[#eeeeee] mb-3 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base'
                type="email"
                placeholder='email@example.com'
              />
    
              <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
    
              <input
                className='bg-[#eeeeee] mb-5 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                required type="password"
                placeholder='password'
              />


        <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-3'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-5'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled className="text-black text-sm py-1" >Select Vehicle-Type</option>
              <option value="car" className="text-black text-sm py-1" >Car</option>
              <option value="auto" className="text-black text-sm py-1" >Auto</option>
              <option value="moto" className="text-black text-sm py-1" >Moto</option>
            </select>
            
          </div>


    
              <button
                className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
              >Create Captain Account</button>
    
            </form>
            <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
          </div>
          <div>
            <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
              Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
          </div>
        </div>
      </div >
  )
}

export default Captainsignup