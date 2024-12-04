import React from "react";
import { LuDot } from "react-icons/lu";
import '../customstyles/scrollbar.css'
const Order = ({setShowPayment}) => {
  return (
    <div className="bg-white w-80 h-80 2xl:w-96 m-2 flex flex-col p-2 rounded-lg">
      <div className="flex flex-row items-center">
        <h4 className="bg-teal-700 w-10 h-10 text-center flex items-center justify-center rounded-lg text-white">
          A4
        </h4>
        <div className="ml-2 font-roboto flex-1 text-sm">
          <h4>Ariel Hikmat</h4>
          <p className="text-xs text-gray-400 font-roboto">
            Order #925 / Dine In
          </p>
        </div>
        <div className="">
          <div className="bg-cyan-100 py-0.5 rounded-md ml-5 flex flex-row justify-center items-center">
            <img src="images/doublecheck.png" alt="" className="w-4" />
            <p className="text-xs ml-1 font-roboto">Ready</p>
          </div>
          <div className="flex flex-row items-center">
            <LuDot className="text-green-400 " />
            <p className="text-xs text-gray-300">Ready to serve</p>
          </div>
        </div>
      </div>

      <div className="border-b flex flex-row justify-between mt-2 p-1">
        <p className="text-xs text-gray-500">Wed, July 12, 2023</p>
        <p className="text-xs text-gray-500">06:12 PM</p>
      </div>
      <div className="flex-1 mt-3 border-b  overflow-y-scroll custom-scroll">
        <div className="flex flex-row items-center justify-between">
          <h4 className="w-56 text-xs text-gray-400 font-roboto">Items</h4>
          <h4 className="text-gray-400 font-roboto text-xs">Qty</h4>
          <h4 className="text-gray-400 font-roboto text-xs">Items</h4>
        </div>
        <div className="flex flex-row mt-2 items-center justify-between">
          <p className="w-56 text-xs text-gray-700 font-roboto">Scrambled eggs</p>
          <p className="text-gray-700 font-roboto text-xs">1</p>
          <p className="text-gray-700 font-roboto text-xs"><span>$</span>16.99</p>
        </div>
        <div className="flex flex-row mt-2 items-center justify-between">
          <p className="w-56 text-xs text-gray-700 font-roboto">Scrambled eggs</p>
          <p className="text-gray-700 font-roboto text-xs">1</p>
          <p className="text-gray-700 font-roboto text-xs"><span>$</span>16.99</p>
        </div>
        <div className="flex flex-row mt-2 items-center justify-between">
          <p className="w-56 text-xs text-gray-700 font-roboto">Scrambled eggs</p>
          <p className="text-gray-700 font-roboto text-xs">1</p>
          <p className="text-gray-700 font-roboto text-xs"><span>$</span>16.99</p>
        </div>
        <div className="flex flex-row mt-2 items-center justify-between">
          <p className="w-56 text-xs text-gray-700 font-roboto">Scrambled eggs</p>
          <p className="text-gray-700 font-roboto text-xs">1</p>
          <p className="text-gray-700 font-roboto text-xs"><span>$</span>16.99</p>
        </div>
        <div className="flex flex-row mt-2 items-center justify-between">
          <p className="w-56 text-xs text-gray-700 font-roboto">Scrambled eggs</p>
          <p className="text-gray-700 font-roboto text-xs">1</p>
          <p className="text-gray-700 font-roboto text-xs"><span>$</span>16.99</p>
        </div>
        <div className="flex flex-row mt-2 items-center justify-between">
          <p className="w-56 text-xs text-gray-700 font-roboto">Scrambled eggs</p>
          <p className="text-gray-700 font-roboto text-xs">1</p>
          <p className="text-gray-700 font-roboto text-xs"><span>$</span>16.99</p>
        </div>
      </div>

      <div className="flex mt-2 flex-row justify-between items-center">
        <h4 className="text-sm font-roboto font-semibold">Total</h4>
        <p className="text-sm font-roboto font-semibold">$87.34</p>
      </div>
      <div className=""></div>
      <div className="flex flex-row justify-between mt-2">
        <button className="bg-blue-50 w-32 p-2 text-teal-600 font-semibold font-roboto text-sm rounded-lg">
          See Details
        </button>
        <button className="bg-yellow-400 font-roboto text-sm w-32 p-2 rounded-lg" onClick={()=>setShowPayment(true)}>
          Pay Bills
        </button>
      </div>
    </div>
  );
};

export default Order;
