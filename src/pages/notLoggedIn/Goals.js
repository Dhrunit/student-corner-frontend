import React from 'react'
import digitalCampus from '../../assets/digitalCampus.svg'
import savesTime from '../../assets/savesTime.svg'
import openForAll from '../../assets/openForAll.svg'
import './Goals.styles.css'

export default function Goals() {
	return (
		<>
			<div className='goals'>
				<h1 className='section-heading'>Goals</h1>
				<div className='max-width'>
					<div class='row'>
						<div class='col'>
							<img src={savesTime} alt='saves-time' />
						</div>
						<div class='col'>
							<div className='goals_heading'>
								<h1>Open for all</h1>
							</div>
							<p className='goals_subtitle'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Vestibulum congue. Neque porro
								quisquam est qui dolorem ipsum quia dolor sit
								amet, consectetur, adipisci velit.
							</p>
						</div>
						<div class='col'>
							<img src={digitalCampus} alt='saves-time' />
						</div>
					</div>
					<div class='row'>
						<div class='col'>
							<div className='goals_heading'>
								<h1>Saves Time</h1>
							</div>
							<p className='goals_subtitle'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Vestibulum congue. Neque porro
								quisquam est qui dolorem ipsum quia dolor sit
								amet, consectetur, adipisci velit.
							</p>
						</div>
						<div class='col'>
							<img
								style={{ marginTop: '-5rem' }}
								src={openForAll}
								alt='saves-time'
							/>
						</div>
						<div class='col'>
							<div className='goals_heading'>
								<h1>Digital Campus</h1>
							</div>
							<p className='goals_subtitle'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Vestibulum congue. Neque porro
								quisquam est qui dolorem ipsum quia dolor sit
								amet, consectetur, adipisci velit.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
