const redux = require('redux')
const createSotore = redux.createStore

// init action in redux
const ORDER_CAKE = 'ORDER_CAKE'

// action creator is a functin that returns the object
function orderCake() {
  // action is an object with an type property
  return {
    type: ORDER_CAKE,
    quantity: 1,
  }
}

const initialState = {
  numOfCakes: 10,
  // anotherProperty: 0,
}
// (previousState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }
    default:
      return state
  }
}

const store = createSotore(reducer)
console.log('inital', store.getState())

const unsubscribe = store.subscribe(() => console.log('update state', store.getState()))
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()