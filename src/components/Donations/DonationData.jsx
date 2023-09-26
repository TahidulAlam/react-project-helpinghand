/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DonationCard from "./DonationCard";

const DonationData = ({ donationData, searchCards }) => {
  const searchCardData = [...searchCards];
  console.log(searchCardData);
  return (
    <div>
      <div className="justify-center grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-4 gap-2 mt-5 m-auto">
        {searchCardData.length === 0
          ? donationData.map((data) => (
              <DonationCard key={data.id} data={data}></DonationCard>
            ))
          : searchCardData.map((data) => (
              <DonationCard key={data.id} data={data}></DonationCard>
            ))}
      </div>
    </div>
  );
};

export default DonationData;
