import React from 'react'
import ResultList from './results'
import Loading from './loading'

const SearchReturn = (props) => {

        const { error, loading, initialized, newBooks } = props.searchedBook

        if(initialized) {
            return <div></div>
        }
        if(error) {
            return <div>Oops! There was an error</div>
        }
        if(loading) {
            return <Loading />
        }
        if(newBooks)
            return (
                <div>
                    <ResultList newBooks={newBooks} />
                </div>
            )

}

export default SearchReturn