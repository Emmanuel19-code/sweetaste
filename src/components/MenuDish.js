import React from "react";
import Popular from "./Popular";
import Discount from "./Discount";

const MenuDish = ({ dish, description, image_url, tags, discount, price }) => {
  return (
    <div className="bg-white p-2 m-2 rounded-lg w-60 h-56">
      <div className="relative">
        <img
          src="images/waffle.jpg"
          alt=""
          className="w-full h-24 rounded-xl"
        />
        <div className="top-1 right-3 absolute flex flex-row items-center">
          {tags?.includes("popular") && <Popular />}
          {tags?.includes("discount") && <Discount percent={discount} />}
        </div>
      </div>
      <div className="mt-2  h-24 flex flex-col justify-between">
        <div>
          <h4 className="text-xs font-roboto font-medium">{dish}</h4>
          <p className="text-xs text-gray-500 ">
            {description?.length > 70
              ? description?.slice(0, 70) + "..."
              : description}
          </p>
        </div>

        <div className="flex flex-row  justify-between items-center">
          <div className="flex flex-row">
            {discount ? (
              <p className="text-xl align-super mr-1 text-teal-800 font-bold font-nunito">
                <sup className="text-xxs">₵</sup>
                {price - price * (parseInt(discount) / 100)}
              </p>
            ) : (
              <p className="text-xl align-super mr-1 text-teal-800 font-bold font-nunito">
                <sup className="text-xxs">₵</sup>
                {price}
              </p>
            )}

            <div className=" relative">
              <sub className="absolute top-5">
                <p className="text-md text-slate-400 font-bold line-through font-nunito">
                  <sup className="text-xxs">₵</sup>
                  {price}
                </p>
              </sub>
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <div className="bg-gray-300 w-6 ml-2 mr-2 h-6 rounded-full flex justify-center items-center">
              <img src="images/minus.png" alt="" className="w-4" />
            </div>
            <p className="text-xs text-teal-700 font-bold font-roboto">1</p>
            <div className="bg-teal-700 mr-2 ml-2 w-6 h-6 flex rounded-full justify-center items-center">
              <img
                src="images/plus.png"
                alt=""
                className="w-4 filter brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDish;
