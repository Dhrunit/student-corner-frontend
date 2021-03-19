import {
	LOGIN,
	CHANGE_USER_STUDENT,
	CHANGE_USER_TEACHER,
	LOGOUT,
} from './types'
export const login = (userData) => (dispatch) => {
	localStorage.setItem('isLoggedIn', true)
	localStorage.setItem('user', JSON.stringify(userData))
	dispatch({
		type: LOGIN,
	})
}

export const studentLogin = () => {
	localStorage.setItem('userType', 'student')
	return {
		type: CHANGE_USER_STUDENT,
	}
}
export const TeacherLogin = () => {
	localStorage.setItem('userType', 'teacher')
	return {
		type: CHANGE_USER_TEACHER,
	}
}
export const logout = () => {
	localStorage.setItem('isLoggedIn', false)
	localStorage.setItem('user', [])
	return {
		type: LOGOUT,
	}
}
