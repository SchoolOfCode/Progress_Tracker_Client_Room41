import React from 'react'
import {Bar} from 'react-chartjs-2'
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
	responsive: true,
	plugins: {
	  legend: {
		position: "top",
	  },
	  title: {
		display: true,
		text: "Chart.js Line Chart",
	  },
	},
	scales: {
	  yAxes: [
		{
		  ticks: {
			beginAtZero: true,
			min: 0,
			max: 100,
		  },
		},
	  ],
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
  const dummyData2 = [6, 3, 10, 4, 10, 6, 15];
  export const data = {
	labels,
	datasets: [
	  {
		label: "Total Questions",
		data: dummyData2,
		borderColor: "rgb(255, 99, 132)",
		backgroundColor: "rgba(255, 99, 132, 0.5)",
	  },
	  {
		label: "Correct Answers",
		data: dummyData,
		borderColor: "rgb(53, 162, 235)",
		backgroundColor: "rgba(53, 162, 235, 0.5)",
	  },
	],
  };

const BarChart = () => {
	return (
		<div>
			<Bar
				data={{
					labels: ['Week1', 'Week2', 'Week3'],
					datasets: [
						{
							label: ' Avarage score by week ',
							data: [67, 88, 100, 74, 32, 89],
						},
					],
				}}
				height={400}
				width={600}
				options={{
					maintainAspectRatio: false,
				}}
			/>
		</div>
	)
}

export default BarChart
