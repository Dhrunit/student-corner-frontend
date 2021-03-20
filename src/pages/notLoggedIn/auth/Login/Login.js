import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import loginSVG from '../../../../assets/login.svg'
import { login } from '../../../../redux/actions/index'
import { connect } from 'react-redux'
import './Login.css'
export class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			passwordError: '',
		}
	}
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}
	validate = () => {
		let passwordError = ''
		if (this.state.password.length < 5) {
			passwordError =
				'Password length should be between 5 and 20 characters'
		}
		if (passwordError) {
			this.setState({ passwordError })
			return false
		}
		return true
	}
	handleSubmit = async (e) => {
		e.preventDefault()
		const isValid = this.validate()
		if (isValid) {
			console.log('sign')
			try {
				const response = await fetch(
					'http://localhost:5000/api/users/login',
					{
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							email: this.state.email,
							password: this.state.password,
						}),
					}
				)
				const responseData = await response.json()
				if (
					responseData.message ===
					'Could not log you in please check your password'
				) {
					alert(responseData.message)
					return
				}
				if (responseData.message === 'Invalid Login credentials') {
					alert('Email is invalid please try again')
					return
				}
				if (responseData.user.student === 'true') {
					localStorage.setItem('userType', 'student')
				} else {
					localStorage.setItem('userType', 'teacher')
				}
				if (responseData.message === 'loggedin') {
					this.props.login(responseData.user)
					this.props.history.push('/dashboard')
				} else {
					alert('Invalid credentials')
				}
			} catch (err) {
				alert(err)
			}
		}
	}
	render() {
		return (
			<div className='login'>
				<Navbar auth={true} />
				<h2 className='heading'>Login</h2>
				<div className='blue-container'>
					<div className='row'>
						<div className='col-md'>
							<img
								src={loginSVG}
								className='login_svg'
								alt='login_svg'
							/>
						</div>
						<div className='col-md alignCenter'>
							<form
								onSubmit={this.handleSubmit}
								className='row g-3'>
								<div className='col-md-12'>
									<label
										htmlFor='email'
										style={{ fontSize: '1.2rem' }}>
										E-mail
									</label>
									<input
										onChange={this.onChange}
										value={this.state.email}
										name='email'
										type='email'
										className='form-control mb-3'
										id='email'
										placeholder='example: test123@gmail.com'
									/>
								</div>
								<div className='col-md-12'>
									<label
										htmlFor='password'
										style={{ fontSize: '1.2rem' }}>
										Password
									</label>
									<input
										onChange={this.onChange}
										value={this.state.password}
										name='password'
										type='password'
										className='form-control mb-2'
										id='password'
										placeholder='example: John Doe'
									/>
									<div style={{ color: 'red' }}>
										{this.state.passwordError}
									</div>
								</div>
								<div className='col-12'>
									<button
										type='submit'
										className='button-white'>
										Login
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
		login: (data) => dispatch(login(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
