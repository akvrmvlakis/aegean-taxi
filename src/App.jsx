import "./App.css";
import PhoneInputAndOTP from "./PhoneInput";
import DetailsInput from "./DetailsInput";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import logo from "/logo.svg";
import menuBtn from "/menu-btn.svg";
import phoneIcon from "/phoneIcon.svg";
import mykonos from "/mykonos.svg";
import santorini from "/santorini.svg";
import rhodes from "/rhodes.svg";
import corfu from "/corfu.svg";
import kos from "/kos.svg";
import milos from "/milos.svg";
import paros from "/paros.svg";
import naxos from "/naxos.svg";
import kea from "/kea.svg";
import crete from "/crete.svg";
import athens from "/athens.svg";
import car from "/car.svg";
import map from "/map.png";
import uberIcon from "/uberIcon.svg";
import phoneDevice from "/phoneDevice.svg";
import arrow from "/arrow.svg";
import calendarIcon from "/calendarIcon.svg";
import personIcon from "/personIcon.svg";
import greenTick from "/greenTick.svg";
import nearbyDrivers from "/nearbyDrivers.png";
import nearbyDriversLg from "/nearbyDriversLg.png";
import walletIcon from "/walletIcon.svg";
import telephoneIcon from "/telephoneIcon.svg";
import whatsappVector from "/whatsappVector.svg";

function App() {
  // Google maps conf
  const position = {
    lat: 37.4447181,
    lng: 25.3254909,
  };

  return (
    <>
      {/* component start */}
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
        <div className="text-center">
          <h1 className="font-bold text-2xl leading-[56px]">
            Book a Taxi online 24/7
          </h1>
          <p className="font-normal text-xl">Select a location to begin</p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-2 gap-4 px-4">
            <div className="col-span-1">
              <div className="h-[90px] w-full flex relative bg-[#E8E8E8] rounded-xl justify-end">
                <p className="text-[#121824] absolute bottom-0 left-0 font-bold ps-3 pb-2 text-sm">
                  Mykonos
                </p>
                <img
                  src={mykonos}
                  alt="Mykonos"
                  width={85}
                  height={66}
                  className="px-3 flex items-center"
                />
                <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-1/2 rounded-full mx-auto -mt-3 py-1">
                  <div className="flex items-center justify-around px-2">
                    <img
                      src={car}
                      alt="Car Icon"
                      width={12}
                      height={12}
                      className="-mb-[2px]"
                    />
                    <p className="text-center text-xxs font-semibold">
                      63 online
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="h-[90px] w-full flex relative bg-[#E8E8E8] rounded-xl justify-end">
                <p className="text-[#121824] absolute bottom-0 left-0 font-bold ps-3 pb-2 text-sm">
                  Santorini
                </p>
                <img
                  src={santorini}
                  alt="Santorini"
                  width={75}
                  height={56}
                  className="px-3 flex items-center"
                />
                <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-1/2 rounded-full mx-auto -mt-3 py-1">
                  <div className="flex items-center justify-around px-2">
                    <img
                      src={car}
                      alt="Car Icon"
                      width={12}
                      height={12}
                      className="-mb-[2px]"
                    />
                    <p className="text-center text-xxs font-semibold">
                      33 online
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 px-4 mt-6">
            <div className="col-span-1">
              <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
                <img
                  src={rhodes}
                  alt="Rhodes"
                  width={35}
                  height={16}
                  className="absolute inset-0 mx-auto my-auto"
                />
                <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                  Rhodes
                </p>
                <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                  <div className="flex items-center justify-around px-2">
                    <img
                      src={car}
                      alt="Car Icon"
                      width={12}
                      height={12}
                      className="-mb-[2px]"
                    />
                    <p className="text-center text-xxs font-semibold">
                      63 online
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
                <img
                  src={corfu}
                  alt="Corfu"
                  width={35}
                  height={16}
                  className="absolute inset-0 mx-auto my-auto"
                />
                <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                  Corfu
                </p>
                <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                  <div className="flex items-center justify-around px-2">
                    <img
                      src={car}
                      alt="Car Icon"
                      width={12}
                      height={12}
                      className="-mb-[2px]"
                    />
                    <p className="text-center text-xxs font-semibold">
                      63 online
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
                <img
                  src={kos}
                  alt="Kos"
                  width={45}
                  height={26}
                  className="absolute inset-0 mx-auto my-auto"
                />
                <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                  Kos
                </p>
                <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                  <div className="flex items-center justify-around px-2">
                    <img
                      src={car}
                      alt="Car Icon"
                      width={12}
                      height={12}
                      className="-mb-[2px]"
                    />
                    <p className="text-center text-xxs font-semibold">
                      63 online
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 px-4 mt-6">
            <div className="col-span-1">
              <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
                <img
                  src={milos}
                  alt="Milos"
                  width={45}
                  height={26}
                  className="absolute inset-0 mx-auto my-auto"
                />
                <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                  Milos
                </p>
                <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                  <div className="flex items-center justify-around px-2">
                    <img
                      src={car}
                      alt="Car Icon"
                      width={12}
                      height={12}
                      className="-mb-[2px]"
                    />
                    <p className="text-center text-xxs font-semibold">
                      63 online
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
                <img
                  src={paros}
                  alt="Paros"
                  width={35}
                  height={16}
                  className="absolute inset-0 mx-auto my-auto"
                />
                <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                  Paros
                </p>
                <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                  <div className="flex items-center justify-around px-2">
                    <img
                      src={car}
                      alt="Car Icon"
                      width={12}
                      height={12}
                      className="-mb-[2px]"
                    />
                    <p className="text-center text-xxs font-semibold">
                      63 online
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
                <img
                  src={naxos}
                  alt="Naxos"
                  width={35}
                  height={16}
                  className="absolute inset-0 mx-auto my-auto"
                />
                <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                  Naxos
                </p>
                <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                  <div className="flex items-center justify-around px-2">
                    <img
                      src={car}
                      alt="Car Icon"
                      width={12}
                      height={12}
                      className="-mb-[2px]"
                    />
                    <p className="text-center text-xxs font-semibold">
                      63 online
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 px-4 mt-6">
            <div className="col-span-1">
              <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
                <img
                  src={kea}
                  alt="Kea"
                  width={35}
                  height={16}
                  className="absolute inset-0 mx-auto my-auto"
                />
                <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                  Kea
                </p>
                <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                  <div className="flex items-center justify-around px-2">
                    <img
                      src={car}
                      alt="Car Icon"
                      width={12}
                      height={12}
                      className="-mb-[2px]"
                    />
                    <p className="text-center text-xxs font-semibold">
                      63 online
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
                <img
                  src={crete}
                  alt="Crete"
                  width={65}
                  height={46}
                  className="absolute inset-0 mx-auto my-auto"
                />
                <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                  Crete
                </p>
                <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                  <div className="flex items-center justify-around px-2">
                    <img
                      src={car}
                      alt="Car Icon"
                      width={12}
                      height={12}
                      className="-mb-[2px]"
                    />
                    <p className="text-center text-xxs font-semibold">
                      63 online
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
                <img
                  src={athens}
                  alt="Athens"
                  width={35}
                  height={16}
                  className="absolute inset-0 mx-auto my-auto"
                />
                <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                  Athens
                </p>
                <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                  <div className="flex items-center justify-around px-2">
                    <img
                      src={car}
                      alt="Car Icon"
                      width={12}
                      height={12}
                      className="-mb-[2px]"
                    />
                    <p className="text-center text-xxs font-semibold">
                      63 online
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* component end */}
      {/* component start */}
      <div className="flex flex-col min-h-screen">
        <nav>
          <div className="flex items-center justify-between py-5 px-4">
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

        <div className="w-full h-[200px]">
          <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <Map
              defaultCenter={position}
              defaultZoom={12}
              disableDefaultUI={true}
            >
              <Marker position={position} />
            </Map>
          </APIProvider>
        </div>
        <div className="flex items-center justify-center mt-2">
          <h1 className="text-2xl font-bold text-black">
            Driver is on the Way!
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-xl font-semibold text-gray-500">
            (Pick up in 3 min)
          </p>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow mx-4">
          <div className="flex items-center justify-center mt-2">
            <img
              src={uberIcon}
              alt="Taxi Icon"
              className="w-[100px] h-[70px]"
            />
          </div>
          <div className="flex items-center justify-center mt-3">
            <p className="text-lg font-bold uppercase border-2 border-gray-300 px-2 py-1">
              EMK 4053
            </p>
          </div>
          <div className="flex items-center justify-center mt-3">
            <p className="text-lg font-semibold">Black Mercedes V Class</p>
          </div>
          <div className="flex items-center justify-center mt-3">
            <p className="text-2xl font-bold text-blue-800">Dimitris</p>
          </div>

          <div className="flex items-center justify-between w-full mt-3">
            <img
              src={telephoneIcon}
              alt=" Device Icon"
              className="w-[50px] h-[50px] me-3"
            />
            <p className="text-2xl font-bold text-blue-800">+30 690 987 3040</p>
            <img
              src={whatsappVector}
              alt="Whatsapp Icon"
              className="w-[50px] h-[50px] ms-3"
            />
          </div>
        </div>
        <div className="flex items-end justify-between mt-16 mb-4 px-2">
          <button className="bg-[#E8E8E8] rounded-lg py-3 font-bold text-lg text-red-500 w-1/2 mx-2">
            Cancel Ride
          </button>
          <button className="bg-black rounded-lg py-3 font-semibold text-lg text-white w-1/2 mx-2">
            Track live
          </button>
        </div>
      </div>
      {/* component end */}
      {/* component start */}
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
        <div className="flex items-center justify-center mt-6">
          <h1 className="font-bold text-2xl text-[#FF001F]">
            Reservation Received!
          </h1>
        </div>
        <div className="flex items-center justify-between mx-4 pt-8 pb-6 relative border-b-4 border-[#1218241a]">
          <div className="border-l-4 border-[#47C69C] min-h-[70px] ps-2 flex flex-col justify-between">
            <p className="text-black text-base font-bold">Pick up</p>
            <p className="text-black font-normal text-xs">
              Athens Intl Airport
            </p>
          </div>
          <div>
            <img src={arrow} alt="Arrow" className="w-[100px] h-[15px]" />
          </div>
          <div className="border-l-4 border-black min-h-[70px] ps-2 flex flex-col justify-between">
            <p className="text-black text-base font-bold">Drop off</p>
            <p className="text-black font-normal text-xs">
              Athens Intl Airport
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="flex items-center">
            <img
              src={calendarIcon}
              alt="Calendar Icon"
              className="w-[25px] h-[25px] me-2"
            />
            <p className="text-base font-semibold">Tue 21st Jan @ 21:00</p>
          </div>
        </div>
        <div className="flex items-center justify-center mx-4 mt-6 pb-4 border-b-4 border-[#1218241a]">
          <div className="flex items-center">
            <img
              src={personIcon}
              alt="Person Icon"
              className="w-[15px] h-[15px] me-4"
            />
            <p className="text-base font-semibold">John Stamatiadis</p>
          </div>
        </div>
        <div className="flex flex-grow items-end mt-6 mb-4 px-2">
          <button className="bg-[#E8E8E8] rounded-lg py-3 font-bold text-lg text-red-500 w-1/2 mx-2">
            Cancel Ride
          </button>
          <button className="bg-black rounded-lg py-3 font-semibold text-lg text-white w-1/2 mx-2">
            Edit details
          </button>
        </div>
      </div>
      {/* component end */}
      {/* component start */}
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
        <div className="flex items-center justify-center mt-6">
          <h1 className="font-bold text-2xl text-[#00CA82]">
            Reservation Confirmed!
          </h1>
          <img
            src={greenTick}
            alt="Green Tick"
            className="w-[25px] h-[25px] ms-3"
          />
        </div>
        <div className="flex items-center justify-between mx-4 pt-8 pb-6 relative border-b-4 border-[#1218241a]">
          <div className="border-l-4 border-[#47C69C] min-h-[70px] ps-2 flex flex-col justify-between">
            <p className="text-black text-base font-bold">Pick up</p>
            <p className="text-black font-normal text-xs">
              Athens International Airport
            </p>
          </div>
          <div>
            <img src={arrow} alt="Arrow" className="w-[100px] h-[15px]" />
          </div>
          <div className="border-l-4 border-black min-h-[70px] ps-2 flex flex-col justify-between">
            <p className="text-black text-base font-bold">Drop off</p>
            <p className="text-black font-normal text-xs">
              Athens International Airport
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="flex items-center">
            <img
              src={calendarIcon}
              alt="Calendar Icon"
              className="w-[25px] h-[25px] me-2"
            />
            <p className="text-base font-semibold">Tue 21st Jan @ 21:00</p>
          </div>
        </div>
        <div className="flex items-center justify-center mx-4 mt-6 pb-4 border-b-4 border-[#1218241a]">
          <div className="flex items-center">
            <img
              src={personIcon}
              alt="Person Icon"
              className="w-[15px] h-[15px] me-4"
            />
            <p className="text-base font-semibold">John Stamatiadis</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow mx-4">
          <div className="flex items-center justify-center">
            <img
              src={uberIcon}
              alt="Taxi Icon"
              className="w-[100px] h-[70px]"
            />
          </div>
          <div className="flex items-center justify-center mt-3">
            <p className="text-lg font-bold uppercase border-2 border-gray-300 px-2 py-1">
              EMK 4053
            </p>
          </div>
          <div className="flex items-center justify-center mt-3">
            <p className="text-lg font-semibold">Black Mercedes V Class</p>
          </div>
          <div className="flex items-center justify-center mt-3">
            <p className="text-2xl font-bold text-blue-800">Dimitris</p>
          </div>

          <div className="flex items-center justify-between w-full mt-3">
            <img
              src={telephoneIcon}
              alt=" Device Icon"
              className="w-[50px] h-[50px] me-3"
            />
            <p className="text-2xl font-bold text-blue-800">+30 690 987 3040</p>
            <img
              src={whatsappVector}
              alt="Whatsapp Icon"
              className="w-[50px] h-[50px] ms-3"
            />
          </div>
        </div>
        <div className="flex items-end my-4 px-2">
          <button className="bg-[#E8E8E8] rounded-lg py-3 font-bold text-lg text-red-500 w-1/2 mx-2">
            Cancel Ride
          </button>
          <button className="bg-black rounded-lg py-3 font-semibold text-lg text-white w-1/2 mx-2">
            Edit details
          </button>
        </div>
      </div>
      {/* component end */}
      {/* component start */}
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
        <div className="flex items-center justify-center mt-8">
          <h1 className="font-bold text-2xl text-[#244284]">
            Looking for nearby drivers
          </h1>
        </div>
        <div className="flex items center justify-center mx-2">
          <hr className="my-8 mx-2 w-full border-b-4 border-[#316FE0]" />
          <hr className="my-8 mx-2 w-full border-b-4 border-[#EDEDED]" />
          <hr className="my-8 mx-2 w-full border-b-4 border-[#EDEDED]" />
          <hr className="my-8 mx-2 w-full border-b-4 border-[#EDEDED]" />
        </div>
        <div className="flex items-center justify-center mt-8 mx-4">
          <div className="block rounded-t-lg rounded-b-lg bg-[#016974]">
            <img
              src={nearbyDriversLg}
              alt="Nearby Drivers Image"
              className="w-full rounded-t-lg"
            />
            <div className="text-center h-[150px] flex flex-col justify-center items-center">
              <p className="text-white font-semibold text-lg pb-2">
                Cars available to book online 24/7
              </p>
              <p className="text-white font-semibold text-lg pt-2">
                Instant booking & confirmation
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-grow items-end mt-6 mb-4 px-2">
          <button className="bg-[#E8E8E8] rounded-lg py-3 font-bold text-lg text-red-500 w-full mx-2">
            Cancel Ride
          </button>
        </div>
      </div>
      {/* component end */}
      {/* component start */}
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
        <div className="flex items-center justify-center mt-8">
          <h1 className="font-bold text-2xl text-[#244284]">
            Connecting you to a driver
          </h1>
        </div>
        <div className="flex items center justify-center mx-2">
          <hr className="my-8 mx-2  w-full border-b-4 border-[#316FE0]" />
          <hr className="my-8 mx-2 w-full border-b-4 border-[#316FE0]" />
          <hr className="my-8 mx-2 w-full border-b-4 border-[#EDEDED]" />
          <hr className="my-8 mx-2 w-full border-b-4 border-[#EDEDED]" />
        </div>
        <div className="flex items-center justify-center mt-8 mx-4">
          <div className="block rounded-t-lg rounded-b-lg bg-[#050950]">
            <img
              src={nearbyDriversLg}
              alt="Nearby Drivers Image"
              className="w-full rounded-t-lg"
            />

            <div className="text-center h-[150px] flex flex-col justify-center items-center">
              <p className="text-white font-semibold text-lg pb-2">
                Cars available to book online 24/7
              </p>
              <p className="text-white font-semibold text-lg pt-2">
                Instant booking & confirmation
              </p>
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

        <div className="flex items-end justify-center my-4 px-2">
          <button className="bg-[#E8E8E8] rounded-lg py-3 font-bold text-lg text-red-500 w-full mx-2">
            Cancel Ride
          </button>
        </div>
      </div>
      {/* component end */}
      {/* component start */}
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
        <div className="flex items-center justify-center mt-8">
          <h1 className="font-bold text-2xl text-[#244284]">
            Getting driver details
          </h1>
        </div>
        <div className="flex items center justify-center mx-2">
          <hr className="my-8 mx-2 w-full border-b-4 border-[#316FE0]" />
          <hr className="my-8 mx-2 w-full border-b-4 border-[#316FE0]" />
          <hr className="my-8 mx-2 w-full border-b-4 border-[#316FE0]" />
          <hr className="my-8 mx-2 w-full border-b-4 border-[#EDEDED]" />
        </div>
        <div className="flex items-center justify-center mt-8 mx-4">
          <div className="block rounded-t-lg rounded-b-lg bg-[#0711C4]">
            <img
              src={nearbyDriversLg}
              alt="Nearby Drivers Image"
              className="w-full rounded-t-lg"
            />
            <div className="text-center h-[150px] flex flex-col justify-center items-center">
              <p className="text-white font-semibold text-lg pb-2">
                Available in all main islands & Athens
              </p>
              <p className="text-white font-semibold text-lg pt-2">
                Port & Airport Transfers
              </p>
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
        <div className="flex items-end justify-center my-4 px-2">
          <button className="bg-[#E8E8E8] rounded-lg py-3 font-bold text-lg text-red-500 w-full mx-2">
            Cancel Ride
          </button>
        </div>
      </div>
      {/* component end */}
      {/* component start */}
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
        <div className="flex items-center justify-center mt-8">
          <h1 className="font-bold text-2xl text-[#244284]">
            Confirming your booking
          </h1>
        </div>
        <div className="flex items center justify-center mx-2">
          <hr className="my-8 mx-2 w-full border-b-4 border-[#316FE0]" />
          <hr className="my-8 mx-2 w-full border-b-4 border-[#316FE0]" />
          <hr className="my-8 mx-2 w-full border-b-4 border-[#316FE0]" />
          <hr className="my-8 mx-2 w-full border-b-4 border-[#316FE0]" />
        </div>
        <div className="flex items-center justify-center mt-8 mx-4">
          <div className="block rounded-t-lg rounded-b-lg bg-black">
            <img
              src={nearbyDriversLg}
              alt="Nearby Drivers Image"
              className="w-full rounded-t-lg"
            />
            <div className="text-center h-[150px] flex flex-col justify-center items-center">
              <p className="text-white font-semibold text-lg pb-2">
                24/7 customer support
              </p>
              <p className="text-white font-semibold text-lg pt-2">
                Port & Airport Transfers
              </p>
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
        <div className="flex items-end justify-center my-4 px-2">
          <button className="bg-[#E8E8E8] rounded-lg py-3 font-bold text-lg text-red-500 w-full mx-2">
            Cancel Ride
          </button>
        </div>
      </div>
      {/* component end */}
      {/* component start */}
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
        <div className="flex items-center justify-center mt-6">
          <h1 className="font-bold text-2xl text-[#FF001F]">
            Reservation Received!
          </h1>
        </div>
        <div className="flex items-center justify-between mx-4 pt-8 pb-6 relative border-b-4 border-[#1218241a]">
          <div className="border-l-4 border-[#47C69C] min-h-[70px] ps-2 flex flex-col justify-between">
            <p className="text-black text-base font-bold">Pick up</p>
            <p className="text-black font-normal text-xs">
              Athens International Airport
            </p>
          </div>
          <div>
            <img src={arrow} alt="Arrow" className="w-[100px] h-[15px]" />
          </div>
          <div className="border-l-4 border-black min-h-[70px] ps-2 flex flex-col justify-between">
            <p className="text-black text-base font-bold">Drop off</p>
            <p className="text-black font-normal text-xs">
              Athens International Airport
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="flex items-center">
            <img
              src={calendarIcon}
              alt="Calendar Icon"
              className="w-[25px] h-[25px] me-2"
            />
            <p className="text-base font-semibold">Tue 21st Jan @ 21:00</p>
          </div>
        </div>
        <div className="flex items-center justify-center mx-4 mt-6 pb-4 border-b-4 border-[#1218241a]">
          <div className="flex items-center">
            <img
              src={personIcon}
              alt="Person Icon"
              className="w-[15px] h-[15px] me-4"
            />
            <p className="text-base font-semibold">John Stamatiadis</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between flex-grow mx-4 my-4">
          <div className="flex items-center justify-center">
            <h1 className="font-bold text-xl text-center text-[#FF001F]">
              This is NOT a booking confirmation!
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="font-semibold text-[18px] text-center">
              Once a driver accepts your ride, this section will be updated with
              driver details
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="font-semibold text-[22px] text-center">
              Please check again using the link provided on the SMS
            </p>
          </div>
        </div>
        <div className="flex items-end my-4 px-2">
          <button className="bg-[#E8E8E8] rounded-lg py-3 font-bold text-lg text-red-500 w-1/2 mx-2">
            Cancel Ride
          </button>
          <button className="bg-black rounded-lg py-3 font-semibold text-lg text-white w-1/2 mx-2">
            Edit details
          </button>
        </div>
      </div>
      {/* component end */}
      {/* component start */}
      <PhoneInputAndOTP />
      {/* component end */}
      {/* component start */}
      <DetailsInput />
      {/* component end */}
    </>
  );
}

export default App;
