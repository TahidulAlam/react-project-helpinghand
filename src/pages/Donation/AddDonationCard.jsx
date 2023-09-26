/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const AddDonationCard = ({ donateDetails }) => {
  console.log(donateDetails);
  const {
    id,
    category,
    category_bg,
    description,
    picture,
    price,
    title,
    card_bg,
  } = donateDetails || {};
  return (
    <div className="lg:w-[100%] w-[95%] mx-auto">
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-[40%] w-[100%]">
          <img
            src={picture}
            alt=""
            className="lg:h-[200px] lg:w-[auto] w-[100%]"
          />
        </div>
        <div
          className="p-3 lg:w-[60%] w-[100%] flex flex-col items-start gap-1"
          style={{ backgroundColor: `${card_bg}` }}
        >
          <h1 className="text-lg" style={{ color: `${category_bg}` }}>
            {category}
          </h1>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <h1 style={{ color: `${category_bg}` }} className="font-bold text-xl">
            ${price}
          </h1>

          <Link to={`/donation_page/${id}`}>
            <button
              className="mt-2 px-3 py-1 rounded-md text-white font-semibold"
              style={{ backgroundColor: `${category_bg}` }}
            >
              view details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddDonationCard;
