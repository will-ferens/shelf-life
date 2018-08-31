import { deleteBookActions } from '../../constants/constants_book'

export const deleteBookBegin = () => ({
    type: deleteBookActions.DELETE_BOOK_BEGIN
})

export const deleteBookSuccess = request => ({
    type: deleteBookActions.DELETE_BOOK_SUCCESS,
    payload: request
})

export const deleteBookFailure = error => ({
    type: deleteBookActions.DELETE_BOOK_FAILURE,
    payload: error
})

export function deleteBook(bookId){
    const id_token = localStorage.getItem('id_token')
    const DELETE_URL = `https://shelf-life1991.herokuapp.com/books/${bookId}`
    return dispatch => {
        dispatch(deleteBookBegin())

        return fetch(DELETE_URL, {
            method: 'DELETE',
            headers: new Headers({
                'Authorization': 'Bearer ' + id_token,
                'Content-Type': 'application/json'
            })
        })
        .then(respose => {
            return respose.json()
        })
        .then(response => {
            dispatch(deleteBookSuccess(response))
        })
        .catch(error => dispatch(deleteBookFailure(error)))
    }
}
