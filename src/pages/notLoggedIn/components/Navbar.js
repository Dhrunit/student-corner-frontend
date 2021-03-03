import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.styles.css'
export default function Navbar() {
	return (
		<>
			<div className='container'>
				<div className='logo'>
					<Link to='/'>
						<h1 className='logo__text'>SC</h1>
					</Link>
				</div>
				<div className='nav-links'>
					<a href='#about'>About</a>
					<a href='#goals'>Goals</a>
					<a href='#signup'>Signup</a>
				</div>
			</div>
		</>
	)
}
