import React from 'react'

import styles from "../../styles/Product.module.css"

const Product = () => {

  const currentImage = images[0];

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div className={styles.current}  />
      </div>
    </section>
  )
}

export { Product }