import React, { Component } from 'react'
import Slider from '../components/Slider/Slider'
import './EditNotes.css'
export class EditNotes extends Component {
	constructor(props) {
		super(props)
		this.state = {
			subject: '',
			time: '',
			date: '',
			description: '',
		}
	}
	render() {
		let content
		return (
			<div>
				<Slider
					content={content}
					notes={true}
					userType={this.props.userType}
				/>
			</div>
		)
	}
}

export default EditNotes
