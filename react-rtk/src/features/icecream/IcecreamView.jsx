import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { order, restock } from './iceCreamSlice'

const IcecreamView = () => {
  const [stock, setStock] = useState(1)
  const icecream = useSelector((state) => state.iceCream.numOfIceCream)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of ice cream - {icecream}</h2>
      <button onClick={() => dispatch(order())}>Order</button>
      <input type="number" value={stock} onChange={(e) => setStock(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restock(stock))}>Restock</button>
    </div>
  )
}

export default IcecreamView
