import { userConstants } from '../constants/constants_user'
import { history } from '../helpers/history'

const AUTH_URL = 'http://localhost:3001/login'


export const fetchUserBegin = () => ({
    type: userConstants.LOGIN_REQUEST
})

export const fetchUserSuccess = user => ({
    type: userConstants.LOGIN_SUCCESS,
    payload: { user },
})

export const fetchUserFailure = error => ({
    type: userConstants.LOGIN_FAILURE,
    payload: { error }
})

export const userActions = {
    login,
    logout
}

export function login(email, password){
    return dispatch => {
        dispatch(fetchUserBegin())
        return findUser(email, password)
            .then(([response, user]) => {
                if(response.status === 200){
                    localStorage.setItem('id_token', user.token)
                    dispatch(fetchUserSuccess(user))
                    history.push('/')
                } else { 
                    handleErrors(user)
                }
            })
            .catch(error => dispatch(fetchUserFailure(error)))
    }
}

function findUser(email, password){
    return fetch(AUTH_URL, 
    {   method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then( response => Promise.all([response, response.json()]))
}


function handleErrors(response){
    if(!response.ok){
        throw Error(response.statusText)
    }
    return response
}

export const requestLogout = () => ({
    type: userConstants.LOGOUT_REQUEST
})

export const receiveLogout = () => ({
    type: userConstants.LOGOUT_SUCCESS
})

export const failedLogout = () => ({
    type: userConstants.LOGOUT_FAILURE
})

export function logout(){
    return dispatch => {
        dispatch(requestLogout())
        localStorage.removeItem('id_token')
        dispatch(receiveLogout())
    }
}