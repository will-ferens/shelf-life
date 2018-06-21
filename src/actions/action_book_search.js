
import { 
    FETCH_BOOKS_BEGIN, 
    FETCH_BOOKS_SUCCESS, 
    FETCH_BOOKS_FAILURE } from '../constants/constants_book'
    
const API_KEY = 'AIzaSyAHWyKUtEptq99fnW9I7x2V7LOjrmgCnLk'
const ROOT_URL = 'https://www.googleapis.com/books/v1/volumes?q='



export const fetchBooksBegin = () => ({
    type: FETCH_BOOKS_BEGIN
})

export const fetchBooksSuccess = books => ({
    type: FETCH_BOOKS_SUCCESS,
    payload:  { books }
})

export const fetchBooksFailure = error => ({
    type: FETCH_BOOKS_FAILURE,
    payload: { error }
})

export function fetchBook(searchTerm) {
    return dispatch => {
        dispatch(fetchBooksBegin())
        return apiCall(searchTerm)
        .then(([response, json]) => {
            if(response.status === 200){
                dispatch(fetchBooksSuccess(json))
            }
            else{
                handleErrors(json)
            }
        })
        .catch(error => dispatch(fetchBooksFailure(error)))
    }
}

function apiCall(searchTerm) {
    const url = `${ROOT_URL}${searchTerm}&key=${API_KEY}`
    return fetch(url, { method: 'GET' })
    .then( response => Promise.all([response, response.json()]))
}
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}