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
		}
	}
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
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
							<form className='row g-3'>
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
		login: () => dispatch(login()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
