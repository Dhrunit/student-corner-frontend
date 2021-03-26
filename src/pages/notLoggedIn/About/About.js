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
					Student Corner is a place where you will find answers to
					your subject queries. We have collected and placed many
					reliable sources which can help you clear your doubts in
					just one place. Faculties, current students, former students
					and people who are eager to share or gain knowledge will be
					a part of this corner.
				</p>
				<p>
					Student Corner is developed by some like minded and change
					oriented students - Dhrunit Prajapati, Krisha Mehta, Naman
					Soni, Jinkal Patel and Mohammed Contractor. Our main aim is
					to provide best and multiple solutions to a student, at one
					place and make sure they do not stay helpless during their
					studies due to lack of resources.
				</p>
			</div>
			<img className='about__svg' src={about} alt='about_svg' />
		</div>
	)
}
