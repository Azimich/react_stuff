import React from 'react'
import { useSelector } from 'react-redux'

import styles from '../../styles/Cart.module.css'


const Cart = () => {

  const { cart } = useSelector(({}))

  return (
    <div>Cart</div>
  )
}

export { Cart }