import React from 'react'
import { useSelector } from 'react-redux'

const DonoughtView = () => {
  const donought = useSelector((state) => state.donought.numOfDonought)
  return (
    <div>
      <h2>Number of Donought - {donought}</h2>
      <button>Order</button>
      <button>Restock</button>
    </div>
  )
}

export default DonoughtView
