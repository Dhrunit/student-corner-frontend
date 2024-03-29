import { Layout, Menu } from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../../../redux/actions/index'
import dashImg from '../../../../assets/Allura - Giant Phone.png'
import {
	LeftCircleOutlined,
	RightCircleOutlined,
	HomeOutlined,
	ReadOutlined,
	CheckSquareOutlined,
	InsertRowAboveOutlined,
	SlackOutlined,
	LogoutOutlined,
} from '@ant-design/icons'
import './Slider.css'
import { Link } from 'react-router-dom'
const { Header, Sider, Content } = Layout

class Slider extends Component {
	constructor(props) {
		super(props)
		this.state = { collapsed: false }
	}

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		})
	}

	render() {
		return (
			<Layout>
				<Sider
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}>
					<div>
						<Link to='/dashboard'>
							<h1
								className='logo'
								style={{
									visibility: this.state.collapsed
										? 'hidden'
										: 'visible',
								}}>
								SC
							</h1>
						</Link>
					</div>
					<Menu
						style={{ fontSize: '1.1rem' }}
						theme='dark'
						mode='inline'
						defaultSelectedKeys={0}>
						<Menu.Item
							style={{ position: 'relative' }}
							key='1'
							icon={
								<HomeOutlined
									style={{
										fontSize: '1.3rem',
									}}
								/>
							}>
							<Link to='/dashboard'>Dashboard</Link>
						</Menu.Item>
						<Menu.Item
							key='2'
							icon={
								<ReadOutlined
									style={{
										fontSize: '1.3rem',
									}}
								/>
							}>
							<Link to='/notes'>Notes</Link>
						</Menu.Item>
						<Menu.Item
							key='3'
							icon={
								<CheckSquareOutlined
									style={{
										fontSize: '1.3rem',
									}}
								/>
							}>
							<Link to='/resources'>Resources</Link>
						</Menu.Item>
						<Menu.Item
							key='4'
							icon={
								<InsertRowAboveOutlined
									style={{
										fontSize: '1.3rem',
									}}
								/>
							}>
							<Link to='/timetable'>Time Table</Link>
						</Menu.Item>
						<Menu.Item
							key='5'
							icon={
								<SlackOutlined
									style={{
										fontSize: '1.3rem',
									}}
								/>
							}>
							<a
								target='_blank'
								rel='noreferrer'
								href='https://discord.com/'>
								Discord Server
							</a>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className='site-layout'>
					<Header
						className='site-layout-background'
						style={{ margin: '1rem', fontSize: '1.5rem' }}>
						{React.createElement(
							this.state.collapsed
								? RightCircleOutlined
								: LeftCircleOutlined,
							{
								className: 'trigger',
								onClick: this.toggle,
							}
						)}
						<div className='logout'>
							<LogoutOutlined
								style={{
									fontSize: '1.5rem',
									marginTop: '1.2rem',
								}}
							/>
							<Link onClick={this.props.logout} to='/'>
								Logout
							</Link>
						</div>
					</Header>
					<Content
						className='site-background'
						style={{
							margin: '24px 16px',
							padding: 24,
							minHeight: '100vh',
						}}>
						{this.props.notes && (
							<div className='row'>
								<div className='col'>
									<h1
										className='heading__dashboard'
										style={{ textAlign: 'center' }}>
										Notes
									</h1>
								</div>
								{localStorage.getItem('userType') ===
									'teacher' && (
									<div className='notes_btn'>
										<Link to='notes/add'>
											<button className='btn_notes'>
												Add
											</button>
										</Link>
									</div>
								)}
							</div>
						)}
						{this.props.addNotes && (
							<div className='row'>
								<div className='col'>
									<h1
										className='heading__dashboard'
										style={{
											textAlign: 'center',
											marginTop: '-1rem',
										}}>
										Add Notes
									</h1>
								</div>
							</div>
						)}
						{this.props.editNotes && (
							<div className='row'>
								<div className='col'>
									<h1
										className='heading__dashboard'
										style={{
											textAlign: 'center',
											marginTop: '-1rem',
										}}>
										Edit Notes
									</h1>
								</div>
							</div>
						)}
						{this.props.content}
						{this.props.dashboard && (
							<img
								style={{
									marginLeft: this.state.collapsed
										? '27rem'
										: '22rem',
									transition: 'all 0.2s',
								}}
								src={dashImg}
								className='dashboard__img'
								alt='dashboard_img'
							/>
						)}
					</Content>
				</Layout>
			</Layout>
		)
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(logout()),
	}
}

export default connect(null, mapDispatchToProps)(Slider)
