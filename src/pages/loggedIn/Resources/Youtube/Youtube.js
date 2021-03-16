import React, { Component } from 'react'
import Slider from '../../components/Slider/Slider'
import './Youtube.css'
export class Youtube extends Component {
	constructor(props) {
		super(props)
		this.state = {
			resources: [
				{
					id: '1',
					url: 'https://www.youtube.com/embed/ltvwVhqdsn4',
					subject: 'AI',
				},
				{
					id: '2',
					url: 'https://www.youtube.com/embed/JjL0FU7w1c4',
					subject: 'AI',
				},
				{
					id: '3',
					url: 'https://www.youtube.com/embed/AQGd7ebpODs',
					subject: 'AI',
				},
				{
					id: '4',
					url: 'https://www.youtube.com/embed/1tnrUJLcz2g',
					subject: 'AI',
				},
			],
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
