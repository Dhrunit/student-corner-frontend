import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.styles.css'

export default function Footer() {
	return (
		<div className='footer'>
			<div className='footer_links'>
				<Link to='/'>Home</Link>
				<a href='#about'>About</a>
				<a href='#goals'>Goals</a>
				<Link to='/auth'>Signup</Link>
			</div>
		</div>
	)
}
