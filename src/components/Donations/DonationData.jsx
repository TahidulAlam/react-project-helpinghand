/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DonationCard from "./DonationCard";

const DonationData = ({ donationData }) => {
  // console.log(donationData);
  return (
    <div>
      <h1>Donation Data</h1>
      {/* {donationData.map((data) => console.log(data))} */}
      <div className="grid grid-cols-4 gap-4">
        {donationData.map((data) => (
          <DonationCard key={data.id} data={data}></DonationCard>
        ))}
      </div>
    </div>
  );
};

export default DonationData;
