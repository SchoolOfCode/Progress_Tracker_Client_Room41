import {Box, Button, TextField} from '@mui/material'
import React, {useState} from 'react'
import {url} from '../../config'
import './Login.css'

// const url = process.env.REACT_APP_API_URL || 'http://localhost:3005'

function Login({setWelcome, setName}) {
	const [loginUser, setLoginUser] = useState('')
	const [loginPass, setLoginPass] = useState('')
	// const [query, setQuery] = useState('')

	//! Function that sends the object to server
	async function onClick(event) {
		event.preventDefault()
		await fetchUser()
		setName(loginUser)
	}
	//id set id
	//isLoged setIsLogged(false)
	//isRegistered setIsRegistered(false)
	//when on click register button => isregistered(true)
	// setId(data.payload[payload.length-1].uid)
	//when click on login button => isloggedin(true) isregistered(false)
	//setId
	async function fetchUser() {
		try {
			const response = await fetch(`${url}/login`, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({name: loginUser, password: loginPass}),
			})
			setWelcome(true)
			const data = await response.json()
			console.log('data: ', data)
			console.log('query password: ', data.payload[0].password)
			// setQuery(data.payload[0].password)
			const query = data.payload[0].password
			console.log('query password from const query: ', query)
			fetchStats(query) //query
		} catch (error) {
			console.log(error.message)
		}
	}
	async function fetchStats(pass) {
		const response = await fetch(`${url}/progress?password=${pass}`) //?password=${pass}
		const data = await response.json()
		console.log('data from login button: ', data)
	}

	return (
		<div className='main-inputs'>
			{' '}
			<div id='login-input'>
				<Box
					component='form'
					sx={{
						'& > :not(style)': {m: 1, width: '25ch'},
					}}
					noValidate
					autoComplete='off'>
					<TextField
						label='Username'
						variant='standard'
						onChange={e => setLoginUser(e.target.value)}
					/>
					<TextField
						label='Password'
						variant='standard'
						onChange={e => setLoginPass(e.target.value)}
						type='password'
					/>
					<Button variant='outlined' onClick={onClick}>
						Login
					</Button>
				</Box>
			</div>
		</div>
	)
}

export default Login
