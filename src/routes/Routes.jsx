/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Donations from "../pages/Donation/Donations";
import Statistics from "../pages/Statistics/Statistics";
import Home from "../pages/home/Home";
import MainHome from "../pages/Home/MainHome";
const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",
        element: <MainHome></MainHome>,
        loader: () => fetch("/donation-data.json"),
      },
      //   {
      //     path: "/",
      //     element: <Home></Home>,
      //   },
      {
        path: "/donation",
        element: <Donations></Donations>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

export default myRoute;
