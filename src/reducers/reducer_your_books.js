import AddedBook from './reducer_book_added'

export default function() { 
    return [
        {
            id: 'xyz',
            title: 'Anna Karenina', 
            author: 'Leo Tolstoy', 
            categories: ['Fiction'], 
            description: 'Goes ham on this shit', 
            imageLinks: {smallThumbnail: "http://books.google.com/books/content?id=dm8fqg9B8DEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"},
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