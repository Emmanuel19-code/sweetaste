import React from "react";
import TableView from "../components/TableView";
import "../customstyles/scrollbar.css";
const Table = () => {
  return (
    <div className=" ml-4 h-screen flex-1 bg-gray-100 p-2">
      <div className="bg-white p-2 rounded-lg">
        <h4 className="font-inter">Add Table</h4>
      </div>
      <div className="bg-white mt-2 p-1 rounded-lg">
        <div className="flex flex-row items-center">
          <p className={"bg-gray-100 border-teal-700 border w-20 text-center mr-2 px-4 py-2 text-xs rounded-2xl"}>
            1st Floor
          </p>
          <p className="bg-gray-100 w-20 text-center mr-2 px-4 py-2 text-xs rounded-2xl">
            1st Floor
          </p>
          <p className="bg-gray-100 w-20 text-center mr-2 px-4 py-2 text-xs rounded-2xl">
            1st Floor
          </p>
        </div>
      </div>
      <div
        className="bg-white p-2 mt-2 rounded overflow-y-scroll custom-scroll"
        style={{ maxHeight: "calc(100vh - 120px)" }}
      >
        <div className="border-b">
          <div className="flex flex-row items-center">
            <h4 className="font-inter  text-sm m-1 text-gray-500">
              2 Persons Table
            </h4>
            <div className="flex flex-row items-center">
              <div className="flex flex-row px-1 items-center">
                <div className="w-2 h-2 rounded-full mr-1 bg-gray-200"></div>
                <p className="text-inter text-sm">Available</p>
              </div>
              <div className="flex flex-row px-1 items-center">
                <div className="w-2 h-2 rounded-full mr-1 bg-yellow-200"></div>
                <p className="text-inter text-sm">Available</p>
              </div>
              <div className="flex flex-row px-1 items-center">
                <div className="w-2 h-2 rounded-full mr-1 bg-teal-700"></div>
                <p className="text-inter text-sm">Available</p>
              </div>
            </div>
          </div>

          <div className="mt-2 flex w-full flex-wrap flex-row mb-4">
            <TableView />
            <TableView />
            <div
              className={`w-44 h-44 bg-gray-100 p-2 flex flex-col justify-center items-center m-1 rounded-xl`}
            >
              <div className="flex flex-col justify-center items-center flex-1">
                <p className="bg-white  py-1 rounded-full w-16 text-center">
                  T -02
                </p>
                <p className="text-sm font-inter  mt-2">0 Guests</p>
              </div>
              <p className="text-sm font-inter text-gray-400">--:--</p>
            </div>

            <div
              className={`w-44 h-44 bg-gray-100 p-2 flex flex-col justify-center items-center m-1 rounded-xl`}
            >
              <div className="flex flex-col justify-center items-center flex-1">
                <p className="bg-white  py-1 rounded-full w-16 text-center">
                  T -04
                </p>
                <p className="text-sm font-inter  mt-2">0 Guests</p>
              </div>
              <p className="text-sm font-inter text-gray-400">--:--</p>
            </div>
            <TableView />
            <TableView />
          </div>
        </div>
        <div className="border-b">
          <h4 className="font-inter  text-sm m-1 text-gray-500">
            2 Persons Table
          </h4>
          <div className="mt-2 flex w-full flex-wrap flex-row mb-4">
             <div
              className={`w-44 h-44 bg-gray-100 p-2 flex flex-col justify-center items-center m-1 rounded-xl`}
            >
              <div className="flex flex-col justify-center items-center flex-1">
                <p className="bg-white  py-1 rounded-full w-16 text-center">
                  T -02
                </p>
                <p className="text-sm font-inter  mt-2">0 Guests</p>
              </div>
              <p className="text-sm font-inter text-gray-400">--:--</p>
            </div>
            <TableView />
             <div
              className={`w-44 h-44 bg-gray-100 p-2 flex flex-col justify-center items-center m-1 rounded-xl`}
            >
              <div className="flex flex-col justify-center items-center flex-1">
                <p className="bg-white  py-1 rounded-full w-16 text-center">
                  T -02
                </p>
                <p className="text-sm font-inter  mt-2">0 Guests</p>
              </div>
              <p className="text-sm font-inter text-gray-400">--:--</p>
            </div>
             <div
              className={`w-44 h-44 bg-gray-100 p-2 flex flex-col justify-center items-center m-1 rounded-xl`}
            >
              <div className="flex flex-col justify-center items-center flex-1">
                <p className="bg-white  py-1 rounded-full w-16 text-center">
                  T -02
                </p>
                <p className="text-sm font-inter  mt-2">0 Guests</p>
              </div>
              <p className="text-sm font-inter text-gray-400">--:--</p>
            </div>
            <div
              className={`w-44 h-44 bg-teal-50 p-2 flex flex-col justify-center items-center m-1 rounded-xl`}
            >
              <div
                className={`flex flex-col justify-center items-center flex-1`}
              >
                <p
                  className={`bg-teal-700 text-white py-1 rounded-full w-16 text-center`}
                >
                  T -01
                </p>
                <p className="text-sm font-inter  mt-2">Emma: 2 Guests</p>
              </div>
              <p className="text-sm font-inter text-gray-400">09:00 AM</p>
            </div>
             <div
              className={`w-44 h-44 bg-gray-100 p-2 flex flex-col justify-center items-center m-1 rounded-xl`}
            >
              <div className="flex flex-col justify-center items-center flex-1">
                <p className="bg-white  py-1 rounded-full w-16 text-center">
                  T -02
                </p>
                <p className="text-sm font-inter  mt-2">0 Guests</p>
              </div>
              <p className="text-sm font-inter text-gray-400">--:--</p>
            </div>
            
          </div>
        </div>
        <div className="border-b">
          <h4 className="font-inter  text-sm m-1 text-gray-500">
            2 Persons Table
          </h4>
          <div className="mt-2 flex flex-row mb-4  flex-wrap ">
             <div
              className={`w-44 h-44 bg-gray-100 p-2 flex flex-col justify-center items-center m-1 rounded-xl`}
            >
              <div className="flex flex-col justify-center items-center flex-1">
                <p className="bg-white  py-1 rounded-full w-16 text-center">
                  T -02
                </p>
                <p className="text-sm font-inter  mt-2">0 Guests</p>
              </div>
              <p className="text-sm font-inter text-gray-400">--:--</p>
            </div>
            <TableView />
            <div
              className={`w-44 h-44 bg-teal-50 p-2 flex flex-col justify-center items-center m-1 rounded-xl`}
            >
              <div
                className={`flex flex-col justify-center items-center flex-1`}
              >
                <p
                  className={`bg-teal-700 text-white py-1 rounded-full w-16 text-center`}
                >
                  T -01
                </p>
                <p className="text-sm font-inter  mt-2">Emma: 2 Guests</p>
              </div>
              <p className="text-sm font-inter text-gray-400">09:00 AM</p>
            </div>
            <div className="w-44 h-44 bg-slate-100 rounded-xl m-1"></div>
             <div
              className={`w-44 h-44 bg-gray-100 p-2 flex flex-col justify-center items-center m-1 rounded-xl`}
            >
              <div className="flex flex-col justify-center items-center flex-1">
                <p className="bg-white  py-1 rounded-full w-16 text-center">
                  T -02
                </p>
                <p className="text-sm font-inter  mt-2">0 Guests</p>
              </div>
              <p className="text-sm font-inter text-gray-400">--:--</p>
            </div>
            <TableView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
