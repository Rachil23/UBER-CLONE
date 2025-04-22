/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper.jsx'
import Riding from './pages/Riding.jsx'
import CaptainRiding from './pages/CaptainRiding.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/riding' element={<Riding/>} />
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/captain-login' element={<Captainlogin/>} />
        <Route path='/captain-signup' element={<Captainsignup/>} />
        <Route path='/captain-riding' element={<CaptainRiding/>} />
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper> } />

        <Route path='/user/logout' element={
          <UserProtectWrapper>
            <UserLogout/>
          </UserProtectWrapper>} />
          <Route path='/captain-home' element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>} />
      </Routes>
    </div>
  )
}

export default App