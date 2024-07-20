import React, { useState, useRef } from "react";
import menuBtn from "/menu-btn.svg";
import phoneIcon from "/phoneIcon.svg";
import logo from "/logo.svg";
import backArrow from "/backArrow.svg";
import whatsApp from "/whatsApp.svg";
import whatsappiOS from "/whatsappiOS.svg";

const PhoneInputAndOTP = () => {
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const inputRefs = useRef([]);

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOTPChange = (e, index) => {
    const { value } = e.target;
    if (value.length === 1 && index < 4) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleOTPKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
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
          className="bg-blue-900 p-4 w-[50px] h-[50px] rounded-full ms-4"
        />
      </div>

      <div className="flex flex-col flex-grow items-center justify-center">
        <div className="flex items-center justify-center">
          <h1 className="text-xl text-center font-semibold text-[#244284]">
            Enter the 5-digit code sent to you at
          </h1>
        </div>

        <div className="flex space-x-4 p-4 items-center justify-center">
          <input
            type="number"
            value={countryCode}
            onChange={handleCountryCodeChange}
            placeholder="+30"
            className="w-1/3 px-2 py-4 border border-gray-200 bg-gray-200 text-black rounded font-semibold text-xl focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="690 876 5060"
            className="w-2/3 px-2 py-4 border border-gray-200 bg-gray-200 text-black rounded font-semibold text-xl focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="flex items-center justify-center mx-4">
          <h1 className="font-bold text-sm text-red-600 text-center">
            *Make sure you entered the correct country code.
          </h1>
        </div>

        <div className="flex space-x-2 justify-between my-8">
          {[...Array(5)].map((_, index) => (
            <input
              key={index}
              type="number"
              maxLength="0"
              className="w-12 h-12 text-center text-lg border border-gray-200 bg-gray-200 text-black font-semibold rounded focus:outline-none focus:ring-2 focus:ring-black"
              onChange={(e) => handleOTPChange(e, index)}
              onKeyDown={(e) => handleOTPKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>

        {/* <div className="flex items-center justify-start mx-4">
          <p className="font-normal text-base">
            I havent received a code <span>0:08</span>
          </p>
        </div>
      </div> */}

        <div className="flex flex-col justify-center items-center px-4">
          <img
            src={whatsappiOS}
            alt="Whatsapp Logo"
            className="w-[50px] h-[50px] my-2"
          />
          <p className="font-semibold text-base text-center">
            If you have not received your SMS verification, please click on the
            whatsapp button to message us directly
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhoneInputAndOTP;
