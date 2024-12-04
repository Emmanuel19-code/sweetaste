import React from "react";

const PaymentList = () => {
  return (
    <div className="flex flex-row items-center m-2">
      <h4 className="bg-teal-700 w-10 h-10 text-center flex items-center justify-center rounded-lg text-white">
        A4
      </h4>
      <div className="ml-2 font-roboto flex-1 text-sm">
        <h4>Ariel Hikmat</h4>
        <p className="text-xs text-gray-400 font-roboto">Order #925</p>
      </div>
      <div className="">
        <div className="bg-yellow-400 p-2 rounded-md ml-5 flex flex-row justify-center items-center">
          <p className="text-xs ml-1 font-roboto">Pay Now</p>
          <img src="images/forward.png" alt="" className="w-4" />
        </div>
      </div>
    </div>
  );
};

export default PaymentList;
