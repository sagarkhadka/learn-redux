const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamAction = require('./features/icecream/iceCreamSlice').iceCreamAction
const donoughtAction = require('./features/donought/donoughtSlice').donoughtAction
const fetchUsers = require('./features/user/userSlice').fetchUsers
console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() => {
  console.log('updated state', store.getState())
})

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(iceCreamAction.order())
// store.dispatch(iceCreamAction.order())
// store.dispatch(iceCreamAction.order())
// store.dispatch(iceCreamAction.restock(4))

// store.dispatch(donoughtAction.order())
// store.dispatch(donoughtAction.order())
// store.dispatch(donoughtAction.order())
// store.dispatch(donoughtAction.reStock(3))

store.dispatch(fetchUsers())

// unsubscribe()
