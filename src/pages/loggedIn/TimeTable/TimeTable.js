import React, { Component } from 'react'
import Slider from '../components/Slider/Slider'
import './TimeTable.css'
export class TimeTable extends Component {
	render() {
		let content = (
			<div className='text-center'>
				<h1 className='timeTable-title'>TimeTable</h1>
				<div className='blue_box'>
					<a href='#'>
						<h5>Click here to download time table</h5>
					</a>
				</div>
			</div>
		)
		return (
			<div>
				<Slider content={content} />
			</div>
		)
	}
}

export default TimeTable
