import { userConstants } from '../constants/constants_user'
import { history } from '../helpers/history'

const AUTH_URL = 'http://localhost:3001/auth'


export const fetchUserBegin = () => ({
    type: userConstants.LOGIN_REQUEST
})

export const fetchUserSuccess = user => ({
    type: userConstants.LOGIN_SUCCESS,
    payload: { user }
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
        return dbCall(email, password)
        .then(([response, json]) => {
            if(response.status === 200){
                dispatch(fetchUserSuccess(json))
                history.push('/books')
            } else { 
                handleErrors(json)
            }
        })
        .catch(error => dispatch(fetchUserFailure(error)))
    }
}

function dbCall(email, password){
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

export function logout(){

}