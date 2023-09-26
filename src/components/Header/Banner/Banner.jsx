/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
// import Navber from "../Navber/Navber";
import SearchBar from "../SearchBar/SearchBar";

const Banner = ({ handleSearch, handleOnChange }) => {
  return (
    <div className="">
      <div>
        <img
          className="w-[100%] h-[650px] relative opacity-5 "
          src="../../../../public/banner.png"
          alt=""
        />
      </div>
      <div className="absolute top-0 left-0 w-full z-50">
        <div className="text-center mt-52 ">
          <h1 className="text-6xl font-bold">
            I Grow By Helping People In Need
          </h1>
          <SearchBar
            handleSearch={handleSearch}
            handleOnChange={handleOnChange}
          ></SearchBar>
        </div>
      </div>
    </div>
  );
};

export default Banner;
