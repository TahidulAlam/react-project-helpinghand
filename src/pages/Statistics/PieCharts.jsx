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
      <ResponsiveContainer width={400} height={400}>
        <PieChart width={500} height={500} className="font-semibold text-2xl">
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={140}
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" height={36} iconSize={20} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieCharts;
