import React from "react";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import "./BarChart.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  maintainAspectRatio: true,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Score by week",
    },
  },
};
const labels = [
  "Week1",
  "Week2",
  "Week3",
  "Week4",
  "Week5",
  "Week6",
  "Week7",
  "Week8",
  "Week9",
  "Week10",
  "Week11",
  "Week12",
  "Week13",
  "Week14",
  "Week15",
  "Week16",
];
const dummyData = [8, 10, 4, 8, 2, 9, 10];
const dummyData2 = [12, 12, 11, 11, 12, 12, 12];
export const data = {
  labels,
  datasets: [
    {
      label: "Total Questions",
      data: dummyData2,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderWidth: 2,
    },
    {
      label: "Correct Answers",
      data: dummyData,
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 2,
    },
  ],
};

const BarChart = () => {
  return (
    <div>
      <div className="bar-chart">
        <Bar options={options} data={data} width={("200px", "400px")} />
      </div>
    </div>
  );
};

export default BarChart;
