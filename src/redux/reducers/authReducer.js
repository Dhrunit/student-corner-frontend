import { LOGIN, LOGOUT } from '../actions/types'
const initialState = false
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return !state
		case LOGOUT:
			return (state = false)
		default:
			return state
	}
}
export default authReducer
