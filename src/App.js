import Home from './pages/notLoggedIn/Home/Home'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Auth from './pages/notLoggedIn/auth/Auth/Auth'
import AuthTeacher from './pages/notLoggedIn/auth/AuthTeacher/AuthTeacher'
import Login from './pages/notLoggedIn/auth/Login/Login'
import Dashboard from './pages/loggedIn/Dashboard/Dashboard'
import Notes from './pages/loggedIn/Notes/Notes'
import AddNotes from './pages/loggedIn/Notes/AddNotes'
import EditNotes from './pages/loggedIn/Notes/EditNotes'
import TimeTable from './pages/loggedIn/TimeTable/TimeTable'
import Resources from './pages/loggedIn/Resources/Resources'
import Blogs from './pages/loggedIn/Resources/Blogs/Blogs'
import Youtube from './pages/loggedIn/Resources/Youtube/Youtube'

function App({ loggedIn }) {
	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/auth' exact component={loggedIn ? Dashboard : Auth} />
			<Route
				path='/auth/teacher'
				exact
				component={loggedIn ? Dashboard : AuthTeacher}
			/>
			<Route
				path='/login'
				exact
				component={loggedIn ? Dashboard : Login}
			/>
			<Route
				path='/dashboard'
				exact
				component={loggedIn ? Dashboard : Home}
			/>
			<Route path='/notes' exact component={loggedIn ? Notes : Home} />
			<Route
				path='/notes/add'
				exact
				component={loggedIn ? AddNotes : Home}
			/>
			<Route
				path='/notes/edit/:id'
				exact
				component={loggedIn ? EditNotes : Home}
			/>
			<Route
				path='/timetable'
				exact
				component={loggedIn ? TimeTable : Home}
			/>
			<Route
				path='/resources'
				exact
				component={loggedIn ? Resources : Home}
			/>
			<Route
				path='/resources/blogs'
				exact
				component={loggedIn ? Blogs : Home}
			/>
			<Route
				path='/resources/youtube'
				exact
				component={loggedIn ? Youtube : Home}
			/>
		</Switch>
	)
}

const mapStateToProps = (state) => ({
	loggedIn: state.isLoggedIn,
})

export default connect(mapStateToProps, null)(App)
