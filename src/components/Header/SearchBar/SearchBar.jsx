/* eslint-disable no-unused-vars */
import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form>
        <div className="flex">
          <div className="relative w-[40%] mx-auto mt-10">
            <input
              type="search"
              className="block p-4 w-full z-20 text-sm text-gray-100 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:border-blue-500 rounded-l-lg"
              placeholder="Search here..."
              required=""
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-4 px-10 text-sm font-medium h-full text-white bg-red-600 rounded-r-lg border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-600 dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-600"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
