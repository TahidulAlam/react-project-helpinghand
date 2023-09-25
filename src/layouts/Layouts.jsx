/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../components/Header/Banner/Banner";

const Layouts = () => {
  return (
    <div className="max-w-[1440px]  mx-auto">
      <Banner></Banner>
      <Outlet></Outlet>
    </div>
  );
};

export default Layouts;
