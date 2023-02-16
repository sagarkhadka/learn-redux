import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numOfCakes: 10,
}
const cakeSlice = createSlice({
  name: 'cake', // name for the slice
  initialState, // initial state for this slice which is es6 shorthand for initialState(key): initialState(value)
  reducers: {
    // this is reducer function
    ordered: (state) => {
      // the function accepts state and action
      // this uses immer library under the hood unlike redux
      state.numOfCakes--
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload
    },
  },
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions
