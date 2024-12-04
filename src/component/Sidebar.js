import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white p-2 w-52 flex flex-col h-screen">
      <div className=" p-2">
        <h4 className="font-bold text-green-700 text-lg">SweeTaste</h4>
      </div>
      <div className="flex flex-col mt-8 justify-between h-screen">
        <div className="flex-1  p-2 flex flex-col">
            <div className="flex flex-row items-center m-2">
                <img src="images/dashboard.png" alt="dashboard" className="w-6 h-6"/>
                <h4 className="ml-2 ">Dashboard</h4>
            </div>
            <div className="flex flex-row items-center m-2">
                <img src="images/new_menu.png" alt="dashboard" className="w-6 h-6"/>
                <h4 className="ml-2 ">Menu</h4>
            </div>
            <NavLink to={"/orders"} className={({isActive})=>isActive && 'bg-yellow-300 rounded-xl text-green-800 font-bold'}>
            <div className="flex flex-row items-center  p-1 m-2">
                <img src="images/order.png" alt="dashboard" className="w-6 h-6"/>
                <h4 className="ml-2 ">Orders</h4>
            </div>
            </NavLink>
            
            <div className="flex flex-row items-center m-2">
                <img src="images/table.png" alt="dashboard" className="w-6 h-6"/>
                <h4 className="ml-2 ">Table</h4>
            </div>
            <div className="flex flex-row items-center m-2">
                <img src="images/account.png" alt="dashboard" className="w-6 h-6"/>
                <h4 className="ml-2 ">Accounting</h4>
            </div>
            <div className="flex flex-row items-center m-2">
                <img src="images/settings.png" alt="dashboard" className="w-6 h-6"/>
                <h4 className="ml-2 ">Settings</h4>
            </div>
        </div>
        <div>
            {/**user logout */}
            <div>
                <div></div>
            </div>
            <div className="flex flex-row items-center">
                <img src="images/logout.png" alt="" className="w-4 h-4 mr-2"/>
                <p>Logout</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
