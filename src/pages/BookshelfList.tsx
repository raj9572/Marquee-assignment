import React from 'react'
import { useAppSelector } from '../redux/hooks'
import BookItem from '../components/BookItem'

const BooksHelfList = () => {
  const booksHelfItems = useAppSelector(state => state.booksHelf.bookshelf)
  return (
    <div className='my-5 mx-2'>
       <div className='container mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2  '>
        {
            booksHelfItems?.map(book => <BookItem key={book.key} item = {book}/>)
        }
         
        </div>
       </div>
  )
}

export default BooksHelfList
