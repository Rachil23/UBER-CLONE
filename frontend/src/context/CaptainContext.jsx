/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext , useState , useContext, Children } from "react";
import React from 'react';

export const CaptainDataContext = createContext();

/*
export const useCaptain = () => {
  const context = useContext(CaptainContext);
  if (!context) {
    throw new Error('useCaptain must be used within a CaptainProvider');
  }
  return context;
};
*/

const CaptainContext = ({ children }) => {
  const [ captain , setCaptain ] = useState(null);
  const [ isLoading , setIsLoading ] = useState(null);
  const [ error , setError ] = useState(null);

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  }

  const value = {
    captain,
    setCaptain,
    isLoading,
    setIsLoading,
    error,
    setError,
    updateCaptain
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );

};
export default CaptainContext;