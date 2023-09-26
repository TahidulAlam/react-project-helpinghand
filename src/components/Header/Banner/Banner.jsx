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
          className="lg:w-[100%] w-[100%] lg:h-[600px] h-[200px] relative opacity-5 "
          src="../../../../public/banner.png"
          alt=""
        />
      </div>
      <div className="absolute top-0 left-0 w-full z-50">
        <div className="text-center lg:mt-52 mt-16">
          <h1 className="lg:text-6xl text-xl font-bold">
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
