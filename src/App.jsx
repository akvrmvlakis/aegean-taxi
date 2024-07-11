import "./App.css";
import logo from "/logo.svg";
import menuBtn from "/menu-btn.svg";
import phoneIcon from "/phoneIcon.svg";
import mykonos from "/mykonos.svg";
import santorini from "/santorini.svg";
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
      <div className="text-center">
        <h1 className="font-bold text-2xl mt-3.5 leading-[56px]">
          Book a Taxi online 24/7
        </h1>
        <p className="font-normal text-xl">Select a location to begin</p>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 pt-12">
        <div className="col-span-1">
          <div className="h-[100px] w-full flex relative bg-[#E8E8E8] rounded-xl justify-between">
            <p className="text-[#121824] flex items-end font-bold ps-3 pb-3 text-sm">
              Mykonos
            </p>
            <img
              src={mykonos}
              alt="Mykonos"
              width={75}
              height={56}
              className="px-3 flex items-center"
            />
            <div className="bg-green-700 text-white absolute inset-x-0 top-0 w-1/2 rounded-full mx-auto -mt-2">
              <div className="flex items-center justify-between px-2">
                <img src={car} alt="Car Icon" width={12} height={12} />
                <p className="text-center text-xs font-semibold">63 online</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="h-[100px] w-full flex relative bg-[#E8E8E8] rounded-xl justify-between">
            <p className="text-[#121824] flex items-end font-bold ps-3 pb-3 text-sm">
              Santorini
            </p>
            <img
              src={santorini}
              alt="Santorini"
              width={75}
              height={56}
              className="px-3 flex items-center"
            />
            <div className="bg-green-700 text-white absolute inset-x-0 top-0 w-1/2 rounded-full mx-auto -mt-2">
              <div className="flex items-center justify-between px-2">
                <img src={car} alt="Car Icon" width={12} height={12} />
                <p className="text-center text-xs font-semibold">33 online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
