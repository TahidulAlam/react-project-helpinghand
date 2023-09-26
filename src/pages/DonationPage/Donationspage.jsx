/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationPage from "./DonationPage";

const Donationspage = () => {
  const [donationCampaign, setDonationCampaign] = useState({});
  const { id } = useParams();
  const donationSingleData = useLoaderData();
  useEffect(() => {
    const findDonationData = donationSingleData?.find((dsd) => dsd.id === id);
    setDonationCampaign(findDonationData);
  }, [id, donationSingleData]);

  return (
    <div>
      <DonationPage donationCampaign={donationCampaign}></DonationPage>
    </div>
  );
};

export default Donationspage;
