// pages/login.js
import React from "react";
import Link from "next/link";
import SignupComponent from "../components/signup";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SecondNavbar from "../components/secondnavbar";
import styles from './styles.module.css'


function Login() {
  return (
    <>
    <div className={styles.hero}>
      <Navbar topic="SignUp"/>
    
     <SignupComponent/>
     </div>
      <Footer />
      </>
  );
}

export default Login;
