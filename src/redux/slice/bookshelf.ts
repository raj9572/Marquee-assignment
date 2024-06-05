import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Book } from '../../types'

export interface Bookshelf {
  bookshelf: Book[]
}

const initialState: Bookshelf = {
  bookshelf: [] as Book[],
}

export const bookshelf = createSlice({
  name: 'bookshelf',
  initialState,
  reducers: {
    addToBookshelf: (state,action: PayloadAction<Book>) => {
      const index = state.bookshelf?.findIndex(item => item?.key === action.payload?.key)

      if(index === -1){
          state.bookshelf.push({...action.payload})
      } else{
        state.bookshelf = state.bookshelf.filter(item => item?.key !== action.payload?.key)
      }
      
    },
    removeFromBookshelf: (state,action: PayloadAction<Book>) => {
       
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addToBookshelf,removeFromBookshelf } = bookshelf.actions

export default bookshelf.reducer