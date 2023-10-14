import LoginComponent from "../components/login"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SecondNavbar from "../components/secondnavbar";
import React from 'react'
import styles from './styles.module.css'
import { useMediaQuery } from "@mui/material";


const Login = () => {
  const matches = useMediaQuery('(min-width:630px)');
  const matches2 = useMediaQuery('(min-width:770px)');
  return (
    <>
      <div className={styles.hero} style={{
        alignItems: matches ? "unset" : "center", padding: matches ? "1rem" : "0px",
        height: matches2 ? "auto" : "80vh",
      justifyContent:matches2?"center":"space-around"}}>
      <Navbar topic="SignUp"/>
    
     <LoginComponent/>
     </div>
      <Footer />
      </>
  );
}

export default Login