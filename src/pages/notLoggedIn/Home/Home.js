import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import About from '../About/About'
import Goals from '../Goals/Goals'
import Footer from '../components/Footer/Footer'
import hero from '../../../assets/hero.svg'
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
							Get your doubts clear and score good! Student corner
							provides you with many explanations to your question
							from reliable sources.
						</p>
						<Link className='btn-blue' to='/auth'>
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
