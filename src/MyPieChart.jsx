import React from "react";
import { PieChart as RePieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];

const colors = ["#0088FE", "#00C49F", "#FFBB28"];

const MyPieChart = () => {
  return (
    <ResponsiveContainer height={170} width='100%'>
    <RePieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={70}
        fill="#8884d8"
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend layout="horizontal"/>
    </RePieChart>
    </ResponsiveContainer>
  );
};

export default MyPieChart;