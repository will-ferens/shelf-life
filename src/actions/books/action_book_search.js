import { fetchBookActions } from '../../constants/constants_book'
    
const API_KEY = 'AIzaSyAHWyKUtEptq99fnW9I7x2V7LOjrmgCnLk'
const ROOT_URL = 'https://www.googleapis.com/books/v1/volumes?q='



export const fetchBooksBegin = () => ({
    type: fetchBookActions.FETCH_BOOKS_BEGIN
})

export const fetchBooksSuccess = books => ({
    type: fetchBookActions.FETCH_BOOKS_SUCCESS,
    payload:  { books }
})

export const fetchBooksFailure = error => ({
    type: fetchBookActions.FETCH_BOOKS_FAILURE,
    payload: { error }
})

export function fetchBook(searchTerm) {
    return dispatch => {
        dispatch(fetchBooksBegin())
        const url = `${ROOT_URL}${searchTerm}&key=${API_KEY}`
        fetch(url, { method: 'GET' })
        .then(response => {
            if(response.status === 200){
                return response.json()
            } else {
                handleErrors(response.json())
            }
        }).then (response => {
            dispatch(fetchBooksSuccess(response))
        })
        .catch(error => dispatch(fetchBooksFailure(error)))
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response
}
