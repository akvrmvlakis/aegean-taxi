import menuBtn from "/menu-btn.svg";
import phoneIcon from "/phoneIcon.svg";
import logo from "/logo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import driversView from "/driversView.png";
import islandView from "/islandView.png";
import mobileView from "/mobileView.png";
import walletIcon from "/walletIcon.svg";
import nearbyDriversLg from "/nearbyDriversLg.png";
import uberIcon from "/uberIcon.svg";
import mapPin from "/mapPin.svg";
import appStore from "/appStore.svg";
import googlePlay from "/googlePlay.svg";

const BookingFlow = () => {
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
      <div className="swiper-container">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          autoHeight={true}
          //   pagination={{
          //     clickable: false,
          //   }}
          navigation={false}
          allowTouchMove={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="min-h-screen flex flex-col">
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
              <div className="flex items-center justify-center mx-4">
                <div className="block rounded-t-lg rounded-b-lg bg-[#016974]">
                  <img
                    src={nearbyDriversLg}
                    alt="Nearby Drivers Image"
                    className="w-full rounded-t-lg"
                  />
                  <div className="text-center h-[100px] flex flex-col justify-around my-2 items-center">
                    <p className="text-white font-semibold text-lg">
                      Cars available to book online 24/7
                    </p>
                    <p className="text-white font-semibold text-lg">
                      Instant booking & confirmation
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-grow items-center justify-center">
                <img
                  src={uberIcon}
                  alt="Wallet Icon"
                  className="w-[60px] h-[60px]"
                />
                <p className="text-black text-lg font-semibold">
                  Pre-book your return ride to avoid wait
                </p>
              </div>
              <div className="flex flex-col flex-grow items-center my-4 px-4">
                <button className="bg-[#E8E8E8] rounded-lg py-3 font-bold text-lg text-red-500 w-full mx-2">
                  Cancel Ride
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-screen flex flex-col">
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
              <div className="flex items-center justify-center mx-4">
                <div className="block rounded-t-lg rounded-b-lg bg-[#050950]">
                  <img
                    src={driversView}
                    alt="Nearby Drivers Image"
                    className="w-full rounded-t-lg"
                  />

                  <div className="text-center h-[100px] flex flex-col justify-around my-2 items-center">
                    <p className="text-white font-semibold text-lg">
                      3 categories of cars for all budgets
                    </p>
                    <p className="text-white font-semibold text-lg">
                      Pay with cash or credit card
                    </p>
                  </div>
                </div>
              </div>

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

              <div className="flex flex-col flex-grow items-center my-4 px-4">
                <button className="bg-[#E8E8E8] rounded-lg py-3 font-bold text-lg text-red-500 w-full mx-2">
                  Cancel Ride
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-screen flex flex-col">
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
              <div className="flex items-center justify-center mx-4">
                <div className="block rounded-t-lg rounded-b-lg bg-[#0711C4]">
                  <img
                    src={islandView}
                    alt="Island View Image"
                    className="w-full rounded-t-lg"
                  />
                  <div className="text-center h-[100px] flex flex-col justify-around my-2 items-center">
                    <p className="text-white font-semibold text-lg">
                      Available in all main islands & Athens
                    </p>
                    <p className="text-white font-semibold text-lg">
                      Port & Airport Transfers + Tours
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-grow items-center justify-center">
                <img
                  src={mapPin}
                  alt="Map Pin Icon"
                  className="w-[50px] h-[50px]"
                />
                <p className="text-black text-lg font-semibold">
                  Pre-book for all your destinations
                </p>
              </div>
              <div className="flex flex-col flex-grow items-center my-4 px-4">
                <button className="bg-[#E8E8E8] rounded-lg py-3 font-bold text-lg text-red-500 w-full mx-2">
                  Cancel Ride
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-screen flex flex-col">
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
              <div className="flex items-center justify-center mx-4">
                <div className="block rounded-t-lg rounded-b-lg bg-black">
                  <img
                    src={mobileView}
                    alt="Nearby Drivers Image"
                    className="w-full rounded-t-lg"
                  />
                  <div className="text-center h-[100px] flex flex-col justify-around my-2 items-center">
                    <p className="text-white font-semibold text-lg">
                      24/7 customer support
                    </p>
                    <p className="text-white font-semibold text-lg">
                      Book online/whatsapp/taxi app
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-grow items-center justify-center">
                <div className="flex flex-row items-center justify-center">
                  <img
                    src={appStore}
                    alt="App Store Icon"
                    className="w-[140px] h-[50px] mx-1"
                  />
                  <img
                    src={googlePlay}
                    alt="Wallet Icon"
                    className="w-[140px] h-[50px] mx-1"
                  />
                </div>
                <p className="text-black text-lg font-semibold">
                  Download the Aegean Taxi App
                </p>
              </div>
              <div className="flex flex-col flex-grow items-center my-4 px-4">
                <button className="bg-[#E8E8E8] rounded-lg py-3 font-bold text-lg text-red-500 w-full mx-2">
                  Cancel Ride
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BookingFlow;
