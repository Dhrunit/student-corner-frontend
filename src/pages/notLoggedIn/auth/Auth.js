import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
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
							<form class='row g-3'>
								<div class='col-md-6'>
									<label
										for='fullName'
										style={{
											marginLeft: '-28rem',
											fontSize: '1.2rem',
										}}>
										Full Name
									</label>
									<input
										onChange={this.onChange}
										name='name'
										type='text'
										class='form-control mb-2'
										id='fullName'
										placeholder='example: John Doe'
									/>
								</div>
								<div class='col-md-6'>
									<label
										for='email'
										style={{
											marginLeft: '-29rem',
											fontSize: '1.2rem',
										}}>
										E-mail
									</label>
									<input
										onChange={this.onChange}
										name='email'
										type='email'
										class='form-control mb-2'
										id='email'
										placeholder='example: test123@gmail.com'
									/>
								</div>
								<div class='col-md-6'>
									<label
										for='enrno'
										style={{
											marginLeft: '-23rem',
											fontSize: '1.2rem',
										}}>
										Enrollment Number
									</label>
									<input
										onChange={this.onChange}
										name='enrollmentNo'
										type='text'
										class='form-control'
										id='enrno'
										placeholder='example: 170770107183'
									/>
								</div>

								<div class='col-md-2'>
									<label
										for='div'
										class='form-label '
										style={{
											marginLeft: '-5rem',
											fontSize: '1.2rem',
										}}>
										Division
									</label>
									<input
										onChange={this.onChange}
										name='division'
										type='text'
										class='form-control'
										id='div'
										placeholder='example: B'
									/>
								</div>
								<div class='col-md-2'>
									<label
										for='sem'
										class='form-label'
										style={{
											marginLeft: '-7rem',
											fontSize: '1.2rem',
										}}>
										Sem
									</label>
									<input
										onChange={this.onChange}
										name='sem'
										type='number'
										class='form-control'
										id='sem'
										min='1'
										max='8'
										placeholder='example: 5'
									/>
								</div>
								<div class='col-md-2'>
									<label
										for='rollno'
										class='form-label'
										style={{
											marginLeft: '-6rem',
											fontSize: '1.2rem',
										}}>
										Roll no
									</label>
									<input
										onChange={this.onChange}
										name='rollNo'
										type='text'
										class='form-control mb-2'
										id='rollno'
										placeholder='example: 49'
									/>
								</div>
								<div class='form-group col-md-6'>
									<label
										for='department'
										style={{
											marginLeft: '-26.5rem',
											fontSize: '1.2rem',
										}}>
										Department
									</label>
									<select
										onChange={this.onChange}
										name='department'
										id='department'
										class='form-control'>
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

								<div class='col-md-6'>
									<label
										for='mobileNo'
										class='form-label'
										style={{
											marginLeft: '-28rem',
											fontSize: '1.2rem',
										}}>
										Mobile No
									</label>
									<input
										onChange={this.onChange}
										name='mobileNo'
										type='text'
										class='form-control'
										id='mobileNo'
										placeholder='example: 9865741230'
									/>
								</div>
								<div class='col-md-12'>
									<label
										for='password'
										class='form-label'
										style={{
											marginLeft: '-63rem',
											fontSize: '1.2rem',
										}}>
										Password
									</label>
									<input
										onChange={this.onChange}
										name='password'
										type='password'
										class='form-control'
										id='password'
									/>
								</div>
								<div class='col-12'>
									<button type='submit' class='button-white'>
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
