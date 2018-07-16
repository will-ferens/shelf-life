import { userConstants } from '../constants/constants_user'

const initialState = {
    user: '',
    loading: false,
    isAuthenticated: false,
    error: null
}

export default function(state = initialState, action) {
    switch(action.type){
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }

        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload.user
            }

        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        case userConstants.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }

        default: 
            return state

    }
}