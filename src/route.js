import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./screen/Dashboard";
import System from "./Layout/System";
import Orders from "./screen/Orders";
import Menu from "./screen/Menu";
import Table from "./screen/Table";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <System />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path:'table',
        element:<Table/>
      }
    ],
  },
  {
    path: "menu",
    element: <Menu />,
  },
]);
