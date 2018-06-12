
const API_KEY = 'AIzaSyAHWyKUtEptq99fnW9I7x2V7LOjrmgCnLk'
const ROOT_URL = 'https://www.googleapis.com/books/v1/volumes?q='

export const FETCH_BOOK = 'FETCH_BOOK'

export const FETCH_BOOKS_BEGIN = 'FETCH_BOOKS_BEGIN'
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS'
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE'

export const fetchBooksBegin = () => ({
    type: FETCH_BOOKS_BEGIN
})

export const fetchBooksSuccess = books => ({
    type: FETCH_BOOKS_SUCCESS,
    payload: { books }
})

export const fetchBooksFailure = error => ({
    type: FETCH_BOOKS_FAILURE,
    payload: { error }
})

export function fetchBook(searchTerm) {
    const url = `${ROOT_URL}${searchTerm}&key=${API_KEY}`

    return dispatch => {
        dispatch(fetchBooksBegin())
        return fetch(url)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchBooksSuccess(json))
            console.log(json)
            return json.items.volumeInfo
        })
        .catch(error => dispatch(fetchBooksFailure(error)))
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}