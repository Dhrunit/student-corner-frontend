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
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {
		let content = (
			<div className='blue_box_add_notes'>
				<form onSubmit={this.handleSubmit} className='row g-3'>
					<div className='col-md-12 d-flex'>
						<label
							style={{
								fontSize: '1.2rem',
								marginRight: '1rem',
							}}>
							<h4>Subject:</h4>
						</label>
						<select
							onChange={this.onChange}
							value={this.state.subject}
							name='subject'
							className='form-control'
							required>
							<option selected>AI</option>
							<option>Python</option>
						</select>
					</div>
					<div
						className='col-md-12 d-flex'
						style={{ marginTop: '1rem' }}>
						<label
							style={{
								fontSize: '1.2rem',
								marginRight: '2.5rem',
							}}>
							<h4>Time:</h4>
						</label>
						<select
							onChange={this.onChange}
							value={this.state.time}
							name='time'
							className='form-control'
							required>
							<option>9:00 - 9:50 AM</option>
							<option>9:50 - 10:40 AM</option>
							<option>10:40 - 11:30 AM</option>
							<option>12:00 - 12:50 PM</option>
							<option>12:50 - 1:40 PM</option>
						</select>
					</div>
					<div
						className='col-md-12 d-flex'
						style={{ marginTop: '1rem' }}>
						<label
							style={{
								fontSize: '1.2rem',
								marginRight: '2.7rem',
							}}>
							<h4>Date:</h4>
						</label>
						<input
							type='date'
							name='date'
							onChange={this.onChange}
							style={{ width: '640px', borderRadius: '10px' }}
							required
						/>
					</div>
					<div
						className='col-md-12 d-flex'
						style={{ marginTop: '1rem' }}>
						<label
							style={{
								fontSize: '1.2rem',
								marginRight: '1.4rem',
							}}>
							<h4>Description:</h4>
						</label>
						<div class='form-floating'>
							<textarea
								class='form-control'
								placeholder='Leave description here'
								id='description'
								name='description'
								onChange={this.onChange}
								required
								style={{
									height: '50px',
									width: '600px',
								}}></textarea>
						</div>
					</div>
					<div className='col-12'>
						<button
							type='submit'
							className='button-white'
							style={{
								display: 'block',
								marginLeft: 'auto',
								marginRight: 'auto',
							}}>
							Edit Note
						</button>
					</div>
				</form>
			</div>
		)
		return (
			<div>
				<Slider
					content={content}
					editNotes={true}
					userType={this.props.userType}
				/>
			</div>
		)
	}
}

export default EditNotes
