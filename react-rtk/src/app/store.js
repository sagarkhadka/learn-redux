import { configureStore } from '@reduxjs/toolkit'

// const reduxLogger = require('redux-logger')
// const logger = reduxLogger.createLogger()

import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/icecream/iceCreamSlice'
import donoughtReducer from '../features/donought/donoughtSlice'
import userReducer from '../features/user/userSlice'

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    donought: donoughtReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
