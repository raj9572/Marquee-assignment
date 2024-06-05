import { createContext, useContext, useState } from "react";
import { Book } from "../types";
import { KEY_ACCESS_TOKEN } from "../Utils/localStorageManage";

export type BooksProviderProps = {
    children : React.ReactNode
}



export type BooksContextValue = {
    books : Book[];
    handleAddToDo : (book:Book)=>void;
}

export const BooksContext = createContext<BooksContextValue | null>(null)





export const BooksProvider = ({children}:BooksProviderProps) =>{
 const [books,setBooks] = useState<Book[]>(()=>{
    try {
          const newTodos = localStorage.getItem(KEY_ACCESS_TOKEN) || "[]"
          
          return JSON.parse(newTodos) 
    } catch (error) {
        console.log('error',error)
    }
 })



    const handleAddToDo = (book:Book) =>{
        const exist = books?.some(item => item.key === book.key)
        console.log(book,exist)
        if(!exist){
            setBooks((prev) => {
                const newBooks:Book[] =[
                    ...prev,book
                ] 
    
                localStorage.setItem(KEY_ACCESS_TOKEN,JSON.stringify(newBooks))
    
                return newBooks
            })
        } else{
            setBooks(prev => {
                         let newBooks = prev.filter(item => item.key !== book.key)
                         localStorage.setItem(KEY_ACCESS_TOKEN,JSON.stringify(newBooks))
                         return newBooks
                    })
        }
        
    }



    return(
        <BooksContext.Provider value={{books, handleAddToDo }}>
          {children}
        </BooksContext.Provider>
    )
}




export const useBooks = () =>{
    const booksConsumer = useContext(BooksContext)


    if (!booksConsumer) {
        throw new Error("useTodos user outside of provider")
    }

    return booksConsumer

}