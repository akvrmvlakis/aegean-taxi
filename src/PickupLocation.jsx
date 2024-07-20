import React, { useState, useEffect } from "react";
import menuBtn from "/menu-btn.svg";
import phoneIcon from "/phoneIcon.svg";
import logo from "/logo.svg";

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
            className="pl-8 pr-8 py-3 border-2 border-[#244284] rounded font-bold focus:outline-none focus:border-blue-500 w-full"
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
        {/* Results div */}
        {results.length > 0 && (
          <div className="font-bold">
            {results.map((result, index) => (
              <div key={index} className="py-1">
                {result}
              </div>
            ))}
          </div>
        )}
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
