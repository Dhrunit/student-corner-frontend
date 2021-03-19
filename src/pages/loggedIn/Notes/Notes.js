import { DeleteFilled, EditFilled } from '@ant-design/icons'
import React, { Component } from 'react'
import { Popconfirm, message } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider/Slider'
import './Notes.css'
export class Notes extends Component {
	constructor(props) {
		super(props)
		this.state = {
			notes: [],
		}
	}
	async componentDidMount() {
		try {
			const response = await fetch('http://localhost:5000/api/notes', {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			})
			const responseData = await response.json()
			this.setState({ notes: responseData.notes })
		} catch (err) {
			alert(err)
		}
	}
	async confirm(id) {
		try {
			const response = await fetch(
				`http://localhost:5000/api/notes/${id}`,
				{
					method: 'DELETE',
					headers: { 'Content-Type': 'application/json' },
				}
			)
			const responseData = await response.json()
			await message.success(responseData.message)
			window.location.reload()
		} catch (err) {
			alert(err)
		}
	}
	render() {
		const text = 'Are you sure to delete this Note?'
		let notes = this.state.notes.map((note) => (
			<div className='blue_box' key={note.id}>
				<div className='left_div'>
					<h1 style={{ color: '#fff', fontWeight: '800' }}>
						{note.subject}
					</h1>
					<h3 style={{ color: '#fff' }}>Subject</h3>
				</div>
				<div className='vertical_line'></div>
				<div className='right_div'>
					<div
						className='actionIcons'
						style={{
							visibility:
								localStorage.getItem('userType') === 'teacher'
									? 'visible'
									: 'hidden',
						}}>
						<Link to={`notes/edit/${note.id}`}>
							<EditFilled
								style={{
									color: '#fff',
									fontSize: '1.2rem',
									marginLeft: '32rem',
									marginRight: '1rem',
								}}
							/>
						</Link>
						<Popconfirm
							placement='rightBottom'
							title={text}
							onConfirm={() => this.confirm(note.id)}
							okText='Yes'
							cancelText='No'>
							<DeleteFilled
								style={{
									fontSize: '1.2rem',
									marginTop: '0.28rem',
								}}
							/>
						</Popconfirm>
					</div>

					<p
						style={{
							fontSize: '1.4rem',
						}}>
						<span>Date: </span>
						<span
							style={{
								fontSize: '1.2rem',
							}}>
							{note.date}
						</span>
					</p>
					<p
						style={{
							fontSize: '1.4rem',
						}}>
						Time:{' '}
						<span
							style={{
								fontSize: '1.2rem',
							}}>
							{note.time}
						</span>
					</p>
					<div className='description'>
						<p
							style={{
								fontSize: '1.4rem',
							}}>
							Description:{' '}
							<span
								style={{
									fontSize: '1.2rem',
								}}>
								{note.description}
							</span>
						</p>
					</div>
				</div>
			</div>
		))
		return (
			<div>
				<Slider
					content={notes}
					notes={true}
					userType={this.props.userType}
				/>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	userType: state.userType,
})

export default connect(mapStateToProps, null)(Notes)
