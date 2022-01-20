import React, {useEffect, useState} from 'react'
import './Display.css'
const url = process.env.REACT_APP_API_URL

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
	console.log('progress table state: ', progTable)

	console.log('this is the user table', userTable)

<<<<<<< HEAD
  console.log("this is the user table", userTable);

  return (
    <div className="display-div">
      <p className="test-chart">chart</p>
      <h2 className="display-h1">
        Here is where the data will be displayed using reactChart
      </h2>
    </div>
  );
=======
	return (
		<div>
			<h1>Here is where the data will be displayed using reactChart</h1>
		</div>
	)
>>>>>>> 556e92fd7e8119ad0025cad5cf56d34fb76b8e0c
}

export default Display
