import React from "react";
import "../customstyles/scrollbar.css";
import MenuOrder from "../components/MenuOrder";
import FoodMenu from "../components/Menu";
const Menu = () => {
  return (
    <div className="bg-gray-100 flex flex-row h-screen">
      <div className="flex-1 flex flex-col p-2">
        {/*menu display */}
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <img src="images/arrowBack.png" alt="" className="w-4" />
            </div>

            <h4 className="font-medium text-lg ml-2">Choose Menu</h4>
          </div>
          <div class="flex flex-row px-1 items-center w-72 bg-gray-50 m-2 rounded-lg">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2 w-full z-20 text-sm text-gray-900 rounded-lg bg-gray-50 "
              placeholder="Search a name,order,or etc..."
              required
            />

            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search</span>
          </div>
        </div>
        <div className="flex flex-row">
          <div
            className="custom-scroll   overflow-y-scroll"
            style={{ maxHeight: "calc(100vh - 60px)" }}
          >
            <FoodMenu />
            <FoodMenu />
            <FoodMenu />
            <FoodMenu />
            <FoodMenu />
            <FoodMenu />
            <FoodMenu />
            <FoodMenu />
            <FoodMenu />
            <FoodMenu />
            <FoodMenu />
            <FoodMenu />
            <FoodMenu />
            <FoodMenu />
            <FoodMenu />
            <FoodMenu />
            <FoodMenu />
            <FoodMenu />
          </div>
          <div>
            
          </div>
        </div>
      </div>
      <div className="bg-white w-72 flex flex-col p-2">
        {/*order ticket details */}
        <div>
          <div className="border-b p-1">
            <div className="flex flex-row justify-between  items-center">
              <div className="mb-2">
                <h4 className="font-bold">Ariel Hikmat</h4>
                <p className="text-xs text-gray-500 font-medium">
                  Order #925 / Dine In
                </p>
              </div>
              <h4 className="bg-teal-700 w-10 h-10 text-center flex items-center justify-center rounded-lg text-white">
                A4
              </h4>
            </div>
            <p className="text-xs mb-2 text-gray-500">
              Wed,July 12,2023 <span></span>06:12PM
            </p>
          </div>
          <h4 className="font-medium text-lg">Order Detail</h4>
        </div>
        <div className="flex-1 h-72 custom-scroll overflow-y-scroll">
          <MenuOrder />
          <MenuOrder />
          <MenuOrder />
          <MenuOrder />
          <MenuOrder />
          <MenuOrder />
          <MenuOrder />
          <MenuOrder />
          <MenuOrder />
          <MenuOrder />
        </div>
        <div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              Items <span>(5)</span>
            </p>
            <p className="font-roboto font-medium">$73.79</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              Tax <span>(5%)</span>
            </p>
            <p className="font-roboto font-medium">$73.79</p>
          </div>
          <div className="bg-yellow-300 flex mt-4 mb-2 flex-row justify-between rounded-lg p-2">
            <p className="font-medium font-roboto">$87.34</p>
            <div>
              <p className="text-md font-roboto font-semibold">Proceed Order</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
