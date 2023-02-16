import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numOfDonought: 15,
}

const donoughtSlice = createSlice({
  name: 'donought',
  initialState,
  reducers: {
    order: (state) => {
      state.numOfDonought--
    },

    reStock: (state, action) => {
      state.numOfDonought += action.payload
    },
  },
})

export default donoughtSlice.reducer
export const { order, reStock } = donoughtSlice.actions