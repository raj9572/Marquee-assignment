import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="    shadow-md shadow-gray-300 px-3 lg:px-0    ">
         <div className="max-w-6xl  mx-auto flex justify-between items-center py-3  ">
         <div className="flex items-center ">
            <Link to="/">
                <img src="/book-logo.jpg" width={50} height={50} alt="" className="rounded-full" />
            </Link>
            <h1 className="text-2xl max-sm:text-xl font-bold text-green-500 ">BooksLib</h1>
         </div>

        
        <Link to={"/bookshelf"} className='py-1 px-3 rounded-lg bg-green-600 text-white font-medium'>My Bookshelf</Link>

           

            


         </div>
         
     </div>
  )
}

export default Navbar
