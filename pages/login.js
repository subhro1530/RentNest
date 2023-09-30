
import LoginComponent from "../components/login"

import React from 'react'

const login = () => {
    return (
        <>
               <div
      style={{
        backgroundColor: "grey",
        width: "100vw",
        height:"100vh"
                }}
                className="flex flex-col items-center justify-center h-screen">
            <LoginComponent/>
               </div>
        </>      
  )
}

export default login