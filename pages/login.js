
import LoginComponent from "../components/login"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SecondNavbar from "../components/secondnavbar";
import React from 'react'
import styles from './styles.module.css'


const login = () => {
    return (
      <>
        <div className={styles.hero}>
        <Navbar topic="Login"/>
               
        <LoginComponent/>
        </div>
        <Footer/>
        </>      
  )
}

export default login