import Home from './pages/notLoggedIn/Home/Home'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Auth from './pages/notLoggedIn/auth/Auth/Auth'
import AuthTeacher from './pages/notLoggedIn/auth/AuthTeacher/AuthTeacher'
import Login from './pages/notLoggedIn/auth/Login/Login'
import Dashboard from './pages/loggedIn/Dashboard/Dashboard'
import Notes from './pages/loggedIn/Notes/Notes'

function App(props) {
	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/auth' exact component={Auth} />
			<Route path='/auth/teacher' exact component={AuthTeacher} />
			<Route path='/login' exact component={Login} />
			<Route path='/dashboard' exact component={Dashboard} />
			<Route path='/notes' exact component={Notes} />
		</Switch>
	)
}

const mapStateToProps = (state) => ({
	loggedIn: state.isLoggedIn,
})

export default connect(mapStateToProps, null)(App)
