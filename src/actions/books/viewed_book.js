import { viewBookActions } from '../../constants/constants_book'

const VIEW_URL = 'http://localhost:3001/books/view'

export const viewBookBegin = () => ({
    type: viewBookActions.VIEW_BOOK_BEGIN
})

export const viewBookSuccess = book => ({
    type: viewBookActions.VIEW_BOOK_SUCCESS,
    payload: { book }
})

export const viewBookFailure = error => ({
    type: viewBookActions.VIEW_BOOK_FAILURE,
    payload: error
})

export function viewBook(book) {
    const id_token = localStorage.getItem('id_token')
    return dispatch => {
        dispatch(viewBookBegin())
        return fetch(VIEW_URL, {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + id_token,
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify( book )
        })
        .then(response => {
            console.log(response.json())
            return response.json()
        })
        .then(response => {
            dispatch(viewBookSuccess(response))
        })
        .catch(error => dispatch(viewBookFailure(error)))
    }
}