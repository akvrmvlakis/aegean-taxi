import "./App.css";
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

function App() {
  return (
    <>
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
      {/* first component start */}
      <div className="dvh-screen">
        <div className="text-center">
          <h1 className="font-bold text-2xl leading-[56px]">
            Book a Taxi online 24/7
          </h1>
          <p className="font-normal text-xl">Select a location to begin</p>
        </div>

        <div className="grid grid-cols-2 gap-4 px-4 pt-10">
          <div className="col-span-1">
            <div className="h-[90px] w-full flex relative bg-[#E8E8E8] rounded-xl justify-end">
              <p className="text-[#121824] absolute bottom-0 left-0 font-bold ps-3 pb-2 text-sm">
                Mykonos
              </p>
              <img
                src={mykonos}
                alt="Mykonos"
                width={75}
                height={56}
                className="px-3 flex items-center"
              />
              <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-1/2 rounded-full mx-auto -mt-3 py-1">
                <div className="flex items-center justify-between px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xs font-semibold">63 online</p>
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
                width={65}
                height={46}
                className="px-3 flex items-center"
              />
              <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-1/2 rounded-full mx-auto -mt-3 py-1">
                <div className="flex items-center justify-between px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xs font-semibold">33 online</p>
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
                <div className="flex items-center justify-between px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xs font-semibold">63 online</p>
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
                <div className="flex items-center justify-between px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xs font-semibold">63 online</p>
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
                <div className="flex items-center justify-between px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xs font-semibold">63 online</p>
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
                <div className="flex items-center justify-between px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xs font-semibold">63 online</p>
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
                <div className="flex items-center justify-between px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xs font-semibold">63 online</p>
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
                <div className="flex items-center justify-between px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xs font-semibold">63 online</p>
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
                <div className="flex items-center justify-between px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xs font-semibold">63 online</p>
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
                <div className="flex items-center justify-between px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xs font-semibold">63 online</p>
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
                <div className="flex items-center justify-between px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xs font-semibold">63 online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* first component end */}
      {/* second component start */}
    </>
  );
}

export default App;
