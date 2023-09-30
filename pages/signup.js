// pages/login.js
import React from "react";
import Link from "next/link";
import SignupComponent from "../components/signup";

function Login() {
  return (
    <div
      style={{
        backgroundColor: "grey",
        width: "100vw",
        height:"100vh"
      }}
      className="flex flex-col items-center justify-center h-screen">
<SignupComponent/>
    </div>
  );
}

export default Login;
