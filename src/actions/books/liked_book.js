import { likeBookActions } from '../../constants/constants_book'

const LIKE_URL = 'http://localhost:3001/books/like'

export const likeBookBegin = () => ({
    type: likeBookActions.LIKE_BOOK_BEGIN
})

export const likeBookSuccess = book => ({
    type: likeBookActions.LIKE_BOOK_SUCCESS,
    payload: { book }
})

export const likeBookFailure = error => ({
    type: likeBookActions.LIKE_BOOK_FAILURE,
    payload: error
})

export function likeBook(book) {
    const id_token = localStorage.getItem('id_token')
    return dispatch => {
        dispatch(likeBookBegin())
        return fetch(LIKE_URL, {
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
            dispatch(likeBookSuccess(response))
        })
        .catch(error => dispatch(likeBookFailure(error)))
    }
}