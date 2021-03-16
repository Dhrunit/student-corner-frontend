import React, { Component } from 'react'
import Slider from '../../components/Slider/Slider'
import './Blogs.css'
export class Blogs extends Component {
	constructor(props) {
		super(props)
		this.state = {
			resources: [
				{
					id: '1',
					topic: 'Lorem',
					link: 'https://www.geeksforgeeks.org/',
					subject: 'AI',
				},
				{
					id: '2',
					topic: 'Lorem',
					link: 'https://www.geeksforgeeks.org/',
					subject: 'AI',
				},
				{
					id: '3',
					topic: 'Lorem',
					link: 'https://www.geeksforgeeks.org/',
					subject: 'AI',
				},
				{
					id: '4',
					topic: 'Lorem',
					link: 'https://www.geeksforgeeks.org/',
					subject: 'AI',
				},
			],
		}
	}
	render() {
		let content = (
			<div className='text-center'>
				<h1 className='timeTable-title'>Blogs</h1>
				{this.state.resources.map((resource) => (
					<div className='blue_box'>
						<a href={resource.link}>
							<div className='row container'>
								<div className='col'>
									<h2 style={{ color: '#fff' }}>Topic</h2>
									<h5>{resource.topic}</h5>
								</div>
								<div className='col'>
									<h2 style={{ color: '#fff' }}>Subject</h2>
									<h5>{resource.subject}</h5>
								</div>
							</div>
						</a>
					</div>
				))}
			</div>
		)
		return (
			<div>
				<Slider content={content} />
			</div>
		)
	}
}

export default Blogs
