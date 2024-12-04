import React from "react";

const PopularDish = () => {
  return (
    <div className="m-1 flex  flex-row items-center">
      <h4 className="text-xs">01</h4>
      <div className="ml-3 border-b p-1">
        <div className="">
          <h4 className="text-xs">Scrambled Eggs With Toast</h4>
          <p className="text-xs text-slate-400">
            Orders: <span className="text-teal-700">23</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularDish;
