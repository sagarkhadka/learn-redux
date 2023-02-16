const createSlice = require('@reduxjs/toolkit').createSlice

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
  extraReducers: {
    ['cake/ordered']: (state, action) => {
      state.numOfIceCream--
    }
  }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamAction = iceCreamSlice.actions
