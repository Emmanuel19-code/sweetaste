import React from "react";

const Payment = ({ setShowPayment }) => {
  return (
    <div className="fixed inset-0  bg-black flex items-center justify-center bg-opacity-50">
      <div className="bg-white rounded-lg  w-1/2 2xl:w-1/3   2xl:h-3/4 p-4">
        <div className="flex flex-row items-center  justify-between">
          <h4 className="font-roboto font-bold text-lg">Payment</h4>
          <img
            src="images/circlex.png"
            alt=""
            className="w-8"
            onClick={() => setShowPayment(false)}
          />
        </div>
        <div className="flex flex-row 2xl:h-full  justify-between">
          {/*transaction details */}
          <div className=" w-1/2 m-1">
            <h4 className="text-xs mt-2 font-bold font-roboto">
              Customer Info
            </h4>
            <div className="flex mt-2 flex-row items-center">
              <h4 className="bg-teal-700 w-10 h-10 text-center flex items-center justify-center rounded-lg text-white">
                A4
              </h4>
              <div className="ml-2 font-roboto  text-sm">
                <h4 className="font-roboto font-semibold">Ariel Hikmat</h4>
                <p className="text-xs text-gray-400 font-roboto">
                  Order #925 / Dine In
                </p>
              </div>
              <div className="   ">
                <p className="text-xs text-gray-500">Wed, July 12, 2023</p>
                <p className="text-xs text-gray-500 text-end">06:12 PM</p>
              </div>
            </div>
            <div className="relative flex flex-col bg-slate-200 2xl:h-4/5 rounded-t-lg p-2 mt-3 h-80">
              <h4 className="text-xs font-bold font-roboto mt-1">
                Transaction Details
              </h4>
              <div className="flex-1">
                <div className="flex flex-row mt-2 items-center">
                    <div className="flex-1">
                        <p className="text-xs font-roboto text-slate-700">Scrambled Eggs With Toast</p>
                        <p className="text-xs font-roboto text-slate-700 font-bold">$16.99</p>
                    </div>
                    <p className="text-xs font-roboto text-slate-700">1x</p>
                </div>
                <div className="flex flex-row mt-2 items-center">
                    <div className="flex-1">
                        <p className="text-xs font-roboto text-slate-700">Scrambled Eggs With Toast</p>
                        <p className="text-xs font-roboto text-slate-700 font-bold">$16.99</p>
                    </div>
                    <p className="text-xs font-roboto text-slate-700">1x</p>
                </div>
                <div className="flex flex-row mt-2 items-center">
                    <div className="flex-1">
                        <p className="text-xs font-roboto text-slate-700">Scrambled Eggs With Toast</p>
                        <p className="text-xs font-roboto text-slate-700 font-bold">$16.99</p>
                    </div>
                    <p className="text-xs font-roboto text-slate-700">1x</p>
                </div>
                <div className="flex flex-row mt-2 items-center">
                    <div className="flex-1">
                        <p className="text-xs font-roboto text-slate-700">Scrambled Eggs With Toast</p>
                        <p className="text-xs font-roboto text-slate-700 font-bold">$16.99</p>
                    </div>
                    <p className="text-xs font-roboto text-slate-700">1x</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row mb-2 justify-between items-center">
                  <p className="text-xs text-slate-500">
                    Items <span>(5)</span>
                  </p>
                  <p className="text-xs text-slate-500">
                    $<span>73.79</span>
                  </p>
                </div>
                <div className="flex flex-row mb-2 2xl:mb-4 justify-between items-center">
                  <p className="text-xs text-slate-500">
                    Tax<span> (5%)</span>
                  </p>
                  <p className="text-xs text-slate-500">
                    $<span>3.65</span>
                  </p>
                </div>
                <div className="flex flex-row items-center mb-4 2xl:mb-6 justify-between">
                  <h4 className="font-roboto font-medium text-sm">Total</h4>
                  <p className="font-roboto font-medium text-sm">
                    <span>$</span>77.34
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-1.5  flex flex-row items-center">
                <div className="w-3 h-3 ml-1 rounded-full bg-white "></div>
                <div className="w-3 h-3 ml-1 rounded-full bg-white "></div>
                <div className="w-3 h-3 ml-1 rounded-full bg-white "></div>
                <div className="w-3 h-3 ml-1 rounded-full bg-white "></div>
                <div className="w-3 h-3 ml-1 rounded-full bg-white "></div>
                <div className="w-3 h-3 ml-1 rounded-full bg-white "></div>
                <div className="w-3 h-3 ml-1 rounded-full bg-white "></div>
                <div className="w-3 h-3 ml-1 rounded-full bg-white "></div>
                <div className="w-3 h-3 ml-1 rounded-full bg-white "></div>
                <div className="w-3 h-3 ml-1 rounded-full bg-white "></div>
                <div className="w-3 h-3 ml-1 rounded-full bg-white "></div>
                <div className="w-3 h-3 ml-1 rounded-full bg-white "></div>
                <div className="w-3 h-3 ml-1 rounded-full bg-white "></div>
                <div className="w-3 h-3 ml-1 rounded-full bg-white "></div>
                <div className="w-3 h-3 ml-1 rounded-full bg-white "></div>
                <div className="w-3 h-3 ml-1 rounded-full bg-white "></div>
                <div className="w-3 h-3 ml-1 rounded-full bg-white "></div>
                <div className="w-3 h-3 ml-1 2xl:hidden rounded-full bg-white "></div>
                <div className="w-3 h-3 2xl:hidden ml-1 rounded-full bg-white "></div>
              </div>
            </div>
          </div>
          {/**enter payment */}
          <div className=" w-1/2 m-1 2xl:h-5/6  flex flex-col ">
            <h4 className="font-roboto text-xs mt-2 font-bold">
              Select a payment method
            </h4>
            <select class="bg-gray-50 border w-full border-gray-300 outline-none text-gray-900 text-sm rounded-md  p-1">
              <option value="CA">Cash</option>
              <option value="FR">Master Card</option>
              <option value="DE">Visa Card</option>
            </select>
            <div className="mt-2 2xl:mt-6 flex justify-center items-center ">
              <p className="text-center text-lg font-bold font-roboto text-gray-300">
                $ <span className="text-black"><input type="text" className="outline-none w-20"/></span>
              </p>
            </div>
            <div className="flex flex-col justify-center mt-2 2xl:mt-4 items-center">
              <div className="flex flex-row ">
                <div className="bg-blue-100 w-12 px-2 rounded-md m-1">
                  <p className="text-teal-800 text-center font-bold ">$5</p>
                </div>
                <div className="bg-blue-100 w-12 px-2 rounded-md m-1">
                  <p className="text-teal-800 text-center font-bold ">$5</p>
                </div>
                <div className="bg-blue-100 w-12 px-2 rounded-md m-1">
                  <p className="text-teal-800 text-center font-bold ">$5</p>
                </div>
                <div className="bg-blue-100 w-12 px-2 rounded-md m-1">
                  <p className="text-teal-800 text-center font-bold ">$5</p>
                </div>
                <div className="bg-blue-100 w-12 px-2 rounded-md m-1">
                  <p className="text-teal-800 text-center font-bold ">$5</p>
                </div>
              </div>
            </div>
            <div className="2xl:h-5/6 flex-1 p-2">
              
            </div>
            <div className="flex justify-center 2xl:absolute 2xl:bottom-40">
              <button className="bg-yellow-500 w-72 p-2.5 rounded-md font-semibold text-xs font-roboto">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
