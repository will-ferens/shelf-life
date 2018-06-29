import AddedBook from './reducer_book_added'

export default function() { 
    return [
        {
            id: 'xyz',
            title: 'Anna Karenina', 
            author: 'Leo Tolstoy', 
            categories: ['Fiction'], 
            description: 'Goes ham on this shit', 
            imageLinks: '',
            ISBN: '',
            pageCount: 1200,
            readState: 'To Read',
            liked: null,
            tags: []
        },
        {title: 'The End of Vandalism', author: 'Tom Drury', pageCount: 333},
        {title: 'The Sellout', author: 'Paul Beatty', pageCount: 250},
        {title: 'Nightwood', author: 'Djuana Barnes', pageCount: 122},
        AddedBook
    ]
}