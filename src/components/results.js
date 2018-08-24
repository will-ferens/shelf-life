import React from 'react'
import ResultItem from './result_item'

import '../style/results.css'

const ResultList = (props) => {

        const results = props.newBooks.map(results => {
            return results.items.map(books => {
                return (
                    <ResultItem 
                        key={books.id}
                        books={books}  
                        onBookSelect={props.onBookSelect} />
                )
            })
            
        })
        return <ul className="result-list">{results}</ul>
    

}

export default ResultList