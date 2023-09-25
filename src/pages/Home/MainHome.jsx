/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import DonationData from "../../components/Donations/DonationData";

const MainHome = () => {
  const campaingData = useLoaderData();
  //   console.log(campaingData);
  return (
    <div>
      <h1>This is main home route</h1>
      <DonationData donationData={campaingData}></DonationData>
    </div>
  );
};

export default MainHome;
