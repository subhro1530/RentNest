import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@mui/material";

function Navbar({topic}) {
  const [selectedLocation, setSelectedLocation] = useState(""); // State to store selected location
  const [currentState, setCurrentState] = useState(""); // State to store current state

  // Function to handle location selection
  const handleLocationChange = async (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "current") {
      try {
        const position = await getCurrentPosition();
        if (position) {
          const state = determineStateFromCoordinates(
            position.coords.latitude,
            position.coords.longitude
          );
          setCurrentState(state);
          setSelectedLocation(selectedValue);
        } else {
          console.error("Error getting current location.");
        }
      } catch (error) {
        console.error("Error getting current location:", error);
      }
    } else {
      setSelectedLocation(selectedValue);
    }
  };

  // Function to get current position
  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    });
  };

  // Function to determine state from coordinates (simplified example)
  const determineStateFromCoordinates = (latitude, longitude) => {
    // Replace with your logic to determine the state from coordinates
    const state = "Your Current State";
    return state;
    };
    

     


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
            <Button variant="contained" color="success" >
            {topic}
          </Button></Link>

          
        </div>
        <Button variant="contained" color="success">
          Post Property
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
