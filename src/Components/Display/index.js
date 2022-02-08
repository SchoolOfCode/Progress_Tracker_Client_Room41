import React, {useEffect, useState} from 'react'
import BarChart from '../BarChart'
import DoughnutChart from '../DoughnutChart'
import Research from '../Research'
import './Display.css'

const url = process.env.REACT_APP_API_URL || 'http://localhost:3006'

function Display({userTable}) {
	const [progTable, setProgTable] = useState({})

	useEffect(() => {
		async function fetchProgressTable() {
			try {
				const response = await fetch(`${url}/progress`)
				const data = await response.json()
				console.log('progress table data: ', data)
				setProgTable(data)
			} catch (error) {
				console.log(error.message)
			}
		}
		fetchProgressTable()
	}, [])
	console.log('progTable data from display component: ', progTable)

	return (
		<div>
			<h1 className='display-title'>We keep tabs, so you don't have to 😉</h1>
			<div className='underline'></div>
			<div className='chart'>
				<DoughnutChart />
				<BarChart progTable={progTable} />
				<Research />
			</div>
		</div>
	)
}

export default Display
