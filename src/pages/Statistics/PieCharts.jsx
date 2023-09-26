/* eslint-disable no-unused-vars */
import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const PieCharts = (totalDonation) => {
  console.log(totalDonation.totalDonation);
  const newDonation = totalDonation.totalDonation;
  const oldDonation = 100 - newDonation;
  const colors = ["#FF444A", "#00C49F"];
  const data01 = [
    { name: "Total Donation", value: oldDonation, fill: colors[0] },
    { name: "Your Donation", value: newDonation, fill: colors[1] },
  ];
  return (
    <div>
      <PieChart width={500} height={500} className="font-bold text-3xl">
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={150}
          label
        />
        <Tooltip />
      </PieChart>
      <div className="flex gap-4 justify-center items-center">
        <div>
          <h1 className="font-bold text-2xl text-[#FF444A]">
            Total Donation : {oldDonation}
          </h1>
        </div>
        <div>
          <h1 className="font-bold text-2xl text-[#00C49F]">
            Your Donation: {newDonation}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
