/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import swal from "sweetalert";

const DonationPage = ({ donationCampaign }) => {
  const { id, category, category_bg, description, picture, price, title } =
    donationCampaign || {};

  const handleClick = () => {
    const donateArray = [];
    const addDonate = JSON.parse(localStorage.getItem("Donate"));
    if (!addDonate) {
      donateArray.push(donationCampaign);
      localStorage.setItem("Donate", JSON.stringify(donateArray));
      swal("Good job!", "Donate Successfully!", "success");
    } else {
      donateArray.push(...addDonate, donationCampaign);
      localStorage.setItem("Donate", JSON.stringify(donateArray));
      swal("Good job!", "Donate Successfully!", "success");
    }
  };
  return (
    <div>
      <div className="relative">
        <div>
          <img
            className="lg:h-[650px] w-[100%] h-[280px]"
            src={picture}
            alt=""
            // style={{ width: "100%", height: "650px" }}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-[100%] bg-neutral-950 bg-opacity-70 lg:p-10 p-5">
          <button
            onClick={() => handleClick()}
            style={{ backgroundColor: `${category_bg}` }}
            className="px-5 py-2 rounded-sm text-white font-semibold"
          >
            Donation ${price}
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold  p-3">{title}</h1>
        <p className="p-3 text-base">{description}</p>
      </div>
    </div>
  );
};

export default DonationPage;
