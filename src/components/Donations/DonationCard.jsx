/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const DonationCard = ({ data }) => {
  const {
    id,
    category,
    category_bg,
    card_bg,
    text_and_button_bg,
    title,
    description,
    picture,
  } = data || {};
  return (
    <div>
      <Link to={`/donation_page/${id}`}>
        <div
          style={{ backgroundColor: `${card_bg}` }}
          className="max-w-sm m-auto border h-[350px] rounded-lg"
        >
          <a href="#">
            <img className="rounded-t-lg" src={picture} alt="" width="100%" />
          </a>
          <div className="p-5">
            <p
              className="rounded-lg w-24 px-4 font-semibold text-center"
              style={{
                backgroundColor: `${card_bg}`,
                color: `${category_bg}`,
              }}
            >
              {category}
            </p>
            <h5
              style={{ color: `${category_bg}` }}
              className="mb-2 text-2xl font-semibold tracking-tight "
            >
              {title}
            </h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationCard;
