import React from 'react'
import BookItem from '../components/BookItem'
import { useBooks } from '../context/Books'

const BooksHelfList = () => {
  const { books} = useBooks()


  if(books.length === 0) {
    return <div className='text-lg text-center text-black font-medium'>No Book Found...</div>
  }

  return (
    <div className='my-5 mx-2'>
       <div className='container mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2  '>
        {
            books?.map(book => <BookItem key={book.key} item = {book} savedBooks={books}/>)
        }
         
        </div>
       </div>
  )
}

export default BooksHelfList
