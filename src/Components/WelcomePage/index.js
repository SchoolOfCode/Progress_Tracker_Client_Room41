import React from 'react'
import Login from '../LogIn'
import SignUp from '../SignUp'
import './WelcomePage.css'

function WelcomePage({setWelcome, setName, setPassword}) {
	return (
		<div>
			<SignUp
				setWelcome={setWelcome}
				setName={setName}
				setPassword={setPassword}
			/>
			<Login setWelcome={setWelcome} setName={setName} />
		</div>
	)
}

export default WelcomePage
