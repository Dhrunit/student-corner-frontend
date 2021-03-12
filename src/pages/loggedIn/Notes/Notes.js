import { DeleteFilled, EditFilled } from '@ant-design/icons'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from '../components/Slider/Slider'
import './Notes.css'
export class Notes extends Component {
	constructor(props) {
		super(props)
		this.state = {
			notes: [
				{
					key: '1',
					subject: 'AI',
					date: '21/3/21',
					description:
						'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, praesentium.',
					time: '9:00-9:50 AM',
				},
				{
					key: '2',
					subject: 'AI',
					date: '21/3/21',
					description:
						'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, praesentium.',
					time: '9:00-9:50 AM',
				},
				{
					key: '3',
					subject: 'AI',
					date: '21/3/21',
					description:
						'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, praesentium.',
					time: '9:00-9:50 AM',
				},
			],
		}
	}
	render() {
		let notes = this.state.notes.map((note) => (
			<div className='blue_box' key={note.key}>
				<div className='left_div'>
					<h1 style={{ color: '#fff', fontWeight: '800' }}>
						{note.subject}
					</h1>
					<h3 style={{ color: '#fff' }}>Subject</h3>
				</div>
				<div className='vertical_line'></div>
				<div className='right_div'>
					<div className='actionIcons'>
						<EditFilled
							style={{
								fontSize: '1.2rem',
								marginRight: '0.8rem',
							}}
						/>
						<DeleteFilled style={{ fontSize: '1.2rem' }} />
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
