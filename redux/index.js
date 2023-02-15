const redux = require('redux')
const createStore = redux.createStore
const bindActionCreator = redux.bindActionCreators
const combileReducers = redux.combineReducers
const applyMiddleWare = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

// init action in redux
const ORDER_CAKE = 'ORDER_CAKE'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

const ICECREAM_ORDER = 'ICECREAM_ORDER'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

const DONOUGHT_ORDER = 'DONOUGHT_ORDER'
const DONOUGHT_RESTOCK = 'DONOUGHT_RESTOCK'

// action creator is a functin that returns the object
const orderCake = () => {
  // action is an object with an type property
  return {
    type: ORDER_CAKE,
    payLoad: 1,
  }
}

const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payLoad: qty,
  }
}

const icecreamOrder = (qty = 1) => {
  return {
    type: ICECREAM_ORDER,
    payLoad: qty,
  }
}

const icecreamRestock = (qty = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payLoad: qty,
  }
}

const donoughtOrder = (qty = 1) => {
  return {
    type: DONOUGHT_ORDER,
    payLoad: qty,
  }
}

const donoughtRestock = (qty = 1) => {
  return {
    type: DONOUGHT_RESTOCK,
    payLoad: qty,
  }
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIcecream: 20,
// }

const initialCakeState = {
  numOfCakes: 10,
}

const initialIceCreamState = {
  numOfIcecream: 20,
}

const initialDonoughtState = {
  numOfDonought: 5,
}

// (previousState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case ORDER_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payLoad,
      }
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payLoad,
      }
    default:
      return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDER:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - action.payLoad,
      }
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.payLoad,
      }
    default:
      return state
  }
}

const donoughtReducer = (state = initialDonoughtState, action) => {
  switch (action.type) {
    case DONOUGHT_ORDER:
      return {
        ...state,
        numOfDonought: state.numOfDonought - action.payLoad,
      }
    case DONOUGHT_RESTOCK:
      return {
        ...state,
        numOfDonought: state.numOfDonought + action.payLoad,
      }
    default: {
      return state
    }
  }
}

const rootReducer = combileReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  donought: donoughtReducer,
})

const store = createStore(rootReducer, applyMiddleWare(logger))
console.log('inital', store.getState())

const unsubscribe = store.subscribe(() => {})

const action = bindActionCreator(
  {
    orderCake,
    restockCake,
    icecreamOrder,
    icecreamRestock,
    donoughtOrder,
    donoughtRestock,
  },
  store.dispatch
)

action.orderCake(5)
action.restockCake(3)

action.icecreamOrder(4)
action.icecreamRestock(5)

action.donoughtOrder(3)
action.donoughtRestock(20)

unsubscribe()
