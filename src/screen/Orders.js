import React from "react";

const Orders = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div>
        <div className="flex flex-row items-center p-3 justify-between">
          <h4 className="text-xl font-semibold ">Orders</h4>
          <p>Wednesday, 03 December 2023</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="p-3 flex flex-row items-center">
            <div className="m-1 w-8 bg-white p-1 rounded">
              <h4 className="text-center">All</h4>
            </div>
            <div className="m-1 p-1 w-24 bg-white rounded-lg">
              <h4 className="text-center">On Process</h4>
            </div>
            <div className="m-1 p-1 w-24 bg-white rounded-lg">
              <h4 className="text-center">Completed</h4>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-white w-10 p-1.5 rounded-lg">
              <img src=" images/filter.png" alt="" className="w-6 h-6" />
            </div>
            <div class="flex flex-row items-center w-72 bg-gray-50 m-2 rounded-lg">
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
        </div>
      </div>
      
    </div>
  );
};

export default Orders;
