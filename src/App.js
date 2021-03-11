import Home from './pages/notLoggedIn/Home/Home'
import { Route, Switch } from 'react-router-dom'
import Auth from './pages/notLoggedIn/auth/Auth/Auth'
import AuthTeacher from './pages/notLoggedIn/auth/AuthTeacher/AuthTeacher'
import Login from './pages/notLoggedIn/auth/Login/Login'

function App(props) {
	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/auth' exact component={Auth} />
			<Route path='/auth/teacher' exact component={AuthTeacher} />
			<Route path='/login' exact component={Login} />
		</Switch>
	)
}

export default App
