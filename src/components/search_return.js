import React from 'react'
import ResultList from './results'


const SearchReturn = (props) => {

        const { error, loading, initialized, newBooks } = props.searchedBook

        if(initialized) {
            return <div></div>
        }
        if(error) {
            return <div>Oops! There was an error</div>
        }
        if(loading) {
            return <div>Loading...</div>
        }
        if(newBooks)
            return (
                <div>
                    <ResultList 
                        newBooks={newBooks}
                        onBookSelect={props.onBookSelect} />
                </div>
            )

}

export default SearchReturn