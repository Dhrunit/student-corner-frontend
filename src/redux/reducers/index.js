import { combineReducers } from 'redux'
import authReducer from './authReducer'
const rootReducers = combineReducers({
	isLoggedIn: authReducer,
})

export default rootReducers
