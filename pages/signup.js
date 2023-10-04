// pages/login.js
import React from "react";
import Link from "next/link";
import SignupComponent from "../components/signup";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SecondNavbar from "../components/secondnavbar";

function Login() {
  return (
    <>
      <Navbar topic="SignUp"/>
      <SecondNavbar/>
    <div
      style={{
        backgroundColor: "grey",
        width: "100vw",
        height:"80vh"
      }}
      className="flex flex-col items-center justify-center h-screen">
<SignupComponent/>
    </div>
      <Footer />
      </>
  );
}

export default Login;
