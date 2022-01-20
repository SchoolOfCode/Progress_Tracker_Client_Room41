import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js'
import {useEffect, useState} from 'react'
import {Bar} from 'react-chartjs-2'
import Display from '../Display'
import Input from '../Input'
import Research from '../Research'
import WelcomePage from '../WelcomePage'
import './App.css'
const url = process.env.REACT_APP_API_URL || 'http://localhost:3005'
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Title,
	Tooltip,
	Legend
)
export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Chart.js Line Chart',
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
}
const labels = [
	'Week1',
	'Week2',
	'Week3',
	'Week4',
	'Week5',
	'Week6',
	'Week7',
	'Week8',
	'Week9',
	'Week10',
	'Week11',
	'Week12',
	'Week13',
	'Week14',
	'Week15',
	'Week16',
]
const dummyData = [8, 10, 4, 8, 2, 9, 10]
const dummyData2 = [6, 3, 10, 4, 10, 6, 15]
export const data = {
	labels,
	datasets: [
		{
			label: 'Total Questions',
			data: dummyData2,
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
			label: 'Correct Answers',
			data: dummyData,
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
}
//! check deployment branch is upstream

function App() {
	const [welcome, setWelcome] = useState(false)
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [userTable, setUsertable] = useState({})
	console.log(name, password)

	useEffect(() => {
		async function fetchUserTable() {
			try {
				const response = await fetch(`${url}/register`)
				const data = await response.json()
				console.log('user table data: ', data)
				setUsertable(data)
				// console.log('userTable from APP: ', userTable)
			} catch (error) {
				console.log(error.message)
			}
		}
		fetchUserTable()
	}, [])

	// async function getAllStats() {
	// 	const response = await fetch(`${url}/progress`)
	// 	const data = await response.json()
	// 	console.log('allstats: ', data)
	// }
	// getAllStats()
	if (welcome)
		return (
			<div className='main-parent-div'>
				<Input userTable={userTable} name={name} />
				<Display userTable={userTable} name={name} />
			</div>
		)

	// useEffect that fetched data using the 'name' to send a GET request for the correct table

	return (
		<div className='main-app'>
			<h1 className='welcome-header'>Hey there, Camper!</h1>
			<WelcomePage
				setWelcome={setWelcome}
				setName={setName}
				setPassword={setPassword}
			/>
			<Research />
			<p>Input and display hidden until welcome page passed.</p>
			<Bar options={options} data={data} />
		</div>
	)
}

export default App
