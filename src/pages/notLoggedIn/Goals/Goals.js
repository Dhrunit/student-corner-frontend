import React from 'react'
import digitalCampus from '../../../assets/digitalCampus.svg'
import savesTime from '../../../assets/savesTime.svg'
import openForAll from '../../../assets/openForAll.svg'
import './Goals.styles.css'

export default function Goals() {
	return (
		<>
			<div className='goals'>
				<h1 className='section-heading'>Goals</h1>
				<div className='max-width'>
					<div className='row'>
						<div className='col'>
							<img src={savesTime} alt='saves-time' />
						</div>
						<div className='col'>
							<div className='goals_heading'>
								<h1 style={{ textAlign: 'center' }}>
									Open for all
								</h1>
							</div>
							<p className='goals_subtitle'>
								There is no limitation on users. Everyone who is
								eager to study or to are eager to share their
								knowledge, are welcomed here.
							</p>
						</div>
						<div className='col'>
							<img src={digitalCampus} alt='saves-time' />
						</div>
					</div>
					<div className='row'>
						<div className='col'>
							<div className='goals_heading'>
								<h1 style={{ textAlign: 'center' }}>
									Saves Time
								</h1>
							</div>
							<p className='goals_subtitle'>
								Now you don’t need to surf through different
								textbooks, videos or websites. We have many
								solutions to your query, in just one place. So,
								you save your time now!
							</p>
						</div>
						<div className='col'>
							<img
								style={{ marginTop: '-5rem' }}
								src={openForAll}
								alt='saves-time'
							/>
						</div>
						<div className='col'>
							<div className='goals_heading'>
								<h1 style={{ textAlign: 'center' }}>
									Digital Campus
								</h1>
							</div>
							<p className='goals_subtitle'>
								No need to buy or read lots of textbooks now. We
								have gathered solutions from best resources and
								have placed them on this website. All you need
								to solve your queries is a strong internet
								connection and a device to browse.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
