import React, { useCallback, useEffect, useState } from 'react'
import BookItem from '../components/BookItem'
import { Book } from '../types'
import debounce from 'lodash/debounce';
import { KEY_ACCESS_TOKEN, getItem } from '../Utils/localStorageManage';
import { useBooks } from '../context/Books';

const Home = () => {
  const [bookList, setBooksList] = useState<Book[]>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("")
  // const [savedBooks, setSavedBooks] = useState<Book[]>([])
  const {books} = useBooks()

  

 
  const fetchBooksList = async (query:string) => {
    const searchQuery = query.trim() === '' ? 'Borrow' : query;
   try {
     setLoading(true)
     const response = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}&limit=10&page=1`);
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     const data = await response.json();
     setBooksList(data.docs as Book[]);
   } catch (error:any) {
     setError(error.message);
   } finally {
     setLoading(false);
   }
 };


// eslint-disable-next-line
 const debouncedFetchResults = useCallback(
  debounce((query) => {
    fetchBooksList(query);
  }, 300),
  []// Ensure the debounce function is created only once
);




// useEffect(() => {
//   // Load the array from localStorage when the component mounts
//   const savedBooks = getItem(KEY_ACCESS_TOKEN);
//   if (savedBooks) {
//     setSavedBooks(JSON.parse(savedBooks));
//   }
// }, []);

 

 

  // Cleanup the debounce function on component unmount
  useEffect(() => {
    debouncedFetchResults(query)
    return () => {
      debouncedFetchResults.cancel();
    };
  }, [debouncedFetchResults,query]);



  const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const newQuery = e.target.value;
    setQuery(newQuery);
    // debouncedFetchResults(newQuery);
  }

  // const onSearch = (searchTerm:string) =>{
  //   // api calling
  //   setQuery(searchTerm)
  //   console.log('searchTerm',searchTerm)
  // }



  

  if (error) {
    return <div clastext-lg text-center text-black font-medium>Error: <span className='text-red-500'>{error}</span> </div>;
  }


  return (
    <div>

        <div className='relative flex items-center flex-col gap-y-3'>
        <h1 className='text-black text-xl font-bold '>Search by Book Name : </h1>
        <div className='flex flex-col gap-1 md:w[40%] w-1/2 md:flex-row md:gap-0     '>
        <input
                type='text'
                className='px-3 py-1 rounded-md w-full border-2 border-slate-500 '
                placeholder='search....'
                value={query}
                onChange={onChange}
                
                />
        {/* <button onClick={() => onSearch(query)} className='text-lg w-full md:w-auto text-white font-semibold px-3 py-1 bg-green-500 rounded-md'>search</button> */}
        </div>

        {/* <div className='bg-transparent bg-opacity-50 backdrop-blur-md flex flex-col md:w[40%] w-1/2 border-2 border-gray-300 rounded-md absolute top-20'>
            {
              bookList?.filter(book => {
                const searchTerm = query.toLowerCase()
                const title = book.title.toLowerCase()
                return searchTerm &&  title.includes(searchTerm) && title !== searchTerm
              }).slice(0,5)
              .map(book => (
                <div key={book.key} onClick={ () => onSearch(book.title)} className='cursor-pointer text-start mt-2  '>
                    <p  className='text-lg mx-3 shadow-sm  rounded'>{book.title}</p>
                </div>
              ))
            }
        </div> */}
         
        </div>

      { loading &&  <div className='text-lg text-center text-black font-medium'>Loading...</div>}
      {!loading && bookList.length === 0  ? <div className='text-lg text-center text-black font-medium'>No Book Found...</div> : 
       <div className='my-5 mx-2'>
       <div className='container mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2  '>
        {
            bookList?.map(book => <BookItem key={book.key} item = {book} savedBooks={books}/>)
        }
         
        </div>
       </div>
      }

    </div>
  )
}

export default Home
