import React from "react";

const Popular = () => {
  return (
    <div className="bg-violet-600 flex flex-row items-center  rounded-lg px-2  ">
      <img
        src="images/star.png"
        alt=""
        className="w-3 filter brightness-0 invert mr-1"
      />
      <p className="text-xs text-white font-nunito text-xxs font-medium">
        Popular
      </p>
    </div>
  );
};

export default Popular;
