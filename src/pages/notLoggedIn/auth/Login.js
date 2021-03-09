import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import login from '../../../assets/login.svg'
import './Login.css'
export class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
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
								src={login}
								className='login_svg'
								alt=''
								srcset=''
							/>
						</div>
						<div className='col-md alignCenter'>
							<form class='row g-3'>
								<div class='col-md-12'>
									<label
										for='email'
										style={{ fontSize: '1.2rem' }}>
										E-mail
									</label>
									<input
										type='email'
										class='form-control mb-3'
										id='email'
										placeholder='example: test123@gmail.com'
									/>
								</div>
								<div class='col-md-12'>
									<label
										for='password'
										style={{ fontSize: '1.2rem' }}>
										Password
									</label>
									<input
										type='password'
										class='form-control mb-2'
										id='password'
										placeholder='example: John Doe'
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

export default Login
