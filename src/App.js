import Home from './pages/notLoggedIn/Home'
import { Route, Switch } from 'react-router-dom'
import Auth from './pages/notLoggedIn/auth/Auth'
import AuthTeacher from './pages/notLoggedIn/auth/AuthTeacher'

function App() {
	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/auth' exact component={Auth} />
			<Route path='/auth/teacher' exact component={AuthTeacher} />
		</Switch>
	)
}

export default App
