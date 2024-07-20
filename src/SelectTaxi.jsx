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
  // Google maps conf
  const [markerRef, marker] = useMarkerRef();
  useEffect(() => {
    if (!marker) {
      return;
    }
    // do something with marker instance here
  }, [marker]);
  // Google maps conf end

  const [selectedItem, setSelectedItem] = useState("item1");

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const getButtonText = () => {
    switch (selectedItem) {
      case "item1":
        return "Confirm Economy";
      case "item2":
        return "Confirm Van";
      case "item3":
        return "Confirm Mini Bus";
      default:
        return "Select an Item";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        {/* wherever the page starts with a map the navbar shouldn't have a bottom border */}
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
      <div className="flex items-center justify-center">
        <p className="text-xl font-semibold mt-4 text-[#264388]">
          Choose a trip
        </p>
      </div>
      <div className="w-full mx-auto bg-white px-4 my-4 rounded-2xl">
        <div className="space-y-4">
          <div
            className={`py-1 px-4 border-[3px] rounded-2xl cursor-pointer flex items-center justify-between ${
              selectedItem === "item1"
                ? "border-[#264388]"
                : "border-transparent"
            }`}
            onClick={() => handleSelect("item1")}
          >
            <div className="flex flex-row items-center justify-start">
              <img
                src={uberCar}
                alt="Taxi Icon"
                className="w-[50px] h-[50px] mr-2"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-start">
                  <p className="text-[#264388] font-bold text-lg mx-1">
                    Economy
                  </p>
                  <img
                    src={personIcon}
                    alt="Person Icon"
                    className="w-[15px] h-[15px] mr-1"
                  />
                  <span className="text-base font-normal">4</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-sm mx-1 font-semibold">
                    <span>15:25</span>
                  </p>
                  <p className="text-sm mx-1 font-semibold">
                    <span>3 mins away</span>
                  </p>
                </div>
              </div>
            </div>
            <p className="font-bold text-[#264388] text-2xl">€36</p>
          </div>
          <div
            className={`py-1 px-4 border-[3px] rounded-2xl cursor-pointer flex items-center justify-between ${
              selectedItem === "item2"
                ? "border-[#264388]"
                : "border-transparent"
            }`}
            onClick={() => handleSelect("item2")}
          >
            <div className="flex flex-row items-center justify-start">
              <img
                src={uberVan}
                alt="Taxi Icon"
                className="w-[50px] h-[50px] mr-2"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-start">
                  <p className="text-[#264388] font-bold text-lg mx-1">Van</p>
                  <img
                    src={personIcon}
                    alt="Person Icon"
                    className="w-[15px] h-[15px] mr-1"
                  />
                  <span className="text-base font-normal">7</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-sm mx-1 font-semibold">
                    <span>15:25</span>
                  </p>
                  <p className="text-sm mx-1 font-semibold">
                    <span>3 mins away</span>
                  </p>
                </div>
              </div>
            </div>
            <p className="font-bold text-[#264388] text-2xl">€36</p>
          </div>
          <div
            className={`py-1 px-4 border-[3px] rounded-2xl cursor-pointer flex items-center justify-between ${
              selectedItem === "item3"
                ? "border-[#264388]"
                : "border-transparent"
            }`}
            onClick={() => handleSelect("item3")}
          >
            <div className="flex flex-row items-center justify-start">
              <img
                src={uberVan}
                alt="Taxi Icon"
                className="w-[50px] h-[50px] mr-2"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-start">
                  <p className="text-[#264388] font-bold text-lg mx-1">
                    Mini Bus
                  </p>
                  <img
                    src={personIcon}
                    alt="Person Icon"
                    className="w-[15px] h-[15px] mr-1"
                  />
                  <span className="text-base font-normal">12</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-sm mx-1 font-semibold">
                    <span>15:25</span>
                  </p>
                  <p className="text-sm mx-1 font-semibold">
                    <span>3 mins away</span>
                  </p>
                </div>
              </div>
            </div>
            <p className="font-bold text-[#264388] text-2xl">€36</p>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-grow mt-4 items-center justify-center">
        <img
          src={walletIcon}
          alt="Wallet Icon"
          className="w-[25px] h-[25px] me-1"
        />
        <p className="text-black text-base font-semibold">
          Card payment available with driver
        </p>
      </div> */}

      <div className="flex flex-col flex-grow items-center justify-center">
        <img
          src={walletIcon}
          alt="Wallet Icon"
          className="w-[30px] h-[30px] my-2"
        />
        <p className="text-black text-lg font-semibold">
          Card payment available with driver
        </p>
      </div>

      <div className="flex items-end justify-center px-4 my-4">
        <button className="w-full bg-[#264388] text-white font-semibold text-xl py-4 rounded-md">
          {getButtonText()}
        </button>
      </div>
    </div>
  );
};

export default SelectTaxi;
