/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
// import { Navbar } from "@material-tailwind/react";
import Navber from "../components/Header/Navber/Navber";
// Navber
const Layouts = () => {
  return (
    <div className="lg:max-w-[1440px]  mx-auto">
      <div className="z-50">
        <Navber></Navber>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Layouts;
