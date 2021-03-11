import React from 'react'
import about from '../../../assets/about.svg'
import './About.styles.css'

export default function About() {
	return (
		<div className='about'>
			<h1 className='about_text'>
				About <span className='purple'>us</span>
			</h1>
			<div className='about-subtext'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Aenean aliquet sodales neque, scelerisque venenatis risus
					auctor dapibus. Class aptent taciti sociosqu ad litora
					torquent per conubia nostra, per inceptos himenaeos.
					Suspendisse ullamcorper lectus non ligula fringilla, sit
					amet scelerisque sapien vulputate. Sed at risus enim.
					Aliquam rhoncus a diam id rutrum. Quisque eu orci nec neque
					rutrum vestibulum ac sed velit. Nam in dolor vitae est
					rutrum blandit elementum a dui. Fusce sit amet augue
					bibendum, congue justo a, consequat eros.
				</p>
				<p>
					Nullam at ullamcorper nunc, non facilisis tortor.
					Suspendisse lacinia sem at eros vulputate pharetra. Proin
					egestas laoreet turpis, sed suscipit est vehicula sit amet.
					Nam et sagittis elit, viverra egestas dolor. Proin pharetra
					porttitor velit. Nullam at condimentum quam. Duis auctor
					sollicitudin erat non placerat. Morbi eget justo vel enim
					vulputate tincidunt in a justo. Curabitur eget ultrices
					ligula. Orci varius natoque penatibus et magnis dis
					parturient montes, nascetur ridiculus mus. Integer et leo id
					dui interdum consequat.
				</p>
			</div>
			<img className='about__svg' src={about} alt='about_svg' />
		</div>
	)
}
