import React, { Component } from 'react'
import Slider from '../../components/Slider/Slider'
import './Youtube.css'
export class Youtube extends Component {
	constructor(props) {
		super(props)
		this.state = {
			resources: [],
		}
	}
	async componentDidMount() {
		try {
			const response = await fetch(
				'http://localhost:5000/api/resources/youtube',
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
				<h1 className='timeTable-title'>Youtube</h1>

				{this.state.resources.map((resource) => (
					<div className='blue_box'>
						<iframe
							style={{ marginLeft: 'auto', marginRight: 'auto' }}
							width='560'
							height='315'
							src={resource.url}
							frameborder='0'
							allow='autoplay; encrypted-media'
							allowfullscreen
							title='video'
						/>
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

export default Youtube
