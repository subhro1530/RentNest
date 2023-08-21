// pages/login.js
import React from "react";
import Link from "next/link";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold mb-4">Login</h1>
      <Link href="/login/admin">
        <a className="btn">Login as Admin</a>
      </Link>
      <br />
      <Link href="/login/retailer">
        <a className="btn">Login as Retailer</a>
      </Link>
      <br />
      <Link href="/login/customer">
        <a className="btn">Login as Customer</a>
      </Link>
    </div>
  );
}

export default Login;
