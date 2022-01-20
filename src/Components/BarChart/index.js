import React from 'react'
import {Bar} from 'react-chartjs-2'
// import {Doughnut} from 'react-chartjs-2'

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
