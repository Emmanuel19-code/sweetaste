import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white w-60 flex flex-col ">
      <div className=" p-2">
        <h4 className="font-bold text-green-700 text-lg">SweeTaste</h4>
      </div>
      <div className="flex flex-col mt-8 justify-between h-screen">
        <div className="flex-1  p-2 flex flex-col">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive && "bg-yellow-500 rounded-xl text-green-800 font-bold"
            }
          >
            <div className="flex flex-row items-center m-2">
              <img
                src="images/dashboard.png"
                alt="dashboard"
                className="w-6 h-6"
              />
              <h4 className="ml-2 ">Dashboard</h4>
            </div>
          </NavLink>
          <NavLink
            to={"menu"}
            className={({ isActive }) =>
              isActive && "bg-yellow-300 rounded-xl text-green-800 font-bold"
            }
          >
            <div className="flex flex-row items-center m-2">
              <img
                src="images/new_menu.png"
                alt="dashboard"
                className="w-6 h-6"
              />
              <h4 className="ml-2 ">Menu</h4>
            </div>
          </NavLink>

          <NavLink
            to={"/orders"}
            className={({ isActive }) =>
              isActive && "bg-yellow-300 rounded-xl text-green-800 font-bold"
            }
          >
            <div className="flex flex-row items-center  p-1 m-2">
              <img src="images/order.png" alt="dashboard" className="w-6 h-6" />
              <h4 className="ml-2 ">Orders</h4>
            </div>
          </NavLink>
          <NavLink
            to={"/table"}
            className={({ isActive }) =>
              isActive && "bg-yellow-300 rounded-xl text-green-800 font-bold"
            }
          >
            <div className="flex flex-row items-center m-2">
              <img src="images/table.png" alt="dashboard" className="w-6 h-6" />
              <h4 className="ml-2 ">Table</h4>
            </div>
          </NavLink>

          <div className="flex flex-row items-center m-2">
            <img src="images/account.png" alt="dashboard" className="w-6 h-6" />
            <h4 className="ml-2 ">Accounting</h4>
          </div>
          <div className="flex flex-row items-center m-2">
            <img
              src="images/settings.png"
              alt="dashboard"
              className="w-6 h-6"
            />
            <h4 className="ml-2 ">Settings</h4>
          </div>
        </div>
        <div className="p-2 ml-2">
          {/**user logout */}
          <div className="flex flex-row">
            <img
              src="images/man.jpg"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h4 className="font-roboto text-sm font-medium">Emmanuel Kofi</h4>
              <p className="text-xs font-roboto text-slate-500">Waiter</p>
            </div>
          </div>
          <div className="flex flex-row mt-2 items-center">
            <img src="images/logout.png" alt="" className="w-4 h-4 " />
            <p className="ml-4 font-roboto text-gray-500 text-sm">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
