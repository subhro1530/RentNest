
import LoginComponent from "../components/login"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SecondNavbar from "../components/secondnavbar";
import React from 'react'
import styles from './styles.module.css'


const login = () => {
  return (
    <div className="bg-primary min-h-screen items-center">
      <div className=" z-[3] w-[80%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div className=" z-[3] w-[80%] h-[60%] -right-[50%] rounded-full pink__gradient" />
      <LoginComponent />
    </div>
  )
}

export default login