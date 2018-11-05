import { userConstants } from '../../constants/constants_user'
import { history } from '../../helpers/history'

const REGISTER_URL = 'https://shelf-life1991.herokuapp.com/register'


export const registerActions = {
    register
}

export const registerUserBegin = () => ({
    type: userConstants.REGISTER_REQUEST
})

export const registerUserSuccess = response => ({
    type: userConstants.REGISTER_SUCCESS,
    payload: { response }
})

export const registerUserFail = error => ({
    type: userConstants.REGISTER_FAILURE,
    payload: { error }
})

export function register(email, username, password, passwordConf){
    return dispatch => {
        dispatch(registerUserBegin())
        return dbCall(email, username, password, passwordConf)
        .then(([response, json]) => {
            if(!response.status){
                handleErrors(json)
            } else {
                localStorage.setItem('id_token', json.token)
                dispatch(registerUserSuccess(json))
                history.push('/home')
            }
        })
        .catch(error => dispatch(registerUserFail(error)))
    }
}

function dbCall(email, username, password, passwordConf){
    return fetch(REGISTER_URL, 
    {   method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            email, 
            username, 
            password, 
            passwordConf 
        })
    })
    .then( response => Promise.all([response, response.json()]))
}

function handleErrors(response){
    if(!response.ok){
        throw Error(response.statusText)
    }
    return response
}