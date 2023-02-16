const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfDonought: 15,
}

const donoughtSlice = createSlice({
  name: 'donogught',
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

module.exports = donoughtSlice.reducer
module.exports.donoughtAction = donoughtSlice.actions