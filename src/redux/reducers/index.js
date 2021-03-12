import { combineReducers } from 'redux'
import authReducer from './authReducer'
import userReducer from './userReducer'
const rootReducers = combineReducers({
	isLoggedIn: authReducer,
	userType: userReducer,
})

export default rootReducers
