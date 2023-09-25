/* eslint-disable no-unused-vars */
import React from "react";
import Navber from "../Navber/Navber";
import SearchBar from "../SearchBar/SearchBar";

const Banner = () => {
  return (
    <div className="relative">
      <div>
        <img
          className="w-[100%] h-[600px] opacity-5"
          src="../../../../public/banner.png"
          alt=""
        />
      </div>
      <div className="absolute top-0 left-0 w-full">
        <div className="z-50">
          <Navber></Navber>
        </div>
        <div className="text-center mt-40">
          <h1 className="text-6xl font-bold">
            I Grow By Helping People In Need
          </h1>
          <SearchBar></SearchBar>
        </div>
      </div>
    </div>
  );
};

export default Banner;
