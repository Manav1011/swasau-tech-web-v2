'use client'
import { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {  
  const [globalGrad,setGlobalGrad] = useState()
  const [showLoader,setShowLogoLoader] = useState(false)

  const updateGlobalGrad = (newState) => {
    setGlobalGrad(newState);
  };  

  const updateShowLogoLoader = (newState) => {      
    setShowLogoLoader(newState)
  }
  return (
    <GlobalStateContext.Provider value={{ globalGrad, updateGlobalGrad, showLoader, updateShowLogoLoader }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
