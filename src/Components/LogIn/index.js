import {Box, Button, TextField} from '@mui/material'
import React, {useState} from 'react'
import './Login.css'
const url = process.env.REACT_APP_API_URL || 'http://localhost:3005'

// url/login
function Login({setWelcome}) {
	const [loginUser, setLoginUser] = useState('')
	const [loginpPass, setLoginUpPass] = useState('')

	//! Function that sends the object to server
	function onClick(event) {
		event.preventDefault()
		fetchUser()
	}
	async function fetchUser() {
		try {
			const response = await fetch(`${url}/login`, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({name: loginUser, password: loginpPass}),
			})
			setWelcome(true)
			const data = await response.json()
			console.log('data: ', data)
		} catch (error) {
			console.log(error.message)
		}
	}
	return (
		<div>
			{' '}
			<p>already a user?</p>
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
						onChange={e => setLoginUpPass(e.target.value)}
					/>
					<Button onClick={onClick}>Login</Button>
				</Box>
			</div>
		</div>
	)
}

export default Login
