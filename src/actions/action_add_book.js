import { postBookActions } from '../constants/constants_book'

const ADD_URL = 'http://localhost:3001/addbook'

export const postBookBegin = () => ({
    type: postBookActions.POST_BOOK_BEGIN
})

export const postBookSuccess = response => ({
    type: postBookActions.POST_BOOK_SUCCESS,
    payload: { response }
})

export const postBookFailure = error => ({
    type: postBookActions.POST_BOOK_FAILURE,
    payload: { error }
})


export function addBook(book){
    console.log(book)
    return dispatch => {
        dispatch(postBookBegin)
        
        return dbCall(book)
        .then(([response, json]) => {
            if(response.status === 200){
                console.log(json)
                dispatch(postBookSuccess(json))
            } else {
                handleErrors(json)
            }
        })
        .catch(error => dispatch(postBookFailure(error)))
    }
}

function dbCall(book){
    const title = book.title
    const author = book.author
    const publisher = book.publisher
    const cover = book.cover
    const pageCount = book.pageCount

    return fetch(ADD_URL,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title, 
            author, 
            publisher, 
            cover, 
            pageCount
        })
    })
    .then( response => Promise.all([response, response.json()]))
}

function handleErrors(response){
    if(!response.ok){
        throw Error(response.statusText)
    }
    console.log(response)
    return response
}