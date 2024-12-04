import React from "react";

const CreateOrder = ({setCreateOrder}) => {
  return (
    <div className="fixed inset-0  bg-black flex items-center justify-center bg-opacity-50">
      <div className="bg-white rounded-lg h-96  w-96 2xl:w-1/3   2xl:h-3/4 p-4">
        <div className="flex flex-row items-center  justify-between">
          <h4 className="font-roboto font-bold text-lg">Payment</h4>
          <img src="images/circlex.png" alt="" className="w-8" onClick={()=>setCreateOrder(false)}/>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default CreateOrder;
