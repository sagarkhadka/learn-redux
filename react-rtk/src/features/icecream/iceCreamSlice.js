import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

const initialState = {
  numOfIceCream: 10,
}

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    order: (state) => {
      state.numOfIceCream--
    },

    // state comes from initial state and
    // action comes when dispatching
    restock: (state, action) => {
      state.numOfIceCream += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCream--
    })
  }
})

export default iceCreamSlice.reducer
export const { order, restock } = iceCreamSlice.actions
