import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.styles.css'
export default function Navbar(props) {
	return (
		<>
			<div className='container'>
				<div className='logo'>
					<Link to='/'>
						<h1 className='logo__text'>SC</h1>
					</Link>
				</div>
				<div className='nav-links'>
					<a href={props.auth ? '/#about' : '#about'}>About</a>
					<a href={props.auth ? '/#goals' : '#goals'}>Goals</a>
					<Link to='/auth'>Signup</Link>
					<Link to='/login'>Login</Link>
				</div>
			</div>
		</>
	)
}
