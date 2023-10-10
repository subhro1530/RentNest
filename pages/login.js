
import LoginComponent from "../components/login"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SecondNavbar from "../components/secondnavbar";
import React from 'react'
import styles from './styles.module.css'


const login = () => {
  return (
    <div className="bg-primary min-h-screen">
      <LoginComponent />
    </div>
  )
}

export default login;