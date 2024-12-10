import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const System = () => {
  return (
    <div className="flex flex-row h-screen ">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default System;
