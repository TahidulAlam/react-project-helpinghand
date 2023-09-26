/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <nav className="flex lg:justify-between justify-center mx-auto  flex-col lg:gap-0 gap-5 lg:flex-row items-center py-6 px-5">
        <Logo></Logo>
        <div className="">
          <ul className="flex gap-5 text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 underline text-lg"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donations"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 underline text-lg"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 underline text-lg"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
