import { SnippetsFilled, YoutubeFilled } from '@ant-design/icons'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider/Slider'
import './Resources.css'
export class Resources extends Component {
	render() {
		let content = (
			<div className='text-center'>
				<h1 className='resources-title'>Resources</h1>
				<div className='row'>
					<div className='col'>
						<Link to='/resources/youtube'>
							<YoutubeFilled
								style={{
									color: 'red',
									fontSize: '14rem',
									marginLeft: '0',
								}}
							/>
						</Link>
					</div>
					<div
						className='col'
						style={{
							padding: '2rem',
							marginLeft: '-6rem',
							marginTop: '1rem',
						}}>
						<Link to='/resources/youtube'>
							<h1>Youtube Videos</h1>
						</Link>
						<div className='sub_text'>
							<p>
								Find your solution by going through any of these
								videos. They are published by well known
								teachers.
							</p>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						<Link to='/resources/blogs'>
							<SnippetsFilled
								style={{
									color: '#111d2c',
									fontSize: '14rem',
									marginLeft: '0',
								}}
							/>
						</Link>
					</div>
					<div
						className='col'
						style={{
							padding: '2rem',
							marginLeft: '-6rem',
							marginTop: '1rem',
						}}>
						<Link to='/resources/blogs'>
							<h1>Blogs</h1>
						</Link>
						<div className='sub_text'>
							<p>
								These blogs are written by expert faculties and
								will definitely help you while studying.
							</p>
						</div>
					</div>
				</div>
			</div>
		)
		return (
			<div>
				<Slider content={content} />
			</div>
		)
	}
}

export default Resources
