import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { studentLogin } from '../../../../redux/actions/index'
import Navbar from '../../components/Navbar/Navbar'
import './Auth.css'
export class Auth extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			nameError: '',
			email: '',
			password: '',
			passwordError: '',
			enrollmentNo: '',
			enrollmentError: '',
			mobileNo: '',
			mobileError: '',
			department: 'Computer',
			rollNo: '',
			rollError: '',
			sem: '',
			division: '',
		}
	}
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}
	validate = () => {
		let mobileError = ''
		let enrollmentError = ''
		let rollError = ''
		let nameError = ''
		let passwordError = ''
		if (this.state.mobileNo.length > 10) {
			mobileError = 'Mobile no should be of 10 characters'
		}
		if (this.state.rollNo.length > 2) {
			rollError = 'Roll no should be < 100'
		}
		if (this.state.name.length > 30) {
			nameError = 'Name should be < 30 characters'
		}
		if (this.state.enrollmentNo.length > 12) {
			enrollmentError = 'Invalid enrollment number'
		}
		if (this.state.password.length > 20 || this.state.password.length < 5) {
			passwordError =
				'Password length should be between 5 and 20 characters'
		}
		if (
			nameError ||
			rollError ||
			enrollmentError ||
			passwordError ||
			mobileError
		) {
			this.setState({
				rollError,
				nameError,
				enrollmentError,
				passwordError,
				mobileError,
			})
		}
		return true
	}
	handleSubmit = async (e) => {
		let test = {
			fullName: this.state.name,
			email: this.state.email,
			password: this.state.password,
			enrollmentNo: this.state.enrollmentNo,
			mobileNo: this.state.mobileNo,
			department: this.state.department,
			rollNo: this.state.rollNo,
			sem: this.state.sem,
			div: this.state.division,
		}
		console.log(test)
		e.preventDefault()
		const isValid = this.validate()
		if (isValid) {
			try {
				const response = await fetch(
					'http://localhost:5000/api/users/signup/student',
					{
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							fullName: this.state.name,
							email: this.state.email,
							password: this.state.password,
							enrollmentNo: this.state.enrollmentNo,
							mobileNo: this.state.mobileNo,
							department: this.state.department,
							rollNo: this.state.rollNo,
							sem: this.state.sem,
							div: this.state.division,
						}),
					}
				)
				const responseData = await response.json()
				if (responseData.user) {
					alert('Signup Successful')
					this.props.studentLogin()
					this.props.history.push('/login')
				}
			} catch (err) {
				alert(err)
			}
		}
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
										onChange={this.onChange}
										value={this.state.name}
										name='name'
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
										value={this.state.email}
										onChange={this.onChange}
										name='email'
										type='email'
										className='form-control mb-2'
										id='email'
										placeholder='eg: test123@gmail.com'
										required
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
										placeholder='eg: 170770107183'
										required
									/>
									<div style={{ color: 'red' }}>
										{this.state.enrollmentError}
									</div>
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
										placeholder='eg: B'
										required
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
										placeholder='eg: 5'
										required
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
										placeholder='eg: 49'
										required
									/>
									<div style={{ color: 'red' }}>
										{this.state.rollError}
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
										onChange={this.onChange}
										value={this.state.department}
										name='department'
										id='department'
										className='form-control'
										required>
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
										placeholder='eg: 9865741230'
										required
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
										required
									/>
									<div style={{ color: 'red' }}>
										{this.state.passwordError}
									</div>
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
const mapStateToProps = (state) => ({
	loggedIn: state.isLoggedIn,
})
const mapDispatchToProps = (dispatch) => {
	return {
		studentLogin: () => dispatch(studentLogin()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth)
