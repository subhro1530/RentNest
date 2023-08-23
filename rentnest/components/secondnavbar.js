import React, { useState } from "react";
import Link from "next/link";

function SecondNavbar() {
  const [showBuyDropdown, setShowBuyDropdown] = useState(false);
  const [showRentDropdown, setShowRentDropdown] = useState(false);
  const [showSellDropdown, setShowSellDropdown] = useState(false);
  const [showHelpDropdown, setShowHelpDropdown] = useState(false);

  const handleBuyHover = () => {
    setShowBuyDropdown(true);
  };

  const handleBuyLeave = () => {
    setShowBuyDropdown(false);
  };

  const handleRentHover = () => {
    setShowRentDropdown(true);
  };

  const handleRentLeave = () => {
    setShowRentDropdown(false);
  };

  const handleSellHover = () => {
    setShowSellDropdown(true);
  };

  const handleSellLeave = () => {
    setShowSellDropdown(false);
  };

  const handleHelpHover = () => {
    setShowHelpDropdown(true);
  };

  const handleHelpLeave = () => {
    setShowHelpDropdown(false);
  };

  return (
    <nav className="bg-blue-100 text-indigo p-1 flex justify-between items-center">
      <div className="flex items-center">
        {/* Buy Dropdown */}
        <div
          className="relative group mr-6"
          onMouseEnter={handleBuyHover}
          onMouseLeave={handleBuyLeave}
        >
          <button className="btn btn-primary px-3 py-2 text-l">
            Buy <i className="fas fa-chevron-down ml-1 w-2 text-indigo "></i>
          </button>
          {showBuyDropdown && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-lg w-96 transition duration-300 ease-in-out">
              <div className="flex p-4 text-center space-x-4 border-b border-gray-500 pb-2">
                {/* Parent element wrapping columns */}
                <div className="w-1/3 ">
                  {/* Popular Choices */}
                  <h2 className="font-semibold mb-2 border-b border-gray-200 pb-1">
                    Popular Choices
                  </h2>
                  <ul className="space-y-1">
                    <li>
                      <a href="#" className="py-4">Ready to move</a>
                    </li>
                    <li>
                      <a href="#">Owner properties</a>
                    </li>
                    <li>
                      <a href="#">Budget Homes</a>
                    </li>
                    <li>
                      <a href="#">Newly Launched</a>
                    </li>
                  </ul>
                </div>

                {/* Property Types */}
                <div className="w-1/3">
                  <h2 className="font-semibold mb-2 border-b border-gray-200 pb-1">
                    Property Types
                  </h2>
                  <ul className="space-y-1">
                    {/* Replace with dynamic state */}
                    <li>
                      <a href="#">Flats in State</a>
                    </li>
                    <li>
                      <a href="#">Houses for sale in State</a>
                    </li>
                    {/* ... Add more property types */}
                  </ul>
                </div>

                {/* Budget */}
                <div className="w-1/3">
                  <h2 className="font-semibold mb-2 border-b border-gray-200 pb-1">
                    Budget
                  </h2>
                  <ul className="space-y-1">
                    <li>
                      <a href="#">Below 10 Lacs</a>
                    </li>
                    <li>
                      <a href="#">10-20 Lacs</a>
                    </li>
                    <li>
                      <a href="#">20-30 Lacs</a>
                    </li>
                    {/* ... Add more budget ranges */}
                  </ul>
                </div>

                {/* Explore */}
                <div className="w-1/3">
                  <h2 className="font-semibold mb-2 border-b border-gray-200 pb-1">
                    Explore
                  </h2>
                  <ul className="space-y-1">
                    <li>
                      <a href="#">Explore State</a>
                    </li>
                    {/* ... Add more explore options */}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Rent Dropdown */}
        <div
          className="relative group mr-6"
          onMouseEnter={handleRentHover}
          onMouseLeave={handleRentLeave}
        >
          <button className="btn btn-primary px-3 py-2 text-l">
            Rent <i className="fas fa-chevron-down ml-1 w-2 text-indigo "></i>
          </button>
          {showRentDropdown && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-lg w-36 transition duration-300 ease-in-out">
              {/* Rent Dropdown Content */}
            </div>
          )}
        </div>

        {/* Sell Dropdown */}
        <div
          className="relative group mr-6"
          onMouseEnter={handleSellHover}
          onMouseLeave={handleSellLeave}
        >
          <button className="btn btn-primary px-3 py-2 text-l">
            Sell <i className="fas fa-chevron-down ml-1 w-2 text-indigo "></i>
          </button>
          {showSellDropdown && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-lg w-36 transition duration-300 ease-in-out">
              {/* Sell Dropdown Content */}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center">
        {/* Help Dropdown */}
        <div
          className="relative group mr-6"
          onMouseEnter={handleHelpHover}
          onMouseLeave={handleHelpLeave}
        >
          <button className="btn btn-primary px-3 py-2 text-l">
            Help <i className="fas fa-chevron-down ml-1 w-2 text-indigo "></i>
          </button>
          {showHelpDropdown && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-lg w-36 transition duration-300 ease-in-out">
              {/* Help Dropdown Content */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default SecondNavbar;
