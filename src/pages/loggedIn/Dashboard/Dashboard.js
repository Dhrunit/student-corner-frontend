import React, { Component } from 'react'
import Slider from '../components/Slider/Slider'

import './Dashboard.css'
export class Dashboard extends Component {
	render() {
		let dashboard = (
			<>
				<h1 className='heading__dashboard text-center'>
					Welcome to Student Corner
				</h1>
				<p className='subheading__dashboard text-center'>
					Browse through different navigation links to make the most
					out of it
				</p>
			</>
		)
		return (
			<div>
				<Slider content={dashboard} dashboard={true} />
			</div>
		)
	}
}

export default Dashboard
