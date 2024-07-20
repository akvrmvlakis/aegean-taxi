import React, { useState, useEffect } from "react";
import menuBtn from "/menu-btn.svg";
import phoneIcon from "/phoneIcon.svg";
import logo from "/logo.svg";
import airportIcon from "/airportIcon.svg";
import portIcon from "/portIcon.svg";

const PickupLocation = () => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    // Update results based on input value
    // This is just a placeholder for demonstration
    if (event.target.value) {
      setResults([`${event.target.value}`]);
    } else {
      setResults([]);
    }
  };

  const handleClear = () => {
    setInputValue("");
    setResults([]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <div className="flex items-center justify-between py-5 px-4 border-b-4 border-[#1218241a]">
          <div className="flex items-center">
            <img src={menuBtn} alt="Menu Button" className="me-4" />
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex items-center">
            <img src={phoneIcon} alt="Phone Icon" />
            <div className="font-semibold text-sm ms-2">+30 215 215 4000</div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col space-y-4 relative px-4 my-4">
        <div className="relative flex items-center">
          {/* Square placeholder */}
          <div className="absolute left-0 flex items-center justify-center h-full w-6">
            <div className="w-3 h-3 bg-[#244284] ms-2"></div>
          </div>
          {/* Input field */}
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="pl-8 pr-8 py-3 border-2 border-[#244284] rounded font-semibold focus:outline-none focus:border-blue-500 w-full"
            placeholder="Enter pick up location"
          />
          {/* Clear button */}
          <button
            onClick={handleClear}
            className="absolute right-0 top-1/2 me-2 transform -translate-y-1/2 mr-2 bg-[#244284] text-white rounded-full w-[25px] h-[25px]"
          >
            X
          </button>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-row justify-start items-center my-2">
            <img
              src={airportIcon}
              alt="Airport Icon"
              className="w-[50px] h-[50px] me-5 bg-gray-200 rounded-full p-2"
            />
            <p className="font-semibold text-lg">Mykonos Airport (JMK)</p>
          </div>
          <div className="flex flex-row justify-start items-center my-2">
            <img
              src={portIcon}
              alt="Port Icon"
              className="w-[50px] h-[50px] me-5 bg-gray-200 rounded-full p-2"
            />
            <p className="font-semibold text-lg">Mykonos New Port (Tourlos)</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-end flex-grow px-4 my-4">
        <h1 className="font-bold text-2xl text-[#244284]">
          Select or type address
        </h1>
      </div>
    </div>
  );
};

export default PickupLocation;
