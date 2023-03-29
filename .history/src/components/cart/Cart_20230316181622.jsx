import React from 'react'
import { useSelector } from 'react-redux'

import styles from '../../styles/Cart.module.css'


const Cart = () => {

  const { cart } = useSelector(({ user }) => user)

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Your cart</h2>

      {!cart.length ? (
        <div className={styles.empty}>Here is empty</div>
      ) : (
        <div className={styles.list}>
          {cart.map((item) => {
            return (
              const { title, category } = item;

              <div className={styles.item}></div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export { Cart }