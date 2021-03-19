import React, { Component } from 'react'
import Slider from '../components/Slider/Slider'
import { message } from 'antd'
import './EditNotes.css'
export class EditNotes extends Component {
	constructor(props) {
		super(props)
		this.state = {
			note: {
				subject: 'AI',
				time: '9:00 - 9:50 AM',
				date: '',
				description: '',
			},
		}
	}

	async componentDidMount() {
		var url = window.location.pathname
		var id = url.substring(url.lastIndexOf('/') + 1)
		try {
			const response = await fetch(
				`http://localhost:5000/api/notes/${id}`,
				{
					method: 'GET',
					headers: { 'Content-Type': 'application/json' },
				}
			)
			const responseData = await response.json()
			this.setState({ note: responseData.note })
		} catch (err) {
			alert(err)
		}
	}
	handleSubmit = async (e) => {
		e.preventDefault()
		var url = window.location.pathname
		var id = url.substring(url.lastIndexOf('/') + 1)
		try {
			const response = await fetch(
				`http://localhost:5000/api/notes/${id}`,
				{
					method: 'PATCH',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						subject: this.state.note.subject,
						time: this.state.note.time,
						date: this.state.note.date,
						description: this.state.note.description,
						creator: JSON.parse(localStorage.getItem('user'))
							.fullName,
					}),
				}
			)
			const responseData = await response.json()
			if (responseData.note) {
				await message.success('Note Edited Successfully')
				this.props.history.push('/notes')
			}
		} catch (err) {
			alert(err)
		}
	}
	onDateChange = (e) => {
		this.setState((prevState) => ({
			note: { ...prevState.note, date: e.target.value },
		}))
	}
	onTimeChange = (e) => {
		this.setState((prevState) => ({
			note: { ...prevState.note, time: e.target.value },
		}))
	}
	onDescriptionChange = (e) => {
		this.setState((prevState) => ({
			note: { ...prevState.note, description: e.target.value },
		}))
	}
	onSubjectChange = (e) => {
		this.setState((prevState) => ({
			note: { ...prevState.note, subject: e.target.value },
		}))
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
							onChange={this.onSubjectChange}
							value={this.state.note.subject}
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
							onChange={this.onTimeChange}
							value={this.state.note.time}
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
							value={this.state.note.date}
							name='date'
							onChange={this.onDateChange}
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
								value={this.state.note.description}
								onChange={this.onDescriptionChange}
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
