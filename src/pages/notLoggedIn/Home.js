import React, { Component } from 'react'
import Navbar from './components/Navbar'
import About from './About'
import Goals from './Goals'
import Footer from './components/Footer'
import hero from '../../assets/hero.svg'
import './Home.styles.css'
import { Link } from 'react-router-dom'

export class Home extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className='hero container'>
					<div className='hero__text'>
						<h1>
							Student <span className='blue'>Corner</span>
						</h1>
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry.
						</p>
						<Link className='btn-blue' to='/signup'>
							Get Started
						</Link>
					</div>
					<img className='hero__svg' src={hero} alt='' />
				</div>
				<div className='container' id='about'>
					<About />
				</div>
				<div id='goals'>
					<Goals />
				</div>
				<div className='footer'>
					<Footer />
				</div>
			</div>
		)
	}
}

export default Home
