import axios from 'axios'
import { postBookActions } from '../constants/constants_book'

export const ADD_BOOK = 'ADD_BOOK'

const ADD_URL = 'http://localhost:3001/addbook'

export const addBookBegin = () => ({
    type: postBookActions.POST_BOOK_BEGIN
}) 

export const addBookSuccess = book => ({
    type: postBookActions.POST_BOOK_SUCCESS,
    payload: { book }
}) 

export const addBookFailure = error => ({
    type: postBookActions.POST_BOOK_FAILURE,
    payload: error 
}) 


export function addBook(book){
    return dispatch => {
        dispatch(addBookBegin())
        return fetch(ADD_URL, {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + id_token,
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ book })
        })
        .then( response => {
            if(response.status == 201){
                return response.json()
            } else {
                handleErrors(response.json())
            }
        })
        .then(response => {
            dispatch(addBookSuccess(response))
        })
        .catch(error => dispatch(addBookFailure(error)))
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response
}