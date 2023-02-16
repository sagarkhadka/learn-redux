const configureStore = require('@reduxjs/toolkit').configureStore

// const reduxLogger = require('redux-logger')
// const logger = reduxLogger.createLogger()

const cakeReducer = require('../features/cake/cakeSlice')
const iceCreamReducer = require('../features/icecream/iceCreamSlice')
const donoughtReducer = require('../features/donought/donoughtSlice')
const userReducer = require('../features/user/userSlice')

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    donought: donoughtReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store
