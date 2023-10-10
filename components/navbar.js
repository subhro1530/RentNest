import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@mui/material";

function Navbar({ topic }) {
  return (
    <nav className="text-white p-4 flex justify-between items-center  ">
      <div className="flex items-center">
        <Link href="/">
          <img src="/images/full.png" alt="Logo" className="w-40 object-contain mr-2 sm:ml-10 ml-3" />
        </Link>
      </div>
      <div className="flex items-center sm:gap-5 gap-2">
        {/* Login Dropdown */}
        <div className="relative group ml-2">
          {/* Login Dropdown */}
          <Link href="/login">
            <Button variant="contained" color="success">
              {topic}
            </Button>
          </Link>
        </div>
        <Button variant="contained" color="success">
          Post Property
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
