import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './Auth.css'
export class Auth extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			email: '',
			password: '',
			enrollmentNo: '',
			mobileNo: '',
			department: '',
			rollNo: '',
			sem: '',
			division: '',
		}
	}
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}
	render() {
		return (
			<div>
				<Navbar auth={true} />
				<div className='auth-container'>
					<div className='header text-center'>
						<h1 className='heading'> Sign up for Students</h1>
						<p className='subtitle'>
							If you are a teacher then click{' '}
							<Link
								to='auth/teacher'
								style={{ color: '#46DBC9' }}>
								here
							</Link>{' '}
							to signup/login
						</p>
						<div className='blue-container'>
							<form className='row g-3'>
								<div className='col-md-6'>
									<label
										htmlFor='fullName'
										style={{
											marginLeft: '-28rem',
											fontSize: '1.2rem',
										}}>
										Full Name
									</label>
									<input
										onChange={this.onChange}
										value={this.state.name}
										name='name'
										type='text'
										className='form-control mb-2'
										id='fullName'
										placeholder='example: John Doe'
									/>
								</div>
								<div className='col-md-6'>
									<label
										htmlFor='email'
										style={{
											marginLeft: '-29rem',
											fontSize: '1.2rem',
										}}>
										E-mail
									</label>
									<input
										value={this.state.email}
										onChange={this.onChange}
										name='email'
										type='email'
										className='form-control mb-2'
										id='email'
										placeholder='example: test123@gmail.com'
									/>
								</div>
								<div className='col-md-6'>
									<label
										htmlFor='enrno'
										style={{
											marginLeft: '-23rem',
											fontSize: '1.2rem',
										}}>
										Enrollment Number
									</label>
									<input
										value={this.state.enrollmentNo}
										onChange={this.onChange}
										name='enrollmentNo'
										type='text'
										className='form-control'
										id='enrno'
										placeholder='example: 170770107183'
									/>
								</div>

								<div className='col-md-2'>
									<label
										htmlFor='div'
										className='form-label '
										style={{
											marginLeft: '-5rem',
											fontSize: '1.2rem',
										}}>
										Division
									</label>
									<input
										value={this.state.division}
										onChange={this.onChange}
										name='division'
										type='text'
										className='form-control'
										id='div'
										placeholder='example: B'
									/>
								</div>
								<div className='col-md-2'>
									<label
										htmlFor='sem'
										className='form-label'
										style={{
											marginLeft: '-7rem',
											fontSize: '1.2rem',
										}}>
										Sem
									</label>
									<input
										value={this.state.sem}
										onChange={this.onChange}
										name='sem'
										type='number'
										className='form-control'
										id='sem'
										min='1'
										max='8'
										placeholder='example: 5'
									/>
								</div>
								<div className='col-md-2'>
									<label
										htmlFor='rollno'
										className='form-label'
										style={{
											marginLeft: '-6rem',
											fontSize: '1.2rem',
										}}>
										Roll no
									</label>
									<input
										value={this.state.rollNo}
										onChange={this.onChange}
										name='rollNo'
										type='text'
										className='form-control mb-2'
										id='rollno'
										placeholder='example: 49'
									/>
								</div>
								<div className='form-group col-md-6'>
									<label
										htmlFor='department'
										style={{
											marginLeft: '-26.5rem',
											fontSize: '1.2rem',
										}}>
										Department
									</label>
									<select
										onChange={this.onChange}
										value={this.state.department}
										name='department'
										id='department'
										className='form-control'>
										<option selected>
											Choose department
										</option>
										<option>Computer</option>
										<option>Electrical</option>
										<option>Mechanical</option>
										<option>Chemical</option>
										<option>IT</option>
										<option>Civil</option>
									</select>
								</div>

								<div className='col-md-6'>
									<label
										htmlFor='mobileNo'
										className='form-label'
										style={{
											marginLeft: '-28rem',
											fontSize: '1.2rem',
										}}>
										Mobile No
									</label>
									<input
										value={this.state.mobileNo}
										onChange={this.onChange}
										name='mobileNo'
										type='text'
										className='form-control'
										id='mobileNo'
										placeholder='example: 9865741230'
									/>
								</div>
								<div className='col-md-12'>
									<label
										htmlFor='password'
										className='form-label'
										style={{
											marginLeft: '-63rem',
											fontSize: '1.2rem',
										}}>
										Password
									</label>
									<input
										value={this.state.password}
										onChange={this.onChange}
										name='password'
										type='password'
										className='form-control'
										id='password'
									/>
								</div>
								<div className='col-12'>
									<button
										type='submit'
										className='button-white'>
										Sign up
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Auth
