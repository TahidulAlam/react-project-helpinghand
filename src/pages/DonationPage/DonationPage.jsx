/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const DonationPage = ({ donationCampaign }) => {
  const { id, category, category_bg, description, picture, price, title } =
    donationCampaign || {};

  const handleClick = () => {
    const donateArray = [];
    const addDonate = JSON.parse(localStorage.getItem("Donate"));
    if (!addDonate) {
      donateArray.push(donationCampaign);
      localStorage.setItem("Donate", JSON.stringify(donateArray));
      alert("Donate Successfully");
    } else {
      donateArray.push(...addDonate, donationCampaign);
      localStorage.setItem("Donate", JSON.stringify(donateArray));
      alert("Donate Successfully");
    }
  };
  return (
    <div>
      <div className="relative">
        <div>
          <img
            src={picture}
            alt=""
            style={{ width: "100%", height: "650px" }}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-[100%] bg-neutral-950 bg-opacity-70 p-10">
          <button
            onClick={() => handleClick()}
            className="bg-red-600 px-5 py-2 rounded-lg "
          >
            Donation ${price}
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold  p-3">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DonationPage;
