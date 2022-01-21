import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./DoughnutChart.css";
ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: ["Total", "Your Score"],
  datasets: [
    {
      label: "% Score",
      data: [30, 70],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(75, 192, 192, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(75, 192, 192, 1)"],
      borderWidth: 2,
    },
  ],
};

function DoughnutChart() {
  return (
    <div>
      <Doughnut
        data={data}
        width={"30%"}
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Total % correct",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
}

export default DoughnutChart;
