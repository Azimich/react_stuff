import React from 'react'

import styles from '../../styles/Sidebar.module.css'


const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav></nav>
    </div>
  )
}

export { SideBar }