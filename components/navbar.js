"use client"

import React, { useState } from "react";
import Link from "next/link";
import { Button, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";

function Navbar({ topic,logout }) {
  const matches = useMediaQuery('(min-width:630px)');
  const router = useRouter();
  const data = topic === "in" ? "LOGOUT" : "LOGIN";

  const handleClick = () => {
    if (topic === "in")
      logout();
    else
      router.push("/login")
  }
  return (
    <nav className={`text-white p-4 flex justify-between items-center ${!matches?"flex-col gap-3":""}`}>
      <div className="flex items-center">
        <Link href="/">
          <img src="/images/full.png" alt="Logo" className="w-40 object-contain mr-2 sm:ml-10 ml-3" />
        </Link>
      </div>
      <div className="flex items-center sm:gap-5 gap-2 ">
        {/* Login Dropdown */}
        <div className="relative group ml-2">
          {/* Login Dropdown */}
            <Button variant="contained" color="success" onClick={handleClick} className="navbar-items">
              {data}
            </Button>
        </div>
        <Button variant="contained" color="success" className="navbar-items">
          Post Property
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
