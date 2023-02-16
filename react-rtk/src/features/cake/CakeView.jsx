import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

const CakeView = () => {
  const cake = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()
  console.log(cake)
  return (
    <>
      <h2>Number of Cakes - {cake}</h2>
      <button onClick={() => dispatch(ordered())}>Order</button>
      <button onClick={() => dispatch(restocked(5))}>Restock</button>
    </>
  )
}

export default CakeView
