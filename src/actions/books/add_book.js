import { postBookActions } from '../../constants/constants_book'

export const ADD_BOOK = 'ADD_BOOK'

const ADD_URL = 'https://shelf-life1991.herokuapp.com/books/addbook'

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
    const id_token = localStorage.getItem('id_token')
    return dispatch => {
        dispatch(addBookBegin())
        return fetch(ADD_URL, {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + id_token,
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify( book )
        })
        .then(response => {
            return response.json()
        })
        .then(response => {
            dispatch(addBookSuccess(response))
        })
        .catch(error => dispatch(addBookFailure(error)))
    }
}

