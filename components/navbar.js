import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@mui/material";

function Navbar({ topic }) {
  return (
    <nav className="text-white p-4 flex justify-between items-center  ">
      <div className="flex items-center">
        <Link href="/">
          <img src="/images/full.png" alt="Logo" className="h-10 w-50 mr-2" />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        {/* Login Dropdown */}
        <div className="relative group">
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
