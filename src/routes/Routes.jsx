/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Donations from "../pages/Donation/Donations";
import Statistics from "../pages/Statistics/Statistics";
import Home from "../pages/home/Home";
import MainHome from "../pages/Home/MainHome";
import ErrorPage from "../pages/error/ErrorPage";
import Donationspage from "../pages/DonationPage/Donationspage";

const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <MainHome></MainHome>,
        loader: () => fetch("/donation-data.json"),
      },
      {
        path: "/donation_page/:id",
        element: <Donationspage></Donationspage>,
        loader: () => fetch("/donation-data.json"),
      },
      {
        path: "/donations",
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
