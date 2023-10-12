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
          <img src="/images/full.png" alt="Logo" className="h-10 w-50 mr-2" />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        {/* Login Dropdown */}
        <div className="relative group">
          {/* Login Dropdown */}
            <Button variant="contained" color="success" onClick={handleClick}>
              {data}
            </Button>
        </div>
        <Button variant="contained" color="success" >
          Post Property
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
