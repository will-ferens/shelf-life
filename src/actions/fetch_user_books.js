import { fetchUserBookActions } from '../constants/constants_book'

const GET_URL = 'http://localhost:3001/books'


export const fetchUserBooksBegin = () => ({
    type: fetchUserBookActions.FETCH_USER_BOOKS_BEGIN
}) 

export const fetchUserBooksSuccess = books => ({
    type: fetchUserBookActions.FETCH_USER_BOOKS_SUCCESS,
    payload: { books }
}) 

export const fetchUserBooksFailure = error => ({
    type: fetchUserBookActions.FETCH_USER_BOOKS_FAILURE,
    payload: { error }
}) 

export function fetchUserBooks() {
    return dispatch => {
        dispatch(fetchUserBooksBegin())
        const id_token = localStorage.getItem('id_token')
        return fetch(GET_URL, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + id_token,
                'Content-Type': 'application/json'
            })
        })
            .then(response => {
                if(response.status === 200) {
                    return response.json()
                } else {
                    handleErrors(response.json())
                }
            }).then (response => {
                dispatch(fetchUserBooksSuccess(response))
            })
            .catch(error => dispatch(fetchUserBooksFailure(error)))
    }
}

// function getBooks(){
//     const id_token = localStorage.getItem('id_token')
//     return fetch(GET_URL, {
//         method: 'GET',
//         headers: new Headers({
//             'Authorization': 'Bearer ' + id_token,
//             'Content-Type': 'application/json'
//         })
//     })
//     .then( response => {
//         if(response.status === 200) {
//             return response.json()
//         } else {
//             handleErrors(response.json())
//         }
//     }).then (response => {
//         console.log(response)
//         dispatch(fetchUserBooksSuccess(response))
//     }).catch(error => dispatch(fetchUserBooksFailure(error)))
// }

function handleErrors(response){
    if(response.status !== 200){
        console.log(response)
        throw Error(response.statusText)
    }
    return response
}