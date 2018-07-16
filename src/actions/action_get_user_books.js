import { fetchUserBookActions } from '../constants/constants_book'

const GET_URL = 'http://localhost:3001/books'

export const fetchUserBooksBegin = () => ({
    type: fetchUserBookActions.FETCH_BOOKS_BEGIN
}) 

export const fetchUserBooksSuccess = books => ({
    type: fetchUserBookActions.FETCH_BOOKS_SUCCESS,
    payload: { books }
}) 

export const fetchUserBooksFailure = error => ({
    type: fetchUserBookActions.FETCH_BOOKS_FAILURE,
    payload: { error }
}) 

export function fetchUserBooks() {
    return dispatch => {
        dispatch(fetchUserBooksBegin())
        return getBooks()
            .then(response => {
                console.log(response[0])
                dispatch(fetchUserBooksSuccess(response[0]))
            })
            .catch(error => dispatch(fetchUserBooksFailure(error)))
    }
}

function getBooks(){
    const id_token = localStorage.getItem('id_token')
    return fetch(GET_URL, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + id_token,
            'Content-Type': 'application/json'
        })
    })
    .then( response => Promise.all([response.json()]))
}

function handleErrors(response){
    if(response.status !== 200){
        console.log(response)
        throw Error(response.statusText)
    }
    return response
}