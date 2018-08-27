import { updateBookActions } from '../constants/constants_book'

export const patchBookBegin = () => ({
    type: updateBookActions.PATCH_USER_BOOK_BEGIN
})

export const patchBookSuccess = request => ({
    type: updateBookActions.PATCH_USER_BOOK_SUCCESS,
    payload: request
})

export const patchBookFailure = error => ({
    type: updateBookActions.PATCH_USER_BOOK_FAILURE,
    payload: error
})

export function updateBook(bookId, readState){
    const id_token = localStorage.getItem('id_token')
    const PATCH_URL = `http://localhost:3001/books/${bookId}`
    const toPut = {readState: readState}

    return dispatch => {
        dispatch(patchBookBegin())

        return fetch(PATCH_URL, {
            method: 'PUT',
            headers: new Headers({
                'Authorization': 'Bearer ' + id_token,
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(toPut)
        })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(response => {
            dispatch(patchBookSuccess(response))
        })
        .catch(error => dispatch(patchBookFailure(error)))
    }
}