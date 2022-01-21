import {Box, Button} from '@mui/material'
import React, {useState} from 'react'
import DayDD from '../DayDD'
import ScoreDD from '../ScoreDD'
import WeekDD from '../WeekDD'
import './Input.css'
const url = process.env.REACT_APP_API_URL || 'http://localhost:3005'

function Input({userTable, name}) {
	//! make the fields required
	const [week, setWeek] = useState()
	const [day, setDay] = useState()
	const [score, setScore] = useState()

	//! Function that sends the object to server
	async function onClick(event) {
		event.preventDefault()
		await updateStats()
		await fetchUpdatedStats()
	}
	async function updateStats() {
		try {
			const response = await fetch(`${url}/progress`, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					week: week,
					day: day,
					score: score,
					link_id: userTable.payload[userTable.payload.length - 1].uid,
				}),
			})
			const data = await response.json()
			console.log('progress data: ', data)
			console.log('progress week: ', week)
			console.log('progress day: ', day)
			console.log('progress score: ', score)

			// function that waits a second and then sends a fetch
		} catch (error) {
			console.log(error.message)
		}
	}
	async function fetchUpdatedStats() {
		// event.preventDefault()
		try {
			const response = await fetch(`${url}/progress`)
			const data = await response.json()
			console.log('updated data after input: ', data)

			// function that waits a second and then sends a fetch
		} catch (error) {
			console.log(error.message)
		}
	}

	return (
		<div>
			<Box className='input-main-div'>
				<div className='welcome-text'>
					<h1>
						Welcome,{' '}
						{name
							? name[0].toUpperCase() + name.slice(1).toLowerCase()
							: 'User'}
					</h1>
					<div className='underline'></div>
				</div>
				<WeekDD setWeek={setWeek} />
				<DayDD setDay={setDay} />
				<ScoreDD setScore={setScore} />
				<div id='sign-line' className='underline'></div>

				<Button onClick={onClick} variant='outlined'>
					Submit
				</Button>
			</Box>
		</div>
	)
}

export default Input
