/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DonationCard from "./DonationCard";

const DonationData = ({ donationData }) => {
  console.log(donationData);
  return (
    <div>
      <h1>Donation Data</h1>
      {donationData?.map((dd) => (
        <DonationCard key={dd.id}></DonationCard>
      ))}
    </div>
  );
};

export default DonationData;
