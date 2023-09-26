/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PieCharts from "./PieCharts";

const Statistics = () => {
  const [addDonationData, setAddDonationData] = useState([]);
  useEffect(() => {
    const addDonate = JSON.parse(localStorage.getItem("Donate"));
    if (addDonate) {
      setAddDonationData(addDonate);
    }
  }, []);

  const donationPers = addDonationData.length;
  const totalDonation = donationPers * 8.33;
  console.log(totalDonation);
  return (
    <div>
      <div className="flex justify-center items-center">
        <PieCharts totalDonation={totalDonation}></PieCharts>
      </div>
    </div>
  );
};

export default Statistics;
