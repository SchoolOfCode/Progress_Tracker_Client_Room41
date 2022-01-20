import React, { useEffect, useState } from "react";
import DoughnutChart from "../DoughnutChart";
// import {
// 	Chart as ChartJS,
// 	CategoryScale,
// 	LinearScale,
// 	PointElement,
// 	LineElement,
// 	Title,
// 	Tooltip,
// 	Legend,
// } from 'chart.js'
// import {Line} from 'react-chartjs-2'
// import BarChart from '../BarChart'
import "./Display.css";
const url = process.env.REACT_APP_API_URL || "http://localhost:3005";

function Display({ userTable }) {
  const [progTable, setProgTable] = useState({});
  // const [chartData, setChartData] = useState({
  // 	data: {
  // 		labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  // 		datasets: [
  // 			{
  // 				label: 'Score',
  // 				data: ['5', '11', '8', '7', '9'],
  // 				backgroundColor: [
  // 					'#0099ff',
  // 					'#4292c8',
  // 					'#2f6081',
  // 					'#f6b93b',
  // 					'#e58e26',
  // 				],
  // 			},
  // 		],
  // 	},
  // })

  // setChartData()

  useEffect(() => {
    async function fetchProgressTable() {
      try {
        const response = await fetch(`${url}/progress`);
        const data = await response.json();
        console.log("progress table data: ", data);
        setProgTable(data);
        // console.log('progress table state: ', progTable)
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchProgressTable();
  }, []);

  // console.log("this is the user table", userTable);

  return (
    <div>
      <h1>Here is where the data will be displayed using reactChart</h1>
      <div className="chart">
        <DoughnutChart />
      </div>
    </div>
  );
}
// <BarChart />
// <Line data={chartData} />

export default Display;
