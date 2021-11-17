import { createSlice } from '@reduxjs/toolkit'

interface CartState {
  items: any
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload}) => {
      state.items.push(payload)
    },
    deleteItem: (state, { payload }) => {
      state.items = state.items.filter((id: number) => id !== payload)
    },
  },
})


export const { deleteItem, addItem } = cartSlice.actions

export default cartSlice.reducer