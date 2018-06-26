import { userConstants } from '../constants/constants_user'

const initialState = {
    userId: '',
    loading: false,
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
            userId: action.payload.user 
        }

        case userConstants.LOGIN_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload.error
        }

        default: 
        return state

    }
}