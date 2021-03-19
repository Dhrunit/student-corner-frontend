import React, { Component } from 'react'
import Slider from '../../components/Slider/Slider'
import './Blogs.css'
export class Blogs extends Component {
	constructor(props) {
		super(props)
		this.state = {
			resources: [],
		}
	}
	async componentDidMount() {
		try {
			const response = await fetch(
				'http://localhost:5000/api/resources/blog',
				{
					method: 'GET',
					headers: { 'Content-Type': 'application/json' },
				}
			)
			const responseData = await response.json()
			this.setState({ resources: responseData.resources })
		} catch (err) {
			alert(err)
		}
	}
	render() {
		let content = (
			<div className='text-center'>
				<h1 className='timeTable-title'>Blogs</h1>
				{this.state.resources.map((resource) => (
					<div className='blue_box'>
						<a target='_blank' rel='noreferrer' href={resource.url}>
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
