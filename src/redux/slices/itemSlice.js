import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { id: 1, name: 'iPhone 7' },
    { id: 2, name: 'Macbook Air 2020' },
    { id: 3, name: 'Dell Inspiron 3443' },
    { id: 4, name: 'Samsung S22 Ultra' }
  ]
}

const itemSlice = createSlice({
  name: 'itemSlice',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action) => {
      const indexFound = state.items.findIndex(
        item => item.id === action.payload
      )
      if (indexFound > -1) {
        state.items.splice(indexFound, 1)
      }
    }
  }
})

export const { addItem, removeItem } = itemSlice.actions
export default itemSlice.reducer
