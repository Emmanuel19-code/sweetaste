import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
const System = () => {
  return (
    <div className="flex flex-row flex-1">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default System;
