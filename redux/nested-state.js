const redux = require('redux')
const produce = require('immer').produce
const createStore = redux.createStore

const initialState = {
  name: 'Sagar Khadka',
  address: {
    street: '123 street',
    city: 'Kathmandu',
    state: 'Bagmati',
  },
}

const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  }
}

const streetReducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // }
      return produce(state, (draft) => {
        draft.address.street = action.payload
      })
    default: {
      return state
    }
  }
}

const store = createStore(streetReducer)
console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => {
  console.log('updated state', store.getState())
})

store.dispatch(updateStreet('djkjdf'))

unsubscribe()
