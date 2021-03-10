import { LOGIN } from '../actions/types'
const initialState = false
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return !state
		default:
			return state
	}
}
export default authReducer
