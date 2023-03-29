import React from 'react'

import styles from "../../styles/User.module.css"

const UserSingupForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.close}>
        <svg className='icon'>
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>
      <div className={styles.title}>Sing Up</div>
      <form className={styles.form}>
        <div className={styles.group}>
          <input type="email" name='emaim' />
        </div>
      </form>
    </div>
  )
}

export { UserSingupForm }