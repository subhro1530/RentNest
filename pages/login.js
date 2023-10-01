
import LoginComponent from "../components/login"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SecondNavbar from "../components/secondnavbar";
import React from 'react'

const login = () => {
    return (
      <>
        <Navbar topic="Login"/>
        <SecondNavbar/>
               <div
      style={{
        backgroundColor: "grey",
        width: "100vw",
        height:"60vh"
                }}
                className="flex flex-col items-center justify-center h-screen">
            <LoginComponent/>
        </div>
        <Footer/>
        </>      
  )
}

export default login