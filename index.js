const redux = require('redux')
const createSotore = redux.createStore
const bindActionCreator = redux.bindActionCreators
const combileReducers = redux.combineReducers

// init action in redux
const ORDER_CAKE = 'ORDER_CAKE'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

const ICECREAM_ORDER = 'ICECREAM_ORDER'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

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

// const initialState = {
//   numOfCakes: 10,
//   numOfIcecream: 20,
// }

const initialCakeState = {
  numOfCakes: 10,
}

const initialIceCreamState = {
  numOfIcecream: 20
}

// (previousState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case ORDER_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
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
        numOfIcecream: state.numOfIcecream - 1,
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

const rootReducer = combileReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

const store = createSotore(rootReducer)
console.log('inital', store.getState())

const unsubscribe = store.subscribe(() => console.log('update state', store.getState()))

const action = bindActionCreator({ orderCake, restockCake, icecreamOrder, icecreamRestock }, store.dispatch)
action.orderCake()
action.orderCake()
action.orderCake()
action.orderCake(3)

action.icecreamOrder(4)
action.icecreamRestock(5)

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

// store.dispatch(icecreamOrder(4))
// store.dispatch(icecreamRestock(5))

unsubscribe()
