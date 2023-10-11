// pages/login.js
import React from "react";
import Link from "next/link";
import SignupComponent from "../components/signup";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SecondNavbar from "../components/secondnavbar";
import styles from './styles.module.css'
import { useMediaQuery } from "@mui/material";


function SignUp() {
  const matches = useMediaQuery('(min-width:630px)');
  return (
    <>
    <div className={styles.hero} style={{alignItems:matches?"unset":"center",padding:matches?"1rem":"0px"}}>
      <Navbar topic="Login"/>
    
     <SignupComponent/>
     </div>
      <Footer />
      </>
  );
}

export default SignUp;
