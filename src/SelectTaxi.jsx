import React, { useState, useEffect } from "react";
import menuBtn from "/menu-btn.svg";
import phoneIcon from "/phoneIcon.svg";
import logo from "/logo.svg";
import uberCar from "/uberCar.svg";
import uberVan from "/uberVan.svg";
import personIcon from "/personIcon.svg";
import walletIcon from "/walletIcon.svg";

import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";

const SelectTaxi = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const [markerRef, marker] = useMarkerRef();

  useEffect(() => {
    if (!marker) {
      return;
    }

    // do something with marker instance here
  }, [marker]);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const getButtonText = () => {
    switch (selectedItem) {
      case "item1":
        return "Book Economy";
      case "item2":
        return "Book Van";
      case "item3":
        return "Book Mini Bus";
      default:
        return "Select an Item";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        {/* wherever the page starts with a map the navbar doesnt have a bottom border */}
        <div className="flex items-center justify-between py-5 px-4">
          <div className="flex items-center">
            <img src={menuBtn} alt="Menu Button" className="mr-4" />
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex items-center">
            <img src={phoneIcon} alt="Phone Icon" />
            <div className="font-semibold text-sm ms-2">+30 215 215 4000</div>
          </div>
        </div>
      </nav>
      <div className="w-full h-[200px]">
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <Map
            zoom={12}
            center={{ lat: 53.54992, lng: 10.00678 }}
            disableDefaultUI={true}
          >
            <Marker
              ref={markerRef}
              position={{ lat: 53.54992, lng: 10.00678 }}
            />
          </Map>
        </APIProvider>
      </div>
      <div className="w-full mx-auto bg-white px-4 my-4 rounded-lg">
        <div className="space-y-4">
          <div
            className={`py-1 px-4 border-2 rounded-xl cursor-pointer flex items-center justify-between ${
              selectedItem === "item1"
                ? "border-[#264388]"
                : "border-transparent"
            }`}
            onClick={() => handleSelect("item1")}
          >
            <img src={uberCar} alt="Taxi Icon" className="w-[60px] h-[60px]" />
            <div className="-ml-5">
              <p className="text-[#264388] font-semibold text-xl">Economy</p>
              <div className="flex items-center justify-evenly">
                <img
                  src={personIcon}
                  alt="Person Icon"
                  className="w-[15px] h-[15px] mr-2"
                />
                <span className="text-base italic font-semibold">1 - 4</span>
              </div>
            </div>
            <p className="font-bold text-[#264388] text-2xl">€36</p>
          </div>
          <div
            className={`py-1 px-4 border-2 rounded-xl cursor-pointer flex items-center justify-between ${
              selectedItem === "item2"
                ? "border-[#264388]"
                : "border-transparent"
            }`}
            onClick={() => handleSelect("item2")}
          >
            <img src={uberVan} alt="Taxi Icon" className="w-[60px] h-[60px]" />
            <div className="-ml-5">
              <p className="text-[#264388] font-semibold text-xl">Van</p>
              <div className="flex items-center justify-center">
                <img
                  src={personIcon}
                  alt="Person Icon"
                  className="w-[15px] h-[15px] mr-2"
                />
                <span className="text-base italic font-semibold">1 - 4</span>
              </div>
            </div>
            <p className="font-bold text-[#264388] text-2xl">€45</p>
          </div>
          <div
            className={`py-1 px-4 border-2 rounded-xl cursor-pointer flex items-center justify-between ${
              selectedItem === "item3"
                ? "border-[#264388]"
                : "border-transparent"
            }`}
            onClick={() => handleSelect("item3")}
          >
            <img src={uberVan} alt="Taxi Icon" className="w-[60px] h-[60px]" />
            <div className="-ml-5">
              <p className="text-[#264388] font-semibold text-xl">Mini Bus</p>
              <div className="flex items-center justify-evenly">
                <img
                  src={personIcon}
                  alt="Person Icon"
                  className="w-[15px] h-[15px] mr-2"
                />
                <span className="text-base italic font-semibold">1 - 4</span>
              </div>
            </div>
            <p className="font-bold text-[#264388] text-2xl">€45</p>
          </div>
        </div>
      </div>

      <div className="flex flex-grow mt-4 items-center justify-center">
        <img
          src={walletIcon}
          alt="Wallet Icon"
          className="w-[25px] h-[25px] me-1"
        />
        <p className="text-black text-lg font-semibold">
          Card payment available with driver
        </p>
      </div>

      <div className="flex flex-grow items-end justify-center px-4 my-4">
        <button className="w-full bg-[#264388] text-white font-semibold text-2xl py-4 rounded-md">
          {getButtonText()}
        </button>
      </div>
    </div>
  );
};

export default SelectTaxi;
