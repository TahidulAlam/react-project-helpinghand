/* eslint-disable no-unused-vars */
import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Sector,
} from "recharts";

const PieCharts = (totalDonation) => {
  console.log(totalDonation.totalDonation);
  const newDonation = totalDonation.totalDonation;
  const oldDonation = 100 - newDonation;
  const colors = ["#FF444A", "#00C49F"];
  const data = [
    { name: "Total Donation", value: oldDonation, fill: colors[0] },
    { name: "Your Donation", value: newDonation, fill: colors[1] },
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    newDonation,
    oldDonation,
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="center"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };
  return (
    <div>
      <PieChart width={500} height={500} className="font-semibold text-2xl">
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={180}
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <div className="flex gap-4 justify-center items-center">
        <div>
          <h1 className="font-bold text-2xl text-[#FF444A]">
            Total Donation :{" "}
            <span className=" bg-[#FF444A] px-10 ml-2 rounded-md"></span>
          </h1>
        </div>
        <div>
          <h1 className="font-bold text-2xl text-[#00C49F]">
            Your Donation:{" "}
            <span className="px-10 ml-2 rounded-md bg-[#00C49F]"></span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
