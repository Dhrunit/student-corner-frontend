import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './AuthTeacher.css'
export class AuthTeacher extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			email: '',
			password: '',
			employeeId: '',
			mobileNo: '',
			department: '',
		}
	}
	render() {
		return (
			<div>
				<Navbar auth={true} />
				<div className='auth-container '>
					<div className='header text-center'>
						<h1 className='heading'> Sign up for Faculties</h1>
						<p className='subtitle'>
							If you are a student then click{' '}
							<Link to='/auth' style={{ color: '#46DBC9' }}>
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
										type='email'
										class='form-control mb-2'
										id='email'
										placeholder='example: test123@gmail.com'
									/>
								</div>
								<div class='col-md-6'>
									<label
										for='empno'
										style={{
											marginLeft: '-26.5rem',
											fontSize: '1.2rem',
										}}>
										Employee no
									</label>
									<input
										type='text'
										class='form-control'
										id='empno'
										placeholder='example: 17077'
									/>
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
										type='text'
										class='form-control'
										id='mobileNo'
										placeholder='example: 9865741230'
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
							<h6 className='login-text'>
								Already a member ? click{' '}
								<Link to='login' style={{ color: '#000' }}>
									here
								</Link>{' '}
								to login
							</h6>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default AuthTeacher
