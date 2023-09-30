import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
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
    
    const [showLoginOptions, setShowLoginOptions] = useState(false);

      const handleLoginHover = () => {
        setShowLoginOptions(true);
      };

      const handleLoginLeave = () => {
        setShowLoginOptions(false);
      };

      const handlePopupMouseEnter = () => {
        setShowLoginOptions(true);
      };

      const handlePopupMouseLeave = () => {
        setShowLoginOptions(false);
      };


  return (
    <nav className="bg-indigo text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <img src="/images/full.png" alt="Logo" className="h-10 w-50 mr-2" />
        </Link>
        <div className="ml-4">
          {/* Location Dropdown */}
          <div className="relative inline-block text-left">
            <select
              value={selectedLocation}
              onChange={handleLocationChange}
              className="btn-dropdown w-40 text-l bg-indigo border border-gray-500 rounded-lg px-3 py-2 text-gray-100"
            >
              <option value="">Location</option>
              <option value="current">
                {currentState
                  ? `Current Location (${currentState})`
                  : "Current Location"}
              </option>
              <option value="state1">Bengaluru</option>
              <option value="state2">Kolkata</option>
              {/* Add options for all states */}
            </select>
            {/* ... */}
          </div>
          {/* Prime Membership Dropdown */}
          <div className="relative inline-block text-left">
            <div className="relative group">
              <button className="btn btn-primary px-3 transition duration-300 ease-in-out  rounded-lg py-2 text-l mx-2 group-hover:bg-white group-hover:text-black">
                Prime Membership
              </button>
              <div className="hidden group-hover:block absolute left-0 mt-2 py-2 bg-indigo border-gray-700 text-white shadow-lg rounded-lg w-500">
                <div className="p-2">
                  <h3 className="text-white center">Prime Benefits</h3>
                  <img
                    src="/images/prime-badge.png"
                    alt="Prime Badge"
                    className="mt-2 w-106"
                  />
                  <a
                    href="https://example.com/prime"
                    className="block transition duration-300 ease-in-out text-blue-600 mt-2 hover:text-white"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        {/* Login Dropdown */}
        <div className="relative group">
          {/* Login Dropdown */}
          <Link href="/login">
            <button
            className="btn btn-primary bg-gray-600 px-3 rounded-lg py-2 text-l mx-2 group-hover:bg-gray-700 group-hover:text-white"
        
          >
            Login
          </button></Link>

          {showLoginOptions && (
            <div
              className="absolute right-0 mt-2 bg-indigo text-white shadow-lg rounded-lg w-40 transition duration-300 ease-in-out"
              onMouseEnter={handlePopupMouseEnter}
              onMouseLeave={handlePopupMouseLeave}
            >
              <div className="p-2">
                <p className="mb-2 ">Login as:</p>
                <a
                  href="#"
                  className="block  hover:text-gray-200 transition duration-300 ease-in-out"
                >
                  User
                </a>
                <a
                  href="#"
                  className="block  hover:text-gray-200 transition duration-300 ease-in-out"
                >
                  Retailer
                </a>
                <a
                  href="#"
                  className="block  hover:text-gray-200 transition duration-300 ease-in-out"
                >
                  Administrator
                </a>
                <div className="border-t border-gray-300 mt-2 pt-2">
                  <a
                    href="#"
                    className="block text-blue-600 hover:underline transition duration-300 ease-in-out"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <button className="btn btn-primary text-grey bg-gray-600 px-3 hover:bg-white hover:text-black transition duration-300 ease-in-out rounded-lg py-2 text-l mx-2">
          Post Property
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
