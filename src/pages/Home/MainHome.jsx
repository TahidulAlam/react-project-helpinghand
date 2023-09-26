/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import DonationData from "../../components/Donations/DonationData";
import Banner from "../../components/Header/Banner/Banner";

const MainHome = () => {
  const donationData = useLoaderData();
  //   console.log(campaingData);
  return (
    <div>
      <div className="relative">
        <Banner></Banner>
      </div>
      <h1>This is main home route</h1>
      <DonationData donationData={donationData}></DonationData>
    </div>
  );
};

export default MainHome;
