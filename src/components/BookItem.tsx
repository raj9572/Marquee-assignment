import React from 'react'
import { Book } from '../types'
import { useBooks } from '../context/Books'

interface BooksItemsProps{
    item:Book,
    savedBooks?:Book[]
}


const BookItem:React.FC<BooksItemsProps> = ({item,savedBooks}) => {
  const {handleAddToDo} = useBooks()
    const exists = savedBooks?.some(book => book.key === item.key)

    const BookAddToLocalStorage = (item:Book) =>{
       let book = {
         key:item.key,
         title:item.title,
         edition_count:item.edition_count
       }

       handleAddToDo(book)
    }
   
    
  return (
    <div  className=' border-2 border-slate-600 shadow-md rounded-lg  p-2 w-full  '>
            <div className='flex gap-1 my-3'>
            <h1 className='text-lg font-semibold text-black text-nowrap'>Book Title : </h1>
            <p className='text-base text-black  text-balance'> {item.title}</p>
            </div>
            <p className='my-4'><span className='text-lg font-semibold text-black'>Edition Count</span> : {item.edition_count}</p>
            <button onClick={() =>BookAddToLocalStorage(item)}   className='text-sm py-1 px-3 rounded-lg bg-green-600 text-white font-medium cursor-pointer block mx-auto'>{exists ? "remove from the Bookshelf": "Add to Bookshelf" }</button>
        </div>
  )
}

export default BookItem
