import { CHANGE_USER_STUDENT, CHANGE_USER_TEACHER } from '../actions/types'
const initialState = 'teacher'
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_USER_TEACHER:
			return state
		case CHANGE_USER_STUDENT:
			return (state = 'student')
		default:
			return state
	}
}
export default userReducer
