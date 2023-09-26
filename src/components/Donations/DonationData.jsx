/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DonationCard from "./DonationCard";

const DonationData = ({ donationData, searchCards }) => {
  const searchCardData = [...searchCards];
  console.log(searchCardData);
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
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
