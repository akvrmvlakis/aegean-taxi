import React, { useState, useRef } from "react";
import menuBtn from "/menu-btn.svg";
import phoneIcon from "/phoneIcon.svg";
import logo from "/logo.svg";
import backArrow from "/backArrow.svg";
import buttonArrow from "/buttonArrow.svg";
import walletIcon from "/walletIcon.svg";
import whatsApp from "/whatsApp.svg";

const DetailsInput = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    countryCode: "",
    phoneNumber: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
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

      <div className="flex items-start justify-start my-4">
        <img
          src={backArrow}
          alt="Back Arrow"
          className="bg-blue-900 p-2 w-[50px] h-[50px] rounded-full ms-4"
        />
      </div>

      <div className="flex flex-col items-center justify-center flex-grow">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-4 rounded-lg"
        >
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              className="w-full px-2 py-4 border border-gray-200 bg-gray-200 text-black rounded font-semibold text-xl"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Enter Surname"
              className="w-full px-2 py-4 border border-gray-200 bg-gray-200 text-black rounded font-semibold text-xl"
              required
            />
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/3">
              <input
                type="text"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                placeholder="+30"
                className="w-full px-2 py-4 border border-gray-200 bg-gray-200 text-black rounded font-semibold text-xl"
                required
              />
            </div>
            <div className="w-2/3">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-2 py-4 border border-gray-200 bg-gray-200 text-black rounded font-semibold text-xl"
                required
              />
            </div>
          </div>

          <p className="text-sm text-red-600 font-semibold flex items-center justify-center">
            *Make sure you entered the correct country code
          </p>

          <div className="flex items-center justify-center my-10">
            <img
              src={walletIcon}
              alt="Wallet Icon"
              className="w-[25px] h-[25px] me-1"
            />
            <p className="text-black text-lg font-semibold">
              Card payment available with driver
            </p>
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="form-checkbox h-12 w-12 text-blue-600 me-2"
                required
              />
              <span className="ml-2 text-gray-400 text-sm font-semibold leading-5">
                I agree to Aegean Taxi{" "}
                <span className="text-black">Terms and Conditions</span> and{" "}
                <span className="text-black">Privacy Policy</span>
              </span>
            </label>
          </div>
        </form>
      </div>

      <div className="flex items-end px-4 my-4">
        <button
          type="submit"
          className="w-full flex items-center justify-center relative bg-[#264388] text-white font-semibold text-xl py-4 rounded-md"
        >
          Request Code
          <img
            src={buttonArrow}
            alt="Button Arrow"
            className="w-[50px] h-[20px] absolute inset-y-0 right-0 my-auto me-5"
          />
        </button>
      </div>
    </div>
  );
};

export default DetailsInput;
