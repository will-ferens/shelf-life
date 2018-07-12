import { userConstants } from '../constants/constants_user'

const initialState = {
    loading: false,
    error: null
}

export default function(state = initialState, action){
    switch(action.type){
        case userConstants.REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case userConstants.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
            }

        case userConstants.REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
            
        default:
            return state
    }
}