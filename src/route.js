import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./screen/Dashboard";
import System from "./Layout/System";
import Orders from "./screen/Orders";
import Menu from "./screen/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <System/>,
    children: [
      {
        path: "dashboard", 
        element: <Dashboard />
      },{
        path:"orders",
        element:<Orders/>
      },
      
    ]
  },
  {
    path:"menu",
    element:<Menu/>
  }
]);
