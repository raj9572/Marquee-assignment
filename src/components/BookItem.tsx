import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addToBookshelf } from '../redux/slice/bookshelf'
import { Book } from '../types'

interface BooksItemsProps{
    item:Book
}


const BookItem:React.FC<BooksItemsProps> = ({item}) => {
    const dispatch = useAppDispatch()
    const bookshelf = useAppSelector(state => state.booksHelf.bookshelf)
    const exists = bookshelf.some(book => book.key === item.key)
    
  return (
    <div  className=' border-2 border-slate-600 shadow-md rounded-lg  p-2 w-full  '>
            <div className='flex gap-1 my-3'>
            <h1 className='text-lg font-semibold text-black text-nowrap'>Book Title : </h1>
            <p className='text-base text-black  text-balance'> {item.title}</p>
            </div>
            <p className='my-4'><span className='text-lg font-semibold text-black'>Edition Count</span> : {item.edition_count}</p>
            <button onClick={() => dispatch(addToBookshelf(item))}   className='text-sm py-1 px-3 rounded-lg bg-green-600 text-white font-medium cursor-pointer block mx-auto'>{exists ? "remove from the Bookshelf": "Add to Bookshelf" }</button>
        </div>
  )
}

export default BookItem
