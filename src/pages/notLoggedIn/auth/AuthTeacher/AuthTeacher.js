import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './AuthTeacher.css'
export class AuthTeacher extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			nameError: '',
			email: '',
			password: '',
			passwordError: '',
			employeeId: '',
			employeeIdError: '',
			mobileNo: '',
			mobileError: '',
			department: '',
		}
	}
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}
	validate = () => {
		let mobileError = ''
		let employeeIdError = ''
		let nameError = ''
		let passwordError = ''
		if (this.state.mobileNo.length > 10) {
			mobileError = 'Mobile no should be of 10 characters'
		}
		if (this.state.name.length > 30) {
			nameError = 'Name should be < 30 characters'
		}
		if (this.state.employeeId.length > 12) {
			employeeIdError = 'Invalid enrollment number'
		}
		if (this.state.password.length > 20 || this.state.password.length < 5) {
			passwordError =
				'Password length should be between 5 and 20 characters'
		}
		if (nameError || employeeIdError || passwordError || mobileError) {
			this.setState({
				nameError,
				employeeIdError,
				passwordError,
				mobileError,
			})
		}
		return true
	}
	handleSubmit = (e) => {
		e.preventDefault()
		const isValid = this.validate()
		if (isValid) console.log(this.state)
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
							<form
								onSubmit={this.handleSubmit}
								className='row g-3'>
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
										name='name'
										onChange={this.onChange}
										value={this.state.name}
										type='text'
										className='form-control mb-2'
										id='fullName'
										placeholder='eg: John Doe'
										required
									/>
									<div style={{ color: 'red' }}>
										{this.state.nameError}
									</div>
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
										name='email'
										onChange={this.onChange}
										value={this.state.email}
										type='email'
										className='form-control mb-2'
										id='email'
										placeholder='eg: test123@gmail.com'
										required
									/>
								</div>
								<div className='col-md-6'>
									<label
										htmlFor='empno'
										style={{
											marginLeft: '-26.5rem',
											fontSize: '1.2rem',
										}}>
										Employee no
									</label>
									<input
										name='employeeId'
										onChange={this.onChange}
										value={this.state.employeeId}
										type='text'
										className='form-control'
										id='empno'
										placeholder='eg: 170770107183'
										required
									/>
									<div style={{ color: 'red' }}>
										{this.state.employeeIdError}
									</div>
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
										name='mobileNo'
										onChange={this.onChange}
										value={this.state.mobileNo}
										type='text'
										className='form-control'
										id='mobileNo'
										placeholder='eg: 9865741230'
										required
									/>
									<div style={{ color: 'red' }}>
										{this.state.mobileError}
									</div>
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
										name='department'
										onChange={this.onChange}
										value={this.state.department}
										id='department'
										className='form-control'
										required>
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
										name='password'
										onChange={this.onChange}
										value={this.state.password}
										type='password'
										class='form-control'
										id='password'
										required
									/>
									<div style={{ color: 'red' }}>
										{this.state.passwordError}
									</div>
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

export default AuthTeacher
