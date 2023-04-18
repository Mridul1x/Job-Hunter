import React from "react";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import { PieChart, Pie, Label, Tooltip, Cell } from "recharts";

const Statistics = () => {
  const marks = [
    {
      assignment: "Assignment 1",
      marks: 60,
    },
    {
      assignment: "Assignment 2",
      marks: 59,
    },
    {
      assignment: "Assignment 3",
      marks: 60,
    },
    {
      assignment: "Assignment 4",
      marks: 60,
    },
    {
      assignment: "Assignment 5",
      marks: 60,
    },
    {
      assignment: "Assignment 6",
      marks: 60,
    },
    {
      assignment: "Assignment 7",
      marks: 60,
    },
    {
      assignment: "Assignment 8",
      marks: 60,
    },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div>
      <HeaderBanner header="Statistics"></HeaderBanner>

      <div className="border-2 border-dashed  rounded-xl mt-6 border-indigo-500">
        <PieChart className="mx-auto" width={400} height={400}>
          <Pie
            dataKey="marks"
            data={marks}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
              const RADIAN = Math.PI / 180;
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  fill="#8884d8"
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {marks[index].assignment}
                </text>
              );
            }}
          >
            {marks.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                // fill={entry.assignment === "Assignment 2" ? "#FF8042" : "#8884d8"}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name, props) => [
              `${props.payload.marks}`,
              ` ${props.payload.assignment}`,
            ]}
          />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
