import React from "react";

const OrderList = ({status}) => {
  return (
    <div className="flex flex-row items-center m-2">
      <h4 className="bg-teal-700 w-10 h-10 text-center flex items-center justify-center rounded-lg text-white">
        A4
      </h4>
      <div className="ml-2 font-roboto flex-1 text-sm">
        <h4>Ariel Hikmat</h4>
        <p className="text-xs text-gray-400 font-roboto">
          Order #925 / Dine In
        </p>
      </div>
      {
        status === 'ready'?<div className="">
        <div className="bg-cyan-100 py-0.5 rounded-md ml-5 flex flex-row justify-center items-center">
          <img src="images/doublecheck.png" alt="" className="w-4" />
          <p className="text-xs ml-1 font-roboto">Ready</p>
        </div>
        <div className="flex flex-row items-center">
          <p className="text-xs text-gray-300">Ready to serve</p>
        </div>
      </div>
      :
      status === 'in_progress' ?
      <div className="">
        <div className="bg-yellow-200 px-2 py-0.5 rounded-md ml-5 flex flex-row justify-center items-center">
          <img src="images/doublecheck.png" alt="" className="w-4" />
          <p className="text-xs ml-1 font-roboto">In Progress</p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <p className="text-xs text-gray-300">In the Kitchen</p>
        </div>
      </div>
      :
      <div className="">
        <div className="bg-blue-100 px-2 py-0.5 rounded-md ml-5 flex flex-row justify-center items-center">
          <img src="images/doublecheck.png" alt="" className="w-4" />
          <p className="text-xs ml-1 font-roboto">Completed</p>
        </div>
        <div className="flex flex-row items-center">
          <p className="text-xs text-gray-300">Waiting For Payment</p>
        </div>
      </div>
      }
      
    </div>
  );
};

export default OrderList;
